function ProcessCard({ week, title, desc }: { week: string; title: string; desc: string }) {
  return (
    <div className="bg-[#f9f9f9] md:rounded-md p-6 md:p-6 flex flex-col justify-between flex-1 min-w-0 h-[340px] md:h-[380px] hover:bg-[#f3f3f3] transition-all duration-300 text-left group">
      {/* Top Badge */}
      <div className="bg-white px-2 py-1 font-mono font-medium text-xs text-[#1e1e1e] tracking-wider uppercase w-fit">
        {week}
      </div>

      {/* Middle Title */}
      <h3 className="font-sans font-medium text-[30px] sm:text-[24px] text-[#1e1e1e] tracking-[-0.5px] my-6">
        {title}
      </h3>

      {/* Bottom Description */}
      <p className="font-sans text-[#4d4d4d] text-sm md:text-[14px] leading-[1.45]">
        {desc}
      </p>
    </div>
  );
}

export function ProductProcessSection() {
  return (
    <section id="process" className="bg-white w-full py-16 md:pt-[75px] md:pb-[150px] px-5 md:px-12 lg:px-20 flex flex-col items-center gap-6 md:gap-8">
      {/* Section Header */}
      <div className="max-w-[800px] mx-auto px-6 md:px-8 flex flex-col items-center gap-5">
        <div className="inline-flex items-center px-2 py-1 bg-[#f9f9f9] mb-6">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            OUR PRODUCT PROCESS
          </span>
        </div>

        <div className="flex flex-col gap-5 items-center mb-4">
          {/* Headline */}
          <h2 className="font-sans font-regular leading-[1.2] text-[24px] sm:text-[24px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center">
            From complex requirements to a build-ready product experience.
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[640px] text-center">
            A focused 4-week process to understand the problem, structure the experience, design the product, and prepare it for implementation.
          </p>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 w-full max-w-[1150px]">
        <ProcessCard
          week="WEEK 01"
          title="Discovery & Audit"
          desc="Understand the business, users, existing product, requirements, and key areas to improve."
        />
        <ProcessCard
          week="WEEK 02"
          title="UX + Wireframes"
          desc="Define flows, hierarchy, states, and interaction logic before final UI."
        />
        <ProcessCard
          week="WEEK 03"
          title="Product UI"
          desc="Turn the approved experience into detailed, consistent product interfaces."
        />
        <ProcessCard
          week="WEEK 04"
          title="Handoff + QA"
          desc="Prepare implementation-ready files and support development through design QA."
        />
      </div>

      {/* Bottom Footer Note */}
      <p className="font-sans font-normal text-[#77786d] text-xs sm:text-sm text-center max-w-[680px] mt-4">
        A typical product design cycle. Larger engagements may extend based on scope and complexity.
      </p>
    </section>
  );
}
