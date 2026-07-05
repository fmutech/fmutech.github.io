import React from "react";
import { focusAreas } from "../../data/community";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionDivider } from "../ui/SectionDivider";

const areaIcons = ["{ }", "< />", "📱", "◎", "⚙", "~", "🔒", "∑", "☁", "✦"];

export function FocusAreasSection() {
  return React.createElement("div", { className: "relative" },
    React.createElement(SectionWrapper, { background: "green-mist" },
      React.createElement(SectionHeading, {
        eyebrow: "What We Explore",
        heading: "Ten pathways into the world of technology.",
        body: "From first lines of code to machine learning — FMUTech covers the full spectrum of modern technology, designed to be approachable for every level of experience.",
        align: "center",
      }),
      React.createElement("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",
      },
        ...focusAreas.map((area, index) =>
          React.createElement(ScrollReveal, { key: area, delay: index * 60 },
            React.createElement("div", {
              className: "group flex flex-col items-center text-center gap-3 p-5 bg-space-white rounded-xl border border-green-light/40 transition-all duration-300 hover:border-green-primary/40 hover:shadow-md hover:-translate-y-0.5 cursor-default",
            },
              React.createElement("span", {
                className: "font-body text-lg text-green-primary group-hover:scale-110 transition-transform duration-200",
                "aria-hidden": "true",
              }, areaIcons[index]),
              React.createElement("span", {
                className: "font-body text-sm text-ink leading-snug",
              }, area)
            )
          )
        )
      )
    ),
    React.createElement(SectionDivider, { toColor: "#F4F1EC", variant: "grass" })
  );
}