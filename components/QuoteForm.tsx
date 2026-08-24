"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  LOCATION_OPTIONS,
  PROPERTY_BUSINESS,
  PROPERTY_HOME,
  PROPERTY_OPTIONS,
  SERVICE_OPTIONS,
  STOREY_OPTIONS,
} from "@/lib/quote";
import { SITE } from "@/lib/site";

type Answers = {
  service: string;
  property: string;
  storeys: string;
  location: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  botcheck: string;
};

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
};

type StepId = "service" | "property" | "storeys" | "location" | "contact";

const INITIAL_ANSWERS: Answers = {
  service: "",
  property: "",
  storeys: "",
  location: "",
  name: "",
  phone: "",
  email: "",
  message: "",
  botcheck: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ADVANCE_DELAY_MS = 250;

const ALL_STEPS: { id: StepId; question: string }[] = [
  { id: "service", question: "What do you need cleaned?" },
  { id: "property", question: "What kind of property?" },
  { id: "storeys", question: "How many storeys?" },
  { id: "location", question: "Where are you located?" },
  { id: "contact", question: "Almost done. How can Brendan reach you?" },
];

function stepsFor(property: string) {
  if (property === PROPERTY_BUSINESS) {
    return ALL_STEPS.filter((step) => step.id !== "storeys");
  }
  return ALL_STEPS;
}

export default function QuoteForm() {
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [advancing, setAdvancing] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const advanceTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    };
  }, []);

  const steps = useMemo(
    () => stepsFor(answers.property),
    [answers.property],
  );
  const step = steps[stepIndex] ?? steps[0];
  const totalSteps = steps.length;
  const progress = ((stepIndex + 1) / totalSteps) * 100;

  function goTo(nextIndex: number, nextDirection: "forward" | "back") {
    setDirection(nextDirection);
    setStepIndex(nextIndex);
    setAdvancing(false);
  }

  function selectOption(field: keyof Answers, value: string) {
    if (advancing || status === "submitting") return;

    const nextAnswers = {
      ...answers,
      [field]: value,
      ...(field === "property" && value !== PROPERTY_HOME ? { storeys: "" } : {}),
    };
    setAnswers(nextAnswers);
    setAdvancing(true);

    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => {
      const nextSteps = stepsFor(nextAnswers.property);
      const currentId = field === "property" ? "property" : step.id;
      const currentIndex = nextSteps.findIndex((item) => item.id === currentId);
      goTo(Math.min(currentIndex + 1, nextSteps.length - 1), "forward");
    }, ADVANCE_DELAY_MS);
  }

  function goBack() {
    if (stepIndex === 0 || advancing) return;
    goTo(stepIndex - 1, "back");
  }

  const fieldErrors = validateContact(answers);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);
    setSubmitError("");

    const nextFieldErrors = validateContact(answers);
    if (nextFieldErrors.name || nextFieldErrors.phone || nextFieldErrors.email) {
      console.error("Quote form client validation failed:", nextFieldErrors);
      return;
    }

    const requestBody = {
      service: answers.service,
      property: answers.property,
      storeys: answers.storeys,
      location: answers.location,
      name: answers.name,
      phone: answers.phone,
      email: answers.email,
      message: answers.message,
      botcheck: answers.botcheck,
    };

    const endpoint = "/api/quote";
    console.log("Submitting quote request to", endpoint, requestBody);
    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const payload: unknown = await response.json().catch((parseError) => {
        console.error("Quote response JSON parse failed:", parseError);
        return null;
      });

      console.log("Quote API response:", {
        url: response.url,
        status: response.status,
        ok: response.ok,
        payload,
      });

      const success =
        response.ok &&
        typeof payload === "object" &&
        payload !== null &&
        "ok" in payload &&
        payload.ok === true;

      if (!success) {
        const message =
          typeof payload === "object" &&
          payload !== null &&
          "error" in payload &&
          typeof payload.error === "string" &&
          payload.error
            ? payload.error
            : `Request failed with status ${response.status}.`;
        console.error("Quote request failed:", message, payload);
        setSubmitError(message);
        setStatus("idle");
        return;
      }

      console.log("Quote request succeeded:", payload);
      setStatus("success");
    } catch (error) {
      console.error("Quote request threw:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Could not send your request right now.";
      setSubmitError(message);
      setStatus("idle");
    }
  }

  const cardClass =
    "rounded-3xl border-[3px] border-ink bg-white p-5 shadow-hard sm:p-8";

  if (status === "success") {
    return (
      <div
        className={`${cardClass} flex min-h-[38rem] flex-col items-center justify-center text-center`}
        role="status"
      >
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-ink bg-primary text-ink"
          aria-hidden="true"
        >
          <CheckIcon className="h-10 w-10" />
        </span>
        <h2 className="mt-6 font-display text-4xl text-ink sm:text-5xl">
          Request sent
        </h2>
        <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink sm:text-lg">
          Thanks. Brendan will be in touch shortly, usually within a couple of
          hours.
        </p>
      </div>
    );
  }

  return (
    <div className={`${cardClass} flex min-h-[38rem] flex-col`}>
      <div className="flex items-center gap-4">
        <p className="shrink-0 font-accent text-xs uppercase tracking-[0.18em] text-ink sm:text-sm">
          Step {stepIndex + 1} of {totalSteps}
        </p>
        <div
          className="h-1 flex-1 overflow-hidden rounded-full border border-ink bg-white"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-valuenow={stepIndex + 1}
          aria-label={`Step ${stepIndex + 1} of ${totalSteps}`}
        >
          <div
            className="h-full bg-ink transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-5 min-h-7">
        {stepIndex > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="font-accent text-xs uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-sm"
          >
            Back
          </button>
        )}
      </div>

      <div
        key={`${step.id}-${direction}`}
        className={`mt-4 flex flex-1 flex-col ${
          direction === "forward" ? "quote-in-forward" : "quote-in-back"
        }`}
      >
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          {step.question}
        </h2>

        {step.id === "service" && (
          <OptionGrid columns={2}>
            {SERVICE_OPTIONS.map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={answers.service === option}
                onSelect={() => selectOption("service", option)}
              />
            ))}
          </OptionGrid>
        )}

        {step.id === "property" && (
          <OptionGrid columns={2}>
            {PROPERTY_OPTIONS.map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={answers.property === option}
                onSelect={() => selectOption("property", option)}
              />
            ))}
          </OptionGrid>
        )}

        {step.id === "storeys" && (
          <OptionGrid columns={3}>
            {STOREY_OPTIONS.map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={answers.storeys === option}
                onSelect={() => selectOption("storeys", option)}
              />
            ))}
          </OptionGrid>
        )}

        {step.id === "location" && (
          <OptionGrid columns={2}>
            {LOCATION_OPTIONS.map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={answers.location === option}
                onSelect={() => selectOption("location", option)}
              />
            ))}
          </OptionGrid>
        )}

        {step.id === "contact" && (
          <form className="mt-6 flex flex-1 flex-col" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="botcheck"
              value={answers.botcheck}
              onChange={(event) =>
                setAnswers((prev) => ({ ...prev, botcheck: event.target.value }))
              }
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <Field
              id="quote-name"
              label="Name"
              value={answers.name}
              autoComplete="name"
              onChange={(value) =>
                setAnswers((prev) => ({ ...prev, name: value }))
              }
              error={attemptedSubmit ? fieldErrors.name : undefined}
            />
            <Field
              id="quote-phone"
              label="Phone"
              type="tel"
              value={answers.phone}
              autoComplete="tel"
              onChange={(value) =>
                setAnswers((prev) => ({ ...prev, phone: value }))
              }
              error={attemptedSubmit ? fieldErrors.phone : undefined}
            />
            <Field
              id="quote-email"
              label="Email"
              type="email"
              value={answers.email}
              autoComplete="email"
              onChange={(value) =>
                setAnswers((prev) => ({ ...prev, email: value }))
              }
              error={attemptedSubmit ? fieldErrors.email : undefined}
            />

            <label
              htmlFor="quote-message"
              className="mt-5 block font-accent text-sm uppercase tracking-[0.14em] text-ink"
            >
              Message
            </label>
            <textarea
              id="quote-message"
              name="message"
              rows={3}
              value={answers.message}
              onChange={(event) =>
                setAnswers((prev) => ({ ...prev, message: event.target.value }))
              }
              className="mt-2 w-full resize-y rounded-xl border-2 border-ink bg-white px-4 py-3 font-body text-base text-ink focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {submitError && (
              <div
                className="mt-5 rounded-2xl border-[3px] border-ink bg-primary/40 p-4 text-ink"
                role="alert"
              >
                <p className="font-accent text-xs uppercase tracking-[0.14em]">
                  Could not send
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed sm:text-base">
                  {submitError}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed sm:text-base">
                  Call or text{" "}
                  <a
                    href={SITE.phoneHref}
                    className="font-medium underline decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    {SITE.phone}
                  </a>{" "}
                  and Brendan will take your details.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-2xl bg-ink px-6 py-4 font-accent text-sm uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-80 sm:text-base"
            >
              {status === "submitting"
                ? "Sending..."
                : "Send My Free Quote Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function validateContact(answers: Answers): FieldErrors {
  const errors: FieldErrors = {};
  if (!answers.name.trim()) errors.name = "Please enter your name.";
  if (!answers.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (answers.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!answers.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(answers.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

function OptionGrid({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns: 2 | 3;
}) {
  return (
    <div
      className={`mt-6 grid gap-3 ${
        columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}

function OptionCard({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={[
        "flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border-[3px] border-ink px-5 py-4 text-left",
        "font-display text-xl text-ink sm:text-2xl",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:bg-primary hover:shadow-hard",
        "focus-visible:bg-primary focus-visible:shadow-hard",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        selected ? "bg-primary shadow-hard" : "bg-white",
      ].join(" ")}
    >
      <span>{label}</span>
      {selected && <CheckIcon className="h-7 w-7 shrink-0" />}
    </button>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: "text" | "tel" | "email";
  autoComplete?: string;
}) {
  return (
    <div className="mt-5">
      <label
        htmlFor={id}
        className="block font-accent text-sm uppercase tracking-[0.14em] text-ink"
      >
        {label}
      </label>
      <input
        id={id}
        name={id.replace("quote-", "")}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border-2 border-ink bg-white px-4 py-3 font-body text-base text-ink focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 font-body text-sm text-ink" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M9.55 17.6 4.8 12.85l1.4-1.4 3.35 3.35 8.25-8.25 1.4 1.4z" />
    </svg>
  );
}
