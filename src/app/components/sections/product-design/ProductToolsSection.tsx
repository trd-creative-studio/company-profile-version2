import { TOOL_GROUPS } from "./data";

export function ProductToolsSection() {
  return (
    <section className="bg-[#f9f9f9] w-full py-16 md:py-[150px] px-5 md:px-12 lg:px-20">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
        {/* Left Column: Headline & Subtitle */}
        <div className="flex flex-col lg:max-w-[480px] shrink-0">
          <h2 className="font-sans font-regular text-[#1e1e1e] text-[24px] sm:text-[24px] md:text-[36px] tracking-[-0.8px] leading-[1.08]">
            The tools change. The standard doesn’t.
          </h2>
          <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[640px] text-left mt-4">
            We adapt to the tools and stack your team already uses, keeping the path from design to implementation clear.
          </p>
        </div>

        {/* Right Column: Categorized Tools Grid */}
        <div className="flex flex-col gap-6 w-full lg:w-[58%] shrink-0">
          {TOOL_GROUPS.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <span className="font-mono text-sm text-[#77786d] uppercase">
                {group.category}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-[#ffffff] rounded-md px-5 py-3.5 flex items-center gap-3"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-5 h-5 md:w-6 md:h-6 object-contain shrink-0"
                    />
                    <span className="font-sans font-medium text-[#1e1e1e] text-sm md:text-base">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
