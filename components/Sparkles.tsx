/** Decorative 4-point sparkles matching the logo. Decorative only. */
export default function Sparkles({ className = "" }: { className?: string }) {
  const sparks = [
    { top: "12%", left: "8%", size: 22, opacity: 0.35 },
    { top: "68%", left: "14%", size: 14, opacity: 0.25 },
    { top: "18%", left: "78%", size: 26, opacity: 0.3 },
    { top: "52%", left: "88%", size: 16, opacity: 0.28 },
    { top: "42%", left: "6%", size: 12, opacity: 0.22 },
    { top: "76%", left: "70%", size: 18, opacity: 0.26 },
    { top: "8%", left: "48%", size: 13, opacity: 0.2 },
    { top: "34%", left: "92%", size: 11, opacity: 0.24 },
    { top: "82%", left: "38%", size: 15, opacity: 0.22 },
  ];

  return (
    <div
      className={["pointer-events-none absolute inset-0 overflow-hidden", className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      {sparks.map((spark, i) => (
        <svg
          key={i}
          width={spark.size}
          height={spark.size}
          viewBox="0 0 24 24"
          className="absolute"
          style={{
            top: spark.top,
            left: spark.left,
            opacity: spark.opacity,
          }}
        >
          <path
            d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z"
            fill="#FFFFFF"
          />
        </svg>
      ))}
    </div>
  );
}
