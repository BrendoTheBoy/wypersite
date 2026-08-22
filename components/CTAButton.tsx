import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "cyan";
  className?: string;
};

const variants = {
  primary: "bg-ink text-white hover:bg-ink/90 border-2 border-ink",
  secondary: "bg-white text-ink border-2 border-ink hover:bg-primary",
  cyan: "bg-primary text-ink border-2 border-primary hover:bg-white",
} as const;

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full",
    "px-6 py-3.5 sm:px-8 sm:py-4",
    "font-accent text-sm uppercase tracking-[0.12em] sm:text-base",
    "transition-transform hover:-translate-y-0.5",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
