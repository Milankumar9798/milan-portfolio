export const profile = {
  name: "Milan Kumar",
  roles: ["Software Engineer", "Java Developer", "Full-Stack Developer"],
  email: "milankumar1234@gmail.com",
  phone: "+91 9798723435",
  linkedin: "https://linkedin.com/in/milan-kumar-12198531a",
  github: "https://github.com/Milankumar9798",
  leetcode: "https://leetcode.com/",
  location: "Ghaziabad, India",
  tagline:
    "Building clean, scalable systems — one compiled thought at a time.",
  summary:
    "Computer Science undergraduate focused on full-stack development and problem solving. I care about writing code that reads clearly, ships reliably, and holds up under real usage — not just code that passes the demo.",
};

export const education = [
  {
    degree: "B.Tech in Computer Science & Information Technology",
    school: "KIET Group of Institutions, Ghaziabad",
    period: "2023 – 2027",
    detail: "CGPA: 7.4 / 10",
  },
  {
    degree: "Intermediate (12th)",
    school: "BSEB Board",
    period: "2022",
    detail: "Percentage: 70.6%",
  },
  {
    degree: "High School (10th)",
    school: "BSEB Board",
    period: "2020",
    detail: "Percentage: 73.4%",
  },
];

export type SkillCategory = {
  category: string;
  items: { name: string; level?: string }[];
};

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    items: [{ name: "Java", level: "Proficient" }, { name: "JavaScript" }],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "Backend",
    items: [{ name: "Node.js" }, { name: "REST APIs" }],
  },
  {
    category: "Database",
    items: [{ name: "MongoDB" }],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "IntelliJ IDEA" },
      { name: "AWS" },
      { name: "Excel" },
    ],
  },
  {
    category: "Core",
    items: [
      { name: "Data Structures & Algorithms" },
      { name: "Problem Solving" },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "codenest",
    title: "CodeNest Learning Platform",
    period: "November 2025 — Present",
    description:
      "A full-stack web platform for an organized programming and coding-practice environment, with a JWT-secured account system and an integrated AI study mentor.",
    features: [
      "JWT-based authentication and authorization for login/registration",
      "Course dashboard, in-browser code editor, and progress tracking",
      "RESTful APIs backed by a structured MongoDB schema",
      "AI-based study mentor using local LLM APIs for doubt-solving",
      "Accessibility and performance tuning across the app",
    ],
    stack: ["React", "Node.js", "MongoDB", "REST APIs", "JWT"],
    github: "https://github.com/Milankumar9798",
    featured: true,
  },
  {
    slug: "room-rental-finder",
    title: "Room Rental Finder",
    period: "September 2025",
    description:
      "A web application helping students locate nearby rental rooms quickly, with location-aware search and streamlined filtering.",
    features: [
      "Interactive React.js UI for room listings and availability",
      "Location-based APIs for nearby accommodation discovery",
      "Filtering and viewing tools to simplify room selection",
      "Focus on accessibility and reduced search time",
    ],
    stack: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs"],
    github: "https://github.com/Milankumar9798",
  },
  {
    slug: "splitwise-expense-manager",
    title: "Splitwise Expense Manager",
    period: "November 2025",
    description:
      "A Java application for managing and splitting shared expenses among multiple users, with automatic balance and settlement calculations.",
    features: [
      "Add expenses and track running balances per user",
      "Automatic settlement calculation logic",
      "Secure persistent storage of accounts and expense records",
    ],
    stack: ["Java", "OOP", "File Handling", "Collections Framework"],
    github: "https://github.com/Milankumar9798",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "February 2026",
  },
  {
    name: "DSA with Java",
    issuer: "Apna College",
    date: "October 2025",
  },
  {
    name: "MongoDB Developer (NoSQL)",
    issuer: "Wingspan",
    date: "October 2025",
  },
  {
    name: "Cybersecurity Foundation",
    issuer: "Palo Alto",
    date: "June 2025",
  },
  {
    name: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "June 2025",
  },
];

export const achievements = [
  {
    stat: "100+",
    label: "DSA problems solved on LeetCode",
  },
  {
    stat: "AWS",
    label: "Certified Cloud Practitioner",
  },
  {
    stat: "Java",
    label: "HackerRank Skill Certification",
  },
  {
    stat: "DSA",
    label: "HackerRank — Problem Solving",
  },
];

export const experience = {
  status: "Currently seeking Software Engineering opportunities",
  detail:
    "Open to full-stack, backend, and Java-focused SDE roles where I can contribute to production systems and keep growing as an engineer.",
};
