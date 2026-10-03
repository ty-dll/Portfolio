export const profile = {
  name: "Aditya Garimella",
  role: "Software Development Engineer",
  location: "Hamamatsu, Japan",
  relocation: "Open to relocation to Tokyo",
  email: "g.aditya2307@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resume: "/resume.pdf",
  roles: ["React interfaces", "Electron apps", "TypeScript monorepos", "AI-powered tools"],
  summary:
    "I'm a software engineer in Japan building a customer-facing Electron desktop app with React, TypeScript and Fluent UI. I enjoy the unglamorous work that makes products feel fast and solid: bundler migrations, component systems, tests and dependency hygiene. Lately I've been branching out into AI and Python, building LLM-powered applications.",
};

export const stats = [
  { value: 100, suffix: "+", label: "Bugs fixed" },
  { value: 50, suffix: "+", label: "Features shipped" },
  { value: 1000, suffix: "+", label: "GitHub contributions" },
  { value: 0.7, suffix: "MB", label: "Bundle size cut", decimals: 1 },
];

export const facts = [
  { label: "Based in", value: "Hamamatsu, JP" },
  { label: "Languages", value: "English · 日本語 (N2)" },
  { label: "Degree", value: "B.Tech CSE · 9.28 GPA" },
  { label: "Visa", value: "Engineer / Specialist in Humanities" },
];

export type Job = {
  role: string;
  company: string;
  via?: string;
  period: string;
  location: string;
  blurb: string;
  context?: string;
  highlights: { text: string; metric?: string }[];
  tags: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Elysium Co., Ltd.",
    via: "via Human Resocia Co., Ltd.",
    period: "Apr 2025 — Present",
    location: "Hamamatsu",
    blurb:
      "Elysium makes 3D data interoperability software for the manufacturing industry.",
    context:
      "I'm one of 3 TypeScript engineers on an 11-person team and work in both Japanese and English.",
    highlights: [
      { metric: "100+ / 50+", text: "Fixed bugs and shipped features for a customer-facing web and desktop app built with React, TypeScript and Fluent UI." },
      { metric: "−0.7MB", text: "Proposed and led the migration from Webpack to Vite for the Electron app and a companion website in a monorepo." },
      { metric: "50+", text: "Wrote Storybook documentation for UI components, which made the design more consistent and onboarding faster." },
      { metric: "10+", text: "Wrote Jest unit tests for components across the application." },
      { text: "Managed package versions and dependencies across the monorepo to keep them consistent and compatible." },
      { text: "Used AI coding tools (GitHub Copilot, Claude) to deliver features and debug faster." },
      { metric: "1,000+", text: "GitHub contributions and 10+ code reviews, plus daily standups and technical discussions." },
    ],
    tags: ["React", "TypeScript", "Fluent UI", "Electron", "Vite", "Storybook", "Jest", "Monorepo"],
  },
  {
    role: "Trainee Engineer",
    company: "Human Resocia Co., Ltd.",
    period: "Feb 2025 — Apr 2025",
    location: "Tokyo",
    blurb:
      "Completed an intensive Japanese language training and Japanese business manners program before being dispatched as an engineer.",
    highlights: [],
    tags: ["Japanese", "Business etiquette"],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  { title: "Frameworks & Libraries", items: ["React", "Next.js", "Fluent UI"] },
  { title: "Tooling", items: ["Electron", "Vite", "Webpack", "Jest", "Storybook", "Git", "GitHub", "gRPC / Protobuf"] },
  { title: "Cloud & Data", items: ["AWS EC2", "AWS S3", "AWS Lambda", "PostgreSQL"] },
  { title: "AI", items: ["LLM apps with Python", "Prompt engineering", "AI-assisted coding"] },
  { title: "Engineering", items: ["Monorepo management", "Package versioning", "REST APIs", "SDLC", "DSA", "OOP"] },
];

export const marquee = [
  "TypeScript", "React", "Electron", "Vite", "Fluent UI", "Python", "AWS", "Next.js",
  "Storybook", "Jest", "Go", "PostgreSQL", "gRPC", "LLMs",
];

export const certifications = [
  { name: "AI Engineer for Developers Associate", issuer: "DataCamp", year: "2026", icon: "ai" },
  { name: "JLPT N2", issuer: "Japanese Language Proficiency Test", year: "2025", icon: "jp" },
  { name: "Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023", icon: "cloud" },
] as const;

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "VIT University, Vellore",
  location: "Vellore, India",
  period: "Jul 2020 — Aug 2024",
  gpa: "9.28 / 10.0",
};
