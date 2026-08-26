import Link from "next/link";
import Photo from "@/components/Photo";

type CardProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  linkLabel?: string;
  className?: string;
  /** White is default. Cyan fills add-on style cards. */
  tone?: "white" | "cyan";
  image?: {
    src: string;
    alt: string;
    placeholderLabel?: string;
  };
};

export default function Card({
  title,
  children,
  icon,
  href,
  linkLabel = "Learn more",
  className = "",
  tone = "white",
  image,
}: CardProps) {
  return (
    <article
      className={[
        "flex h-full flex-col rounded-3xl border-[3px] border-ink p-6 shadow-hard sm:p-8",
        tone === "cyan" ? "bg-primary" : "bg-white",
        "transition-transform duration-200 hover:-translate-y-1 hover:shadow-hard-lg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {image && (
        <Photo
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          placeholderLabel={image.placeholderLabel}
          className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover"
        />
      )}
      {icon && (
        <div className="mb-4 text-ink" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
        {title}
      </h3>
      <div className="mt-3 flex-1 font-body text-base leading-relaxed text-muted">
        {children}
      </div>
      {href && (
        <Link
          href={href}
          className="mt-5 inline-flex font-accent text-sm uppercase tracking-[0.14em] text-ink underline decoration-2 underline-offset-4 transition-colors hover:text-ink/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {linkLabel}
        </Link>
      )}
    </article>
  );
}
