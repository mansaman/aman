export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  logo: string; // Will store standard lucide icon names or custom SVGs
  description: string;
  category: 'education' | 'career' | 'achievement';
}

export interface Company {
  id: string;
  name: string;
  role: string;
  period: string;
  logoColor: string; // Tailwind color class e.g., 'text-cyan-400'
  summary: string;
  achievements: string[];
  skillsUsed: string[];
  featuredProject?: {
    title: string;
    description: string;
    tech: string[];
  };
}

export const PERSONAL_INFO = {
  name: "Aman",
  surname: "Sharma",
  title: "Creative Engineer & Digital Architect",
  tagline: "I build the impossible.",
  subtitle: "Design-driven developer specializing in elite web experiences, custom animations, and scalable full-stack infrastructure. I don't just write code; I orchestrate digital motion.",
  email: "aman@example.com",
  phone: "+1 (555) 019-2831",
  address: "San Francisco, CA",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  }
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "milestone-1",
    year: "2018 - 2019",
    title: "The Genesis",
    subtitle: "Self-Taught & Open Source",
    logo: "Terminal",
    description: "Deep-dived into algorithms, vanilla JS mechanics, and SVG layouts. Contributed to early open-source CSS projects.",
    category: "education"
  },
  {
    id: "milestone-2",
    year: "2020 - 2021",
    title: "Vortex Creative Agency",
    subtitle: "Creative Developer",
    logo: "Framer",
    description: "Orchestrated layout engines, interactive GSAP web animations, and three.js canvas components for boutique design brands.",
    category: "career"
  },
  {
    id: "milestone-3",
    year: "2021 - 2023",
    title: "Scribe AI",
    subtitle: "Senior Full-Stack Engineer",
    logo: "Cpu",
    description: "Engineered high-throughput AI document analysis platforms using React, Node.js, and Python. Optimized DB querying speed by 40%.",
    category: "career"
  },
  {
    id: "milestone-4",
    year: "2023 - 2025",
    title: "Nova Labs",
    subtitle: "Principal Frontend & Product Lead",
    logo: "Globe",
    description: "Scaled user interfaces from scratch, designed design-systems used by 30+ developers, and managed complex next.js builds.",
    category: "career"
  },
  {
    id: "milestone-5",
    year: "2025 - Present",
    title: "Independent Digital Architect",
    subtitle: "Consultant & Lead Engineer",
    logo: "Compass",
    description: "Directing tech architectures, system design, and building custom animated platforms for enterprise and web3 startups.",
    category: "achievement"
  }
];

export const COMPANIES_DATA: Company[] = [
  {
    id: "nova-labs",
    name: "Nova Labs",
    role: "Principal Frontend & Product Lead",
    period: "2023 - 2025",
    logoColor: "from-blue-500 to-indigo-500",
    summary: "Led frontend operations and product layout design for a fast-growing collaborative software platform, scaling active users to 500k+.",
    achievements: [
      "Architected and deployed a multi-tenant layout builder using Next.js App Router and drag-and-drop systems.",
      "Established standard Tailwind styling guidelines, decreasing CSS bundle sizes by 35%.",
      "Mentored a team of 8 engineers in reactive web principles and motion choreography using GSAP.",
      "Integrated secure real-time collaboration widgets using WebSockets and conflict-free replicated data types."
    ],
    skillsUsed: [
      "Next.js", "React", "TypeScript", "GSAP", "Tailwind CSS", "WebSockets", "Node.js", "System Architecture", "UI/UX Design", "Vercel"
    ],
    featuredProject: {
      title: "Nova Collaborative Workspace",
      description: "A real-time workspace drawing canvas and document builder designed for high-concurrency design operations.",
      tech: ["Next.js", "CRDTs", "WebSockets", "Tailwind", "Canvas API"]
    }
  },
  {
    id: "scribe-ai",
    name: "Scribe AI",
    role: "Senior Full-Stack Engineer",
    period: "2021 - 2023",
    logoColor: "from-purple-500 to-pink-500",
    summary: "Built and scaled deep-learning document analysis interfaces and server pipelines, handling millions of pages processed daily.",
    achievements: [
      "Designed data-dense canvas pipelines allowing users to annotate AI text highlights dynamically.",
      "Wrote complex PostgreSQL queries and structured Redis caching layers, reducing server response latencies from 350ms to 80ms.",
      "Co-authored Python microservices analyzing document structures and feeding React layout systems.",
      "Pioneered CI/CD test automations using Playwright, cutting deployment bugs by 60%."
    ],
    skillsUsed: [
      "React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Playwright", "AWS", "Tailwind CSS"
    ],
    featuredProject: {
      title: "Scribe Lens",
      description: "AI document viewer and dynamic text processing engine highlighting semantic patterns instantly.",
      tech: ["React", "FastAPI", "PostgreSQL", "Tailwind", "Docker"]
    }
  },
  {
    id: "vortex-creative",
    name: "Vortex Creative Agency",
    role: "Creative Developer",
    period: "2020 - 2021",
    logoColor: "from-cyan-500 to-teal-500",
    summary: "Created high-end interactive websites and branding concepts for architectural, luxury, and technology brands worldwide.",
    achievements: [
      "Delivered 15+ award-winning websites featuring immersive canvas animations, custom WebGL materials, and complex GSAP scroll paths.",
      "Reduced load times of asset-heavy homepages by 50% through smart assets preloading and critical CSS optimization.",
      "Collaborated closely with visual artists to translate complex 3D branding into performant responsive CSS structures.",
      "Engineered micro-interactions, responsive menus, and immersive sliders used by major luxury clients."
    ],
    skillsUsed: [
      "HTML5", "CSS3", "JavaScript", "GSAP", "ScrollTrigger", "Three.js", "Figma", "SVG Animation", "WebGL", "Branding", "Responsive Design"
    ],
    featuredProject: {
      title: "Aura Luxury Portfolio",
      description: "An immersive digital brochure using 3D camera transitions and interactive typography for an award-winning developer.",
      tech: ["Vanilla JS", "GSAP", "Three.js", "WebGL shaders"]
    }
  }
];

export const SKILLS_CATEGORIES = [
  {
    name: "Engineering core",
    skills: ["TypeScript", "Next.js", "React", "Node.js", "Python", "Go", "GraphQL", "PostgreSQL", "Redis", "Docker"]
  },
  {
    name: "Creative & Interactive",
    skills: ["GSAP", "ScrollTrigger", "WebGL / Three.js", "Tailwind CSS", "CSS Keyframes", "Framer Motion", "Canvas API", "SVG Animation", "Figma Design", "Creative Copy"]
  },
  {
    name: "System & Architecture",
    skills: ["AWS", "Vercel / Netlify", "CI/CD Pipelines", "WebSockets / Realtime", "DB Schema Design", "Performance Audits", "Microservices", "API Gateways", "Edge Functions", "Monorepos"]
  }
];
