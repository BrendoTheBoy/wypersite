import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  isHoneypotTripped,
  parseQuoteBody,
  type QuoteAnswers,
} from "@/lib/quote";

// --- Email configuration ---
const FROM_EMAIL =
  "Wyper Window Cleaning <quotes@send.wyperwindowcleaning.ca>";
const TO_EMAIL = "mcgrathwindow@gmail.com";
// replyTo is set per-request to the customer's submitted email below

const EXPECTED_BODY_KEYS = [
  "service",
  "property",
  "storeys",
  "location",
  "name",
  "phone",
  "email",
  "message",
  "botcheck",
] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await readBody(request);
  } catch (error) {
    console.error("Quote request body could not be read:", error);
    return NextResponse.json(
      { ok: false, error: "Could not read the quote request." },
      { status: 400 },
    );
  }

  const bodyKeys = Object.keys(body);
  const missingKeys = EXPECTED_BODY_KEYS.filter((key) => !(key in body));
  if (missingKeys.length > 0) {
    console.error("Quote body shape mismatch. Expected keys:", EXPECTED_BODY_KEYS);
    console.error("Received keys:", bodyKeys);
    console.error("Missing keys:", missingKeys);
    console.error("Received body:", body);
  } else {
    console.log("Quote request received at /api/quote with body:", body);
  }

  if (isHoneypotTripped(body)) {
    return NextResponse.json({ ok: true });
  }

  const parsed = parseQuoteBody(body);
  if (!parsed.ok) {
    console.error("Quote validation failed:", parsed.error, body);
    return NextResponse.json(
      { ok: false, error: parsed.error },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "RESEND_API_KEY is not set on the server." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { data } = parsed;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New quote request from ${data.name}`,
      html: buildEmailHtml(data),
      text: buildEmailText(data),
    });

    if (result.error) {
      console.error("Resend error object:", result.error);
      const message =
        typeof result.error.message === "string" && result.error.message
          ? result.error.message
          : JSON.stringify(result.error);
      return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }

    console.log("Resend success:", result.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend threw an exception:", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
          ? error
          : JSON.stringify(error);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

async function readBody(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const json: unknown = await request.json();
    if (!json || typeof json !== "object" || Array.isArray(json)) {
      throw new Error("Invalid JSON body");
    }
    return json as Record<string, unknown>;
  }

  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildRows(data: QuoteAnswers): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [
    { label: "Clean type", value: data.service },
    { label: "Property", value: data.property },
  ];

  if (data.storeys) {
    rows.push({ label: "Storeys", value: data.storeys });
  }

  rows.push(
    { label: "Location", value: data.location },
    { label: "Name", value: data.name },
    { label: "Phone", value: data.phone },
    { label: "Email", value: data.email },
  );

  if (data.message) {
    rows.push({ label: "Message", value: data.message });
  }

  return rows;
}

function buildEmailHtml(data: QuoteAnswers): string {
  const rows = buildRows(data)
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 16px 10px 0;border-bottom:1px solid #003057;font-weight:700;vertical-align:top;white-space:nowrap;width:140px;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #003057;vertical-align:top;">
            ${escapeHtml(row.value).replaceAll("\n", "<br />")}
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#ffffff;color:#003057;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;">
    <h1 style="margin:0 0 8px;font-size:22px;">New quote request</h1>
    <p style="margin:0 0 20px;">A new quote request arrived from the Wyper website.</p>
    <table style="border-collapse:collapse;width:100%;max-width:560px;">
      ${rows}
    </table>
  </body>
</html>`;
}

function buildEmailText(data: QuoteAnswers): string {
  return [
    "New quote request",
    "",
    ...buildRows(data).map((row) => `${row.label}: ${row.value}`),
  ].join("\n");
}
