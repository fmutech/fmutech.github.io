import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const JoinPage = lazy(() => import("./pages/JoinPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

function PageLoader() {
  return React.createElement("div", {
    className: "min-h-screen flex items-center justify-center bg-space-white",
  },
    React.createElement("div", {
      className: "flex flex-col items-center gap-4",
    },
      React.createElement("img", {
        src: "/logo.png",
        alt: "FMUTech",
        className: "h-12 w-auto opacity-60",
        style: { animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
      }),
      React.createElement("p", {
        className: "font-body text-sm text-muted",
      }, "Loading...")
    )
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return React.createElement("div", {
    className: "min-h-screen flex flex-col bg-space-white",
  },
    React.createElement(ScrollToTop, null),
    React.createElement(Navigation, null),
    React.createElement("main", {
      className: "flex-1 pt-16 md:pt-20",
    },
      React.createElement(Suspense, { fallback: React.createElement(PageLoader, null) },
        React.createElement(Routes, null,
          React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }),
          React.createElement(Route, { path: "/about", element: React.createElement(AboutPage, null) }),
          React.createElement(Route, { path: "/join", element: React.createElement(JoinPage, null) }),
          React.createElement(Route, { path: "/contact", element: React.createElement(ContactPage, null) }),
          React.createElement(Route, { path: "/terms", element: React.createElement(TermsPage, null) }),
          React.createElement(Route, { path: "/privacy", element: React.createElement(PrivacyPage, null) }),
        )
      )
    ),
    React.createElement(Footer, null)
  );
}