import { useState, useEffect, useRef } from "react";
import { navigateToInquiry, scrollToSection } from "../../../utils/navigation";
import { PRODUCT_WORKS, TRAIL_IMAGES, TrailItem } from "./data";

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
        transform: `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${
          fading ? 0.8 : 1 - age * 0.04
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const currentWork = PRODUCT_WORKS[activeIndex];

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

      const newItem: TrailItem = {
        id: idCounter.current++,
        x: e.clientX,
        y: e.clientY,
        image: TRAIL_IMAGES[imageIndex.current % TRAIL_IMAGES.length],
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

  // Auto-advance slide every 4 seconds (4000ms)
  useEffect(() => {
    setProgressKey((prev) => prev + 1);
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCT_WORKS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section
      onMouseMove={handleHeroMouseMove}
      className="bg-[#f9f9f9] w-full min-h-screen flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-16 px-5 md:px-12 lg:px-16 overflow-hidden relative"
    >
      {/* Mouse Cursor Trail Images */}
      {trail.map((item, index) => (
        <TrailCard key={item.id} item={item} index={index} total={trail.length} />
      ))}

      {/* Keyframes for 4-second walking line animation */}
      <style>{`
        @keyframes walkingProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto">
        {/* Left Column: Headline, Subtitle & CTAs */}
        <div className="flex flex-col items-start gap-6 lg:max-w-[500px] shrink-0 text-left">
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
          <p className="font-sans text-[#4d4d4d] text-sm sm:text-base leading-[1.45] mb-4 md:mb-6 max-w-[400px]">
            We turn complex workflows and requirements into clear, build-ready experiences.
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
              onClick={() => scrollToSection("process")}
              className="font-mono text-xs md:text-sm font-medium tracking-wider text-[#1e1e1e] hover:opacity-60 flex items-center gap-1.5 transition-opacity cursor-pointer"
            >
              <span>OUR WORK</span>
              <span className="text-[10px]">▶</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Interactive Card Showcase */}
        <div className="w-full lg:flex-1 max-w-[750px] min-w-0">
          <div className="bg-white rounded-lg md:rounded-lg p-2 md:p-2 w-full h-[380px] sm:h-[460px] md:h-[500px] lg:h-[540px] flex flex-col justify-between relative overflow-hidden group">
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#f8f8f8]">
              <img
                src={currentWork.image}
                alt={currentWork.title}
                className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-out transform group-hover:scale-[1.02]"
              />

              {/* Segmented Walking Line Progress Indicator inside Image Div */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-2 px-1 pointer-events-auto">
                {PRODUCT_WORKS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="h-1 flex-1 rounded-full bg-white/40 overflow-hidden cursor-pointer relative backdrop-blur-xs"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {idx === activeIndex ? (
                      <div
                        key={progressKey}
                        className="h-full bg-[#eb5503] rounded-full"
                        style={{
                          animation: "walkingProgress 4s linear forwards",
                        }}
                      />
                    ) : (
                      <div className="h-full rounded-full bg-transparent" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
