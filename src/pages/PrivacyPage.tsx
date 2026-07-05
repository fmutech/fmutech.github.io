import React from "react";
import { Helmet } from "react-helmet-async";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionDivider } from "../components/ui/SectionDivider";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { LegalSidebar } from "../components/legal/LegalSidebar";
import { LegalContent } from "../components/legal/LegalContent";
import { privacyPolicy } from "../data/legal";

export default function PrivacyPage() {
  return React.createElement(React.Fragment, null,
    React.createElement(Helmet, null,
      React.createElement("title", null, "Privacy Policy | FMUTech — FutureMinds United Tech"),
      React.createElement("meta", {
        name: "description",
        content: "Privacy Policy for FutureMinds United Tech (FMUTech). Learn how we collect, use, and protect your personal information.",
      })
    ),

    React.createElement(SectionWrapper, { background: "white", className: "pt-12 pb-8 md:pt-16 md:pb-10" },
      React.createElement(ScrollReveal, { delay: 0 },
        React.createElement("span", {
          className: "block font-body text-sm font-medium tracking-widest uppercase text-green-primary mb-4",
        }, "Legal")
      ),
      React.createElement(ScrollReveal, { delay: 100 },
        React.createElement("h1", {
          className: "font-display text-3xl md:text-4xl font-semibold text-blue-deep leading-tight max-w-2xl mb-4",
        }, "Privacy Policy")
      ),
      React.createElement(ScrollReveal, { delay: 200 },
        React.createElement("p", {
          className: "font-body text-base text-muted leading-relaxed max-w-xl",
        }, "This Privacy Policy explains how FutureMinds United Tech collects, uses, stores, and protects personal information provided by members and participants.")
      )
    ),

    React.createElement(SectionDivider, { toColor: "#F4F1EC", variant: "hill" }),

    React.createElement(SectionWrapper, { background: "parchment" },
      React.createElement("div", { className: "flex gap-12 xl:gap-16 items-start" },
        React.createElement(LegalSidebar, { sections: privacyPolicy }),
        React.createElement("div", { className: "flex-1 min-w-0" },
          React.createElement(LegalContent, { sections: privacyPolicy })
        )
      )
    )
  );
}