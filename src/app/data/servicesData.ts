export interface ServiceData {
  id: string;
  step: string;
  title: string;
  badge?: string;
  description: string;
  bullets: string[];
  linkText: string;
  linkUrl: string;
  images?: string[];
  disabled?: boolean;
}

// Auto-import all service images placed inside src/assets/services/{service-id}/
const serviceImageModules = import.meta.glob<string>(
  "/src/assets/services/**/*.{png,jpg,jpeg,webp,avif,svg}",
  { eager: true, import: "default" }
);

/**
 * Get images for a service.
 * Automatically loads all files from `src/assets/services/{serviceId}/` alphabetically.
 * Allows explicit override if custom images array is provided in ServiceData.
 */
export function getServiceImages(serviceId: string, customImages?: string[]): string[] {
  if (customImages && customImages.length > 0) {
    return customImages;
  }

  const prefix = `/src/assets/services/${serviceId}/`;
  const matchedImages = Object.keys(serviceImageModules)
    .filter((path) => path.startsWith(prefix))
    .sort()
    .map((path) => serviceImageModules[path]);

  return matchedImages;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "product-design",
    step: "01",
    title: "Product & UI/UX Design",
    description:
      "End-to-end UI/UX design for SaaS, mobile apps, and complex platforms. We take your vision—or refine generic AI-generated prototypes (AI slop)—and transform it into a clean, intuitive, and production-ready product experience.",
    bullets: [
      "Core UI/UX Design Systems",
      "AI Slop & Prototype Revamp",
      "SaaS & Dashboard Interfaces",
      "Web & Mobile Applications",
      "0-to-1 MVP Product Design",
      "UX Audit & Product Redesign",
    ],
    linkText: "EXPLORE OUR DESIGN PROCESS",
    linkUrl: "/?service=product-design",
  },
  {
    id: "website-design",
    step: "02",
    title: "Website Design & Development",
    badge: "Coming Soon",
    disabled: true,
    description:
      "High-converting landing pages, marketing websites, and custom Webflow/Next.js web applications engineered for speed, SEO, and visual impact. Designed to showcase your product value clearly and convert visitors into active leads.",
    bullets: [
      "Landing Pages & Marketing Sites",
      "Custom Web Development",
      "E-Commerce & CMS Setup",
      "SEO & Analytics Integration",
      "Performance Optimization",
    ],
    linkText: "EXPLORE WEBSITE SERVICES",
    linkUrl: "/?scroll=services",
  },
  {
    id: "ai-video",
    step: "03",
    title: "AI Video Production",
    badge: "Coming Soon",
    disabled: true,
    description:
      "Next-generation AI video generation, creative direction, and motion graphic production for product walkthroughs, social campaigns, and brand storytelling that stand out in crowded feeds.",
    bullets: [
      "Product & Explainer Videos",
      "AI Video Generation",
      "Motion Graphics & Animation",
      "Social & Short-Form Content",
      "Campaign Assets",
    ],
    linkText: "EXPLORE VIDEO PRODUCTION",
    linkUrl: "/?scroll=services",
  },
];
