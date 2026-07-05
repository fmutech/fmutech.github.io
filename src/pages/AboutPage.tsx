import React from "react";
import { Helmet } from "react-helmet-async";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SectionDivider } from "../components/ui/SectionDivider";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FounderPair } from "../components/leadership/FounderPair";
import { CoreTeamGrid } from "../components/leadership/CoreTeamGrid";
import {
  vision,
  mission,
  coreValues,
  communityDivisions,
  foundingPrinciple,
  guidingPhilosophy,
} from "../data/community";

export default function AboutPage() {
  return React.createElement(React.Fragment, null,
    React.createElement(Helmet, null,
      React.createElement("title", null, "About Us | FMUTech — FutureMinds United Tech"),
      React.createElement("meta", {
        name: "description",
        content: "Learn about FutureMinds United Tech — our story, vision, mission, core values, community structure, and the leadership team behind FMUTech.",
      })
    ),

    React.createElement(SectionWrapper, { background: "white", className: "pt-12 pb-8 md:pt-16 md:pb-10" },
      React.createElement(ScrollReveal, { delay: 0 },
        React.createElement("span", {
          className: "block font-body text-sm font-medium tracking-widest uppercase text-green-primary mb-4",
        }, "About FMUTech")
      ),
      React.createElement(ScrollReveal, { delay: 100 },
        React.createElement("h1", {
          className: "font-display text-3xl md:text-display font-semibold text-blue-deep leading-tight max-w-2xl",
        }, "Built by students, for students.")
      )
    ),

    React.createElement(SectionDivider, { toColor: "#F4F1EC", variant: "hill" }),

    React.createElement(SectionWrapper, { background: "parchment" },
      React.createElement("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start",
      },
        React.createElement("div", {},
          React.createElement(SectionHeading, {
            eyebrow: "Our Story",
            heading: "Why FMUTech exists.",
          }),
          React.createElement(ScrollReveal, { delay: 200 },
            React.createElement("p", {
              className: "font-body text-base text-ink leading-relaxed mb-6",
            }, "FMUTech was founded to close a gap that most technology communities overlook — high school students and beginners are rarely given structured, supportive environments to learn and grow in technology.")
          ),
          React.createElement(ScrollReveal, { delay: 280 },
            React.createElement("p", {
              className: "font-body text-base text-ink leading-relaxed mb-8",
            }, "Most tech communities cater to university students or working professionals. FMUTech exists specifically for those taking their very first steps — creating a space where curiosity is welcomed, mistakes are learning opportunities, and every student belongs.")
          ),
          React.createElement(ScrollReveal, { delay: 360 },
            React.createElement("blockquote", {
              className: "border-l-2 border-green-primary pl-6 py-2",
            },
              React.createElement("p", {
                className: "font-display text-lg italic text-blue-deep leading-relaxed",
              }, `"${foundingPrinciple}"`)
            )
          )
        ),
        React.createElement("div", {},
          React.createElement(SectionHeading, {
            eyebrow: "Our Philosophy",
            heading: "How we learn.",
          }),
          React.createElement(ScrollReveal, { delay: 200 },
            React.createElement("p", {
              className: "font-display text-xl italic text-green-primary mb-8 leading-relaxed",
            }, `"${guidingPhilosophy}"`)
          ),
          React.createElement(ScrollReveal, { delay: 300 },
            React.createElement("div", { className: "flex flex-col gap-3" },
              React.createElement("span", {
                className: "font-body text-xs font-medium tracking-widest uppercase text-muted mb-2",
              }, "The Learning Cycle"),
              ...["Learn", "Practice", "Build", "Collaborate", "Improve"].map((step, index) =>
                React.createElement("div", {
                  key: step,
                  className: "flex items-center gap-4",
                },
                  React.createElement("div", {
                    className: "flex-shrink-0 w-7 h-7 rounded-full bg-green-primary flex items-center justify-center font-body text-xs font-medium text-white",
                  }, String(index + 1)),
                  React.createElement("span", {
                    className: "font-body text-base text-ink",
                  }, step),
                  index < 4
                    ? React.createElement("div", {
                        className: "flex-1 h-px bg-green-light",
                      })
                    : null
                )
              )
            )
          )
        )
      )
    ),

    React.createElement(SectionDivider, { toColor: "#EAF5EE", variant: "wave" }),

    React.createElement(SectionWrapper, { background: "green-mist" },
      React.createElement(SectionHeading, {
        eyebrow: "Vision & Mission",
        heading: "What we are working toward.",
        align: "center",
      }),
      React.createElement(ScrollReveal, { delay: 100 },
        React.createElement("div", {
          className: "max-w-3xl mx-auto text-center mb-14",
        },
          React.createElement("p", {
            className: "font-display text-xl md:text-2xl text-blue-deep leading-relaxed italic",
          }, `"${vision}"`)
        )
      ),
      React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto",
      },
        ...mission.map((item, index) =>
          React.createElement(ScrollReveal, { key: index, delay: index * 60 },
            React.createElement("div", {
              className: "flex items-start gap-4 p-5 bg-space-white rounded-xl border border-green-light/40",
            },
              React.createElement("div", {
                className: "flex-shrink-0 w-6 h-6 rounded-full bg-green-primary flex items-center justify-center font-body text-xs font-medium text-white mt-0.5",
              }, String(index + 1)),
              React.createElement("p", {
                className: "font-body text-sm text-ink leading-relaxed",
              }, item)
            )
          )
        )
      )
    ),

    React.createElement(SectionDivider, { toColor: "#FAFAFA", variant: "hill" }),

    React.createElement(SectionWrapper, { background: "white" },
      React.createElement(SectionHeading, {
        eyebrow: "Core Values",
        heading: "What guides everything we do.",
        align: "center",
      }),
      React.createElement("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
      },
        ...coreValues.map((value, index) =>
          React.createElement(ScrollReveal, { key: value.id, delay: index * 80 },
            React.createElement("div", {
              className: "flex flex-col gap-3 p-6 rounded-xl border border-green-light/40 bg-space-white hover:border-green-primary/30 hover:shadow-sm transition-all duration-300",
            },
              React.createElement("div", {
                className: "w-8 h-0.5 bg-green-primary rounded-full",
              }),
              React.createElement("h3", {
                className: "font-display text-lg font-semibold text-blue-deep",
              }, value.name),
              React.createElement("p", {
                className: "font-body text-sm text-muted leading-relaxed",
              }, value.description)
            )
          )
        )
      )
    ),

    React.createElement(SectionDivider, { toColor: "#F4F1EC", variant: "grass" }),

    React.createElement(SectionWrapper, { background: "parchment" },
      React.createElement(SectionHeading, {
        eyebrow: "Community Structure",
        heading: "Five divisions. One community.",
        body: "FMUTech is organized into five focused divisions, each playing a distinct role in building and sustaining the community.",
      }),
      React.createElement("div", { className: "flex flex-col gap-4" },
        ...communityDivisions.map((division, index) =>
          React.createElement(ScrollReveal, { key: division.id, delay: index * 80 },
            React.createElement("div", {
              className: "flex items-start gap-5 p-6 bg-space-white rounded-xl border border-green-light/40 hover:border-green-primary/30 hover:shadow-sm transition-all duration-300",
            },
              React.createElement("div", {
                className: "flex-shrink-0 w-8 h-8 rounded-full bg-green-mist border border-green-light flex items-center justify-center font-body text-sm font-medium text-green-primary",
              }, String(index + 1)),
              React.createElement("div", {},
                React.createElement("h3", {
                  className: "font-display text-base font-semibold text-blue-deep mb-1",
                }, division.name),
                React.createElement("p", {
                  className: "font-body text-sm text-muted leading-relaxed",
                }, division.role)
              )
            )
          )
        )
      )
    ),

    React.createElement(SectionDivider, { toColor: "#FAFAFA", variant: "wave" }),

    React.createElement(SectionWrapper, { background: "white" },
      React.createElement(SectionHeading, {
        eyebrow: "Leadership",
        heading: "The founders of FMUTech.",
        body: "FMUTech was founded by two students who believed technology education should be accessible to every high school student.",
      }),
      React.createElement(FounderPair, null)
    ),

    React.createElement(SectionDivider, { toColor: "#EAF5EE", variant: "hill" }),

    React.createElement(SectionWrapper, { background: "green-mist" },
      React.createElement(SectionHeading, {
        eyebrow: "Core Team",
        heading: "The team that makes it happen.",
        body: "Six dedicated chiefs leading the divisions that power FMUTech every day.",
      }),
      React.createElement(CoreTeamGrid, null)
    ),

    React.createElement(SectionDivider, { toColor: "#FAFAFA", variant: "wave" }),

    React.createElement(SectionWrapper, { background: "white" },
      React.createElement("div", { className: "text-center max-w-xl mx-auto" },
        React.createElement(ScrollReveal, { delay: 0 },
          React.createElement("h2", {
            className: "font-display text-2xl md:text-3xl font-semibold text-blue-deep mb-4",
          }, "Ready to be part of this?")
        ),
        React.createElement(ScrollReveal, { delay: 120 },
          React.createElement("p", {
            className: "font-body text-md text-muted mb-8",
          }, "Membership is free and open to all high school students.")
        ),
        React.createElement(ScrollReveal, { delay: 240 },
          React.createElement("a", {
            href: "/join",
            className: "inline-flex items-center justify-center gap-2 bg-green-primary text-white font-body font-medium text-base rounded-lg px-8 py-3.5 transition-all duration-200 hover:bg-[#235c43] hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]",
          }, "Join FMUTech →")
        )
      )
    )
  );
}