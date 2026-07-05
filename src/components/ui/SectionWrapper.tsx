import React from "react";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children?: ReactNode;
  background?: "white" | "parchment" | "green-mist" | "blue-deep";
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export function SectionWrapper({
  children,
  background = "white",
  className = "",
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  const backgrounds = {
    white: "bg-space-white",
    parchment: "bg-parchment",
    "green-mist": "bg-green-mist",
    "blue-deep": "bg-blue-deep",
  };

  return React.createElement(
    Tag,
    { id, className: `w-full px-5 py-16 md:py-24 ${backgrounds[background]} ${className}` },
    React.createElement("div", { className: "max-w-6xl mx-auto w-full" }, children)
  );
}