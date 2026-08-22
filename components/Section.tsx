type SectionProps = {
  children: React.ReactNode;
  id?: string;
  /** Alternate between cyan and white page bands */
  tone?: "cyan" | "white";
  className?: string;
  as?: "section" | "div";
  contained?: boolean;
};

export default function Section({
  children,
  id,
  tone = "white",
  className = "",
  as: Tag = "section",
  contained = true,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={[
        tone === "cyan" ? "bg-primary" : "bg-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {contained ? (
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
}
