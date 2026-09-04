import React, { useState, useEffect, useRef } from "react";

const CAROUSEL_ITEMS = [
  {
    id: "pupuk",
    title: "Pupuk Indonesia",
    tag: "WEB DESIGN / CORPORATE",
    serviceHighlight: "Corporate Website",
    image: "/work/showcase1.png",
  },
  {
    id: "greenflags",
    title: "Greenflags",
    tag: "LANDING PAGE / BRANDING",
    serviceHighlight: "AI Video Production",
    image: "/work/showcase3.png",
  },
  {
    id: "resumify",
    title: "Resumify",
    tag: "ILLUSTRATION / UI/UX DESIGN / BRAND",
    serviceHighlight: "Brand & UI/UX",
    image: "/hero/resumify-ai.png",
  },
  {
    id: "tehchouse",
    title: "TehcHouse",
    tag: "LOGO / BRANDING",
    serviceHighlight: "E-Commerce Website",
    image: "/work/showcase2.png",
  },
  {
    id: "junso",
    title: "Junso Men's Skincare",
    tag: "LANDING PAGE / WEB DEVELOPMENT",
    serviceHighlight: "SaaS & App Design",
    image: "/hero/hero5.png",
  },
];

const TRAIL_IMAGES = [
  "/work/showcase1.png",
  "/work/showcase3.png",
  "/hero/resumify-ai.png",
  "/work/showcase2.png",
  "/hero/hero5.png",
];

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
  timestamp: number;
}

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

  // Age in stack: 0 = newest / front
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

