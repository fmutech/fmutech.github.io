import React from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSnapshot } from "../components/sections/AboutSnapshot";
import { FocusAreasSection } from "../components/sections/FocusAreasSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { JoinCTASection } from "../components/sections/JoinCTASection";

export default function HomePage() {
  return React.createElement(React.Fragment, null,
    React.createElement(Helmet, null,
      React.createElement("title", null, "FutureMinds United Tech | FMUTech — Student-Led Tech Community, Chennai"),
      React.createElement("meta", {
        name: "description",
        content: "FMUTech is a free, student-led technology and innovation community in Chennai empowering high school students through programming, AI, robotics, and project-based learning.",
      })
    ),
    React.createElement(HeroSection, null),
    React.createElement(AboutSnapshot, null),
    React.createElement(FocusAreasSection, null),
    React.createElement(TestimonialsSection, null),
    React.createElement(JoinCTASection, null)
  );
}