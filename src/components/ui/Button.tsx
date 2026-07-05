import React from "react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  external = false,
  className = "",
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-medium text-base rounded-lg px-7 py-3 transition-all duration-200 " +
    (fullWidth ? "w-full " : "");

  const variantClasses = {
    primary:
      "bg-green-primary text-white hover:bg-[#235c43] hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]",
    secondary:
      "border border-green-primary text-green-primary bg-transparent hover:bg-green-mist hover:scale-[1.02] active:scale-[0.99]",
    ghost: "text-blue-deep bg-transparent hover:text-green-primary",
  };

  const cls = base + variantClasses[variant] + " " + className;

  if (href) {
    return React.createElement(
      "a",
      {
        href: href,
        className: cls,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
      },
      children
    );
  }

  return React.createElement(
    "button",
    {
      type: type,
      onClick: onClick,
      className: cls,
    },
    children
  );
}