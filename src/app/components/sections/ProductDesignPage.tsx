import { useState } from "react";
import { Navbar } from "./Navbar";
import { LogoStripSection, LogoSlot } from "./LogoStripSection";
import { OrangeBtn } from "../OrangeBtn";
import { FAQSection } from "./FAQSection";
import { ChevronDown, ArrowUpRight } from "../Icons";
import { Footer } from "./Footer";



function ServiceHero() {
  return (
    <section className="bg-white w-full flex flex-col justify-end pb-14 md:pb-20 pt-40 gap-10 md:gap-14">
      <div className="flex flex-col gap-8 md:gap-[42px] max-w-[1000px] px-5 md:px-[50px]">
        <div className="flex flex-wrap gap-2 md:gap-6 items-center">
          <span className="font-mono font-regular text-[#77786d] text-sm md:text-sm whitespace-nowrap">PRODUCT & EXPERIENCE DESIGN</span>
        </div>
        <h1 className="font-sans font-regular leading-[1.1] text-[#1e1e1e] text-[38px] sm:text-[52px] md:text-[60px] lg:text-[64px] tracking-[-1.5px] md:tracking-[-1.92px] max-w-[800px]">
          We help teams turn complicated requirements into clear, usable digital experiences.
        </h1>
      </div>
    </section>
  );
}

function HelpItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-6 items-start w-full">
      <div className="bg-[#f9f9f9] rounded-full size-[42px] flex items-center justify-center shrink-0 overflow-hidden text-[#1e1e1e]">
        {icon}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <p className="font-sans font-medium text-[#1e1e1e] text-lg tracking-[-0.18px]">{title}</p>
        <p className="font-sans font-medium leading-[1.5] text-[#4d4d4d] text-sm tracking-[-0.14px] mt-1">{desc}</p>
      </div>
    </div>
  );
}

