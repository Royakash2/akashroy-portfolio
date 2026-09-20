export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
  logo?: string;
  highlights?: string[];
  technologies?: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  highlights?: string[];
  logo?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export type Quote = {
  text: string;
  author: string;
};

export const site = {
  name: "Akash Roy",
  firstName: "Akash",
  url: "https://akashsharma.dev",
  quote: {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  profileImages: [
    "/eren-jaeger.jpg",
    "/NEYMAR-JR.jfif",
    "/neymar-jr-t.jfif",
    "/Attack-on-Titan.jfif",
    "/Eren-yeager-freedom.jfif",
  ],
  bannerImage: "/mern-cover.jfif",
  initials: "AR",
  role: "Full Stack Developer",
  location: "Sunamganj, Sylhet, Bangladesh",
  timezone: "Asia/Dhaka",
  email: "akash.sharma@email.com",
  greeting: "Hey, I'm Akash",
  tagline:
    "I build modern, performant web applications with React, Next.js, and the MERN stack.",
  about: [
    "Hey, I'm Akash, a MERN-focused full-stack developer who loves crafting clean, modern applications where design, performance, and tiny details seamlessly come together, creating products that are both practical and visually satisfying.",
    "I spend most of my time in the terminal, the browser, or whiteboarding solutions. I lean full-stack with a strong focus on frontend architecture and craft—not because I don't love backend, but because I enjoy making sure intuitive, polished user experiences actually hold up seamlessly under the hood.",
    "I don't ship junk or cut corners. High standards and clean architecture aren't optional—they're the foundation. And I do my finest work when driven by genuine curiosity.",
  ],
  tldr: [
    "Building products.",
    "Learning technologies.",
    "Shipping consistently.",
    "Obsessed with clean code.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "System Design • DSA • DevOps",
    nowBuilding: "Portfolio v2",
    nowListening: "lo-fi beats",
  },
  now: [
    {
      title: "BUILDING",
      icon: "Terminal",
      text: "Expanding my portfolio, doing freelance client work, and working on side projects focusing on modern web technologies.",
    },
    {
      title: "LEARNING",
      icon: "Lightbulb",
      text: "Diving deeper into advanced React patterns, performance optimization, and exploring the backend ecosystem.",
    },
    {
      title: "GOALS",
      icon: "Target",
      text: "Actively looking for full-time Frontend or Full-Stack roles within a product-focused engineering team.",
    },
    {
      title: "READING",
      icon: "BookOpen",
      text: '"Refactoring UI" by Adam Wathan and keeping up with the latest engineering blogs and tech newsletters.',
    },
  ],
  socials: {
    github: "https://github.com/Royakash2",
    twitter: "https://x.com/akash_coding",
    linkedin: "https://www.linkedin.com/in/akash-roy-0b28442b2/",
    email: "mailto:yahmeakash@gmail.com",
    resume: "#",
  },
  experience: [
    {
      company: "Cloudoora",
      role: "Frontend Developer",
      period: "Mar 2025 — Oct 2025",
      blurb:
        "Worked as a Frontend Developer building the official Cloudoora website using Gatsby and WordPress as a Headless CMS.",
      url: "",
      logo: "/cloudoora.png",
      highlights: [
        "Architected and built the official Cloudoora website using Gatsby and WordPress Headless CMS",
        "Developed and delivered multiple client and internal web applications with custom WordPress setups",
      ],
      technologies: [
        "Gatsby",
        "WordPress",
        "Headless CMS",
        "React",
        "GraphQL",
        "JavaScript",
      ],
    },
  ] as Job[],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "B.S. in Computer Science",
      period: "2018 — 2021",
      gpa: "3.7/4.0",
      highlights: [
        "Dean's List — Fall 2019, Spring 2021",
        "Teaching Assistant for Web Development course",
        "Hackathon winner — CalHacks 2020",
      ],
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop",
    },
  ] as Education[],
  projects: [
    {
      title: "Vellox",
      blurb:
        "A modern project management app with real-time collaboration, drag-and-drop boards, and team analytics.",
      story:
        "Vellox is a modern project management app with real-time collaboration, drag-and-drop boards, and team analytics. Built with React's compositional model, styled atomically with Tailwind CSS, and powered by Zustand for predictable state management.",
      stack: ["React", "Next.js", "PostgreSQL", "Prisma", "shadcn/ui", "Tailwind CSS", "TypeScript"],
      year: "2026",
      links: {
        live: "https://getvellox.vercel.app/",
        source: "https://github.com/Royakash2/project-management-system",
      },
      featured: true,
      image:
        "/project-vellox.png",
      categories: ["Fullstack"],
    },
  ] as Project[],
  skillCategories: {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "shadcn/ui", "Gatsby", "Figma"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "GraphQL", "REST APIs", "WordPress"],
    Tools: ["Git", "Vercel", "Postman", "npm", "VS Code", "Cursor", "Antigravity"],
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "shadcn/ui",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "GraphQL",
    "REST APIs",
    "Git",
    "Vercel",
    "Postman",
    "npm",
    "VS Code",
    "Cursor",
    "Antigravity",
    "Figma",
    "Gatsby",
    "WordPress",
  ],
  writing: [
    {
      title: "Building Scalable APIs with Next.js Server Actions",
      summary:
        "A deep dive into server actions, their benefits over traditional API routes, and real-world patterns.",
      date: "Sep 1, 2026",
      readingTime: "10 min read",
      url: "#",
    },
    {
      title: "Why I Switched from Redux to Zustand",
      summary:
        "Comparing state management approaches and why simpler is often better for most applications.",
      date: "Aug 15, 2026",
      readingTime: "8 min read",
      url: "#",
    },
    {
      title: "The MERN Stack in 2026: A Complete Guide",
      summary:
        "Modern best practices for building full-stack applications with MongoDB, Express, React, and Node.js.",
      date: "Jul 20, 2026",
      readingTime: "15 min read",
      url: "#",
    },
  ] as Post[],
  github: {
    username: "Royakash2",
    contributionsLastYear: "500+",
  },
  quotes: [
    {
      text: "He who moves first always wins.",
      author: "L Lawliet",
    },
    {
      text: "It's not what we do once in a while that shapes our lives, but what we do consistently.",
      author: "Tony Robbins",
    },
    {
      text: "If you win, you live. If you lose, you die. If you don't fight, you can't win.",
      author: "Eren Yeager",
    },
    {
      text: "Set the heart upon the work, but never on its reward.",
      author: "Sri Krishna",
    },
  ] as Quote[],
  footerNote: "",
} as const;

export type Site = typeof site;
