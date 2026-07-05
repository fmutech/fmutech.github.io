import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const headingColor = light ? "text-white" : "text-blue-deep";
  const bodyColor = light ? "text-white/70" : "text-muted";
  const eyebrowColor = light ? "text-green-light" : "text-green-primary";

  return React.createElement("div", { className: `max-w-2xl ${alignClass} mb-10 md:mb-14` },
    eyebrow
      ? React.createElement(ScrollReveal, { delay: 0 },
          React.createElement("span", {
            className: `block text-sm font-body font-medium tracking-widest uppercase mb-3 ${eyebrowColor}`,
          }, eyebrow)
        )
      : null,
    React.createElement(ScrollReveal, { delay: 100 },
      React.createElement("h2", {
        className: `font-display text-2xl md:text-3xl font-semibold leading-tight mb-4 ${headingColor}`,
      }, heading)
    ),
    body
      ? React.createElement(ScrollReveal, { delay: 200 },
          React.createElement("p", {
            className: `font-body text-md leading-relaxed ${bodyColor}`,
          }, body)
        )
      : null
  );
}