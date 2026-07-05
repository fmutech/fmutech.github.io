import React from "react";
import type { LeaderMember } from "../../data/leadership";

interface LeaderCardProps {
  member: LeaderMember;
  variant?: "founder" | "team";
}

export function LeaderCard({ member, variant = "team" }: LeaderCardProps) {
  const isFounder = variant === "founder";

  return React.createElement("div", {
    className: `flex flex-col gap-5 p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
      isFounder
        ? "bg-green-primary/5 border-green-primary/20 hover:border-green-primary/40"
        : "bg-space-white border-green-light/40 hover:border-green-primary/30"
    }`,
  },
    React.createElement("div", { className: "flex items-start gap-4" },
      React.createElement("div", { className: "relative flex-shrink-0" },
        React.createElement("div", {
          className: `rounded-full flex items-center justify-center font-display font-semibold text-white ${
            isFounder
              ? "w-16 h-16 text-xl bg-green-primary"
              : "w-12 h-12 text-base bg-blue-mid"
          }`,
        }, member.name.charAt(0)),
        isFounder
          ? React.createElement("div", {
              className: "absolute -inset-1 rounded-full border border-green-light opacity-60",
            })
          : null
      ),
      React.createElement("div", { className: "flex flex-col gap-1" },
        React.createElement("h3", {
          className: `font-display font-semibold text-blue-deep leading-tight ${
            isFounder ? "text-lg md:text-xl" : "text-base md:text-lg"
          }`,
        }, member.name),
        React.createElement("span", {
          className: "font-body text-sm text-green-primary font-medium",
        }, member.role),
        React.createElement("span", {
          className: "font-body text-xs text-muted",
        }, member.department)
      )
    ),
    React.createElement("p", {
      className: "font-body text-sm text-ink leading-relaxed",
    }, member.about),
    React.createElement("div", { className: "flex flex-col gap-2" },
      React.createElement("span", {
        className: "font-body text-xs font-medium tracking-widest uppercase text-muted",
      }, "Responsibilities"),
      React.createElement("ul", { className: "flex flex-col gap-1.5" },
        ...member.responsibilities.map((r, i) =>
          React.createElement("li", {
            key: i,
            className: "flex items-start gap-2 font-body text-sm text-ink",
          },
            React.createElement("span", {
              className: "flex-shrink-0 w-1 h-1 rounded-full bg-green-primary mt-2",
            }),
            r
          )
        )
      )
    )
  );
}