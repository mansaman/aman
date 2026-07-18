export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface JourneyPhase {
  id: string;
  number: string; // "01".."06"
  kicker: string; // e.g. "Phase 1"
  title: string;
  subtitle: string;
  paragraphs: string[];
  details: string[]; // plain-text list — channels, tools, markets
}

export interface Company {
  id: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  skillsUsed: string[];
  logoFile?: string; // drop a file in /public/logos and set e.g. "/logos/easyeat.svg" to replace the designed wordmark
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  highlights: string[];
}

export interface CaseStudy {
  id: string;
  stat: string;
  statLabel: string;
  title: string;
  description: string;
}

export interface PlaygroundItem {
  id: string;
  name: string;
  description: string;
  status: 'live' | 'building' | 'concept';
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/journey', label: 'Journey' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/playground', label: 'Playground' },
  { href: '/contact', label: 'Contact' },
];

export const PERSONAL_INFO = {
  name: "Aman",
  surname: "Sharma",
  title: "Growth Marketing Manager & Marketing Technologist",
  tagline: "Growth, built end to end.",
  subtitle: "I build revenue engines — SEO, paid acquisition, CRM, automation, and AI wired into one system. Around five years across B2B SaaS in India, Southeast Asia, and the Gulf.",
  email: "amanmohan.sharma@gmail.com",
  phone: "+91 8448176716",
  address: "India",
  socials: {
    github: "https://github.com/amanshr13",
    linkedin: "https://www.linkedin.com/in/aman-sharma-77243b2a0/",
  }
};

export const STATS: Stat[] = [
  { value: "300+", label: "Qualified leads per month from organic search" },
  { value: "100K+", label: "Monthly search impressions, built from near zero" },
  { value: "05", label: "International markets — MY · ID · TH · SG · AE" },
  { value: "5YRS", label: "Across growth, SEO, paid, CRM & automation" },
];

export const JOURNEY_PHASES: JourneyPhase[] = [
  {
    id: "phase-1",
    number: "01",
    kicker: "Phase 1",
    title: "The Curious Builder",
    subtitle: "Engineering & MCA years",
    paragraphs: [
      "The journey didn't start with paid ads or SEO. It started with curiosity. While studying engineering and later pursuing an MCA, one question kept surfacing: how do businesses actually grow online?",
      "Instead of committing to a single discipline, I explored everything at once — web development, SEO, content marketing, branding, analytics, automation, and digital advertising. That refusal to specialize early became a competitive advantage rather than a weakness.",
    ],
    details: ["Web Development", "SEO", "Content", "Branding", "Analytics", "Automation", "Digital Advertising"],
  },
  {
    id: "phase-2",
    number: "02",
    kicker: "Phase 2",
    title: "Every Layer of Marketing",
    subtitle: "Deliberate breadth before depth",
    paragraphs: [
      "Rather than specializing immediately, I deliberately learned every layer of digital marketing — the channels, the infrastructure underneath them, and how they connect.",
      "The result: instead of saying “that's not my job,” I became the person who could solve almost any marketing problem in the room.",
    ],
    details: ["SEO", "Google Ads", "Meta Ads", "Landing Pages", "Email Marketing", "Analytics", "CRM", "Content", "Website Development", "Marketing Automation"],
  },
  {
    id: "phase-3",
    number: "03",
    kicker: "Phase 3",
    title: "Organic Growth Engines",
    subtitle: "SEO as a system, not a task",
    paragraphs: [
      "The biggest turning point was SEO — not publishing blogs, but building complete organic growth systems: technical SEO, content strategy, keyword research, internal linking, site architecture, programmatic SEO, and performance optimization working as one machine.",
      "That machine took websites from virtually zero visibility to hundreds of thousands of monthly search impressions — and turned organic search into a sustainable inbound channel generating more than 300 qualified leads every month.",
    ],
    details: ["Technical SEO", "Content Strategy", "Keyword Research", "Internal Linking", "Site Architecture", "Programmatic SEO", "Performance", "Analytics"],
  },
  {
    id: "phase-4",
    number: "04",
    kicker: "Phase 4",
    title: "International Performance",
    subtitle: "Five markets, one discipline: efficiency",
    paragraphs: [
      "From organic, I expanded into paid acquisition — managing campaigns across Malaysia, Indonesia, Thailand, Singapore, and Dubai on Google, Meta, and LinkedIn.",
      "The focus was never spending more. It was making every unit of spend work harder: sharper targeting, creative testing, better landing pages, and honest attribution. The result was lower acquisition costs and international campaigns that actually returned.",
    ],
    details: ["Malaysia", "Indonesia", "Thailand", "Singapore", "Dubai", "Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting", "Budget Optimization"],
  },
  {
    id: "phase-5",
    number: "05",
    kicker: "Phase 5",
    title: "The Full Revenue Engine",
    subtitle: "CRM, automation, analytics, web",
    paragraphs: [
      "Most marketers stop at running campaigns. The next step was learning how every department connects — CRM (HubSpot, Zoho, Pipedrive), lifecycle and WhatsApp automation, lead routing, GA4, Google Tag Manager, Looker Studio, attribution, and conversion-focused builds in WordPress and Webflow.",
      "That shift changed the job title in practice: from channel specialist to someone responsible for the entire revenue engine. And as AI transformed marketing, I embraced it early — ChatGPT, Claude, Gemini, and Midjourney embedded into content, research, landing pages, and operations. Not replacing the marketer; making a faster one.",
    ],
    details: ["HubSpot", "Zoho CRM", "Pipedrive", "WhatsApp Automation", "Lead Routing", "GA4", "Google Tag Manager", "Looker Studio", "WordPress", "Webflow", "ChatGPT", "Claude", "Gemini", "Midjourney"],
  },
  {
    id: "phase-6",
    number: "06",
    kicker: "Now",
    title: "Growth Builder",
    subtitle: "The next chapter: owning growth end to end",
    paragraphs: [
      "Growth doesn't come from a single channel. It comes from systems — where strategy, technology, automation, data, and execution work together. That belief is why I never stayed just an SEO specialist or just a performance marketer.",
      "Today that means around five years across growth marketing, performance, SEO, GTM strategy, automation, CRM, analytics, and web development. The next stage isn't becoming a better channel marketer — it's leading growth end to end: market strategy, acquisition, automation, analytics, and revenue optimization as one job.",
    ],
    details: ["Inbound Engines", "Paid Acquisition", "GTM Strategy", "Conversion-Focused Web", "Attribution", "Marketing Ops", "Revenue Alignment"],
  },
];

