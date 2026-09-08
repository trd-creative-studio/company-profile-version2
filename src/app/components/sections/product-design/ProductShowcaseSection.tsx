import { Marquee } from "../../common/Marquee";
import { SHOWCASE_IMAGES_ROW1, SHOWCASE_IMAGES_ROW2 } from "./data";

function ShowcaseCard({ img, title }: { img: string; title: string }) {
  return (
    <div className="bg-[#f9f9f9] rounded-lg md:rounded-lg w-[300px] sm:w-[380px] md:w-[440px] h-[200px] sm:h-[250px] md:h-[280px] shrink-0 overflow-hidden transition-all duration-300 group cursor-pointer p-2 flex flex-col justify-between relative">
      <div className="w-full h-full rounded-lg overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
    </div>
  );
}

export function ProductShowcaseSection() {
  return (
    <section className="bg-white w-full pt-4 md:pt-[75px] flex flex-col items-center gap-10 md:gap-14 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 flex flex-col items-center">
        <div className="inline-flex items-center px-2 py-1 bg-[#f9f9f9] mb-6">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            WANT MORE EXAMPLES?
          </span>
        </div>

        <div className="flex flex-col gap-4 items-center max-w-[600px]">
          {/* Headline */}
          <h2 className="max-w-[500px] font-sans font-regular text-[24px] sm:text-[24px] md:text-[38px] leading-[1.2] text-[#1e1e1e] tracking-[-1px] text-center">
            Product Showcase
          </h2>
        </div>
      </div>

      {/* Auto-scrolling Horizontal Marquee Rows */}
      <div className="flex flex-col gap-2 md:gap-2 w-full">
        {/* Row 1: Leftward infinite auto-scroll */}
        <Marquee speed={0.8} gap="gap-2">
          {SHOWCASE_IMAGES_ROW1.map((item) => (
            <ShowcaseCard key={item.id} img={item.img} title={item.title} />
          ))}
        </Marquee>

        {/* Row 2: Rightward infinite auto-scroll */}
        <Marquee speed={0.8} gap="gap-2" reverse={true}>
          {SHOWCASE_IMAGES_ROW2.map((item) => (
            <ShowcaseCard key={item.id} img={item.img} title={item.title} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
