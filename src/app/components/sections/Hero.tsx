import { Marquee } from "../Marquee";

// Automatically import all preview images from the assets directory
const imageModules = import.meta.glob("../../../assets/*.{png,jpg,jpeg,webp,svg}", { eager: true });
const previews = Object.values(imageModules).map((mod: any) => mod.default);

export function Hero() {

  return (
    <section className="bg-white w-full h-[calc(100vh-70px)] min-h-[600px] lg:min-h-[680px] flex flex-col justify-between pt-16 pb-8 md:pb-12 gap-6 overflow-hidden">
      <div className="flex flex-col gap-8 md:gap-[42px] max-w-[1000px] px-5 md:px-[50px] pt-4 md:pt-8">
        {/* Service tags row */}
        <div className="flex flex-wrap gap-2 md:gap-6 items-center">
          <span className="font-mono font-regular text-[#77786d] text-sm md:text-sm whitespace-nowrap">PRODUCT & EXPERIENCE DESIGN</span>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" className="hidden md:block shrink-0"><circle cx="2" cy="2" r="2" fill="#D9D9D9" /></svg>
          <span className="font-mono font-regular text-[#77786d] text-sm md:text-sm whitespace-nowrap">WEBSITE DESIGN & DEVELOPMENT</span>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" className="hidden md:block shrink-0"><circle cx="2" cy="2" r="2" fill="#D9D9D9" /></svg>
          <span className="font-mono font-regular text-[#77786d] text-sm md:text-sm whitespace-nowrap">AI VIDEO PRODUCTION</span>
        </div>

        {/* Headline */}
        <p className="font-sans font-regular leading-[1] text-[#1e1e1e] text-[48px] sm:text-[52px] md:text-[60px] lg:text-[64px] tracking-[-1.3px] md:tracking-[-2px] max-w-[609px]">
          We turn complex ideas into clear digital experiences.
        </p>
      </div>

      {/* Preview Marquee */}
      <div className="w-full py-2">
        <Marquee speed={0.3} gap="gap-2 md:gap-2">
          {previews.map((src, idx) => (
            <div
              key={`hero-pre-${idx}`}
              className="w-[360px] sm:w-[360px] md:w-[400px] h-[250px] sm:h-[240px] md:h-[260px] rounded-lg overflow-hidden shrink-0 transition-all duration-500 ease-out"
            >
              <img
                src={src}
                alt="Studio Work Preview"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
