import { OrangeBtn } from "../OrangeBtn";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1e1e1e] w-full px-5 md:px-10 pt-16 md:pt-24 lg:pt-[100px] pb-10 md:pb-[150px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-8">
        {/* Left block */}
        <div className="flex flex-col gap-16 flex-1 min-w-0">
          <h2 className="font-sans font-regular leading-[1] text-white text-[38px] sm:text-[52px] md:text-[60px] lg:text-[64px] tracking-[-1.3px] md:tracking-[-2px] max-w-[680px]">
            Have a product, website, or idea that needs more clarity?
          </h2>
          <div className="flex flex-wrap gap-8 items-center">
            <OrangeBtn label="START A PROJECT" onClick={(e) => {
              e?.preventDefault();
              window.history.pushState({}, "", "/?page=inquiry");
              window.dispatchEvent(new Event("popstate"));
            }} />
            <span className="font-mono font-regular text-white text-base cursor-pointer hover:opacity-70 transition-opacity">VIEW WORKS</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-white font-regular text-sm">PRIVACY POLICY</span>
            <div className="flex flex-col font-mono font-light text-white text-sm leading-normal">
              <span>ⓒTRD CREATIVE STUDIO 2024-2026.</span>
              <span>ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>

        {/* Right links */}
        <div className="flex gap-12 md:gap-20 items-start shrink-0">
          <div className="flex flex-col gap-3">
            <span className="font-mono font-light text-white text-base">PRODUCT & UI/UX DESIGN</span>
            <span className="font-mono font-light text-white text-base">WEBSITE DESIGN & DEVELOPMENT</span>
            <div className="flex items-center gap-2">
              <span className="font-mono font-light text-white text-base">AI VIDEO PRODUCTION</span>
              <div className="bg-[#eb5503] px-2 py-0.5 rounded-full">
                <span className="font-mono font-light text-white text-sm">New</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono font-light text-[#707070] text-base">CREATIVE PRODUCTION</span>
            <span className="font-mono font-light text-[#707070] text-base">SOCIAL MEDIA DESIGN</span>
            <span className="font-mono font-light text-[#707070] text-base">VISUAL MERCHANDISING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
