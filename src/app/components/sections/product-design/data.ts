// Tool Icons
import toolFigma from "@/assets/tools/figma.svg";
import toolFigjam from "@/assets/tools/figjam.svg";
import toolLottie from "@/assets/tools/lottie.svg";
import toolNotion from "@/assets/tools/notion.svg";
import toolGmeet from "@/assets/tools/gmeet.svg";
import toolSlack from "@/assets/tools/slack.svg";
import toolNextjs from "@/assets/tools/nextjs.svg";
import toolReact from "@/assets/tools/react.svg";
import toolTailwind from "@/assets/tools/tailwind.svg";

export const TRAIL_IMAGES = [
  "/work/showcase1.png",
  "/work/showcase3.png",
  "/hero/resumify-ai.png",
  "/work/showcase2.png",
  "/hero/hero5.png",
];

export interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
  timestamp: number;
}

export interface ProductWork {
  id: string;
  client: string;
  tag: string;
  period: string;
  title: string;
  description: string;
  image: string;
}

export const PRODUCT_WORKS: ProductWork[] = [
  {
    id: "resumify",
    client: "Resumify",
    tag: "SELECTED WORK",
    period: "2024 - CURRENT",
    title: "Building the digital foundation for an AI-native marketing platform",
    description: "We helped Quotient shape a clearer product experience and digital presence for teams using AI agents to improve content and marketing workflows.",
    image: "/hero/resumify-ai.png",
  },
  {
    id: "pupuk",
    client: "PT Pupuk Indonesia",
    tag: "ENTERPRISE PLATFORM",
    period: "2023 - 2024",
    title: "Simplifying complex corporate workflows into clear role-based experiences",
    description: "Designed enterprise-level operational dashboards and multi-role approval management systems for large scale organizational workflows.",
    image: "/work/showcase1.png",
  },
  {
    id: "tehchouse",
    client: "TehcHouse",
    tag: "BRAND & E-COMMERCE",
    period: "2024",
    title: "Creating an intuitive e-commerce experience for modern brand growth",
    description: "Structured seamless product discovery, design systems, and conversion-focused checkout flows for retail scale.",
    image: "/work/showcase2.png",
  },
  {
    id: "greenflags",
    client: "Greenflags",
    tag: "AI VIDEO CREATIVE",
    period: "2023 - 2024",
    title: "AI-driven content generation studio and creative dashboard",
    description: "Engineered web platform interfaces that empower creators to generate, edit, and manage AI video and visual assets efficiently.",
    image: "/work/showcase3.png",
  },
];

export interface EngagementItem {
  id: string;
  tag: string;
  duration: string;
  title: string;
  description: string;
  features: string[];
  priceLabel: string;
  price: string;
  ctaLabel: string;
  footnote: string;
}

export const ENGAGEMENTS: EngagementItem[] = [
  {
    id: "mvp",
    tag: "STARTING",
    duration: "4-5 Weeks",
    title: "MVP Product Design",
    description: "We create mid-fidelity screens to solve layout, hierarchy, states, and interaction logic before pushing the final visual layer.",
    features: [
      "New SaaS Products",
      "MVP Web Applications",
      "B2C / B2B Mobile Apps",
      "New Product Features",
      "Vibe-coding Cleanup",
    ],
    priceLabel: "Starting from",
    price: "Rp5.000.000",
    ctaLabel: "START YOUR MVP",
    footnote: "Final scope depends on content and development needs.",
  },
  {
    id: "redesign",
    tag: "MAINTAINING",
    duration: "4-5 Weeks",
    title: "Product Redesign",
    description: "For teams with an existing product that feels outdated, inconsistent, or harder to use than it should be.",
    features: [
      "SaaS Dashboard",
      "B2B Platforms",
      "Complex Web Apps",
      "Existing Workflow Improvements",
      "UI Consistency Cleanup",
      "Design System Cleanup",
    ],
    priceLabel: "Starting from",
    price: "Rp12.000.000",
    ctaLabel: "DISCUSS A REDESIGN",
    footnote: "Final scope depends on content and development needs.",
  },
  {
    id: "partner",
    tag: "PARTNERING",
    duration: "4-5 Weeks",
    title: "Design Partner",
    description: "For teams that need ongoing product support across new features, design systems, and product growth.",
    features: [
      "Fast-moving Product Teams",
      "Continuous Feature Design",
      "SaaS Startups and Scaleups",
      "Roadmap Support",
      "UX/UI Product Cleanup",
      "Design System Growth",
      "Design QA",
    ],
    priceLabel: "Starting from",
    price: "Custom",
    ctaLabel: "EXPLORE A DESIGN PARTNERSHIP",
    footnote: "Final scope depends on content and development needs.",
  },
];

export interface DeliverableItem {
  num: string;
  title: string;
}

export const DELIVERABLES: DeliverableItem[] = [
  { num: "01", title: "UX Audit*" },
  { num: "02", title: "User Flows*" },
  { num: "03", title: "Information Architecture" },
  { num: "04", title: "Key Screen Wireframes" },
  { num: "05", title: "Design Systems Foundations*" },
  { num: "06", title: "Visuals & Illustration Assets**" },
  { num: "07", title: "Design QA Support*" },
  { num: "08", title: "High-Fidelity UI" },
  { num: "09", title: "Organized Figma Files" },
  { num: "10", title: "Developer-Ready Handoff" },
];

export interface ShowcaseImage {
  id: string;
  title: string;
  img: string;
}

export const SHOWCASE_IMAGES_ROW1: ShowcaseImage[] = [
  { id: "1", title: "Product Analytics Dashboard", img: "/hero/resumify-ai.png" },
  { id: "2", title: "Enterprise Platform", img: "/work/showcase1.png" },
  { id: "3", title: "E-Commerce Catalog", img: "/work/showcase2.png" },
  { id: "4", title: "AI Creative Studio", img: "/work/showcase3.png" },
  { id: "5", title: "SaaS Workflow Manager", img: "/hero/hero1.png" },
];

export const SHOWCASE_IMAGES_ROW2: ShowcaseImage[] = [
  { id: "6", title: "AI Content Generation", img: "/hero/resumify-tailor.png" },
  { id: "7", title: "Operational System", img: "/hero/hero5.png" },
  { id: "8", title: "Mobile Application", img: "/hero/resumify-1.jpg" },
  { id: "9", title: "Digital Product Platform", img: "/hero/hero2.png" },
  { id: "10", title: "Enterprise Dashboard", img: "/hero/resumify-3.jpg" },
];

export interface ToolGroup {
  category: string;
  tools: {
    name: string;
    logo: string;
  }[];
}

export const TOOL_GROUPS: ToolGroup[] = [
  {
    category: "DESIGN",
    tools: [
      { name: "Figma", logo: toolFigma },
      { name: "Figjam", logo: toolFigjam },
      { name: "Lottie", logo: toolLottie },
    ],
  },
  {
    category: "COLLABORATION",
    tools: [
      { name: "Notion", logo: toolNotion },
      { name: "Google Meet", logo: toolGmeet },
      { name: "Slack", logo: toolSlack },
    ],
  },
  {
    category: "DEVELOPMENT",
    tools: [
      { name: "NextJS", logo: toolNextjs },
      { name: "React", logo: toolReact },
      { name: "Tailwind", logo: toolTailwind },
    ],
  },
];
