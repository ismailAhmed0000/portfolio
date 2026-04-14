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
