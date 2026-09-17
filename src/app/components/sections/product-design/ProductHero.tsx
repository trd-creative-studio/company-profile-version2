import { useState, useEffect, useRef } from "react";
import { navigateToInquiry, scrollToSection } from "../../../utils/navigation";
import { PRODUCT_WORKS, TRAIL_IMAGES, TrailItem } from "./data";
import { getServiceImages } from "../../../data/servicesData";

function TrailCard({
  item,
  index,
  total,
}: {
  item: TrailItem;
  index: number;
  total: number;
}) {
  const [fading, setFading] = useState(false);
  const age = total - 1 - index;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-40 transition-all duration-2200 ease-out"
      style={{
        left: `${item.x}px`,
        top: `${item.y}px`,
        transform: `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${fading ? 0.8 : 1 - age * 0.04
          })`,
        opacity: fading ? 0 : Math.max(0.15, 1 - age * 0.22),
        filter: fading ? "blur(12px)" : age > 1 ? `blur(${age * 2.5}px)` : "none",
      }}
    >
      <div className="w-[100px] h-[75px] sm:w-[130px] sm:h-[95px] rounded-sm overflow-hidden shadow-lg">
        <img
          src={item.image}
          alt="Cursor Trail"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export function ProductHero() {
  const serviceImages = getServiceImages("product-design");
  const heroImages = serviceImages.length > 0 ? serviceImages : PRODUCT_WORKS.map((w) => w.image);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger entrance reveal on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  // Mouse Trail State
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const idCounter = useRef(0);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    const dist = Math.hypot(dx, dy);

    // Spawn new trail image every 45px mouse movement
    if (dist > 45) {
      lastPos.current = { x: e.clientX, y: e.clientY };

      const trailPool = heroImages.length > 0 ? heroImages : TRAIL_IMAGES;
      const newItem: TrailItem = {
        id: idCounter.current++,
        x: e.clientX,
        y: e.clientY,
        image: trailPool[imageIndex.current % trailPool.length],
        rotation: (Math.random() - 0.5) * 16,
        timestamp: Date.now(),
      };

      imageIndex.current++;
      setTrail((prev) => [...prev.slice(-6), newItem]);
    }
  };

  // Clean up expired items from trail state
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrail((prev) => prev.filter((item) => now - item.timestamp < 1100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance slide every 1 second (1000ms)
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 1000);
    return () => clearTimeout(timer);
  }, [heroImages.length]);

  return (
    <section
      onMouseMove={handleHeroMouseMove}
      className="bg-[#f9f9f9] w-full min-h-screen flex flex-col justify-center pt-[80px] pb-6 md:pb-10 px-5 md:px-12 lg:px-16 overflow-hidden relative"
    >
      {/* Mouse Cursor Trail Images */}
      {trail.map((item, index) => (
        <TrailCard key={item.id} item={item} index={index} total={trail.length} />
      ))}

      <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto">
        {/* Left Column: Headline, Subtitle & CTAs with Entrance Reveal */}
        <div
          className={`flex flex-col items-start gap-6 lg:max-w-[500px] shrink-0 text-left transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white mb-4 md:mb-8">
            <span className="size-2 rounded-full bg-[#eb5503] animate-pulse" />
            <span className="font-mono text-xs text-[#1e1e1e] font-regular uppercase">
              AVAILABLE FOR PROJECTS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans font-regular leading-[1.05] text-[#1e1e1e] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[52px] tracking-[-1.5px] md:tracking-[-2.2px]">
            <span className="text-[#eb5503]">UI/UX design</span> for complex digital products.
          </h1>

          {/* Subtitle Description */}
          <p className="font-sans text-[#4d4d4d] text-sm sm:text-base leading-[1.45] mb-4 md:mb-6 max-w-[440px]">
            We turn complex workflows, raw requirements, or generic AI prototypes into clear, build-ready UI/UX design systems.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-wrap items-center gap-8 mt-2">
            <button
              onClick={() => navigateToInquiry("product-design")}
              className="bg-[#eb5503] hover:bg-[#d44c02] text-white px-4 py-2 rounded-full font-mono text-xs md:text-sm font-regular tracking-wider flex items-center gap-4 transition-all duration-200 cursor-pointer"
            >
              <span>START YOUR NEXT PROJECT</span>
              <span className="text-[10px]">▶</span>
            </button>

            <button
              onClick={() => scrollToSection("showcase")}
              className="font-mono text-xs md:text-sm font-medium tracking-wider text-[#1e1e1e] hover:opacity-60 flex items-center gap-1.5 transition-opacity cursor-pointer"
            >
              <span>OUR WORK</span>
              <span className="text-[10px]">▶</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Interactive Card Showcase with Staggered Entrance Reveal */}
        <div
          className={`w-full lg:flex-1 max-w-[750px] min-w-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="bg-white rounded-lg md:rounded-lg p-2 md:p-2 w-full h-[380px] sm:h-[460px] md:h-[500px] lg:h-[540px] flex flex-col justify-between relative overflow-hidden group">
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#f8f8f8]">
              {heroImages.map((imgSrc, idx) => (
                <img
                  key={imgSrc + idx}
                  src={imgSrc}
                  alt={`Product Design Showcase ${idx + 1}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg transform group-hover:scale-[1.02] ${
                    idx === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
