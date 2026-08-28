import { OrangeBtn } from "../OrangeBtn";

function PricingCard({ tag, title, desc, price, note, cta, onClick }: { tag: string; title: string; desc: string; price: string; note: string; cta: string; onClick?: () => void }) {
  return (
    <div className="bg-[#f9f9f9] hover:bg-[#f4f4f4] flex flex-col items-start justify-between p-6 rounded-2xl hover:rounded-none flex-1 min-w-0 gap-8 md:gap-0 md:h-[550px] transition-all duration-300 ease-out group">
      <div className="bg-white inline-flex items-center justify-center px-3 py-1.5">
        <span className="font-mono text-[#1e1e1e] text-xs">{tag}</span>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl tracking-[-0.4px]">{title}</p>
        <p className="font-sans font-medium leading-[1.4] text-[#4d4d4d] text-sm tracking-[-0.14px]">{desc}</p>
      </div>
      {/* <div className="h-px w-full bg-[#F4F4F4] group-hover:bg-[#ffffff] transition-colors duration-300" /> */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <p className="font-sans font-medium leading-[1.5] text-[#4d4d4d] text-sm tracking-[-0.14px]">Starting from</p>
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-4xl tracking-[-1.5px]">{price}</p>
        </div>
        <OrangeBtn label={cta} className="w-full justify-center" onClick={onClick} />
        <p className="font-sans font-regular leading-[1.5] text-[#b4b4b4] text-xs">{note}</p>
      </div>
    </div>
  );
}

export function PricingSection() {
  const handleNav = (e?: React.MouseEvent) => {
    e?.preventDefault();
    window.history.pushState({}, "", "/?service=product-design");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <section id="pricing" className="bg-white w-full px-5 md:px-16 lg:px-[200px] pt-16 md:pt-24 lg:pt-[150px] pb-12 md:pb-16 lg:pb-[75px] flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-6 items-center text-center">
        <span className="font-mono font-regular text-[#77786d] text-sm">PRICING</span>
        <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl md:text-[36px] tracking-[-0.72px]">Start with what your project needs.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <PricingCard tag="UI/UX DESIGN" title="Product & Experience Design" desc="For digital products that need clearer flows, stronger usability, and better product structure." price="Rp5.000.000" note="Depends on product complexity and requirements." cta="VIEW PRODUCT DESIGN" onClick={handleNav} />
        <PricingCard tag="WEB DEV" title="Website Design & Development" desc="For businesses that need a clear, thoughtful website from design through development." price="Rp12.000.000" note="Depends on functionality and development needs." cta="VIEW WEBSITE DEVELOPMENT" />
        <PricingCard tag="AI VIDEO" title="AI Video Production" desc="For products and brands that need stronger visual storytelling through motion and AI-led production." price="Rp5.000.000" note="Depends on concept and production complexity." cta="VIEW AI VIDEO" />
      </div>
    </section>
  );
}
