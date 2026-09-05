import React, { useRef, useEffect, useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  stat1Number: string;
  stat1Label: string;
  stat2Number: string;
  stat2Label: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Kristen Juven,",
    role: "Head of Software Engineer @ Amazon",
    quote:
      '"We understand the demands of digitally focused organisations navigating change inside and out. We work closely with ambitious leaders within those organisations who are seeking clarity, craft, and a true partner."',
    stat1Number: "8",
    stat1Label: "Months project duration",
    stat2Number: "300+",
    stat2Label: "Unique assets, pages",
  },
  {
    id: "2",
    name: "Marcus Vance,",
    role: "VP of Product @ Stripe",
    quote:
      '"TRD Creative Studio completely transformed our product identity and marketing presence. Their attention to detail, speed, and design precision were exceptional from day one."',
    stat1Number: "6",
    stat1Label: "Months project duration",
    stat2Number: "180+",
    stat2Label: "Unique assets, pages",
  },
  {
    id: "3",
    name: "Elena Rostova,",
    role: "Co-Founder & CEO @ Resumify",
    quote:
      '"Working with TRD felt like having an elite in-house design team. They brought incredible strategic clarity and delivered a web experience that significantly boosted our conversions."',
    stat1Number: "12",
    stat1Label: "Months project duration",
    stat2Number: "450+",
    stat2Label: "Unique assets, pages",
  },
  {
    id: "4",
    name: "Sarah Jenkins,",
    role: "Design Director @ Framer Lab",
    quote:
      '"The level of motion craft and component system hierarchy delivered by TRD set a new benchmark for our digital ecosystem. Truly world-class collaboration."',
    stat1Number: "5",
    stat1Label: "Months project duration",
    stat2Number: "220+",
    stat2Label: "Unique assets, pages",
  },
  {
    id: "5",
    name: "Alex Chen,",
    role: "Head of Growth @ Fintech Global",
    quote:
      '"Fast execution without sacrificing quality. TRD helped us scale from early prototype to a polished enterprise platform seamlessly."',
    stat1Number: "9",
    stat1Label: "Months project duration",
    stat2Number: "350+",
    stat2Label: "Unique assets, pages",
  },
];

export function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current || !containerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollableDistance = sectionRect.height - viewportHeight;

      if (totalScrollableDistance <= 0) return;

      // Distance scrolled inside the sticky section
      const scrolled = -sectionRect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableDistance));

      setScrollProgress(progress);

      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;
      const maxTranslateX = Math.max(0, trackWidth - containerWidth);

      const translateX = progress * maxTranslateX;
      trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`;
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={sectionRef} id="about" className="relative h-[280vh] bg-[#f8f8f8] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center py-10 md:py-16">
        {/* Header Block matching How We Help style */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-8 md:mb-12 shrink-0">
          {/* Badge */}
          <div className="inline-flex items-center px-2.5 py-1 bg-[#ffffff] border border-black/[0.04] mb-3 md:mb-4">
            <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
              TESTIMONIALS
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            {/* Headline */}
            <h2 className="font-sans font-regular text-[24px] sm:text-[28px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center">
              What our clients say about us
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[600px] text-center">
              Trusted by 20+ partners around the world, we've built a reputation for reliability, integrity, and exceptional results.
            </p>
          </div>
        </div>

        {/* Horizontal Testimonials Track Window */}
        <div ref={containerRef} className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-2 will-change-transform transition-transform ease-out duration-75 max-w-max pl-6 md:pl-[calc(max(3rem,(100vw-1200px)/2+3rem))]"
          >
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 md:p-6 w-[320px] sm:w-[420px] md:w-[460px] shrink-0 flex flex-col justify-between gap-6 md:gap-8"
              >
                {/* Author Info at Top */}
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-[#1e1e1e] text-md md:text-md">
                    {item.name}
                  </span>
                  <span className="font-sans text-[#77786d] text-sm md:text-md mt-0.5">
                    {item.role}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-[#1e1e1e] text-base md:text-lg leading-[1.6] font-regular">
                  {item.quote}
                </p>

                {/* Bottom Separator & Metrics */}
                <div className="border-t border-black/[0.08] pt-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="font-sans font-regular text-3xl md:text-[40px] text-[#1e1e1e] tracking-[-1px] leading-tight">
                      {item.stat1Number}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-[#77786d] mt-1">
                      {item.stat1Label}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-regular text-3xl md:text-[40px] text-[#1e1e1e] tracking-[-1px] leading-tight">
                      {item.stat2Number}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-[#77786d] mt-1">
                      {item.stat2Label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* Right End Spacer to guarantee right padding at scroll end */}
            <div
              className="w-6 md:w-[calc(max(3rem,(100vw-1200px)/2+3rem)-0.5rem)] shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Scroll Progress Bar Indicator */}
        <div className="max-w-[240px] w-full mx-auto mt-8 md:mt-10 px-6 shrink-0 flex flex-col items-center gap-2">
          <div className="w-full bg-black/[0.08] h-1 rounded-full overflow-hidden relative">
            <div
              className="bg-[#eb5503] h-full rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
            />
          </div>
          {/* <span className="font-mono text-[10px] uppercase text-[#77786d] tracking-widest font-medium">
            SCROLL TO EXPLORE ({Math.round(scrollProgress * 100)}%)
          </span> */}
        </div>
      </div>
    </div>
  );
}