function CarouselCard({
  item,
  isActive,
}: {
  item: (typeof CAROUSEL_ITEMS)[0];
  isActive: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`w-[280px] sm:w-[350px] md:w-[400px] lg:w-[430px] shrink-0 flex flex-col gap-4 group cursor-pointer transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-70 scale-[0.99] grayscale"
        }`}
    >
      <div
        className={`relative aspect-[16/10] sm:aspect-[4/3] max-h-[220px] sm:max-h-[260px] md:max-h-[290px] w-full rounded-sm overflow-hidden bg-white transition-all duration-300 ${isActive
          ? "border-[#eb5503]/30"
          : "border-black/[0.04] group-hover:border-black/10"
          }`}
      >
        {item.image && !imgError ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#f4f4f4] flex items-center justify-center">
            <span className="font-mono text-xs text-[#77786d] uppercase">{item.title}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 px-2">
        <h3 className="font-sans font-medium text-[#1e1e1e] text-base sm:text-lg tracking-[-0.3px] truncate">
          {item.title}
        </h3>
        <span className="font-mono text-[12px] text-[#424242] uppercase shrink-0">
          {item.tag}
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState<number>(24);

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

  // Measure exact pixel left position of the headline text
  useEffect(() => {
    const updatePadding = () => {
      if (headlineRef.current) {
        const rect = headlineRef.current.getBoundingClientRect();
        if (rect.left > 0) {
          setPaddingLeft(rect.left);
        }
      }
    };

    updatePadding();
    const timer = setTimeout(updatePadding, 50);
    const timer2 = setTimeout(updatePadding, 300);
    window.addEventListener("resize", updatePadding);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  // Measure track scrollable distance
  useEffect(() => {
    const updateMaxTranslate = () => {
      if (trackRef.current) {
        const scrollWidth = trackRef.current.scrollWidth;
        const clientWidth = window.innerWidth;
        const maxVal = Math.max(0, scrollWidth - clientWidth + 48);
        setMaxTranslate(maxVal);
      }
    };

    updateMaxTranslate();
    window.addEventListener("resize", updateMaxTranslate);
    return () => window.removeEventListener("resize", updateMaxTranslate);
  }, [paddingLeft]);

  // Calculate scroll progress based on section pin
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = sectionRef.current.offsetHeight - window.innerHeight;

      if (totalHeight <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.min(1, Math.max(0, currentScroll / totalHeight));

      setProgress(rawProgress);

      const count = CAROUSEL_ITEMS.length;
      const idx = Math.min(count - 1, Math.floor(rawProgress * count));
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToItem = (index: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const totalHeight = sectionRef.current.offsetHeight - window.innerHeight;
    const targetProgress = index / (CAROUSEL_ITEMS.length - 1);
    const targetScrollY = window.scrollY + rect.top + targetProgress * totalHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handleNavigateToInquiry = () => {
    window.history.pushState({}, "", "/?page=inquiry");
    window.dispatchEvent(new Event("popstate"));
  };

  const handleScrollToServices = () => {
    const servicesElem = document.getElementById("services") || document.getElementById("work");
    if (servicesElem) {
      const offset = 80;
      const elementPosition = servicesElem.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const translateX = progress * maxTranslate;

  return (
    <section ref={sectionRef} className="relative w-full h-[300vh] bg-[#f8f8f8]">
      {/* Interactive Cursor Image Trail Elements */}
      {trail.map((item, idx) => (
        <TrailCard
          key={item.id}
          item={item}
          index={idx}
          total={trail.length}
        />
      ))}

      {/* Sticky Frame fitting exact 100vh viewport height - vertically centered */}
      <div
        onMouseMove={handleHeroMouseMove}
        className="sticky top-0 h-screen max-h-screen w-full flex flex-col justify-center gap-8 sm:gap-10 lg:gap-16 overflow-hidden pt-16 pb-8 bg-[#f8f8f8]"
      >
        {/* Header content container */}
        <div className="w-full px-6 md:px-[150px] shrink-0">
          <div>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white mb-4 md:mb-8">
              <span className="size-2 rounded-full bg-[#eb5503] animate-pulse" />
              <span className="font-mono text-xs text-[#1e1e1e] font-regular uppercase">
                AVAILABLE FOR PROJECTS
              </span>
            </div>

            {/* Headline & Right Description Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-10">
              {/* Headline */}
              <h1
                ref={headlineRef}
                className="font-sans font-regular leading-[1.05] text-[#1e1e1e] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[52px] tracking-[-1.5px] md:tracking-[-2.2px] max-w-[640px]"
              >
                Design partner studio <br />
                for <span className="text-[#eb5503]">UI/UX Design</span>
              </h1>

              {/* Right Paragraph & Action Buttons */}
              <div className="flex flex-col items-start lg:max-w-[440px] shrink-0">
                <p className="font-sans text-[#4d4d4d] text-sm sm:text-base leading-[1.45] mb-4 md:mb-6">
                  We are a studio specialized in UI/UX Design, Website Development & AI Video Production based in Indonesia.
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <button
                    onClick={handleNavigateToInquiry}
                    className="bg-[#eb5503] hover:bg-[#d44c02] text-white px-4 py-2 rounded-full font-mono text-xs md:text-sm font-regular tracking-wider flex items-center gap-4 transition-all duration-200 cursor-pointer"
                  >
                    <span>START A PROJECT</span>
                    <span className="text-[10px]">▶</span>
                  </button>

                  <button
                    onClick={handleScrollToServices}
                    className="font-mono text-xs md:text-sm font-medium tracking-wider text-[#1e1e1e] hover:opacity-60 flex items-center gap-1.5 transition-opacity cursor-pointer"
                  >
                    <span>SEE OUR SERVICES</span>
                    <span className="text-xs">▸</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Horizontal Scroll Track */}
        <div className="w-full overflow-hidden shrink-0">
          <div
            ref={trackRef}
            className="flex gap-2 sm:gap-1 ease-out select-none will-change-transform"
            style={{
              transform: `translate3d(-${translateX}px, 0, 0)`,
              paddingLeft: `${paddingLeft}px`,
              paddingRight: "1.5rem",
              transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {CAROUSEL_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => scrollToItem(idx)}
              >
                <CarouselCard item={item} isActive={idx === activeIndex} />
              </div>
            ))}
            <div className="w-12 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
