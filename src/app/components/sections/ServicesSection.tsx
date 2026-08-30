import { OrangeBtn } from "../OrangeBtn";
import { ArrowRightIcon } from "../Icons";
import { LogoSlot } from "./LogoStripSection";

function ServicePanel({
  title,
  desc,
  linkLabel,
  onClick,
}: { title: string; desc: string; linkLabel: string; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="flex flex-col h-[400px] items-start justify-between p-6 md:p-8 flex-1 min-w-0 bg-[#f9f9f9] hover:bg-[#f4f4f4] rounded-2xl hover:rounded-none transition-all duration-300 ease-out group cursor-pointer">
      <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-xl md:text-2xl tracking-[-0.48px]">{title}</p>
      <div className="flex flex-col w-full">
        <p className="font-sans font-medium leading-[1.5] text-[#4d4d4d] text-sm tracking-[-0.14px]">{desc}</p>
        <div className="flex items-center justify-between w-full rounded-full max-h-0 opacity-0 overflow-hidden mt-0 pointer-events-none group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-6 group-hover:pointer-events-auto transition-all duration-300 ease-out">
          <span className="font-mono text-[#1e1e1e] text-base">{linkLabel}</span>
          <ArrowRightIcon color="#1E1E1E" />
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const handleNav = (e?: React.MouseEvent) => {
    e?.preventDefault();
    window.history.pushState({}, "", "/?service=product-design");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <section id="services" className="bg-white w-full px-5 md:px-16 lg:px-[200px] py-16 md:py-24 lg:pt-[150px] lg:pt-[75px] flex flex-col gap-16">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex flex-col gap-6 max-w-[531px]">
          <span className="font-mono font-regular text-[#77786d] text-sm">OUR SERVICES</span>
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl md:text-[36px] tracking-[-0.72px]">
            Three focused service lines, built around clarity and execution.
          </p>
        </div>
        <OrangeBtn label="EXPLORE ALL SERVICES" className="shrink-0 self-start" />
      </div>

      {/* Service panels */}
      <div className="flex flex-col md:flex-row gap-2">
        <ServicePanel title="Product & Experience Design" desc="For digital products that need clearer flows, stronger usability, and better product structure." linkLabel="EXPLORE DESIGN" onClick={handleNav} />
        <ServicePanel title="Website Design & Development" desc="For businesses that need a clear, thoughtful website from design through development." linkLabel="EXPLORE WEBSITE" />
        <ServicePanel title="AI Video Production" desc="For products and brands that need stronger visual storytelling through motion and AI-led production." linkLabel="EXPLORE AI VIDEO" />
      </div>

      {/* Tools */}
      {/* <div className="flex flex-col gap-8">
        <span className="font-mono font-regular text-[#77786d] text-base">TOOLS WE WORK WITH</span>
        <div className="flex flex-wrap gap-1 md:gap-3 items-center overflow-x-auto">
          {["figma", "nextjs", "chatgpt", "weavy", "seedance"].map((logo) => (
            <LogoSlot key={logo} name={logo} />
          ))}
        </div>
      </div> */}
    </section>
  );
}
