// src/data/leadership.ts
// Official leadership data — sourced verbatim from the Core Team Bio Data document.
// Do not rewrite, shorten, or reorder. isFounder controls the side-by-side founder layout.

export interface LeaderMember {
  id: string;
  name: string;
  role: string;
  department: string;
  about: string;
  responsibilities: string[];
  isFounder: boolean;
  order: number;
}

export const leadershipTeam: LeaderMember[] = [
  {
    id: "harshil-nellaiah-p",
    name: "Harshil Nellaiah P",
    role: "Founder & Chairperson",
    department: "Executive Leadership",
    about:
      "The Founder & Chairperson provides overall leadership, governance, and strategic direction to FutureMinds United Tech. This role ensures that the organization remains aligned with its core vision and long-term objectives.",
    responsibilities: [
      "Defining organizational vision and direction",
      "Leading high-level decision-making",
      "Ensuring governance and structural integrity",
      "Overseeing leadership coordination",
      "Representing the organization at strategic levels",
    ],
    isFounder: true,
    order: 1,
  },
  {
    id: "sriman-harshith-v",
    name: "Sriman Harshith V",
    role: "Founder & Chief Executive Officer (CEO)",
    department: "Executive Leadership",
    about:
      "The CEO is responsible for the overall execution of the community's vision and strategy. This role focuses on operational leadership, growth management, and organizational development.",
    responsibilities: [
      "Executing organizational strategy",
      "Leading leadership team coordination",
      "Driving growth and expansion initiatives",
      "Managing overall performance of the community",
      "Ensuring alignment across all departments",
    ],
    isFounder: true,
    order: 2,
  },
  {
    id: "varunika-v",
    name: "Varunika V",
    role: "Chief Operating Officer (COO)",
    department: "Operations",
    about:
      "The COO manages day-to-day operations of FutureMinds United Tech and ensures smooth functioning of all departments and activities.",
    responsibilities: [
      "Overseeing community operations",
      "Managing workflow and execution",
      "Coordinating between departments",
      "Ensuring operational efficiency",
      "Handling internal management systems",
    ],
    isFounder: false,
    order: 3,
  },
  {
    id: "karun-satyen",
    name: "Karun Satyen",
    role: "Chief Technology Officer (CTO)",
    department: "Technology",
    about:
      "The CTO leads all technical initiatives, including development, innovation, and technical education within the community.",
    responsibilities: [
      "Leading technical strategy and innovation",
      "Managing software development initiatives",
      "Guiding technical teams and projects",
      "Overseeing AI, web, and system development",
      "Ensuring technical quality and standards",
    ],
    isFounder: false,
    order: 4,
  },
  {
    id: "daksesh-balamurali",
    name: "Daksesh Balamurali",
    role: "Chief Content Officer (CCO)",
    department: "Content & Media",
    about:
      "The CCO is responsible for all educational, informational, and communication content produced by the community.",
    responsibilities: [
      "Managing content strategy and creation",
      "Overseeing educational materials",
      "Ensuring content quality and clarity",
      "Coordinating documentation efforts",
      "Developing learning resources",
    ],
    isFounder: false,
    order: 5,
  },
  {
    id: "aditya",
    name: "Aditya",
    role: "Chief Marketing Officer (CMO)",
    department: "Marketing & Outreach",
    about:
      "The CMO manages branding, outreach, awareness, and community growth through marketing strategies.",
    responsibilities: [
      "Managing branding and promotions",
      "Leading outreach campaigns",
      "Increasing community visibility",
      "Handling social media presence",
      "Driving engagement and growth strategies",
    ],
    isFounder: false,
    order: 6,
  },
  {
    id: "akilan-v",
    name: "Akilan V",
    role: "Chief of Event & Resource Management",
    department: "Events & Operations",
    about:
      "This role is responsible for planning, organizing, and executing community events and managing required resources.",
    responsibilities: [
      "Organizing workshops and hackathons",
      "Managing event logistics",
      "Coordinating resources and materials",
      "Planning schedules and programs",
      "Ensuring smooth event execution",
    ],
    isFounder: false,
    order: 7,
  },
  {
    id: "vignesh-virat-srinivas",
    name: "Vignesh Virat Srinivas",
    role: "Chief of Technical Development",
    department: "Technical Development",
    about:
      "The Chief of Technical Development focuses on building, maintaining, and improving technical projects within the community.",
    responsibilities: [
      "Leading development teams",
      "Managing software and project builds",
      "Supporting technical innovation",
      "Reviewing and improving code quality",
      "Assisting CTO in technical execution",
    ],
    isFounder: false,
    order: 8,
  },
];

// Convenience exports — used directly by FounderPair and CoreTeamGrid components
export const founders = leadershipTeam.filter((member) => member.isFounder);
export const coreTeam = leadershipTeam
  .filter((member) => !member.isFounder)
  .sort((a, b) => a.order - b.order);