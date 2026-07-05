import React from "react";
import { coreTeam } from "../../data/leadership";
import { LeaderCard } from "./LeaderCard";
import { ScrollReveal } from "../ui/ScrollReveal";

export function CoreTeamGrid() {
  return React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6",
  },
    ...coreTeam.map((member, index) =>
      React.createElement(ScrollReveal, { key: member.id, delay: index * 80 },
        React.createElement(LeaderCard, { member, variant: "team" })
      )
    )
  );
}