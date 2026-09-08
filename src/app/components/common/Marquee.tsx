import React, { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // base scrolling speed (pixels per frame)
  gap?: string;   // Tailwind gap class, e.g. "gap-6"
  reverse?: boolean; // scroll in reverse direction (to the right)
}

export function Marquee({ children, speed = 1, gap = "gap-6", reverse = false }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const scrollPosRef = useRef(0);
  const speedRef = useRef(speed);

  // Keep speedRef in sync with state to avoid closures in animation loop
  useEffect(() => {
    speedRef.current = currentSpeed;
  }, [currentSpeed]);

  // Sync prop changes to state
  useEffect(() => {
    setCurrentSpeed(speed);
  }, [speed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    
    // Initialize position on mount or reverse prop change
    const initialHalfWidth = container.scrollWidth / 2;
    if (reverse && (scrollPosRef.current === 0 || scrollPosRef.current >= initialHalfWidth)) {
      scrollPosRef.current = initialHalfWidth;
    }

    const scroll = () => {
      const halfWidth = container.scrollWidth / 2;
      
      if (reverse) {
        scrollPosRef.current -= speedRef.current;
        if (scrollPosRef.current <= 0) {
          scrollPosRef.current = halfWidth;
        }
      } else {
        scrollPosRef.current += speedRef.current;
        if (scrollPosRef.current >= halfWidth) {
          scrollPosRef.current = 0;
        }
      }

      container.style.transform = `translate3d(-${scrollPosRef.current}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [reverse]);

  return (
    <div
      className="overflow-hidden w-full flex"
      onMouseEnter={() => setCurrentSpeed(speed * 0.50)} // Slow down to 50% of speed on hover
      onMouseLeave={() => setCurrentSpeed(speed)}       // Restore full speed on leave
    >
      <div
        ref={containerRef}
        className={`flex ${gap} items-center shrink-0 will-change-transform`}
      >
        <div className={`flex ${gap} items-center shrink-0`}>
          {children}
        </div>
        <div className={`flex ${gap} items-center shrink-0`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

