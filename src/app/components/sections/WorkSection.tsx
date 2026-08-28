import { OrangeBtn } from "../OrangeBtn";

function ProjectCard({ title, sub, tag, orange }: { title: string; sub: string; tag: string; orange?: boolean }) {
  return (
    <div className="flex flex-col gap-6 flex-1 min-w-0">
      <div className={`rounded-lg h-[280px] md:h-[387px] w-full shrink-0 ${orange ? "bg-[#eb5503]" : "bg-white"}`} />
      <div className="flex flex-col gap-2">
        <p className="font-sans font-regular text-[#1e1e1e] text-xl md:text-xl tracking-[-0.6px] leading-[1.2]">{title}</p>
        <p className="font-sans font-medium text-[#4d4d4d] text-sm tracking-[-0.16px] leading-[1.2]">{sub}</p>
      </div>
      <div className="bg-white inline-flex items-center justify-center px-3 py-1.5 self-start">
        <span className="font-mono text-[#1e1e1e] text-sm">{tag}</span>
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="bg-[#f9f9f9] w-full px-5 md:px-10 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 md:mb-16">
        <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-xl md:text-2xl lg:text-[36px] tracking-[-1.08px] max-w-[966px]">
          We help teams bring clarity to digital products, websites, and visual experiences through strategy, design, and practical execution.
        </p>
        <OrangeBtn label="EXPLORE OUR WORK" className="shrink-0 self-start" />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <ProjectCard title="Charted" sub="Bringing flow and clarity to financial automation" tag="NEW BRAND, NEW CATEGORY" orange />
        <ProjectCard title="Pilot44" sub="Where enterprise strength meets startup agility" tag="NEW BRAND, NEW CATEGORY" />
        <ProjectCard title="Pilot44" sub="Where enterprise strength meets startup agility" tag="NEW BRAND, NEW CATEGORY" />
      </div>
    </section>
  );
}
