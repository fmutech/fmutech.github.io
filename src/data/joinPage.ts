// src/data/joinPage.ts
// Content for the Join Us page.
// All content derived strictly from approved FMUTech community information.
// No fabricated statistics, achievements, or claims.

export interface JoinBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface JoinGain {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface JoinStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const whyJoin: JoinBenefit[] = [
  {
    id: "beginner-friendly",
    title: "Beginner Friendly",
    description:
      "No prior experience required. FMUTech is built for students at every level — from those taking their first step into technology to those ready to build and lead.",
    icon: "sprouting-leaf",
  },
  {
    id: "project-based-learning",
    title: "Learn by Building",
    description:
      "Move beyond textbooks. FMUTech emphasizes hands-on, project-based learning where you apply what you learn to create real things.",
    icon: "growing-tree",
  },
  {
    id: "collaborative-community",
    title: "Collaborative Environment",
    description:
      "Work alongside peers who support each other. FMUTech fosters a culture where collaboration comes before competition.",
    icon: "interconnected-vines",
  },
  {
    id: "leadership-opportunities",
    title: "Leadership Opportunities",
    description:
      "Take on responsibilities, guide teams, and develop communication and leadership skills that go far beyond technical knowledge.",
    icon: "strong-trunk",
  },
  {
    id: "completely-free",
    title: "Completely Free",
    description:
      "Membership in FMUTech is and will always remain free. Every student deserves access to a supportive learning community.",
    icon: "open-bloom",
  },
];

export const whatYouGain: JoinGain[] = [
  {
    id: "technical-skills",
    title: "Technical Skills",
    description:
      "Explore programming, web development, AI, robotics, cybersecurity, and more through structured workshops and collaborative projects.",
    icon: "branching-paths",
  },
  {
    id: "community",
    title: "A Supportive Community",
    description:
      "Join a network of like-minded students who learn together, build together, and grow together.",
    icon: "interconnected-vines",
  },
  {
    id: "leadership-growth",
    title: "Leadership & Soft Skills",
    description:
      "Develop communication, teamwork, critical thinking, and responsibility — skills that matter in every field.",
    icon: "strong-trunk",
  },
  {
    id: "real-experience",
    title: "Real Project Experience",
    description:
      "Participate in hackathons, innovation challenges, and collaborative builds that give you experience you can be proud of.",
    icon: "growing-tree",
  },
];

export const howItWorks: JoinStep[] = [
  {
    id: "step-1",
    number: 1,
    title: "Fill the Registration Form",
    description:
      "Complete the official FMUTech registration form. It takes just a few minutes and membership is completely free.",
  },
  {
    id: "step-2",
    number: 2,
    title: "Join the Community",
    description:
      "Once registered, you become an official member of FMUTech and gain access to community platforms, announcements, and resources.",
  },
  {
    id: "step-3",
    number: 3,
    title: "Start Learning & Building",
    description:
      "Participate in workshops, join a division, collaborate on projects, and begin your journey of learning by doing.",
  },
];