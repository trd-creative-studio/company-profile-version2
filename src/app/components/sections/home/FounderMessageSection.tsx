import React, { useState, useEffect, useRef } from "react";

export function FounderMessageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      // rect.top is 0 when section enters top of viewport
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const p1Progress = Math.min(1, Math.max(0, (scrollProgress - 0.2) * 3));
  const p2Progress = Math.min(1, Math.max(0, (scrollProgress - 0.6) * 3));

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f8f8f8] w-full h-[240vh]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-5 md:px-12">
        {/* Background Supporting Text (Full screen centered reveal with dissolve & zoom animation) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16 pointer-events-none gap-4 sm:gap-8 transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${0.95 + scrollProgress * 0.05})`,
          }}
        >
          <p
            className="font-sans text-[#1e1e1e] text-md sm:text-xl md:text-4xl font-medium leading-[1.2] max-w-[500px] text-center tracking-[-1px] transition-opacity duration-500 ease-out"
            style={{
              opacity: p1Progress,
            }}
          >
            When you partner with TRD, you collaborate directly with us from day one.
          </p>
          <p
            className="font-sans text-[#1e1e1e] text-md sm:text-md md:text-4xl font-medium leading-[1.2] max-w-[500px] text-center tracking-[-1px] transition-opacity duration-500 ease-out"
            style={{
              opacity: p2Progress,
            }}
          >
            We limit our active projects so every product receives our full focus,
            strategic rigor, and craft.
          </p>
        </div>

        {/* Foreground Main Founder Card (Moves UP on scroll to reveal text) */}
        <div
          className="relative z-10 bg-white p-4 sm:p-8 max-w-[504px] w-full min-h-[580px] flex flex-col justify-between transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(-${scrollProgress * 125}vh) rotate(-2deg)`,
          }}
        >
          {/* Card Header Row: Logo Mark Left + Monospace Badge Right */}
          <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
            {/* TRD Creative Studio Logo */}
            <img
              src="/trd-logo.png"
              alt="TRD Creative Studio"
              className="h-8 md:h-9 w-auto object-contain select-none"
            />

            {/* Direct from the Founders Badge */}
            <div className="inline-flex items-center px-3 py-1 bg-[#f9f9f9]">
              <span className="font-mono text-xs text-[#77786d] font-regular uppercase">
                DIRECT FROM THE FOUNDERS
              </span>
            </div>
          </div>

          {/* Core Founder Quote / Headline */}
          <h3 className="font-sans font-medium text-[#1e1e1e] text-4xl sm:text-[50px] md:text-[36px] leading-[1.2] tracking-[-0.8px] mb-8 md:mb-10">
            &ldquo;No account managers. No agency bloat. Just direct, honest
            design execution from people who care.&rdquo;
          </h3>

          {/* Founder Profile Details Row with Top Line Separator */}
          <div className="border-t border-black/[0.08] pt-6 sm:pt-8 flex items-center gap-4 sm:gap-5">
            {/* Founder Avatar / Photo */}
            <img
              src="/dary-ramadhan.png"
              alt="Dary Ramadhan"
              className="size-16 sm:size-28 object-cover shrink-0"
            />

            {/* Profile Text & Social */}
            <div className="flex flex-col items-start min-w-0">
              <span className="font-sans font-medium text-[#1e1e1e] text-base sm:text-md leading-tight">
                Dary Ramadhan
              </span>
              <span className="font-sans text-[#77786d] text-xs sm:text-sm mt-1 mb-2.5 leading-snug">
                co-Founder @ TRD Creative Studio, <br className="hidden sm:inline" />
                Apple Academy Graduate, Product Designer
              </span>

              {/* LinkedIn Icon Link */}
              <a
                href="https://linkedin.com/in/daryramadhan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[#1e1e1e] hover:text-[#eb5503] transition-colors"
                aria-label="Dary Ramadhan LinkedIn"
              >
                <svg className="size-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
