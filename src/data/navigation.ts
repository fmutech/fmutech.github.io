// src/data/navigation.ts
// Navigation structure for the entire website.
// Primary nav, footer nav, and legal links — all in one place.

export interface NavLink {
  id: string;
  label: string;
  path: string;
}

export const primaryNavLinks: NavLink[] = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About Us", path: "/about" },
  { id: "join", label: "Join Us", path: "/join" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export const footerNavLinks: NavLink[] = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About Us", path: "/about" },
  { id: "join", label: "Join Us", path: "/join" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export const legalNavLinks: NavLink[] = [
  { id: "terms", label: "Terms & Conditions", path: "/terms" },
  { id: "privacy", label: "Privacy Policy", path: "/privacy" },
];

export const footerTagline =
  "A student-led technology and innovation community empowering high school students in Chennai to learn, build, and lead.";