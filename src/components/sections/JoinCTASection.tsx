import React from "react";
import { communityInfo } from "../../data/community";
import { SectionWrapper } from "../ui/SectionWrapper";
import { ScrollReveal } from "../ui/ScrollReveal";

export function JoinCTASection() {
  return React.createElement(SectionWrapper, { background: "white" },
    React.createElement("div", { className: "relative max-w-2xl mx-auto text-center py-8" },
      React.createElement("div", {
        className: "absolute inset-0 pointer-events-none",
        "aria-hidden": "true",
      },
        React.createElement("div", {
          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-green-mist opacity-60 blur-3xl",
        })
      ),
      React.createElement("div", { className: "relative" },
        React.createElement(ScrollReveal, { delay: 0 },
          React.createElement("span", {
            className: "block font-body text-sm font-medium tracking-widest uppercase text-green-primary mb-4",
          }, "Ready to Begin?")
        ),
        React.createElement(ScrollReveal, { delay: 120 },
          React.createElement("h2", {
            className: "font-display text-2xl md:text-3xl font-semibold text-blue-deep leading-tight mb-4",
          }, "Your journey into technology starts here.")
        ),
        React.createElement(ScrollReveal, { delay: 240 },
          React.createElement("p", {
            className: "font-body text-md text-muted leading-relaxed mb-8",
          }, "Membership is completely free. Open to all high school students. No experience required.")
        ),
        React.createElement(ScrollReveal, { delay: 360 },
          React.createElement("div", { className: "flex flex-col xs:flex-row gap-4 justify-center" },
            React.createElement("a", {
              href: communityInfo.registrationFormUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center justify-center gap-2 bg-green-primary text-white font-body font-medium text-base rounded-lg px-8 py-3.5 transition-all duration-200 hover:bg-[#235c43] hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]",
            }, "Join FMUTech — It's Free"),
            React.createElement("a", {
              href: "/join",
              className: "inline-flex items-center justify-center gap-2 border border-green-primary text-green-primary font-body font-medium text-base rounded-lg px-8 py-3.5 transition-all duration-200 hover:bg-green-mist hover:scale-[1.02] active:scale-[0.99]",
            }, "Learn More First")
          )
        )
      )
    )
  );
}