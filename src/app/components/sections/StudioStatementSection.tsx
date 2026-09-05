import React, { useState, useEffect, useRef } from "react";

export function StudioStatementSection() {
  const p1 =
    "TRD Creative studio is a lean, founder-led studio built around clarity, direct collaboration, and practical execution.";
  const p2 =
    "We help teams bring clarity to digital products, websites, and visual experiences through strategy, design, and practical execution.";

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const totalChars = p1.length + p2.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when orange card top reaches 75% of screen height
      // Complete revealing when container is centered in viewport
      const start = windowHeight * 0.75;
      const end = windowHeight * 0.2;
      const rawProgress = (start - rect.top) / (start - end);
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#f8f8f8] px-4 md:px-10 py-10 md:py-16">
      <div
        ref={containerRef}
        className="mx-auto bg-[#eb5503] rounded-[20px] md:rounded-[36px] p-8 md:p-14 lg:p-20 max-w-[1500px] text-white shadow-sm flex flex-col items-center justify-center text-center gap-8 md:gap-12"
      >
        {/* Statement Paragraph 1 */}
        <p className="font-sans font-regular text-3xl sm:text-3xl md:text-[38px] lg:text-[46px] leading-[1.25] tracking-[-1px] md:tracking-[-1.5px] max-w-[900px] text-left md:text-center mx-auto">
          {p1.split("").map((char, idx) => {
            const globalIndex = idx;
            const threshold = globalIndex / totalChars;
            const isRevealed = scrollProgress >= threshold;
            return (
              <span
                key={idx}
                className="transition-opacity duration-150 ease-out inline"
                style={{ opacity: isRevealed ? 1 : 0.4 }}
              >
                {char}
              </span>
            );
          })}
        </p>

        {/* Statement Paragraph 2 - Starts after Paragraph 1 completes */}
        <p className="font-sans font-regular text-3xl sm:text-3xl md:text-[38px] lg:text-[46px] leading-[1.25] tracking-[-1px] md:tracking-[-1.5px] max-w-[900px] text-left md:text-center mx-auto">
          {p2.split("").map((char, idx) => {
            const globalIndex = p1.length + idx;
            const threshold = globalIndex / totalChars;
            const isRevealed = scrollProgress >= threshold;
            return (
              <span
                key={idx}
                className="transition-opacity duration-150 ease-out inline"
                style={{ opacity: isRevealed ? 1 : 0.4 }}
              >
                {char}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
