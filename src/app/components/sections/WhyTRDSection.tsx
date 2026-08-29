import React, { useState } from "react";
import { OrangeBtn } from "../OrangeBtn";
import { LightbulbSvg, MedalSvg, ForwardSvg, CursorSvg } from "../Icons";

function FeatureRow({
  icon,
  title,
  desc,
  isActive,
  onMouseEnter,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`flex gap-4 items-start p-5 rounded-lg transition-all duration-300 ease-out cursor-pointer w-full ${isActive ? "bg-white" : "bg-transparent hover:bg-black/[0.01]"
        }`}
    >
      <div
        className={`rounded-full size-[42px] flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? "bg-[#f4f4f4]" : "bg-transparent"
          }`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="font-sans font-medium leading-[1.2] text-[#1e1e1e] text-base tracking-[-0.4px]">
          {title}
        </p>
        <p
          className={`font-sans font-medium leading-[1.5] text-sm tracking-[-0.14px] transition-colors duration-300 ${isActive ? "text-[#4d4d4d]" : "text-[#77786d]"
            }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export function WhyTRDSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: <LightbulbSvg />,
      title: "Clarity-first thinking",
      desc: "Complex ideas shaped into experiences people can understand and use.",
    },
    {
      icon: <MedalSvg />,
      title: "Founder-led Collaboration",
      desc: "Direct collaboration with the people responsible for the thinking and the work.",
    },
    {
      icon: <ForwardSvg />,
      title: "Built to move forward",
      desc: "Strategic design grounded in business goals and practical implementation.",
    },
    {
      icon: <CursorSvg />,
      title: "Selective by design",
      desc: "Fewer engagements, more attention where it matters.",
    },
  ];

  return (
    <section id="approach" className="bg-[#f9f9f9] w-full px-5 md:px-16 lg:px-[200px] py-16 md:py-24 lg:py-[150px]">
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        {/* Left */}
        <div className="flex flex-col gap-8 lg:w-[45%] shrink-0">
          <span className="font-mono font-regular text-[#77786d] text-sm uppercase tracking-wider">WHY TRD STUDIO?</span>
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl md:text-[36px] tracking-[-1.08px]">
            A lean, founder-led studio built around clarity, direct collaboration, and practical execution.
          </p>
          <OrangeBtn label="EXPLORE OUR WORK" className="w-fit" onClick={handleScrollToWork} />
        </div>

        {/* Right Stack */}
        <div className="flex-1 flex flex-col gap-1 w-full min-w-0 lg:max-w-[550px]">
          {features.map((feat, idx) => (
            <FeatureRow
              key={idx}
              icon={feat.icon}
              title={feat.title}
              desc={feat.desc}
              isActive={activeIndex === idx}
              onMouseEnter={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
