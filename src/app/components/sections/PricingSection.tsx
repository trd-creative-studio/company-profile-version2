import { OrangeBtn } from "../OrangeBtn";

function BulletStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#eb5503] mt-[3px]">
      <path
        d="M8 2v12M2 8h12M3.76 3.76l8.48 8.48M12.24 3.76L3.76 12.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PricingCard({
  tag,
  title,
  desc,
  price,
  cta,
  offers,
  note,
  isFeatured = false,
  onClick,
}: {
  tag: string;
  title: React.ReactNode;
  desc: string;
  price: string;
  cta: string;
  offers: string[];
  note: string;
  isFeatured?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`flex flex-col justify-between p-6 rounded-lg flex-1 min-w-0 transition-all duration-300 gap-6 group ${isFeatured ? "bg-[#f9f9f9]" : "bg-white"
        }`}
    >
      {/* Top Part */}
      <div className="flex flex-col gap-12">
        {/* Tag Badge */}
        <div
          className={`inline-flex items-center justify-center self-start px-3 py-1.5 ${isFeatured ? "bg-white" : "bg-[#f4f4f4]"
            }`}
        >
          <span className="font-mono text-[#1e1e1e] text-xs font-regular uppercase">{tag}</span>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col">
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-xl md:text-2xl tracking-[-0.48px]">{title}</p>
          <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] opacity-0 mt-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3">
            <div className="overflow-hidden">
              <p className="font-sans font-medium leading-[1.5] text-[#4d4d4d] text-sm tracking-[-0.14px]">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="h-px w-full bg-[#f4f4f4]" /> */}

      {/* Middle Part (Starting from, Price, Button) */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-sans font-regular text-[#4d4d4d] text-sm tracking-[-0.14px]">Starting from</span>
          <p className="font-sans font-medium leading-[1.1] text-[#1e1e1e] text-3xl md:text-4xl tracking-[-1.5px]">
            {price}
          </p>
        </div>
        <OrangeBtn label={cta} className="w-full justify-center text-sm md:text-base font-semibold" onClick={onClick} />
      </div>

      {/* Bottom Part (Offers & Final Note) */}
      <div className="flex flex-col gap-6 mt-2 flex-1 justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-sans font-regular text-[#1e1e1e] text-sm">
            What we can offer for you:
          </p>
          <ul className="flex flex-col gap-2">
            {offers.map((offer, index) => (
              <li key={index} className="flex gap-2 items-start text-[#1e1e1e] font-sans font-normal text-sm leading-[1.4] tracking-[-0.14px]">
                <BulletStar />
                <span>{offer}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-sans font-normal leading-[1.5] text-[#77786d] text-xs">
          {note}
        </p>
      </div>
    </div>
  );
}

export function PricingSection() {
  const handleNav = (service: string) => {
    window.history.pushState({}, "", `/?service=${service}`);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <section id="pricing" className="bg-white w-full px-5 md:px-16 lg:px-[150px] pt-16 md:pt-24 lg:pt-[150px] pb-12 md:pb-16 lg:pb-[75px] flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-6 items-center text-center">
        <span className="font-mono font-regular text-[#77786d] text-sm">PRICING</span>
        <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl md:text-[36px] tracking-[-0.72px]">
          Choose based on your needs
          <br className="hidden sm:inline" />
          and find the details.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4 w-full max-w-[1200px]">
        <PricingCard
          tag="[01]"
          title={
            <>
              Product &<br />
              Experience Design
            </>
          }
          desc="For digital products that need clearer flows, stronger usability, and better product structure."
          price="Rp3.000.000"
          cta="CHOOSE DESIGN PACKAGE"
          offers={[
            "UX Testing & Consultancy",
            "Website & Mobile App Design",
            "Complex Product",
          ]}
          note="Final scope depends on page structure and functionality."
          onClick={() => handleNav("product-design")}
        />
        <PricingCard
          tag="[02]"
          title={
            <>
              Website Design &<br />
              Development
            </>
          }
          desc="For businesses that need a clear, thoughtful website from design through development."
          price="Rp3.000.000"
          cta="CHOOSE DEVELOPMENT PACKAGE"
          offers={[
            "Landing Page",
            "Company Profile Website",
            "Custom Website (E-Commerce, Dashboard)",
          ]}
          note="Depends on functionality and development needs."
          isFeatured={true}
          onClick={() => handleNav("website")}
        />
        <PricingCard
          tag="[03]"
          title={
            <>
              AI Video<br />
              Production
            </>
          }
          desc="For products and brands that need stronger visual storytelling through motion and AI production."
          price="Rp1.500.000"
          cta="CHOOSE AI VIDEO PACKAGE"
          offers={[
            "Company Profile",
            "AI UGC Content",
            "Short AI Video",
          ]}
          note="Depends on concept and production complexity."
          onClick={() => handleNav("ai-video")}
        />
      </div>
    </section>
  );
}
