import { type ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "accent";
  /** Card style: rounded container with soft shadow */
  card?: boolean;
  /** Animation delay for content (e.g. '0.1s', '0.2s') */
  entranceDelay?: string;
}

const variantClasses = {
  default: "bg-background",
  muted: "bg-muted",
  accent: "bg-accent-light",
};

export function SectionWrapper({
  id,
  children,
  className = "",
  variant = "default",
  card = false,
  entranceDelay,
}: SectionWrapperProps) {
  const contentClass = card
    ? "rounded-3xl shadow-card bg-white/90 backdrop-blur-sm p-8 md:p-12 border border-primary-light/20"
    : "";

  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 md:px-6 ${variantClasses[variant]} ${className}`}
    >
      <div
        className={`max-w-4xl mx-auto opacity-0 animate-fade-in-up ${contentClass}`}
        style={entranceDelay ? { animationDelay: entranceDelay } : undefined}
      >
        {children}
      </div>
    </section>
  );
}
