export const stackGroups = [
  {
    title: "Languages",
    summary: "Primary languages across frontend, backend, and systems work.",
    items: ["JavaScript", "TypeScript", "Go", "Python", "PHP", "C#"],
  },
  {
    title: "Frameworks",
    summary: "Frameworks I ship production work with daily.",
    items: ["React.js", "Next.js", "Vue.js", "Laravel", "Node.js", "GoFiber"],
  },
  {
    title: "Database",
    summary: "Relational databases for structured, reliable data layers.",
    items: ["MySQL", "PostgreSQL"],
  },
] as const;

export const experienceItems = [
  {
    role: "Core Developer",
    company: "LoopCraft",
    type: "Laravel Developer",
    bullets: [
      "Built and maintained RESTful APIs using Laravel",
      "Integrated third-party APIs and external services",
      "Designed database migrations, models, and relationships",
      "Implemented backend logic for application features",
      "Debugged issues and improved system performance",
      "Used Git for version control and collaboration",
    ],
  },
  {
    role: "Administrative Officer",
    company: "National Centre for Information Technology",
    type: "Technical Support · Customer Service",
    bullets: [
      "Provided technical support as part of the customer service team at NCIT",
    ],
  },
] as const;

export const educationItems = [
  {
    degree: "Bachelor's Degree in Software Engineering",
    institution: "Mianz International College",
  },
  {
    degree: "Diploma in Software Engineering",
    institution: "Mianz International College",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Center for Higher Secondary Education",
  },
] as const;

export const introHighlights = [
  {
    label: "Degree",
    value: "BSc Software Engineering",
  },
  {
    label: "Experience",
    value: "LoopCraft · NCIT",
  },
  {
    label: "Focus",
    value: "Full stack · Laravel · React",
  },
] as const;

export const personalProjects = [
  {
    name: "Portfolio v2",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    desc: "This portfolio — scroll-driven laptop display, animated work card, and terminal-style contact.",
    status: "live",
    year: "2026",
  },
  {
    name: "GoLink",
    tech: ["Go", "GoFiber", "PostgreSQL"],
    desc: "A fast URL shortener with analytics, custom slugs, and a clean JSON API built in Go.",
    status: "personal",
    year: "2025",
  },
  {
    name: "Taskflow CLI",
    tech: ["Go", "SQLite"],
    desc: "A terminal-based task manager with priorities, tags, and due-date reminders. Zero dependencies.",
    status: "personal",
    year: "2025",
  },
  {
    name: "PricePulse",
    tech: ["Python", "PostgreSQL", "Vue.js"],
    desc: "Tracks product price history across local e-commerce sites and sends email alerts on drops.",
    status: "personal",
    year: "2024",
  },
] as const;

export const screenPages = ["Intro", "Stack", "Experience", "Projects"];

export const githubProfileUrl = "https://github.com/ismailAhmed0000";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  status: "live" | "personal" | "in progress";
  tech: readonly string[];
  summary: string;
  highlights: readonly string[];
  accent: string;
  // Screenshot in /public; the preview tab falls back to a mock when unset.
  image?: string;
  links: readonly ProjectLink[];
};

