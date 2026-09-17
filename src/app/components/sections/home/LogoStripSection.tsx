import React, { useState, useEffect, useRef } from "react";
import { LogoSlot } from "../../common/LogoSlot";

export function LogoStripSection() {
  const clientLogos = [
    "client-junso",
    "client-metalindo",
    "client-nyambee",
    "client-pupuk",
    "client-synapsis",
    "client-tehchouse",
    "client-greenflags",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="bg-[#f9f9f9] w-full py-[75px] md:pb-24 flex flex-col gap-6 md:gap-8 items-center overflow-hidden"
      data-name="Home Clients Section"
    >
      {/* Title */}
      <div
        className={`text-center px-5 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-sans font-medium text-[#1e1e1e] text-center text-sm md:text-md tracking-[-0.1px]">
          Selected experience & collaborations
        </p>
      </div>

      {/* Static Logo Row with client logos */}
      <div
        className={`max-w-[1200px] w-full px-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2 md:gap-2 lg:gap-0 transition-all duration-[1400ms] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {clientLogos.map((logo) => (
          <LogoSlot key={logo} name={logo} />
        ))}
      </div>
    </section>
  );
}
