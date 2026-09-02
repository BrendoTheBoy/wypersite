export const SERVICE_OPTIONS = [
  "Exterior only",
  "Exterior and interior",
  "Not sure yet",
] as const;

export const PROPERTY_OPTIONS = [
  "My home",
  "My business or storefront",
] as const;

export const STOREY_OPTIONS = ["1", "2", "3 or more"] as const;

export const LOCATION_OPTIONS = [
  "Guelph",
  "Fergus or Elora",
  "Rockwood",
  "Somewhere else",
] as const;

export const PROPERTY_HOME = "My home";
export const PROPERTY_BUSINESS = "My business or storefront";

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
export type PropertyOption = (typeof PROPERTY_OPTIONS)[number];
export type StoreyOption = (typeof STOREY_OPTIONS)[number];
export type LocationOption = (typeof LOCATION_OPTIONS)[number];

export type QuoteAnswers = {
  service: ServiceOption;
  property: PropertyOption;
  storeys: StoreyOption | "";
  location: LocationOption;
  name: string;
  phone: string;
  email: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isOneOf<T extends string>(
  value: string,
  options: readonly T[],
): value is T {
  return (options as readonly string[]).includes(value);
}

function readString(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export function parseQuoteBody(
  body: Record<string, unknown>,
): { ok: true; data: QuoteAnswers } | { ok: false; error: string } {
  const service = readString(body, "service");
  const property = readString(body, "property");
  const storeys = readString(body, "storeys");
  const location = readString(body, "location");
  const name = readString(body, "name");
  const phone = readString(body, "phone");
  const email = readString(body, "email");
  const message = readString(body, "message");

  if (!service || !isOneOf(service, SERVICE_OPTIONS)) {
    return { ok: false, error: "Please choose what kind of clean you need." };
  }
  if (!property || !isOneOf(property, PROPERTY_OPTIONS)) {
    return { ok: false, error: "Please choose the kind of property." };
  }

  const needsStoreys = property === PROPERTY_HOME;
  if (needsStoreys && (!storeys || !isOneOf(storeys, STOREY_OPTIONS))) {
    return { ok: false, error: "Please choose how many storeys." };
  }

  if (!location || !isOneOf(location, LOCATION_OPTIONS)) {
    return { ok: false, error: "Please choose where you are located." };
  }
  if (!name) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!phone) {
    return { ok: false, error: "Please enter your phone number." };
  }
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (!email) {
    return { ok: false, error: "Please enter your email." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return {
    ok: true,
    data: {
      service,
      property,
      storeys: needsStoreys && isOneOf(storeys, STOREY_OPTIONS) ? storeys : "",
      location,
      name,
      phone,
      email,
      message,
    },
  };
}

export function isHoneypotTripped(body: Record<string, unknown>): boolean {
  const botcheck = body.botcheck;
  return typeof botcheck === "string" && botcheck.trim().length > 0;
}
