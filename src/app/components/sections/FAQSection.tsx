import { useState } from "react";
import { ChevronDown } from "../Icons";

const FAQ_ITEMS = [
  { q: "Why TRD Creative Studio?", a: "For businesses that need websites that communicate clearly and feel intentional.", open: true },
  { q: "Who will we work with?", a: "We work closely with ambitious founders, product leads, and digital teams inside growing organisations.", open: false },
  { q: "What are our project goals?", a: "Every engagement begins with aligning on goals — clarity, business impact, and measurable outcomes.", open: false },
  { q: "When are the deadlines?", a: "Timelines are scoped per project. We work with you to establish realistic, achievable milestones.", open: false },
  { q: "How will we measure success?", a: "We define success metrics together at the start — usage, clarity, conversion, or aesthetic benchmarks.", open: false },
];

function FAQRow({ q, a, defaultOpen }: { q: string; a: string; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-[#f9f9f9] flex flex-col p-4 rounded-lg cursor-pointer w-full transition-colors duration-300 hover:bg-[#f4f4f4]" onClick={() => setOpen(!open)}>
      <div className="flex gap-2 items-center w-full">
        <p className="flex-1 min-w-px font-sans font-medium leading-[1.2] text-[#1e1e1e] text-lg tracking-[-0.14px]">{q}</p>
        <ChevronDown className={`transition-transform duration-500 ${open ? "rotate-180" : ""}`} />
      </div>
      <div className={`grid transition-all duration-500 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
          <p className="font-sans font-medium leading-[1.5] text-[#4d4d4d] text-sm tracking-[-0.14px] w-full">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <div className="bg-[#1e1e1e] w-full">
      <section className="bg-white rounded-b-[32px] sm:rounded-b-[40px] md:rounded-b-[48px] w-full px-5 md:px-16 min-[1080px]:px-[250px] py-16 md:py-24 lg:py-[150px] flex flex-col gap-3 items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center px-2.5 py-1 bg-[#f9f9f9] border border-black/[0.04] mb-4">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            FAQ
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {/* Headline */}
          <h2 className="font-sans font-regular text-[24px] sm:text-[24px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center">
            Still have questions?
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[400px] text-center mb-12 md:mb-16">
            Looking for something in else? Reach out to us by Telegram or email us
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-[500px]">
          {FAQ_ITEMS.map((item, i) => (
            <FAQRow key={i} q={item.q} a={item.a} defaultOpen={item.open} />
          ))}
        </div>
      </section>
    </div>
  );
}
