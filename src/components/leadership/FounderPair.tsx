import React from "react";
import { founders } from "../../data/leadership";
import { LeaderCard } from "./LeaderCard";
import { ScrollReveal } from "../ui/ScrollReveal";

export function FounderPair() {
  return React.createElement("div", {
    className: "grid grid-cols-2 gap-5 md:gap-8",
  },
    ...founders.map((founder, index) =>
      React.createElement(ScrollReveal, { key: founder.id, delay: index * 150 },
        React.createElement(LeaderCard, { member: founder, variant: "founder" })
      )
    )
  );
}