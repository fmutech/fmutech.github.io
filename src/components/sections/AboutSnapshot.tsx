import React from "react";
import { vision, communityInfo } from "../../data/community";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionDivider } from "../ui/SectionDivider";

const stats = [
  { value: "Free", label: "Membership — always" },
  { value: "10+", label: "Technology focus areas" },
  { value: "5", label: "Community divisions" },
];

export function AboutSnapshot() {
  return React.createElement("div", { className: "relative" },
    React.createElement(SectionWrapper, { background: "parchment" },
      React.createElement("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
      },
        React.createElement("div", {},
          React.createElement(SectionHeading, {
            eyebrow: "About FMUTech",
            heading: "Technology is the medium. Students are the story.",
            body: vision,
          }),
          React.createElement(ScrollReveal, { delay: 300 },
            React.createElement("a", {
              href: "/about",
              className: "inline-flex items-center gap-2 text-green-primary font-body font-medium text-base transition-all duration-200 hover:gap-3 group",
            },
              "Learn Our Full Story",
              React.createElement("span", {
                className: "transition-transform duration-200 group-hover:translate-x-1",
              }, "→")
            )
          )
        ),
        React.createElement("div", { className: "flex flex-col gap-6" },
          ...stats.map((stat, index) =>
            React.createElement(ScrollReveal, { key: stat.label, delay: index * 120 },
              React.createElement("div", {
                className: "flex items-start gap-5 p-6 bg-space-white rounded-xl border border-green-light/40",
              },
                React.createElement("div", { className: "flex-shrink-0 w-1 h-12 bg-green-primary rounded-full" }),
                React.createElement("div", {},
                  React.createElement("div", { className: "font-display text-3xl font-semibold text-blue-deep leading-none mb-1" }, stat.value),
                  React.createElement("div", { className: "font-body text-sm text-muted" }, stat.label)
                )
              )
            )
          ),
          React.createElement(ScrollReveal, { delay: 400 },
            React.createElement("div", {
              className: "flex items-start gap-5 p-6 bg-green-primary/5 rounded-xl border border-green-primary/20",
            },
              React.createElement("div", { className: "flex-shrink-0 w-1 h-12 bg-green-primary rounded-full" }),
              React.createElement("div", {},
                React.createElement("div", { className: "font-display text-3xl font-semibold text-blue-deep leading-none mb-1" }, `Est. ${communityInfo.established.split(" ")[1]}`),
                React.createElement("div", { className: "font-body text-sm text-muted" }, "Founded in Chennai, Tamil Nadu")
              )
            )
          )
        )
      )
    ),
    React.createElement(SectionDivider, { toColor: "#EAF5EE", variant: "wave" })
  );
}