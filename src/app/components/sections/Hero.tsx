import React, { useState, useEffect } from "react";
import { OrangeBtn } from "../OrangeBtn";

// Automatically import all preview images from the assets directory
const imageModules = import.meta.glob("../../../assets/*.{png,jpg,jpeg,webp,svg,avif}", { eager: true });
const previews = Object.values(imageModules)
  .map((mod: any) => mod.default)
  // Filter out any logo folder SVGs or logos if they are somehow matched
  .filter((src) => !src.includes("/logo/"));

export function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (previews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % previews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [previews.length]);

  return (
    <section className="bg-white w-full h-[calc(100vh-70px)] min-h-[600px] lg:min-h-[680px] flex items-center justify-between px-5 md:px-[50px] pt-8 lg:pt-0 pb-12 gap-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* Left Column (Headline & CTAs) */}
        <div className="flex-1 flex flex-col items-start min-w-0">
          {/* Service tags row */}
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 items-center">
            <span className="font-mono font-regular text-[#77786d] text-xs md:text-sm whitespace-nowrap">PRODUCT & EXPERIENCE DESIGN</span>
            <span className="text-black/20 text-xs md:text-sm select-none">·</span>
            <span className="font-mono font-regular text-[#77786d] text-xs md:text-sm whitespace-nowrap">WEBSITE DESIGN & DEVELOPMENT</span>
            <span className="text-black/20 text-xs md:text-sm select-none">·</span>
            <span className="font-mono font-regular text-[#77786d] text-xs md:text-sm whitespace-nowrap">AI VIDEO PRODUCTION</span>
          </div>

          {/* Headline */}
          <h1 className="font-sans font-regular leading-[1.1] text-[#1e1e1e] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1.5px] lg:tracking-[-2px] max-w-[650px] mt-6 mb-8">
            We turn complex ideas into clear digital experiences.
          </h1>

          {/* Buttons row */}
          <div className="flex items-center gap-4 select-none">
            <OrangeBtn
              label="START A PROJECT"
              onClick={() => {
                window.history.pushState({}, "", "/?page=inquiry");
                window.dispatchEvent(new Event("popstate"));
              }}
            />
            <button
              onClick={() => {
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono text-sm text-[#1e1e1e] hover:text-[#eb5503] transition-colors flex items-center gap-2 group ml-2"
            >
              SEE OUR WORK
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">▶</span>
            </button>
          </div>
        </div>

        {/* Right Column (Slideshow Container) */}
        <div className="w-full lg:w-[45%] xl:w-[50%] aspect-[4/3] max-h-[400px] lg:max-h-[500px] rounded-2xl overflow-hidden relative shadow-sm shrink-0 bg-[#f9f9f9]">
          {previews.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Studio Work Preview"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentIdx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
