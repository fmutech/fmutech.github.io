import React from "react";
import type { ReactNode, CSSProperties } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface ScrollRevealProps {
  children?: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
  };

  return React.createElement("div", { ref, className, style }, children);
}