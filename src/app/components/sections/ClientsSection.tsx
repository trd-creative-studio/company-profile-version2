import React from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  stat1Number: string;
  stat1Label: string;
  stat2Number: string;
  stat2Label: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Kristen Juven,",
    role: "Head of Software Engineer @ Amazon",
    quote:
      '"We understand the demands of digitally focused organisations navigating change inside and out. We work closely with ambitious leaders within those organisations who are seeking clarity, craft, and a true partner."',
    stat1Number: "8",
    stat1Label: "Months project duration",
    stat2Number: "300+",
    stat2Label: "Unique assets, pages",
  },
  {
    id: "2",
    name: "Marcus Vance,",
    role: "VP of Product @ Stripe",
    quote:
      '"TRD Creative Studio completely transformed our product identity and marketing presence. Their attention to detail, speed, and design precision were exceptional from day one."',
    stat1Number: "6",
    stat1Label: "Months project duration",
    stat2Number: "180+",
    stat2Label: "Unique assets, pages",
  },
  {
    id: "3",
    name: "Elena Rostova,",
    role: "Co-Founder & CEO @ Resumify",
    quote:
      '"Working with TRD felt like having an elite in-house design team. They brought incredible strategic clarity and delivered a web experience that significantly boosted our conversions."',
    stat1Number: "12",
    stat1Label: "Months project duration",
    stat2Number: "450+",
    stat2Label: "Unique assets, pages",
  },
];

export function ClientsSection() {
  return (
    <section id="about" className="bg-[#f8f8f8] w-full py-16 md:py-[150px] overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="w-full flex flex-col items-center">
        {/* Header Block matching How We Help style */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-2.5 py-1 bg-[#ffffff] border border-black/[0.04] mb-4">
            <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
              TESTIMONIALS
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            {/* Headline */}
            <h2 className="font-sans font-regular text-[24px] sm:text-[24px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center">
              What our clients say about us
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[600px] text-center">
              Trusted by 20+ partners around the world, we've built a reputation for reliability, integrity, and exceptional results.
            </p>
          </div>
        </div>

        {/* Horizontal Testimonials Carousel / Grid */}
        <div className="w-full overflow-x-auto no-scrollbar px-6 md:px-[150px]">
          <div className="flex gap-2 max-w-[1100px] mx-auto min-w-max pb-4">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-black/[0.04] rounded-2xl p-6 md:p-8 w-[320px] sm:w-[420px] md:w-[450px] shrink-0 flex flex-col justify-between gap-8"
              >
                {/* Author Info at Top */}
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-[#1e1e1e] text-base md:text-lg">
                    {item.name}
                  </span>
                  <span className="font-sans text-[#77786d] text-sm md:text-base mt-0.5">
                    {item.role}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-[#1e1e1e] text-base md:text-lg leading-[1.6] font-regular">
                  {item.quote}
                </p>

                {/* Bottom Separator & Metrics */}
                <div className="border-t border-black/[0.08] pt-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="font-sans font-regular text-3xl md:text-[40px] text-[#1e1e1e] tracking-[-1px] leading-tight">
                      {item.stat1Number}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-[#77786d] mt-1">
                      {item.stat1Label}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-regular text-3xl md:text-[40px] text-[#1e1e1e] tracking-[-1px] leading-tight">
                      {item.stat2Number}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-[#77786d] mt-1">
                      {item.stat2Label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

