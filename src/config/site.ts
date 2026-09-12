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
  bannerImage: "/cover-image.jfif",
  initials: "AR",
  role: "Full Stack Developer",
  location: "Sunamganj, Sylhet, Bangladesh",
  timezone: "Asia/Dhaka",
  email: "akash.sharma@email.com",
  greeting: "Hey, I'm Akash",
  tagline:
    "I build modern, performant web applications with React, Next.js, and the MERN stack.",
  about: [
    "At the end of 2025, I quit my job as a web developer after just 6 months to go all-in on building my own projects and growing as a developer. I started learning web development in 2023, and within two years I was already working professionally with React, Next.js, JavaScript, and PostgreSQL.",
    "Now I'm doubling down on the full MERN stack and ready to build things that matter.",
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
  socials: {
    github: "https://github.com/Royakash2",
    twitter: "https://twitter.com/akashsharma",
    linkedin: "https://linkedin.com/in/akashsharma",
    email: "mailto:akash.sharma@email.com",
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
      title: "TaskFlow",
      blurb:
        "A modern project management app with real-time collaboration, drag-and-drop boards, and team analytics.",
      story:
        "Built with React's compositional model, styled atomically with Tailwind CSS, and powered by Zustand for predictable state management.",
      stack: ["React", "Next.js", "PostgreSQL", "Prisma", "WebSocket"],
      year: "2024",
      links: {
        live: "https://taskflow-demo.vercel.app",
        source: "https://github.com/Royakash2/taskflow",
      },
      featured: true,
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      categories: ["Fullstack"],
    },
    {
      title: "MarketViz",
      blurb:
        "Interactive data visualization platform for market research, featuring customizable dashboards and real-time data ingestion.",
      story:
        "Engineered with D3.js for visualizations and Node.js backend for real-time data processing.",
      stack: ["React", "D3.js", "Node.js", "MongoDB", "TypeScript"],
      year: "2024",
      links: {
        live: "https://marketviz.vercel.app",
        source: "https://github.com/Royakash2/marketviz",
      },
      featured: true,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      categories: ["Frontend"],
    },
    {
      title: "DevMetrics",
      blurb:
        "Developer analytics dashboard that tracks code quality, productivity metrics, and team velocity across GitHub repositories.",
      story:
        "Integrates with GitHub API to fetch real-time contribution data and visualize team performance.",
      stack: ["Next.js", "Python", "GitHub API", "PostgreSQL", "Tailwind CSS"],
      year: "2024",
      links: {
        live: "https://devmetrics.vercel.app",
        source: "https://github.com/Royakash2/devmetrics",
      },
      featured: true,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      categories: ["Fullstack"],
    },
    {
      title: "ShopLocal",
      blurb:
        "E-commerce platform connecting local businesses with customers, featuring inventory management and local delivery scheduling.",
      story:
        "Built with Next.js and Stripe integration for seamless payment processing.",
      stack: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
      year: "2023",
      links: {
        live: "https://shoplocal.vercel.app",
        source: "https://github.com/Royakash2/shoplocal",
      },
      featured: false,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
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
      text: "Set thy heart upon thy work, but never on its reward.",
      author: "Sri Krishna",
    },
  ] as Quote[],
  footerNote: "Built with ❤️ and hardwork",
} as const;

export type Site = typeof site;
