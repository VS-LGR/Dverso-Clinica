import { type ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Optional background variant for visual rhythm */
  variant?: "default" | "muted" | "accent";
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
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 md:px-6 ${variantClasses[variant]} ${className}`}
    >
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}
