import React from "react";
import { Helmet } from "react-helmet-async";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionDivider } from "../components/ui/SectionDivider";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { LegalSidebar } from "../components/legal/LegalSidebar";
import { LegalContent } from "../components/legal/LegalContent";
import { termsAndConditions } from "../data/legal";

export default function TermsPage() {
  return React.createElement(React.Fragment, null,
    React.createElement(Helmet, null,
      React.createElement("title", null, "Terms & Conditions | FMUTech — FutureMinds United Tech"),
      React.createElement("meta", {
        name: "description",
        content: "Terms and Conditions for FutureMinds United Tech (FMUTech). Read our membership terms, code of conduct, and community guidelines.",
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
        }, "Terms & Conditions")
      ),
      React.createElement(ScrollReveal, { delay: 200 },
        React.createElement("p", {
          className: "font-body text-base text-muted leading-relaxed max-w-xl",
        }, "Please read these terms carefully. By joining or participating in FutureMinds United Tech, you agree to the following terms and conditions.")
      )
    ),

    React.createElement(SectionDivider, { toColor: "#F4F1EC", variant: "hill" }),

    React.createElement(SectionWrapper, { background: "parchment" },
      React.createElement("div", { className: "flex gap-12 xl:gap-16 items-start" },
        React.createElement(LegalSidebar, { sections: termsAndConditions }),
        React.createElement("div", { className: "flex-1 min-w-0" },
          React.createElement(LegalContent, { sections: termsAndConditions })
        )
      )
    )
  );
}