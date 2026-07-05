import React from "react";
import type { LegalSection, LegalBlock } from "../../data/legal";

interface LegalContentProps {
  sections: LegalSection[];
}

function renderBlock(block: LegalBlock, index: number) {
  if (block.type === "paragraph") {
    return React.createElement("p", {
      key: index,
      className: "font-body text-base text-ink leading-relaxed",
    }, block.text);
  }

  if (block.type === "list") {
    return React.createElement("ul", {
      key: index,
      className: "flex flex-col gap-2 pl-2",
    },
      ...block.items.map((item, i) =>
        React.createElement("li", {
          key: i,
          className: "flex items-start gap-3 font-body text-base text-ink leading-relaxed",
        },
          React.createElement("span", {
            className: "flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-primary mt-2.5",
          }),
          item
        )
      )
    );
  }

  if (block.type === "subheading") {
    return React.createElement("h4", {
      key: index,
      className: "font-display text-base font-semibold text-blue-deep mt-2",
    }, block.text);
  }

  if (block.type === "labelled-list") {
    return React.createElement("ul", {
      key: index,
      className: "flex flex-col gap-3 pl-2",
    },
      ...block.items.map((item, i) =>
        React.createElement("li", {
          key: i,
          className: "flex items-start gap-3 font-body text-base text-ink leading-relaxed",
        },
          React.createElement("span", {
            className: "flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-primary mt-2.5",
          }),
          React.createElement("span", {},
            React.createElement("span", {
              className: "font-medium text-blue-deep",
            }, `${item.label}: `),
            item.text
          )
        )
      )
    );
  }

  return null;
}

export function LegalContent({ sections }: LegalContentProps) {
  return React.createElement("div", { className: "flex flex-col gap-12" },
    ...sections.map((section) =>
      React.createElement("article", {
        key: section.id,
        id: section.id,
        className: "flex flex-col gap-5 scroll-mt-28",
      },
        React.createElement("div", { className: "flex items-start gap-4" },
          React.createElement("span", {
            className: "flex-shrink-0 font-body text-sm text-green-light font-medium w-7 mt-1",
          }, String(section.number).padStart(2, "0")),
          React.createElement("h3", {
            className: "font-display text-xl font-semibold text-blue-deep leading-tight",
          }, section.heading)
        ),
        React.createElement("div", { className: "flex flex-col gap-4 pl-11" },
          ...section.blocks.map((block, index) => renderBlock(block, index))
        ),
        section.id === "contact-information-terms" || section.id === "contact-information-privacy"
          ? React.createElement("div", {
              className: "ml-11 p-4 bg-green-mist rounded-lg border border-green-light/40",
            },
              React.createElement("a", {
                href: `mailto:futuremindsunited@gmail.com`,
                className: "font-body text-sm text-green-primary hover:text-blue-deep transition-colors duration-200",
              }, "futuremindsunited@gmail.com")
            )
          : null
      )
    )
  );
}