function WhenWeCanHelp() {
  return (
    <section id="capabilities" className="bg-white w-full px-5 md:px-16 lg:px-[150px] py-16 md:py-24 lg:py-[75px]">
      <div className="flex flex-col lg:flex-row gap-11 items-start justify-between w-full">
        {/* Left */}
        <div className="flex flex-col gap-8 lg:w-[calc(50%-22px)] shrink-0">
          <span className="font-mono font-regular text-[#77786d] text-sm">WHEN WE CAN HELP</span>
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl md:text-[36px] tracking-[-0.4px]">
            Your product may be growing faster than the experience around it.
          </p>
          <OrangeBtn label="EXPLORE CAPABILITIES" className="w-fit" />
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col gap-8 w-full max-w-[550px] min-w-0">
          <HelpItem
            title="Product complexity is increasing"
            desc="More features, roles, and workflows are making the experience harder to navigate."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            }
          />
          <HelpItem
            title="Requirements are difficult to align"
            desc="Business, user, and technical needs exist, but there is no clear experience connecting them."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <HelpItem
            title="Key workflows create friction"
            desc="Approvals, dashboards, permissions, or multi-step processes are slowing users down."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            }
          />
          <HelpItem
            title="You know what to build, but not how it should work"
            desc="We help turn requirements into clear flows, interfaces, and implementation-ready design."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ index, title, desc }: { index: string; title: string; desc: string }) {
  return (
    <div className="bg-[#f9f9f9] hover:bg-[#f4f4f4] flex flex-col items-start justify-between p-4 sm:p-5 rounded-2xl hover:rounded-none flex-1 min-w-0 h-[200px] transition-all duration-300 ease-out group text-left gap-4">
      <div className="bg-white inline-flex items-center justify-center px-3 py-1.5">
        <span className="font-mono text-[#1e1e1e] text-xs">{index}</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-sans font-regular text-[#1e1e1e] text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.4px]">{title}</p>
        <p className="font-sans font-regular leading-[1.5] text-[#4d4d4d] text-[15px] tracking-[-0.14px]">{desc}</p>
      </div>
    </div>
  );
}

function OurCapabilities() {
  return (
    <section className="bg-white w-full px-5 md:px-16 min-[1080px]:px-[200px] py-16 md:py-24 lg:py-[150px] flex flex-col gap-12 md:gap-16 items-center">
      <div className="flex flex-col gap-6 items-center text-center">
        <span className="font-mono font-regular text-[#77786d] text-sm">OUR DESIGN CAPABILITIES</span>
        <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-[32px] md:text-[36px] tracking-[-0.4px] max-w-[500px]">
          From product direction to detailed execution.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-[1000px] mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <CapabilityCard index="01" title="Product & UX Strategy" desc="Clarify priorities, user needs, constraints, and product direction." />
          <CapabilityCard index="02" title="User Flow & Architecture" desc="Structure complex journeys, roles, content, and decisions." />
          <CapabilityCard index="03" title="UI/UX Design" desc="Turn product logic into clear, usable interfaces." />
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <CapabilityCard index="04" title="SaaS & Dashboard Design" desc="Make information-heavy products easier to navigate and understand." />
          <CapabilityCard index="05" title="Mobile Product Design" desc="Design focused mobile journeys around real platform behaviour." />
          <CapabilityCard index="06" title="Design Systems" desc="Build reusable foundations for more consistent product development." />
        </div>
      </div>
    </section>
  );
}

function WorkCard({ title, sub, tag, orange }: { title: string; sub: string; tag: string; orange?: boolean }) {
  return (
    <div className="flex flex-col gap-6 flex-1 min-w-0">
      <div className={`rounded-lg h-[280px] md:h-[387px] w-full shrink-0 ${orange ? "bg-[#eb5503]" : "bg-[#f4f4f4]"}`} />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 px-2">
          <p className="font-sans font-regular text-[#1e1e1e] text-[18px] md:text-[20px] tracking-[-0.2px] leading-[1.2]">{title}</p>
          <p className="font-sans font-regular leading-[1.5] text-[#4d4d4d] text-[15px] tracking-[-0.2px]">{sub}</p>
        </div>
        <div className="bg-[#ffffff] inline-flex items-center justify-center px-3 py-1.5 self-start">
          <span className="font-mono text-[#1e1e1e] text-sm">{tag}</span>
        </div>
      </div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section className="bg-[#f9f9f9] w-full md:px-10 lg:px-16 py-16 md:py-24 lg:py-[150px]">
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between w-full mx-auto">
        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:self-start flex flex-col gap-8 lg:w-[calc(33.33%-16px)] shrink-0">
          <span className="font-mono font-regular text-[#77786d] text-sm">SELECTED WORK</span>
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl md:text-[36px] tracking-[-0.4px]">
            Designed around real product problems.
          </p>
          <OrangeBtn label="EXPLORE OUR WORK" className="w-fit" />
        </div>

        {/* Right */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-6 w-full min-w-0">
          <WorkCard title="PT Pupuk Indonesia" sub="Simplifying complex corporate workflows into clearer role-based experiences" tag="ENTERPRISE PRODUCT, INTERNAL PLATFORM" orange={true} />
          <WorkCard title="PT Pupuk Indonesia" sub="Simplifying complex corporate workflows into clearer role-based experiences" tag="NEW BRAND, NEW CATEGORY" orange={false} />
          <WorkCard title="PT Pupuk Indonesia" sub="Simplifying complex corporate workflows into clearer role-based experiences" tag="ENTERPRISE PRODUCT, INTERNAL PLATFORM" orange={true} />
          <WorkCard title="PT Pupuk Indonesia" sub="Simplifying complex corporate workflows into clearer role-based experiences" tag="NEW BRAND, NEW CATEGORY" orange={false} />
        </div>
      </div>
    </section>
  );
}

function ApproachCard({ index, title, desc }: { index: string; title: string; desc: string }) {
  return (
    <div className="bg-[#f9f9f9] hover:bg-[#f4f4f4] flex flex-col items-start justify-between p-4 rounded-lg hover:rounded-none flex-1 min-w-0 h-[400px] transition-all duration-300 ease-out group text-left">
      {/* Top child: Badge */}
      <div className="bg-white inline-flex items-center justify-center px-3 py-1.5 w-fit">
        <span className="font-mono text-[#1e1e1e] text-xs">{index}</span>
      </div>

      {/* Middle child: Title */}
      <p className="font-sans font-regular text-[#1e1e1e] text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.4px]">{title}</p>

      {/* Bottom child: Description */}
      <p className="font-sans font-regular leading-[1.3] text-[#4d4d4d] text-sm tracking-[-0.px]">{desc}</p>
    </div>
  );
}

function OurApproach() {
  return (
    <section className="bg-white w-full px-5 md:px-16 lg:px-[150px] py-16 md:py-24 lg:pt-[150px] lg:pb-[75px] flex flex-col gap-16">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex flex-col gap-6">
          <span className="font-mono font-regular text-[#77786d] text-sm">OUR APPROACH</span>
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl md:text-[36px] tracking-[-0.72px]">
            This is how we work.
          </p>
        </div>
        <OrangeBtn label="EXPLORE ALL SERVICES" className="shrink-0 self-start" />
      </div>

      <div className="flex flex-col md:flex-row gap-2 w-full">
        <ApproachCard index="01" title="Understand" desc="We align on business goals, users, requirements, constraints, existing systems, and what needs to improve." />
        <ApproachCard index="02" title="Shape" desc="We define priorities, journeys, information structure, roles, and the experience direction." />
        <ApproachCard index="03" title="Design" desc="We develop the interface, interactions, states, and detailed product experience." />
        <ApproachCard index="04" title="Deliver" desc="We prepare the work for implementation and support the development team when required." />
      </div>

      <div className="flex flex-col gap-8 w-full mt-12">
        <span className="font-mono font-regular text-[#77786d] text-sm">TOOLS WE WORK WITH</span>
        <div className="flex flex-wrap gap-4 items-center">
          {["figma", "nextjs", "chatgpt", "weavy", "seedance"].map((logo) => (
            <LogoSlot key={logo} name={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
  duration,
  title,
  desc,
  price,
  cta,
  offersTitle,
  offers,
  note,
  isFeatured = false,
  onClick,
}: {
  tag: string;
  duration: string;
  title: React.ReactNode;
  desc: string;
  price: string;
  cta: string;
  offersTitle: string;
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
        {/* Tag Badge and Duration Row */}
        <div className="flex items-center justify-between w-full">
          <div
            className={`inline-flex items-center justify-center px-3 py-1.5 ${isFeatured ? "bg-white" : "bg-[#f4f4f4]"
              }`}
          >
            <span className="font-mono text-[#1e1e1e] text-xs font-regular uppercase">{tag}</span>
          </div>
          <span className="font-sans text-xs md:text-sm text-[#77786d] font-regular">{duration}</span>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col gap-3">
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-xl md:text-2xl tracking-[-0.48px]">{title}</p>
          <p className="font-sans font-medium leading-[1.5] text-[#4d4d4d] text-sm tracking-[-0.14px]">
            {desc}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#f4f4f4]" />

      {/* Middle Part (Price and Button) */}
      <div className="flex flex-col gap-6">
        <p className="font-sans font-medium leading-[1.1] text-[#1e1e1e] text-3xl md:text-4xl tracking-[-1.5px]">
          {price}
        </p>
        <OrangeBtn label={cta} className="w-full justify-center text-sm md:text-base font-semibold" onClick={onClick} />
      </div>

      {/* Bottom Part (Offers & Final Note) */}
      <div className="flex flex-col gap-6 mt-2 flex-1 justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-sans font-regular text-[#1e1e1e] text-sm">
            {offersTitle}
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

function PricingSection() {
  const handleNav = (e?: React.MouseEvent) => {
    e?.preventDefault();
    window.history.pushState({}, "", "/?page=inquiry&service=product-design");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <section className="bg-white w-full px-5 md:px-16 lg:px-[150px] pt-16 md:pt-24 lg:pt-[150px] pb-12 md:pb-16 lg:pb-[75px] flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-6 items-center text-center">
        <span className="font-mono font-regular text-[#77786d] text-sm">PRICING</span>
        <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-3xl md:text-[42px] tracking-[-1.2px]">
          Simple Pricing.
          <br />
          No Surprises.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4 w-full max-w-[1200px]">
        <PricingCard
          tag="UX"
          duration="5-7 days"
          title="UX Focus"
          desc="For one specific product or experience problem."
          price="Rp5.000.000"
          cta="DISCUSS A UX FOCUS"
          offersTitle="Best for:"
          offers={[
            "UX Audit",
            "Key-Flow Improvement",
            "Existing Feature Redesign",
            "Usability Issues",
            "Early Product Direction",
          ]}
          note="Final scope depends on page structure and functionality."
          onClick={handleNav}
        />
        <PricingCard
          tag="UI/UX"
          duration="4-8+ weeks"
          title="Product Design"
          desc="For MVPs, new features, dashboards, or new digital products."
          price="Rp12.000.000"
          cta="START A PROJECT"
          offersTitle="Typical scope:"
          offers={[
            "Product Flows",
            "Wireframes",
            "UI/UX Design",
            "Interactive Prototype",
            "Developer Handoff",
          ]}
          note="Final scope depends on page structure and functionality."
          isFeatured={true}
          onClick={handleNav}
        />
        <PricingCard
          tag="ENTERPRISE"
          duration="Based on scope"
          title="Complex Product"
          desc="For enterprise products and systems with deeper workflows, roles."
          price="Custom"
          cta="DISCUSS YOUR PRODUCT"
          offersTitle="Typical scope:"
          offers={[
            "Enterprise Platforms",
            "Multi-role Systems",
            "Operational Dashboards",
            "Approval Workflows",
            "Design Systems",
          ]}
          note="Technology and scope are defined after discovery."
          onClick={handleNav}
        />
      </div>
    </section>
  );
}

function ServiceFAQSection() {
  return (
    <FAQSection />
  );
}

export function ProductDesignPage() {
  return (
    <div className="flex flex-col w-full min-h-screen relative">
      <Navbar />
      <ServiceHero />
      <LogoStripSection />
      <WhenWeCanHelp />
      <OurCapabilities />
      <SelectedWork />
      <OurApproach />
      <PricingSection />
      <ServiceFAQSection />
      <Footer
        tag="PRODUCT & EXPERIENCE DESIGN"
        title="Have a product that needs more clarity?"
        description="Tell us where the experience is getting complicated and what your team needs to move forward."
        secondaryCta="BOOK A DISCOVERY CALL"
        inquiryService="product-design"
      />
    </div>
  );
}
