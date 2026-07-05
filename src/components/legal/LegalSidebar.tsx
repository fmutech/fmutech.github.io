import React from "react";
import type { LegalSection } from "../../data/legal";

interface LegalSidebarProps {
  sections: LegalSection[];
}

export function LegalSidebar({ sections }: LegalSidebarProps) {
  return React.createElement("nav", {
    className: "hidden lg:block sticky top-28 self-start w-56 flex-shrink-0",
    "aria-label": "Document navigation",
  },
    React.createElement("span", {
      className: "block font-body text-xs font-medium tracking-widest uppercase text-muted mb-4",
    }, "Contents"),
    React.createElement("ul", { className: "flex flex-col gap-1" },
      ...sections.map((section) =>
        React.createElement("li", { key: section.id },
          React.createElement("a", {
            href: `#${section.id}`,
            className: "flex items-start gap-2 font-body text-sm text-muted hover:text-green-primary transition-colors duration-200 py-1 group",
          },
            React.createElement("span", {
              className: "flex-shrink-0 font-body text-xs text-green-light group-hover:text-green-primary transition-colors duration-200 mt-0.5 w-5",
            }, String(section.number).padStart(2, "0")),
            React.createElement("span", { className: "leading-snug" }, section.heading)
          )
        )
      )
    )
  );
}