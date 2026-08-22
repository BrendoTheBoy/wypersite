import fs from "fs";
import path from "path";
import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Short label shown on the cyan placeholder when the file is missing */
  placeholderLabel?: string;
  priority?: boolean;
};

export default function Photo({
  src,
  alt,
  width,
  height,
  className = "",
  placeholderLabel,
  priority = false,
}: PhotoProps) {
  const absolute = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  const exists = fs.existsSync(absolute);
  const label =
    placeholderLabel ??
    src.split("/").pop()?.replace(/\.[^.]+$/, "") ??
    "Photo";

  if (!exists) {
    return (
      <div
        className={[
          "flex items-center justify-center bg-primary text-ink",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ aspectRatio: `${width} / ${height}` }}
        role="img"
        aria-label={alt}
      >
        <span className="font-accent text-xs uppercase tracking-[0.16em]">
          {label}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
