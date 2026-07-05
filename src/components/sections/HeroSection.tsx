import React from "react";
import { communityInfo, foundingPrinciple } from "../../data/community";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionDivider } from "../ui/SectionDivider";

export function HeroSection() {
  return React.createElement("div", { className: "relative" },
    React.createElement("section", {
      className: "relative min-h-[90vh] flex items-center bg-space-white overflow-hidden px-5 py-20 md:py-32",
    },
      React.createElement("div", {
        className: "absolute inset-0 pointer-events-none",
        "aria-hidden": "true",
      },
        React.createElement("svg", {
          className: "absolute bottom-0 right-0 w-64 md:w-96 opacity-[0.04] text-green-primary",
          viewBox: "0 0 400 400",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
          React.createElement("circle", { cx: "200", cy: "200", r: "180", stroke: "currentColor", strokeWidth: "1" }),
          React.createElement("circle", { cx: "200", cy: "200", r: "120", stroke: "currentColor", strokeWidth: "1" }),
          React.createElement("circle", { cx: "200", cy: "200", r: "60", stroke: "currentColor", strokeWidth: "1" }),
          React.createElement("line", { x1: "200", y1: "20", x2: "200", y2: "380", stroke: "currentColor", strokeWidth: "0.5" }),
          React.createElement("line", { x1: "20", y1: "200", x2: "380", y2: "200", stroke: "currentColor", strokeWidth: "0.5" }),
          React.createElement("path", { d: "M200 20 C280 80 320 160 200 200 C80 240 120 320 200 380", stroke: "currentColor", strokeWidth: "0.8", fill: "none" }),
          React.createElement("path", { d: "M20 200 C80 120 160 80 200 200 C240 320 320 280 380 200", stroke: "currentColor", strokeWidth: "0.8", fill: "none" }),
          React.createElement("circle", { cx: "200", cy: "200", r: "6", fill: "currentColor", opacity: "0.6" }),
          React.createElement("circle", { cx: "200", cy: "80", r: "4", fill: "currentColor", opacity: "0.4" }),
          React.createElement("circle", { cx: "320", cy: "200", r: "4", fill: "currentColor", opacity: "0.4" }),
          React.createElement("circle", { cx: "140", cy: "140", r: "3", fill: "currentColor", opacity: "0.3" }),
          React.createElement("circle", { cx: "260", cy: "260", r: "3", fill: "currentColor", opacity: "0.3" })
        )
      ),
      React.createElement("div", { className: "max-w-6xl mx-auto w-full" },
        React.createElement("div", { className: "max-w-2xl" },
          React.createElement(ScrollReveal, { delay: 0 },
            React.createElement("div", { className: "flex items-center gap-3 mb-6" },
              React.createElement("span", { className: "block w-8 h-px bg-green-primary" }),
              React.createElement("span", {
                className: "font-body text-sm font-medium tracking-widest uppercase text-green-primary",
              }, `${communityInfo.location} · Est. ${communityInfo.established}`)
            )
          ),
          React.createElement(ScrollReveal, { delay: 120 },
            React.createElement("h1", {
              className: "font-display text-display font-semibold text-blue-deep leading-tight mb-6",
            },
              "Where Students Grow into Innovators"
            )
          ),
          React.createElement(ScrollReveal, { delay: 240 },
            React.createElement("p", {
              className: "font-body text-md text-muted leading-relaxed mb-4 max-w-prose",
            }, foundingPrinciple)
          ),
          React.createElement(ScrollReveal, { delay: 300 },
            React.createElement("p", {
              className: "font-body text-base text-muted leading-relaxed mb-10 max-w-prose",
            }, "FMUTech is a free, student-led technology and innovation community in Chennai empowering high school students to learn, build, and lead through hands-on experience.")
          ),
          React.createElement(ScrollReveal, { delay: 400 },
            React.createElement("div", { className: "flex flex-col xs:flex-row gap-4" },
              React.createElement("a", {
                href: communityInfo.registrationFormUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 bg-green-primary text-white font-body font-medium text-base rounded-lg px-7 py-3 transition-all duration-200 hover:bg-[#235c43] hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]",
              }, "Join FMUTech — It's Free"),
              React.createElement("a", {
                href: "/about",
                className: "inline-flex items-center justify-center gap-2 text-blue-deep font-body font-medium text-base rounded-lg px-7 py-3 transition-all duration-200 hover:text-green-primary",
              }, "Learn Our Story →")
            )
          )
        )
      )
    ),
    React.createElement(SectionDivider, { toColor: "#F4F1EC", variant: "hill" })
  );
}