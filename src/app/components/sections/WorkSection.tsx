import { useState } from "react";
import { OrangeBtn } from "../OrangeBtn";

function ProjectCard({ title, sub, tag, image }: { title: string; sub: string; tag: string; image?: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col gap-6 flex-1 min-w-0">
      {image && !imgError ? (
        <img
          src={image}
          alt={title}
          className="rounded-lg h-[280px] md:h-[250px] w-full shrink-0 object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="rounded-lg h-[280px] md:h-[250px] w-full shrink-0 bg-[#f4f4f4]" />
      )}
      <div className="flex flex-col gap-2">
        <p className="font-sans font-regular text-[#1e1e1e] text-lg md:text-md tracking-[-0.14px] leading-[1.2]">{title}</p>
        <p className="font-sans font-medium text-[#4d4d4d] text-sm tracking-[-0.16px] leading-[1.4]">{sub}</p>
      </div>
      <div className="bg-[#f4f4f4] inline-flex items-center justify-center px-3 py-1.5 self-start">
        <span className="font-mono text-[#1e1e1e] text-sm">{tag}</span>
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="bg-[#ffffff] w-full px-5 md:px-16 lg:px-[200px] pt-16 md:pt-24 pb-20 md:pb-32">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 md:mb-16">
        <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-xl md:text-2xl lg:text-[36px] tracking-[-1.08px] max-w-[966px]">
          We help teams bring clarity to digital products, websites, and visual experiences through strategy, design, and practical execution.
        </p>
        <OrangeBtn label="EXPLORE OUR WORK" className="shrink-0 self-start" />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <ProjectCard title="Sentra Pupuk Indonesia" sub="Bringing flow and clarity to financial automation" tag="PRODUCT DESIGN, CORPORATE" image="/work/showcase1.png" />
        <ProjectCard title="Puranawa Jewelry" sub="Successfuly digitalize Indonesian jewelry product into International market with integrated shipping and payment" tag="E-COMMERCE, INTEGRATION" image="/work/showcase2.png" />
        <ProjectCard title="PT Elnusa Petrofin" sub="Redesigning digital experience with simple and clear design" tag="AI VIDEO, CORPORATE" image="/work/showcase3.png" />
      </div>
    </section>
  );
}