export const COMPANIES_DATA: Company[] = [
  {
    id: "the-feast",
    name: "The Feast",
    role: "Assistant Marketing Manager",
    period: "Current",
    summary: "Own the growth engine for a restaurant-technology business — blending SEO, performance marketing, CRM, and automation into a single cross-channel acquisition system.",
    achievements: [
      "Built and ran inbound growth systems combining technical SEO, content, and programmatic pages alongside paid acquisition.",
      "Managed CRM and lifecycle automation to move leads from first touch through to qualified pipeline.",
      "Coordinated GTM execution across marketing, sales, and product to keep messaging and targeting aligned.",
      "Used AI tools to accelerate content production, research, and campaign workflows."
    ],
    skillsUsed: ["SEO", "Performance Marketing", "GTM Strategy", "CRM", "Marketing Automation", "Analytics", "AI Tools"],
  },
  {
    id: "easyeat",
    name: "EasyEat",
    role: "Growth & Performance Marketing",
    period: "Restaurant Tech",
    summary: "Drove acquisition and lifecycle marketing for a restaurant technology / POS platform, connecting paid channels to CRM-driven nurture.",
    achievements: [
      "Ran paid acquisition campaigns across Google and Meta targeted at restaurant and F&B operators.",
      "Built lead nurturing and WhatsApp automation flows to shorten sales cycles.",
      "Set up analytics and attribution to track campaign performance against pipeline, not just clicks.",
    ],
    skillsUsed: ["Google Ads", "Meta Ads", "CRM", "WhatsApp Automation", "GA4", "Landing Pages"],
  },
  {
    id: "foodmarkethub",
    name: "FoodMarketHub",
    role: "Marketing & GTM",
    period: "B2B SaaS · SEA",
    summary: "Supported go-to-market and international performance marketing for a B2B SaaS procurement and POS platform across Southeast Asia.",
    achievements: [
      "Managed performance campaigns across Malaysia, Indonesia, Thailand, and Singapore.",
      "Built landing pages and funnels tailored to each market's buyer intent.",
      "Optimized budget allocation and conversion tracking across multiple ad platforms."
    ],
    skillsUsed: ["Performance Marketing", "GTM Strategy", "Meta Ads", "Google Ads", "Conversion Tracking", "Funnel Analysis"],
  },
  {
    id: "revenue-nomad",
    name: "Revenue Nomad",
    role: "Growth Marketing",
    period: "FinTech · B2B",
    summary: "Worked on growth and demand generation for a FinTech-adjacent B2B services business, tying paid and organic efforts to revenue outcomes.",
    achievements: [
      "Built inbound content and SEO foundations to support outbound and paid efforts.",
      "Implemented CRM workflows connecting marketing qualified leads to sales follow-up.",
      "Set up dashboards in Looker Studio for cross-channel attribution."
    ],
    skillsUsed: ["SEO", "CRM", "Attribution", "Looker Studio", "Email Marketing", "Lead Nurturing"],
  },
  {
    id: "maxinor",
    name: "Maxinor",
    role: "Marketing Technologist",
    period: "Venture Studio · AI",
    summary: "Combined marketing and technical execution in a venture studio environment, working across multiple early-stage AI and tech products.",
    achievements: [
      "Used AI tools (ChatGPT, Claude, Gemini, Midjourney) to accelerate content, research, and landing page development.",
      "Built and shipped websites and landing pages using WordPress, Webflow, and hand-coded HTML/CSS/Tailwind.",
      "Set up marketing automation and GTM workflows for multiple portfolio products simultaneously."
    ],
    skillsUsed: ["AI Tools", "Webflow", "WordPress", "Tailwind CSS", "Automation", "GTM Strategy", "Figma"],
  },
];

