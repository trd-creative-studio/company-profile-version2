import { navigateToInquiry } from "../../../utils/navigation";
import { ENGAGEMENTS, EngagementItem } from "./data";

function EngagementCard({ data }: { data: EngagementItem }) {
  return (
    <div className="bg-[#f9f9f9] md:rounded-lg p-6 md:p-6 flex flex-col justify-between flex-1 min-w-0 gap-6">
      {/* Top Part: Badges, Title & Subtitle */}
      <div className="flex flex-col gap-10">
        {/* Badges Row */}
        <div className="flex items-center justify-between w-full">
          <span className="bg-white px-3 py-1 font-mono text-[10px] md:text-[11px] text-[#77786d] uppercase tracking-wider">
            {data.tag}
          </span>
          <span className="font-mono text-xs uppercase text-[#77786d]">
            {data.duration}
          </span>
        </div>

        {/* Title & Desc */}
        <div className="flex flex-col gap-2 text-center mt-2">
          <h3 className="font-sans font-medium text-2xl md:text-3xl text-[#1e1e1e] leading-[1.2] tracking-[-0.8px]">
            {data.title}
          </h3>
          <p className="font-sans font-medium text-sm sm:text-sm text-[#4d4d4d] leading-relaxed max-w-[320px] mx-auto">
            {data.description}
          </p>
        </div>

        {/* Feature List (White rounded container box with divide lines) */}
        <div className="bg-white rounded-md divide-y divide-black/[0.04] overflow-hidden">
          {data.features.map((feature, idx) => (
            <div key={idx} className="px-4.5 py-3.5 flex items-center gap-3.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-[#eb5503]"
              >
                <path
                  d="M7 0.5V13.5M0.5 7H13.5M2.4 2.4L11.6 11.6M2.4 11.6L11.6 2.4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-sans font-normal text-xs sm:text-sm text-[#1e1e1e]">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Part: Price, Button & Footnote */}
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-baseline justify-between w-full px-1">
          <span className="font-sans text-sm text-[#77786d]">{data.priceLabel}</span>
          <span className="font-sans font-medium text-xl sm:text-2xl text-[#1e1e1e] tracking-[-0.8px]">
            {data.price}
          </span>
        </div>

        <button
          onClick={() => navigateToInquiry("product-design")}
          className="bg-[#eb5503] hover:bg-[#d44c02] text-white px-4 py-2 rounded-full font-mono text-xs md:text-sm font-regular tracking-wider justify-center flex items-center gap-4 transition-all duration-200 cursor-pointer w-full mt-2"
        >
          <span>{data.ctaLabel}</span>
          <span className="text-[10px]">▶</span>
        </button>

        <p className="font-sans font-normal text-sm text-[#77786d] text-center mt-1">
          {data.footnote}
        </p>
      </div>
    </div>
  );
}

export function ProductEngagementsSection() {
  return (
    <section className="bg-white w-full py-16 md:py-[150px] px-5 md:px-12 lg:px-20 flex flex-col items-center gap-8 md:gap-8">
      {/* Section Header */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 flex flex-col items-center">
        <div className="inline-flex items-center px-2 py-1 bg-[#f9f9f9] mb-6">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            TYPICAL ENGAGEMENTS
          </span>
        </div>

        <div className="flex flex-col gap-4 items-center max-w-[600px]">
          {/* Headline */}
          <h2 className="max-w-[500px] font-sans font-regular text-[24px] sm:text-[24px] md:text-[38px] leading-[1.2] text-[#1e1e1e] tracking-[-1px] text-center">
            Product design shaped around the stage you’re in.
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[640px] text-center mb-6 md:mb-8">
            Some teams need a cleaner MVP. Others need a full product redesign, design system cleanup, or ongoing product support.
          </p>
        </div>
      </div>

      {/* 3 Engagements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-2 w-full max-w-[1150px] items-stretch">
        {ENGAGEMENTS.map((item) => (
          <EngagementCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
