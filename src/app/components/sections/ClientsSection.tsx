import { OrangeBtn } from "../OrangeBtn";

export function ClientsSection() {
  return (
    <section id="about" className="bg-[#f9f9f9] w-full px-5 md:px-16 min-[1080px]:px-[200px] py-16 md:py-24 lg:py-[150px]">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Label */}
        <div className="shrink-0 lg:w-[210px]">
          <span className="font-mono font-regular text-[#77786d] text-sm">OUR CLIENTS</span>
        </div>

        {/* Main content */}
        <div className="flex flex-col gap-16 max-w-[633px] flex-1 min-w-0">
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-xl md:text-2xl lg:text-[36px] tracking-[-0.72px]">
            We understand the demands of digitally focused organisations navigating change inside and out. We work closely with ambitious leaders within those organisations who are seeking clarity, craft, and a true partner.
          </p>

          {/* Testimonial card */}
          <div className="bg-white flex flex-col items-start justify-between p-8 rounded-2xl gap-10 md:gap-0 md:h-[575px]">
            <div className="flex flex-col gap-2">
              <p className="font-sans font-medium text-[#1e1e1e] text-base tracking-[-0.16px] leading-[1.2]">Kristen Juven,</p>
              <p className="font-sans font-medium text-[#4d4d4d] text-base tracking-[-0.16px] leading-[1.2]">Head of Software Engineer @ Amazon</p>
            </div>

            <div className="flex flex-col gap-8 w-full">
              <p className="font-sans font-medium leading-[1.5] text-[#1e1e1e] text-base md:text-xl tracking-[-0.2px]">
                "We understand the demands of digitally focused organisations navigating change inside and out. We work closely with ambitious leaders within those organisations who are seeking clarity, craft, and a true partner."
              </p>
              <div className="h-px w-full bg-[#D9D9D9]" />
              <div className="flex gap-3 items-start">
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <p className="font-sans font-medium text-[#1e1e1e] text-[42px] tracking-[-0.84px] leading-[1.2]">8</p>
                  <p className="font-sans font-medium text-[#4d4d4d] text-base tracking-[-0.16px] leading-[1.2]">Months project duration</p>
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <p className="font-sans font-medium text-[#1e1e1e] text-[42px] tracking-[-0.84px] leading-[1.2]">300+</p>
                  <p className="font-sans font-medium text-[#4d4d4d] text-base tracking-[-0.16px] leading-[1.2]">Unique assets, pages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="shrink-0 self-start">
          <OrangeBtn label="OUR PARTNERSHIP" />
        </div>
      </div>
    </section>
  );
}