export const INDUSTRIES = [
  "Restaurant Technology", "SaaS", "AI", "FinTech", "B2B Services", "POS Solutions", "Venture Studios",
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "seo",
    name: "SEO",
    description: "Technical and programmatic SEO systems built to compound organic visibility over time.",
    highlights: ["Technical audits & site architecture", "Programmatic SEO pages", "Keyword & content strategy", "300+ qualified leads/month via organic"]
  },
  {
    id: "performance-marketing",
    name: "Performance",
    description: "Paid acquisition across Google, Meta, and LinkedIn, run across five international markets.",
    highlights: ["Malaysia, Indonesia, Thailand, Singapore, Dubai", "Google Ads & Meta Ads", "Retargeting & audience segmentation", "Efficiency-first budget optimization"]
  },
  {
    id: "gtm",
    name: "GTM",
    description: "Go-to-market strategy connecting product, sales, and marketing into one launch motion.",
    highlights: ["Cross-market launch planning", "Positioning & messaging", "Sales-marketing alignment", "Channel prioritization"]
  },
  {
    id: "crm",
    name: "CRM",
    description: "CRM systems and lifecycle workflows that turn leads into pipeline, not just contacts.",
    highlights: ["HubSpot, Zoho CRM, Pipedrive", "Lead scoring & routing", "Lifecycle nurture sequences", "Sales handoff automation"]
  },
  {
    id: "ai",
    name: "AI",
    description: "Practical AI integration into everyday marketing operations — not novelty, throughput.",
    highlights: ["ChatGPT & Claude for content/research", "Midjourney for creative assets", "AI-assisted landing page builds", "Automated workflow tooling"]
  },
  {
    id: "websites",
    name: "Websites",
    description: "Conversion-focused websites and landing pages built and shipped without waiting on engineering.",
    highlights: ["WordPress & Webflow builds", "Hand-coded HTML/CSS/Tailwind", "CRO-driven UI improvements", "Figma-to-live handoff"]
  },
  {
    id: "automation",
    name: "Automation",
    description: "Marketing operations automated end-to-end — from first touch to sales-ready lead.",
    highlights: ["WhatsApp automation", "Lead routing logic", "Lifecycle email workflows", "Cross-tool marketing ops"]
  },
  {
    id: "case-studies",
    name: "Case Studies",
    description: "Deeper write-ups on specific growth systems, campaigns, and results — added over time.",
    highlights: ["Organic growth to 300+ leads/month", "International paid acquisition scale-up", "Full-funnel CRM automation builds"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "organic-engine",
    stat: "300+",
    statLabel: "qualified leads / month",
    title: "Zero to an organic lead engine",
    description: "Technical SEO, content strategy, programmatic pages, and site architecture built as one system — taking search visibility from near zero to hundreds of thousands of monthly impressions and a sustained 300+ qualified leads per month.",
  },
  {
    id: "intl-paid",
    stat: "05",
    statLabel: "markets scaled",
    title: "International paid acquisition",
    description: "Google, Meta, and LinkedIn campaigns across Malaysia, Indonesia, Thailand, Singapore, and Dubai — efficiency-first: sharper audiences, creative testing, and landing pages that lowered acquisition costs while scaling reach.",
  },
  {
    id: "revenue-ops",
    stat: "1",
    statLabel: "connected revenue engine",
    title: "Marketing wired into revenue",
    description: "CRM, lifecycle automation, WhatsApp flows, lead routing, and attribution dashboards connecting first touch to closed revenue — so marketing reports pipeline, not clicks.",
  },
];

export const PLAYGROUND_DATA: PlaygroundItem[] = [
  {
    id: "experiments",
    name: "Experiments",
    description: "Small, fast marketing and growth experiments — creative tests, landing page variants, and channel trials.",
    status: "building"
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    description: "AI-assisted workflows and internal tools built to speed up content, research, and campaign operations.",
    status: "building"
  },
  {
    id: "designs",
    name: "Designs",
    description: "Figma explorations and visual concepts for landing pages, brand assets, and UI components.",
    status: "concept"
  },
  {
    id: "components",
    name: "Components",
    description: "Reusable web components and site sections built with Webflow, WordPress, and Tailwind.",
    status: "concept"
  },
  {
    id: "labs",
    name: "Labs",
    description: "Longer-running side builds combining growth marketing with hands-on web development.",
    status: "concept"
  }
];
