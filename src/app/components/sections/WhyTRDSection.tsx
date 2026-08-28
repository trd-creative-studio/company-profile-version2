import { OrangeBtn } from "../OrangeBtn";
import { LightbulbSvg, MedalSvg, ForwardSvg, CursorSvg } from "../Icons";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-full size-[42px] flex items-center justify-center shrink-0 overflow-hidden">
      {children}
    </div>
  );
}

function FeatureTile({ icon, title, desc, bg = "bg-[#f9f9f9]" }: { icon: React.ReactNode; title: string; desc: string; bg?: string }) {
  return (
    <div className={`${bg} flex flex-col gap-6 items-start p-6 rounded-2xl flex-1 min-w-0`}>
      <IconCircle>{icon}</IconCircle>
      <div className="flex flex-col gap-2 w-full">
        <p className="font-sans font-medium leading-[1.2] text-[#1e1e1e] text-xl tracking-[-0.4px]">{title}</p>
        <p className="font-sans font-medium leading-[1.5] text-[#4d4d4d] text-sm tracking-[-0.14px]">{desc}</p>
      </div>
    </div>
  );
}

export function WhyTRDSection() {
  return (
    <section id="approach" className="bg-white w-full px-5 md:px-10 py-16 md:py-24 lg:py-[150px]">
      <div className="flex flex-col lg:flex-row gap-11 items-start">
        {/* Left */}
        <div className="flex flex-col gap-8 lg:w-[calc(50%-22px)] shrink-0">
          <span className="font-mono font-regular text-[#77786d] text-sm">WHY TRD STUDIO?</span>
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-2xl md:text-[36px] tracking-[-1.08px]">
            A lean, founder-led studio built around clarity, direct collaboration, and practical execution.
          </p>
          <OrangeBtn label="EXPLORE OUR WORK" className="w-fit" />
        </div>

        {/* Right 2×2 */}
        <div className="flex-1 flex flex-col gap-0.5 w-full min-w-0">
          <div className="flex flex-col sm:flex-row gap-0.5">
            <FeatureTile icon={<LightbulbSvg />} title="Clarity-first thinking" desc="Complex ideas shaped into experiences people can understand and use." />
            <FeatureTile icon={<MedalSvg />} title="Founder-led Collaboration" desc="Direct collaboration with the people responsible for the thinking and the work." bg="" />
          </div>
          <div className="flex flex-col sm:flex-row gap-0.5">
            <FeatureTile icon={<ForwardSvg />} title="Built to move forward" desc="Strategic design grounded in business goals and practical implementation." bg="" />
            <FeatureTile icon={<CursorSvg />} title="Selective by design" desc="Fewer engagements, more attention where it matters." bg="" />
          </div>
        </div>
      </div>
    </section>
  );
}
