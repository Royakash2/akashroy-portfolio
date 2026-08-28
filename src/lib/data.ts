export const personalInfo = {
  name: "Akash Roy",
  title: "Next.js React MERN Stack Developer",
  email: "akash.sharma@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "akashsharma.dev",
  availability: "Open to opportunities",
  shortBio:
    "Next.js React MERN Stack Developer. I love building things and helping people. Very active on Twitter.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  resumeUrl: "#",
  currentRole: "",
  currentCompany: "",
  currentCompanyLogo: "",
  socials: {
    github: "https://github.com/akashsharma",
    linkedin: "https://linkedin.com/in/akashsharma",
    twitter: "https://twitter.com/akashsharma",
  },
};

export const about = {
  paragraphs: [
    "At the end of 2025, I quit my job as a web developer after just 6 months to go all-in on building my own projects and growing as a developer. I started learning web development in 2023, and within two years I was already working professionally with React, Next.js, JavaScript, and PostgreSQL. Now I'm doubling down on the full MERN stack and ready to build things that matter.",
  ],
  highlights: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Happy Clients", value: "5+" },
    { label: "Open Source Contributions", value: "10+" },
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
    company: "Cloudoora",
    role: "Frontend Developer",
    logo: "/cloudoora.png",
    location: "Remote",
    period: "Mar 2025 — Oct 2025",
    description:
      "Worked as a Frontend Developer building the official Cloudoora website using Gatsby and WordPress as a Headless CMS. Also built and customized multiple additional websites using WordPress.",
    highlights: [
      "Architected and built the official Cloudoora website using Gatsby and WordPress Headless CMS",
      "Developed and delivered multiple client and internal web applications with custom WordPress setups",
    ],
    technologies: ["Gatsby", "WordPress", "Headless CMS", "React", "GraphQL", "JavaScript", "HTML/CSS"],
  },
];

export const education = [
  {
    id: 1,
    institution: "University of California, Berkeley",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop",
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
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
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
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    liveUrl: "https://shoplocal.vercel.app",
    repoUrl: "https://github.com/akashsharma/shoplocal",
    featured: false,
    period: "2021",
  },
];

export const hackathons = [
  {
    id: 1,
    title: "Hack The North",
    dates: "September 15-17, 2023",
    location: "Waterloo, Ontario",
    description: "Developed a computer vision application that translates sign language to text in real-time.",
    logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    title: "CalHacks",
    dates: "October 22-24, 2022",
    location: "Berkeley, CA",
    description: "Built a decentralized voting system using Ethereum smart contracts.",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    title: "MIT Reality Hack",
    dates: "March 10-12, 2022",
    location: "Cambridge, MA",
    description: "Created an AR experience for visually impaired individuals to navigate indoor spaces.",
    logo: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop"
  }
];

