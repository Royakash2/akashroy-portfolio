export const personalInfo = {
  name: "Akash Sharma",
  title: "Full Stack Developer",
  email: "akash.sharma@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "akashsharma.dev",
  availability: "Open to opportunities",
  shortBio:
    "Full-stack developer with 4+ years of experience building modern web applications. Passionate about clean code, intuitive UIs, and scalable systems.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/akashsharma",
    linkedin: "https://linkedin.com/in/akashsharma",
    twitter: "https://twitter.com/akashsharma",
  },
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer based in San Francisco with a strong focus on frontend engineering. I specialize in building modern web applications using React, Next.js, TypeScript, and Node.js technologies.",
    "Over the past 4 years, I've worked with startups and agencies to deliver robust, user-friendly products. I enjoy collaborating with designers and product teams to turn ideas into polished, performant experiences.",
    "When I'm not coding, you'll find me exploring new tech, contributing to open-source projects, or writing technical blog posts to share what I've learned.",
  ],
  highlights: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Open Source Contributions", value: "30+" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Redux",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "GraphQL",
      "REST APIs",
      "NextAuth.js",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "Docker",
      "AWS (EC2, S3)",
      "Vercel",
      "CI/CD",
      "Jest",
      "Cypress",
      "Figma",
    ],
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
];

export const experience = [
  {
    id: 1,
    company: "TechStack Inc.",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA",
    period: "Jan 2024 — Present",
    description:
      "Lead frontend development for a SaaS platform serving 10k+ users. Architect component libraries, mentor junior developers, and drive adoption of best practices.",
    highlights: [
      "Architected a reusable component library used across 3 product teams, reducing development time by 30%",
      "Migrated legacy jQuery codebase to React/Next.js, improving page load speed by 45%",
      "Established CI/CD pipelines and code review processes that improved deployment frequency by 60%",
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "WebCraft Agency",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Jun 2022 — Dec 2023",
    description:
      "Built custom web applications for diverse clients across e-commerce, healthcare, and fintech sectors. Delivered end-to-end solutions from design handoff to deployment.",
    highlights: [
      "Delivered 12+ client projects on time and within budget, with an average NPS score of 9.2",
      "Built a real-time inventory management system for an e-commerce client handling 50k+ daily orders",
      "Optimized database queries and implemented caching strategies that cut API response times by 60%",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Docker"],
  },
  {
    id: 3,
    company: "StartupLabs",
    role: "Junior Developer",
    location: "New York, NY",
    period: "Aug 2021 — May 2022",
    description:
      "Joined as a junior developer and quickly took ownership of frontend features for an early-stage B2B analytics platform.",
    highlights: [
      "Developed interactive data dashboards using React and D3.js for visualizing complex analytics",
      "Implemented OAuth-based authentication system supporting Google, GitHub, and email/password login",
      "Wrote unit and integration tests achieving 85% code coverage across the frontend codebase",
    ],
    technologies: ["React", "JavaScript", "Python", "Flask", "PostgreSQL"],
  },
  {
    id: 4,
    company: "Freelance",
    role: "Web Developer",
    location: "Remote",
    period: "Jan 2021 — Jul 2021",
    description:
      "Took on freelance projects while completing my degree, building websites and web apps for small businesses and non-profits.",
    highlights: [
      "Built responsive websites for 5 local businesses using React and Tailwind CSS",
      "Developed a volunteer management system for a non-profit organization handling 500+ volunteers",
    ],
    technologies: ["React", "HTML/CSS", "JavaScript", "Firebase"],
  },
];

export const education = [
  {
    id: 1,
    institution: "University of California, Berkeley",
    degree: "B.S. in Computer Science",
    period: "2018 — 2021",
    gpa: "3.7/4.0",
    highlights: [
      "Dean's List — Fall 2019, Spring 2021",
      "Teaching Assistant for Web Development course",
      "Hackathon winner — CalHacks 2020",
    ],
  },
  {
    id: 2,
    institution: "Coursera / online",
    degree: "Specializations & Certificates",
    period: "2020 — 2024",
    highlights: [
      "Meta Front-End Developer Professional Certificate",
      "AWS Certified Cloud Practitioner",
      "The Modern React with Redux (Udemy)",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "TaskFlow",
    description:
      "A modern project management app with real-time collaboration, drag-and-drop boards, and team analytics.",
    image: "/project-1.jpg",
    tags: ["React", "Next.js", "PostgreSQL", "Prisma", "WebSocket"],
    liveUrl: "https://taskflow-demo.vercel.app",
    repoUrl: "https://github.com/akashsharma/taskflow",
    featured: true,
  },
  {
    id: 2,
    title: "MarketViz",
    description:
      "Interactive data visualization platform for market research, featuring customizable dashboards and real-time data ingestion.",
    image: "/project-2.jpg",
    tags: ["React", "D3.js", "Node.js", "MongoDB", "TypeScript"],
    liveUrl: "https://marketviz.vercel.app",
    repoUrl: "https://github.com/akashsharma/marketviz",
    featured: true,
  },
  {
    id: 3,
    title: "DevMetrics",
    description:
      "Developer analytics dashboard that tracks code quality, productivity metrics, and team velocity across GitHub repositories.",
    image: "/project-3.jpg",
    tags: ["Next.js", "Python", "GitHub API", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://devmetrics.vercel.app",
    repoUrl: "https://github.com/akashsharma/devmetrics",
    featured: true,
  },
  {
    id: 4,
    title: "ShopLocal",
    description:
      "E-commerce platform connecting local businesses with customers, featuring inventory management and local delivery scheduling.",
    image: "/project-4.jpg",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    liveUrl: "https://shoplocal.vercel.app",
    repoUrl: "https://github.com/akashsharma/shoplocal",
    featured: false,
  },
];
