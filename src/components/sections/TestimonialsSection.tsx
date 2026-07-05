import React from "react";
import { testimonials } from "../../data/testimonials";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionDivider } from "../ui/SectionDivider";

export function TestimonialsSection() {
  return React.createElement("div", { className: "relative" },
    React.createElement(SectionWrapper, { background: "parchment" },
      React.createElement(SectionHeading, {
        eyebrow: "From Our Community",
        heading: "Words from the students who built this.",
        body: "Every testimonial here is genuine — real words from real members of FMUTech.",
        align: "center",
      }),
      React.createElement("div", {
        className: "flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory -mx-5 px-5",
        style: { scrollbarWidth: "none" as const },
      },
        ...testimonials.map((t, index) =>
          React.createElement(ScrollReveal, { key: t.id, delay: index * 80 },
            React.createElement("article", {
              className: "flex-shrink-0 w-[85vw] xs:w-80 md:w-96 snap-start bg-space-white rounded-2xl p-6 md:p-8 border border-green-light/40 flex flex-col gap-4",
            },
              React.createElement("div", { className: "flex-shrink-0 w-8 h-0.5 bg-green-primary rounded-full" }),
              React.createElement("blockquote", { className: "flex flex-col gap-3 flex-1" },
                React.createElement("p", {
                  className: "font-display text-lg font-normal italic text-blue-deep leading-snug",
                }, `"${t.headline}"`),
                React.createElement("p", {
                  className: "font-body text-sm text-muted leading-relaxed flex-1",
                }, t.body)
              ),
              React.createElement("footer", {
                className: "font-body text-xs text-green-primary font-medium tracking-wide uppercase pt-2 border-t border-green-light/40",
              }, `— ${t.attribution}`)
            )
          )
        )
      ),
      React.createElement("div", {
        className: "flex justify-center gap-2 mt-6",
        "aria-hidden": "true",
      },
        ...testimonials.map((t) =>
          React.createElement("div", {
            key: t.id,
            className: "w-1.5 h-1.5 rounded-full bg-green-light",
          })
        )
      )
    ),
    React.createElement(SectionDivider, { toColor: "#FAFAFA", variant: "hill" })
  );
}