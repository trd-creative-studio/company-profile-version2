import React, { useState, useEffect } from "react";
import { ChevronDown } from "../Icons";

interface ServiceData {
  id: string;
  step: string;
  title: string;
  badge?: string;
  description: string;
  bullets: string[];
  linkText: string;
  linkUrl: string;
  images: string[];
}

const SERVICES_DATA: ServiceData[] = [
  {
    id: "product-design",
    step: "01",
    title: "Product & Experience Design",
    description:
      "We've built brands for companies that went on to raise tens of millions and reach millions of users. The work shows up everywhere, product, marketing site, app screens, pitch decks, investor updates, paid campaigns, app store listings. Not a logo in a zip file, a system that makes every touchpoint look like the same company built it.",
    bullets: [
      "Strategy & Page Structure",
      "Custom UI Design",
      "Responsive Development",
      "Contact / Lead Integration",
      "SEO Foundations",
    ],
    linkText: "EXPLORE OUR DESIGN PROCESS",
    linkUrl: "/?service=product-design",
    images: ["/work/showcase1.png", "/hero/resumify-ai.png", "/hero/hero5.png"],
  },
  {
    id: "website-design",
    step: "02",
    title: "Website Design & Development",
    badge: "Coming Soon",
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
    images: ["/work/showcase2.png", "/hero/hero1.png", "/hero/hero3.png"],
  },
  {
    id: "ai-video",
    step: "03",
    title: "AI Video Production",
    badge: "Coming Soon",
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
    images: ["/work/showcase3.png", "/hero/hero2.png", "/hero/resumify-tailor.png"],
  },
];

function ServiceSlideshow({ images, isOpen }: { images: string[]; isOpen: boolean }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!isOpen || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  return (
    <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#f4f4f4]">
      <style>{`
        @keyframes progressWalk {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
      {images.map((src, idx) => (
        <img
          key={src + idx}
          src={src}
          alt="Service Preview"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === currentIdx ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Bottom Progress Bars Indicator */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIdx(idx);
            }}
            className="flex-1 h-1 bg-black/20 rounded-full overflow-hidden cursor-pointer"
          >
            <div
              key={`${idx}-${currentIdx}`}
              className="h-full bg-[#eb5503]"
              style={{
                width: idx < currentIdx ? "100%" : idx > currentIdx ? "0%" : undefined,
                animation: idx === currentIdx && isOpen ? "progressWalk 3000ms linear forwards" : "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowWeHelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="how-we-help" className="bg-[#ffffff] w-full py-16 md:py-[150px]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center px-2.5 py-1 bg-[#f9f9f9] border border-black/[0.04] mb-4">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            HOW WE HELP
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {/* Headline */}
          <h2 className="font-sans font-regular text-[24px] sm:text-[24px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center">
            Support for every stage
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[600px] text-center mb-12 md:mb-16">
            Bring us in when your idea, product, website, or brand needs to feel sharper, cleaner and ready for what comes next.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col divide-y divide-black/[0.08]">
          {SERVICES_DATA.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={service.id} className="py-6 md:py-8 transition-all duration-300">
                {/* Accordion Header Row */}
                <div
                  onClick={() => toggleAccordion(idx)}
                  className="flex items-center justify-between cursor-pointer group select-none"
                >
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className="font-mono text-base md:text-lg text-[#77786d]">
                      {service.step}
                    </span>
                    <div className="flex flex-col items-start">
                      <h3
                        className={`font-sans font-regular text-2xl sm:text-3xl md:text-[32px] tracking-[-0.8px] transition-colors ${isOpen ? "text-[#1e1e1e]" : "text-[#77786d] group-hover:text-[#1e1e1e]"
                          }`}
                      >
                        {service.title}
                      </h3>
                      {service.badge && (
                        <div className="bg-[#eb5503] text-white px-3 py-1 rounded-full md:hidden mt-2">
                          <span className="font-sans text-xs font-medium">
                            {service.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {service.badge && (
                      <div className="hidden md:flex bg-[#eb5503] text-white px-3 py-1 rounded-full">
                        <span className="font-sans text-xs font-medium">
                          {service.badge}
                        </span>
                      </div>
                    )}
                    <span
                      className={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#1e1e1e] ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      <ChevronDown className="size-6" />
                    </span>
                  </div>
                </div>

                {/* Accordion Content Panel with Smooth Grid Animation */}
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
                        }`}
                    >
                      {/* Left: Slideshow */}
                      <ServiceSlideshow images={service.images} isOpen={isOpen} />

                      {/* Right: Info & Features */}
                      <div className="flex flex-col justify-between flex-1 py-4">
                        <div className="flex flex-col gap-6">
                          <p className="font-sans text-[#4d4d4d] text-sm md:text-sm leading-[1.6]">
                            {service.description}
                          </p>

                          <ul className="flex flex-col gap-2 pt-2">
                            {service.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="font-sans text-sm md:text-sm text-[#1e1e1e] flex items-center gap-2.5"
                              >
                                <span className="text-[#eb5503] font-bold text-sm select-none">
                                  ✳
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          onClick={() => {
                            window.history.pushState({}, "", service.linkUrl);
                            window.dispatchEvent(new Event("popstate"));
                          }}
                          className="font-mono text-xs md:text-sm font-regular text-[#1e1e1e] hover:text-[#eb5503] flex items-center gap-1.5 mt-8 uppercase underline underline-offset-4 cursor-pointer transition-colors self-start"
                        >
                          <span>{service.linkText}</span>
                          <span className="text-sm">↗</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
