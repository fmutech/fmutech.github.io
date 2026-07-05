import React from "react";
import { Helmet } from "react-helmet-async";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SectionDivider } from "../components/ui/SectionDivider";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { communityInfo } from "../data/community";
import { whyJoin, whatYouGain, howItWorks } from "../data/joinPage";
import { joinPageTestimonials } from "../data/testimonials";

export default function JoinPage() {
  return React.createElement(React.Fragment, null,
    React.createElement(Helmet, null,
      React.createElement("title", null, "Join Us | FMUTech — FutureMinds United Tech"),
      React.createElement("meta", {
        name: "description",
        content: "Join FMUTech for free. A student-led technology and innovation community in Chennai open to all high school students. No experience required.",
      })
    ),

    React.createElement(SectionWrapper, { background: "white", className: "pt-12 pb-8 md:pt-16 md:pb-10" },
      React.createElement(ScrollReveal, { delay: 0 },
        React.createElement("span", {
          className: "block font-body text-sm font-medium tracking-widest uppercase text-green-primary mb-4",
        }, "Membership is Free")
      ),
      React.createElement(ScrollReveal, { delay: 100 },
        React.createElement("h1", {
          className: "font-display text-3xl md:text-display font-semibold text-blue-deep leading-tight max-w-2xl mb-4",
        }, "Join FMUTech.")
      ),
      React.createElement(ScrollReveal, { delay: 200 },
        React.createElement("p", {
          className: "font-body text-md text-muted leading-relaxed max-w-xl mb-8",
        }, "Open to all high school students. No prior experience required. Just curiosity and a willingness to learn.")
      ),
      React.createElement(ScrollReveal, { delay: 300 },
        React.createElement("a", {
          href: communityInfo.registrationFormUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center justify-center gap-2 bg-green-primary text-white font-body font-medium text-base rounded-lg px-8 py-3.5 transition-all duration-200 hover:bg-[#235c43] hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]",
        }, "Open Registration Form →")
      )
    ),

    React.createElement(SectionDivider, { toColor: "#F4F1EC", variant: "hill" }),

    React.createElement(SectionWrapper, { background: "parchment" },
      React.createElement(SectionHeading, {
        eyebrow: "Why Join",
        heading: "What makes FMUTech different.",
        body: "FMUTech is not just another tech group. It is a structured, welcoming community built specifically for students who are just beginning their journey.",
      }),
      React.createElement("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
      },
        ...whyJoin.map((benefit, index) =>
          React.createElement(ScrollReveal, { key: benefit.id, delay: index * 80 },
            React.createElement("div", {
              className: "flex flex-col gap-4 p-6 bg-space-white rounded-xl border border-green-light/40 hover:border-green-primary/30 hover:shadow-sm transition-all duration-300",
            },
              React.createElement("div", { className: "w-8 h-0.5 bg-green-primary rounded-full" }),
              React.createElement("h3", {
                className: "font-display text-lg font-semibold text-blue-deep",
              }, benefit.title),
              React.createElement("p", {
                className: "font-body text-sm text-muted leading-relaxed",
              }, benefit.description)
            )
          )
        )
      )
    ),

    React.createElement(SectionDivider, { toColor: "#EAF5EE", variant: "wave" }),

    React.createElement(SectionWrapper, { background: "green-mist" },
      React.createElement(SectionHeading, {
        eyebrow: "What You Gain",
        heading: "Skills, community, and real experience.",
        body: "Being part of FMUTech gives you more than technical knowledge — it gives you a foundation for growth in every direction.",
      }),
      React.createElement("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
      },
        ...whatYouGain.map((gain, index) =>
          React.createElement(ScrollReveal, { key: gain.id, delay: index * 100 },
            React.createElement("div", {
              className: "flex items-start gap-5 p-6 bg-space-white rounded-xl border border-green-light/40 hover:border-green-primary/30 hover:shadow-sm transition-all duration-300",
            },
              React.createElement("div", {
                className: "flex-shrink-0 w-1 h-12 bg-green-primary rounded-full",
              }),
              React.createElement("div", {},
                React.createElement("h3", {
                  className: "font-display text-lg font-semibold text-blue-deep mb-2",
                }, gain.title),
                React.createElement("p", {
                  className: "font-body text-sm text-muted leading-relaxed",
                }, gain.description)
              )
            )
          )
        )
      )
    ),

    React.createElement(SectionDivider, { toColor: "#FAFAFA", variant: "hill" }),

    React.createElement(SectionWrapper, { background: "white" },
      React.createElement(SectionHeading, {
        eyebrow: "How It Works",
        heading: "Three simple steps.",
        body: "Joining FMUTech takes just a few minutes. Here is how it works.",
        align: "center",
      }),
      React.createElement("div", {
        className: "flex flex-col md:flex-row gap-6 max-w-4xl mx-auto",
      },
        ...howItWorks.map((step, index) =>
          React.createElement(ScrollReveal, { key: step.id, delay: index * 120 },
            React.createElement("div", {
              className: "flex-1 flex flex-col gap-4 p-6 rounded-xl border border-green-light/40 bg-space-white relative",
            },
              React.createElement("div", {
                className: "w-10 h-10 rounded-full bg-green-primary flex items-center justify-center font-display font-semibold text-white text-lg flex-shrink-0",
              }, String(step.number)),
              React.createElement("h3", {
                className: "font-display text-lg font-semibold text-blue-deep",
              }, step.title),
              React.createElement("p", {
                className: "font-body text-sm text-muted leading-relaxed",
              }, step.description),
              index < howItWorks.length - 1
                ? React.createElement("div", {
                    className: "hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-green-light z-10",
                  })
                : null
            )
          )
        )
      )
    ),

    React.createElement(SectionDivider, { toColor: "#F4F1EC", variant: "wave" }),

    React.createElement("div", { className: "bg-parchment" },
      React.createElement(SectionWrapper, { background: "parchment" },
        React.createElement(SectionHeading, {
          eyebrow: "From Our Members",
          heading: "Hear from those who joined.",
          align: "center",
        }),
        React.createElement("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-5",
        },
          ...joinPageTestimonials.map((t, index) =>
            React.createElement(ScrollReveal, { key: t.id, delay: index * 100 },
              React.createElement("article", {
                className: "flex flex-col gap-4 p-6 bg-space-white rounded-2xl border border-green-light/40",
              },
                React.createElement("div", { className: "w-8 h-0.5 bg-green-primary rounded-full" }),
                React.createElement("blockquote", { className: "flex flex-col gap-3 flex-1" },
                  React.createElement("p", {
                    className: "font-display text-base font-normal italic text-blue-deep leading-snug",
                  }, `"${t.headline}"`),
                  React.createElement("p", {
                    className: "font-body text-sm text-muted leading-relaxed",
                  }, t.body)
                ),
                React.createElement("footer", {
                  className: "font-body text-xs text-green-primary font-medium tracking-wide uppercase pt-2 border-t border-green-light/40",
                }, `— ${t.attribution}`)
              )
            )
          )
        )
      )
    ),

    React.createElement(SectionDivider, { toColor: "#FAFAFA", variant: "hill" }),

    React.createElement(SectionWrapper, { background: "white" },
      React.createElement("div", { className: "text-center max-w-xl mx-auto" },
        React.createElement(ScrollReveal, { delay: 0 },
          React.createElement("span", {
            className: "block font-body text-sm font-medium tracking-widest uppercase text-green-primary mb-4",
          }, "Ready to Join?")
        ),
        React.createElement(ScrollReveal, { delay: 120 },
          React.createElement("h2", {
            className: "font-display text-2xl md:text-3xl font-semibold text-blue-deep leading-tight mb-4",
          }, "Membership is completely free.")
        ),
        React.createElement(ScrollReveal, { delay: 240 },
          React.createElement("p", {
            className: "font-body text-md text-muted leading-relaxed mb-8",
          }, "Fill the registration form and become an official member of FutureMinds United Tech today.")
        ),
        React.createElement(ScrollReveal, { delay: 360 },
          React.createElement("a", {
            href: communityInfo.registrationFormUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center gap-2 bg-green-primary text-white font-body font-medium text-base rounded-lg px-8 py-3.5 transition-all duration-200 hover:bg-[#235c43] hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]",
          }, "Open Registration Form →")
        )
      )
    )
  );
}