import type { ReactNode } from "react";

type IconName = "pin" | "clock" | "message" | "shield";

type IconRowProps = {
  icon: IconName;
  children: ReactNode;
  detail?: ReactNode;
};

const iconClass = "h-[18px] w-[18px] shrink-0";

function ContactIcon({ name }: { name: IconName }) {
  switch (name) {
    case "pin":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 22s7-5.8 7-12a7 7 0 1 0-14 0c0 6.2 7 12 7 12Z"
            fill="#5CE1E6"
            stroke="#003057"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.5" fill="#003057" />
        </svg>
      );
    case "clock":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="#5CE1E6"
            stroke="#003057"
            strokeWidth="1.5"
          />
          <path
            d="M12 7.5V12l3.5 2"
            stroke="#003057"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "message":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9.5L5 20.5v-4H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
            fill="#5CE1E6"
            stroke="#003057"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3.5 19 6.5v5.2c0 4.4-2.9 7.5-7 8.8-4.1-1.3-7-4.4-7-8.8V6.5L12 3.5Z"
            fill="#5CE1E6"
            stroke="#003057"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 12.2 11 14.2 15.5 9.5"
            stroke="#003057"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function IconRow({ icon, children, detail }: IconRowProps) {
  return (
    <div className={`flex gap-3 ${detail ? "items-start" : "items-center"}`}>
      <span className={detail ? "mt-0.5 shrink-0" : "shrink-0"}>
        <ContactIcon name={icon} />
      </span>
      <div className="min-w-0">
        <p className="font-body text-base leading-snug text-ink">{children}</p>
        {detail ? (
          <p className="mt-1 font-body text-sm leading-snug text-ink/70">
            {detail}
          </p>
        ) : null}
      </div>
    </div>
  );
}
