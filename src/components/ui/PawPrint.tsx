interface PawPrintProps {
  /** Size in pixels (width/height). */
  size?: number;
  className?: string;
  /** For staggered float animation. */
  animationDelay?: string;
  /** Optional: 'float' | 'pulse' for CSS animation. */
  animate?: "float" | "pulse" | "none";
}

/**
 * Dog paw print SVG — decorative, pastel-friendly. Use for health/warmth/joy theme.
 */
export function PawPrint({
  size = 32,
  className = "",
  animationDelay = "0s",
  animate = "float",
}: PawPrintProps) {
  const animClass =
    animate === "float"
      ? "animate-paw-float"
      : animate === "pulse"
        ? "animate-paw-pulse"
        : "";

  return (
    <span
      className={`inline-block opacity-60 ${animClass} ${className}`}
      style={{ width: size, height: size, animationDelay }}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main pad */}
        <ellipse cx="12" cy="16" rx="5" ry="6" />
        {/* Toe beans */}
        <ellipse cx="8" cy="10" rx="2.2" ry="2.8" />
        <ellipse cx="12" cy="8" rx="2.2" ry="2.8" />
        <ellipse cx="16" cy="10" rx="2.2" ry="2.8" />
        <ellipse cx="10" cy="12.5" rx="1.8" ry="2.2" />
        <ellipse cx="14" cy="12.5" rx="1.8" ry="2.2" />
      </svg>
    </span>
  );
}
