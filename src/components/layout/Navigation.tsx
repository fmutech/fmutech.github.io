import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { primaryNavLinks } from "../../data/navigation";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    React.createElement("header", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-space-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`,
    },
      React.createElement("div", {
        className: "max-w-6xl mx-auto px-5 h-16 md:h-20 flex items-center justify-between",
      },
        React.createElement(NavLink, { to: "/", className: "flex items-center gap-3 flex-shrink-0" },
          React.createElement("img", {
            src: "/logo.png",
            alt: "FMUTech Logo",
            className: "h-9 w-auto md:h-11",
          }),
          React.createElement("span", {
            className: "font-display font-semibold text-blue-deep text-lg md:text-xl hidden xs:block",
          }, "FMUTech")
        ),

        React.createElement("nav", {
          className: "hidden lg:flex items-center gap-8",
          "aria-label": "Primary navigation",
        },
          ...primaryNavLinks.map((link) =>
            React.createElement(NavLink, {
              key: link.id,
              to: link.path,
              className: ({ isActive }: { isActive: boolean }) =>
                `font-body text-base transition-colors duration-200 relative pb-1 ${
                  isActive
                    ? "text-green-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-primary"
                    : "text-ink hover:text-green-primary"
                }`,
            }, link.label)
          )
        ),

        React.createElement("button", {
          className: "lg:hidden p-2 rounded-lg text-ink hover:text-green-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-mid",
          onClick: () => setIsDrawerOpen(true),
          "aria-label": "Open navigation menu",
          "aria-expanded": isDrawerOpen,
        },
          React.createElement(Menu, { size: 24 })
        )
      ),

      isDrawerOpen && React.createElement("div", {
        className: "fixed inset-0 z-40 lg:hidden",
      },
        React.createElement("div", {
          className: "absolute inset-0 bg-ink/30 backdrop-blur-sm",
          onClick: () => setIsDrawerOpen(false),
          "aria-hidden": "true",
        }),

        React.createElement("div", {
          className: "absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-space-white shadow-2xl flex flex-col",
          style: {
            animation: "slideInRight 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
          },
        },
          React.createElement("div", {
            className: "flex items-center justify-between px-6 h-16 border-b border-green-light/40",
          },
            React.createElement("span", {
              className: "font-display font-semibold text-blue-deep text-lg",
            }, "FMUTech"),
            React.createElement("button", {
              className: "p-2 rounded-lg text-ink hover:text-green-primary transition-colors duration-200",
              onClick: () => setIsDrawerOpen(false),
              "aria-label": "Close navigation menu",
            },
              React.createElement(X, { size: 22 })
            )
          ),

          React.createElement("nav", {
            className: "flex flex-col px-6 py-8 gap-2",
            "aria-label": "Mobile navigation",
          },
            ...primaryNavLinks.map((link, index) =>
              React.createElement(NavLink, {
                key: link.id,
                to: link.path,
                className: ({ isActive }: { isActive: boolean }) =>
                  `font-body text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-green-primary bg-green-mist font-medium"
                      : "text-ink hover:text-green-primary hover:bg-green-mist/50"
                  }`,
                style: {
                  animation: `fadeInUp 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 60 + 100}ms both`,
                },
              }, link.label)
            )
          ),

          React.createElement("div", {
            className: "mt-auto px-6 py-8 border-t border-green-light/40",
          },
            React.createElement("a", {
              href: "https://forms.gle/yMcTk9DeCaqGZ4VQ8",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-full inline-flex items-center justify-center gap-2 bg-green-primary text-white font-body font-medium text-base rounded-lg px-7 py-3 transition-all duration-200 hover:bg-[#235c43]",
            }, "Join FMUTech")
          )
        )
      )
    )
  );
}