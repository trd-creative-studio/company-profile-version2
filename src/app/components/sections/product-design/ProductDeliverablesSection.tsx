import { useState, useEffect, useRef } from "react";
import { DELIVERABLES } from "./data";

export function ProductDeliverablesSection() {
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
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#eb5503] w-full py-16 md:py-[150px] px-5 md:px-12 lg:px-20 text-white overflow-hidden"
    >
      <div className="max-w-[1150px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
        {/* Left Column: Text & Disclaimers */}
        <div
          className={`flex flex-col justify-between h-full lg:max-w-[420px] shrink-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="bg-white/20 text-white px-3 py-1 font-mono text-xs tracking-wider uppercase inline-block">
              OUR DELIVERABLES
            </div>
            <h2 className="font-sans font-regular text-white text-[24px] sm:text-[24px] md:text-[38px] tracking-[-1px] leading-[1.2] mt-6">
              What you’ll get.
            </h2>
            <p className="font-sans text-[#ffffff] text-base md:text-lg leading-[1.5] max-w-[640px] text-left mt-4">
              Clear product outputs, structured files, and implementation support.
            </p>
          </div>

          {/* Bottom Footnotes */}
          <div className="mt-12 md:mt-24 space-y-1 font-sans text-xs md:text-sm text-white/80">
            <p>* Included based on project scope & tier.</p>
            <p>** Optional add-on service.</p>
          </div>
        </div>

        {/* Right Column: 10 Deliverables Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-1 w-full lg:w-[60%] shrink-0">
          {DELIVERABLES.map((item, idx) => (
            <div
              key={item.num}
              className={`bg-white rounded-sm md:rounded-md p-4 md:p-5 flex items-center gap-4 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: `${idx * 120 + 200}ms`,
              }}
            >
              <span className="bg-[#f4f4f4] text-[#1e1e1e] font-mono text-xs font-medium px-2 py-1 flex items-center justify-center shrink-0">
                {item.num}
              </span>
              <span className="font-sans font-regular text-[#1e1e1e] text-base md:text-lg">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
