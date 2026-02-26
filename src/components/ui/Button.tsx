import { type ReactNode, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends BaseProps {
  as?: "button";
  href?: never;
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  as: "link";
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light focus-visible:ring-primary",
  secondary:
    "bg-secondary text-white hover:bg-secondary-light focus-visible:ring-secondary",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus-visible:ring-primary",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "" } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (props.as === "link" && "href" in props) {
    const { as, href, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as, href, ...buttonRest } = props;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
