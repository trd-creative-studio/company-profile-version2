import React, { useState, useEffect } from "react";

// Import tool SVG icons from src/assets/tools
import toolAe from "@/assets/tools/ae.svg";
import toolAi from "@/assets/tools/ai.svg";
import toolElementor from "@/assets/tools/elementor.svg";
import toolFigjam from "@/assets/tools/figjam.svg";
import toolFigma from "@/assets/tools/figma.svg";
import toolFramer from "@/assets/tools/framer.svg";
import toolGmeet from "@/assets/tools/gmeet.svg";
import toolLottie from "@/assets/tools/lottie.svg";
import toolMedusa from "@/assets/tools/medusa.svg";
import toolNextjs from "@/assets/tools/nextjs.svg";
import toolNotion from "@/assets/tools/notion.svg";
import toolReact from "@/assets/tools/react.svg";
import toolSlack from "@/assets/tools/slack.svg";
import toolTailwind from "@/assets/tools/tailwind.svg";
import toolWebflow from "@/assets/tools/webflow.svg";
import toolWordpress from "@/assets/tools/wordpress.svg";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    description:
      "We align on business goals, users, requirements, constraints, existing systems, and what needs to improve.",
  },
  {
    step: "02",
    title: "Shape",
    description:
      "We define priorities, journeys, information structure, roles, and the experience direction.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We develop the interface, interactions, states, and detailed product experience.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "We prepare the work for implementation and support the development team when required.",
  },
];

const TOOL_ITEMS = [
  { name: "Figma", logo: toolFigma },
  { name: "FigJam", logo: toolFigjam },
  { name: "Framer", logo: toolFramer },
  { name: "Webflow", logo: toolWebflow },
  { name: "Next.js", logo: toolNextjs },
  { name: "React", logo: toolReact },
  { name: "Tailwind CSS", logo: toolTailwind },
  { name: "Notion", logo: toolNotion },
  { name: "Slack", logo: toolSlack },
  { name: "Adobe Illustrator", logo: toolAi },
  { name: "After Effects", logo: toolAe },
  { name: "Lottie", logo: toolLottie },
  { name: "Medusa", logo: toolMedusa },
  { name: "WordPress", logo: toolWordpress },
  { name: "Elementor", logo: toolElementor },
  { name: "Google Meet", logo: toolGmeet },
];

// Edit this constant to easily adjust the height/size of all tool logos
const TOOL_LOGO_HEIGHT = "h-4 md:h-5";

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle cards every 4 seconds continuously without hover disruption
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="bg-[#ffffff] w-full py-16 md:py-[150px]">
      <style>{`
        @keyframes walkProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center px-2 py-1 bg-[#f9f9f9] mb-6">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            HOW WE THINK
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {/* Headline */}
          <h2 className="font-sans font-regular text-[24px] sm:text-[24px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center">
            Our Process
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[640px] text-center mb-12 md:mb-16">
            AI moves fast, but users still need trust, clarity, and a product that feels natural. That&apos;s where our design, product thinking, and engineering come in.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 w-full max-w-[1200px] mb-16 md:mb-24">
          {PROCESS_STEPS.map((item, idx) => {
            const isCardActive = activeIndex === idx;

            return (
              <div
                key={item.step}
                className={`relative rounded-md p-6 sm:p-6 flex flex-col justify-between min-h-[320px] md:min-h-[370px] overflow-hidden transition-all duration-300 group ${isCardActive
                  ? "bg-[#f4f4f4]"
                  : "bg-[#f9f9f9] hover:bg-[#f4f4f4]"
                  }`}
              >
                {/* Walking Progress Line at the Top of Active Card */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-black/[0.04] overflow-hidden">
                  {isCardActive && (
                    <div
                      key={`progress-${activeIndex}`}
                      className="h-full bg-[#eb5503]"
                      style={{ animation: "walkProgress 3000ms linear forwards" }}
                    />
                  )}
                </div>

                {/* Step Number Badge */}
                <div className="bg-white px-3 w-fit">
                  <span className="font-mono text-xs text-[#77786d] font-medium">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans font-medium text-[30px] sm:text-[24px] text-[#1e1e1e] tracking-[-0.5px] my-6">
                  {item.title}
                </h3>

                {/* Description (Always visible) */}
                <p className="font-sans text-[#4d4d4d] text-sm md:text-[14px] leading-[1.45]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tools Subsection Badge */}
        <div className="inline-flex items-center px-2 py-1 bg-[#f9f9f9] mb-8">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            THE TOOLS BEHIND OUR PROCESS
          </span>
        </div>

        {/* Tools Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-[1200px] w-full">
          {TOOL_ITEMS.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center group px-3.5 py-2 rounded-sm bg-white border border-black/[0.04] hover:bg-[#f4f4f4] transition-all duration-300 cursor-default"
              title={tool.name}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className={`${TOOL_LOGO_HEIGHT} w-auto object-contain opacity-75 group-hover:opacity-100 transition-all duration-300`}
              />
              <span className="font-sans text-xs md:text-sm font-medium text-[#1e1e1e] group-hover:text-black transition-colors whitespace-nowrap ml-2">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
