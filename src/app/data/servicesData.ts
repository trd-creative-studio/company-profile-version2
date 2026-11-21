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
    title: "Product Design",
    badge: "Most Requested",
    description:
      "UI/UX design for mobile apps, web apps, and SaaS. Bring us an idea, a messy workflow, or an AI-generated prototype. We turn it into a clean product your developers can build.",
    bullets: [
      "Mobile & Web App Design",
      "SaaS & Dashboard Interfaces",
      "New Apps & MVPs",
      "Product Redesign",
      "AI Prototype Cleanup",
      "Design Systems",
    ],
    linkText: "SEE HOW WE DESIGN PRODUCTS",
    linkUrl: "/?service=product-design",
  },
  {
    id: "website-design",
    step: "02",
    title: "Website Development",
    description:
      "Landing pages, company profiles, and online stores, designed and built to load fast and turn visitors into customers.",
    bullets: [
      "Landing Pages",
      "Company Profile Websites",
      "E-Commerce Stores",
      "CMS Setup",
      "SEO Basics & Analytics",
    ],
    linkText: "START A WEBSITE PROJECT",
    linkUrl: "/inquiry?service=website",
  },
  {
    // Images load from src/assets/services/ai-video/
    id: "ai-video",
    step: "03",
    title: "Social Media & Content",
    description:
      "Consistent, on-brand content for your social channels, from feed designs to short-form AI video for Reels.",
    bullets: [
      "Social Media Design",
      "Content Calendars",
      "AI Video for Reels & TikTok",
      "Campaign Visuals",
    ],
    linkText: "START A CONTENT PROJECT",
    linkUrl: "/inquiry",
  },
];
