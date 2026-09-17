import { useState, useEffect, useRef } from "react";

const PROCESS_STEPS = [
  {
    week: "WEEK 01",
    title: "Discovery & Audit",
    desc: "Understand the business, users, existing product, requirements, and key areas to improve.",
  },
  {
    week: "WEEK 02",
    title: "UX + Wireframes",
    desc: "Define flows, hierarchy, states, and interaction logic before final UI.",
  },
  {
    week: "WEEK 03",
    title: "Product UI",
    desc: "Turn the approved experience into detailed, consistent product interfaces.",
  },
  {
    week: "WEEK 04",
    title: "Handoff + QA",
    desc: "Prepare implementation-ready files and support development through design QA.",
  },
];

export function ProductProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to trigger scroll reveal when user scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle active walking progress line every 3 seconds when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="bg-white w-full py-16 md:pt-[150px] md:pb-[150px] px-5 md:px-12 lg:px-20 flex flex-col items-center gap-6 md:gap-8 overflow-hidden"
    >
      <style>{`
        @keyframes walkProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      {/* Section Header */}
      <div
        className={`max-w-[800px] mx-auto px-6 md:px-8 flex flex-col items-center gap-5 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center px-2 py-1 bg-[#f9f9f9] mb-4">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            OUR PRODUCT PROCESS
          </span>
        </div>

        <div className="flex flex-col gap-5 items-center mb-4">
          {/* Headline */}
          <h2 className="font-sans font-regular leading-[1.2] text-[24px] sm:text-[24px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center">
            From complex requirements to a build-ready product experience.
          </h2>
        </div>
      </div>

      {/* 4 Cards Grid with Staggered Scroll Reveal & Sleek 1px Walking Progress Line */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 w-full max-w-[1150px]">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={step.week}
              onClick={() => setActiveIndex(idx)}
              className={`relative md:rounded-md p-6 flex flex-col justify-between h-[320px] md:h-[370px] overflow-hidden text-left group cursor-pointer transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              } ${
                isActive
                  ? "bg-[#f4f4f4]"
                  : "bg-[#f9f9f9] hover:bg-[#f4f4f4]"
              }`}
              style={{
                transitionDelay: `${idx * 250 + 200}ms`,
              }}
            >
              {/* Sleek 1px Walking Progress Line on Top */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-black/[0.04] overflow-hidden">
                {isActive && (
                  <div
                    key={`progress-${activeIndex}`}
                    className="h-full bg-[#eb5503]"
                    style={{ animation: "walkProgress 3000ms linear forwards" }}
                  />
                )}
              </div>

              {/* Top Badge */}
              <div className="bg-white px-2 py-1 font-mono font-medium text-xs text-[#1e1e1e] tracking-wider uppercase w-fit">
                {step.week}
              </div>

              {/* Middle Title */}
              <h3 className="font-sans font-medium text-[30px] sm:text-[24px] text-[#1e1e1e] tracking-[-0.5px] my-6">
                {step.title}
              </h3>

              {/* Bottom Description */}
              <p className="font-sans text-[#4d4d4d] text-sm md:text-[14px] leading-[1.45]">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Note */}
      <p
        className={`font-sans font-normal text-[#77786d] text-xs sm:text-sm text-center max-w-[680px] mt-4 transition-all duration-700 delay-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Sprint durations range from 1–4 weeks based on feature scope and product complexity.
      </p>
    </section>
  );
}