// Projects shown as tabs in the laptop browser. Add a new entry to add a tab.
export const projects: readonly Project[] = [
  {
    slug: "statepharma",
    name: "StatePharma",
    year: "2026",
    status: "live",
    tech: ["React", "Vite", "Laravel"],
    summary:
      "The public website of the State Pharmaceutical & Medical Supply Corporation of the Maldives — working towards equitable, uninterrupted access to essential medicine on every island. I also worked on its online prescription portal and StatePharma's internal ERP.",
    highlights: [
      "React + Vite frontend backed by a Laravel API",
      "Work on StatePharma's internal ERP system",
      "Worked on the online prescription portal, where citizens submit prescriptions for collection or delivery",
      "News updates and procurement proposals",
      "Adverse medicine reaction reporting via QR code",
    ],
    accent: "#34b37b",
    links: [
      { label: "Live", href: "https://statepharma.mv" },
      { label: "Portal", href: "https://portal.statepharma.mv" },
    ],
  },
  {
    slug: "foodies",
    name: "Foodies",
    year: "2026",
    status: "live",
    tech: ["Laravel", "Next.js", "React"],
    summary:
      "A food delivery platform for the greater Malé region, connecting customers with over 100 restaurants, bakeries and home cooks. Built at Loopcraft, where I worked on it as a backend developer.",
    highlights: [
      "Laravel backend APIs as part of Loopcraft's core team",
      "Integrated third-party APIs and external services",
      "Ordering across 100+ vendors in a single app",
      "Loyalty points and AI-powered recommendations",
      "One-tap checkout with the Jeebu wallet",
    ],
    accent: "#f97316",
    links: [{ label: "Live", href: "https://foodies.mv" }],
  },
  {
    slug: "gradle",
    name: "Gradle",
    year: "2026",
    status: "personal",
    tech: [
      "Go",
      "Fiber",
      "PostgreSQL",
      "Redis",
      "Python",
      "React",
      "TypeScript",
    ],
    summary:
      "A full-stack homework-digitization platform that extracts handwritten answers from scanned worksheets and composites them cleanly onto the original assignment, with optional Google Classroom integration.",
    highlights: [
      "Go (Fiber) REST API with JWT auth for teachers and Google OAuth for students",
      "Redis job queue feeding a Python worker for OpenCV ink extraction and PDF compositing",
      "React teacher dashboard with TanStack Router/Query and a typed OpenAPI client",
      "Google Classroom import flow for courses and coursework",
      "S3/MinIO file storage with presigned URLs, deployed on Railway",
    ],
    accent: "#7dd97d",
    links: [
      { label: "GitHub", href: "https://github.com/ismailAhmed0000/Gradle" },
    ],
  },
  {
    slug: "splitbuddy",
    name: "SplitBuddy",
    year: "2026",
    status: "live",
    tech: ["Laravel", "MySQL", "React 19", "TypeScript", "Tailwind CSS"],
    summary:
      "A bill-splitting app that uses OCR and AI to extract itemized data from receipts, lets users assign items to group members, and calculates proportional splits including tax, discounts and service charges.",
    highlights: [
      "Laravel REST API integrated with a vision-based AI/OCR receipt pipeline",
      "Equal, percentage and exact split logic with proportional tax and discounts",
      "React 19 web client with TanStack Router/Query and Tailwind CSS v4",
      "Buddy add/scan flow with QR codes",
      "Hosted on Railway with S3-compatible storage for receipts",
    ],
    accent: "#00acc1",
    links: [
      {
        label: "Live",
        href: "https://split-buddy-production-831c.up.railway.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/ismailAhmed0000/SplitBuddy",
      },
    ],
  },
];

export type MobileApp = {
  slug: string;
  name: string;
  initials: string;
  accent: string;
  platforms: readonly string[];
  tech: readonly string[];
  summary: string;
  highlights: readonly string[];
  // Phone screenshot in /public; the preview tab falls back to a mock when unset.
  image?: string;
  links: readonly ProjectLink[];
};

// Apps shown as icons on the phone's home screen. Add an entry to add an app.
export const mobileApps: readonly MobileApp[] = [
  {
    slug: "gradle",
    name: "Gradle",
    initials: "Gr",
    accent: "#7dd97d",
    platforms: ["iOS", "Android"],
    tech: ["React Native", "TypeScript", "NativeWind"],
    summary:
      "The student app for the Gradle homework platform: view assignments, capture worksheets with the camera, and see graded, composited PDF results.",
    highlights: [
      "Camera-based worksheet capture and upload",
      "In-app viewing of graded, composited PDFs",
      "Google sign-in via deep link, with no password step",
      "React Navigation and NativeWind styling",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ismailAhmed0000/Gradle" },
    ],
  },
  {
    slug: "splitbuddy",
    name: "SplitBuddy",
    initials: "SB",
    accent: "#00acc1",
    platforms: ["iOS", "Android"],
    tech: ["React Native", "Redux Toolkit", "Firebase", "NativeWind"],
    summary:
      "Snap a receipt, let AI pull out the items, assign them to friends, and split the bill — tax, discounts and service charges included.",
    highlights: [
      "Camera receipt capture with an async AI extraction flow",
      "Push notifications with Firebase Cloud Messaging and Notifee",
      "Redux Toolkit + RTK Query for state and data",
      "Standalone Android release builds, tested with Jest",
    ],
    links: [
      {
        label: "Try the web app",
        href: "https://split-buddy-production-831c.up.railway.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/ismailAhmed0000/SplitBuddy",
      },
    ],
  },
  {
    slug: "byte-club",
    name: "Byte Club",
    initials: "BC",
    accent: "#f78c6c",
    platforms: ["iOS", "Android"],
    tech: ["React Native", "Go", "Fiber", "PostgreSQL"],
    summary:
      "A cookbook app that imports recipes straight from TikTok and Instagram reels, lets you review what was extracted, and saves it to your collections.",
    highlights: [
      "Recipe import from social video links",
      "Preview-and-edit before saving",
      "Personalized home feed from Go services",
      "Saved recipes and collections",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ismailAhmed0000/byte-clubs",
      },
    ],
  },
];

export const terminalContacts = [
  {
    command: "email",
    label: "Email",
    value: "ismaeeeelahmed20@gmail.com",
    href: "mailto:ismaeeeelahmed20@gmail.com",
  },
  {
    command: "github",
    label: "GitHub",
    value: "github.com/ismailAhmed0000",
    href: "https://github.com/ismailAhmed0000",
  },
  {
    command: "phone",
    label: "Phone",
    value: "9135668",
    href: "tel:9135668",
  },
] as const;
