import React, { useState } from "react";
import { ChevronDown } from "./Icons";

type FAQItem = {
  q: string;
  a: React.ReactNode;
  open: boolean;
};

const FAQ_ITEMS: FAQItem[] = [
  { q: "Who is the best fit to work with TRD?", a: "We work best with **startups**, **growing businesses**, and **product teams** that need clear design thinking, practical execution, and direct collaboration.", open: true },
  { q: "What can TRD help with?", a: "Our core services are **Product & Experience Design**, **Website Design & Development**, and **AI Video Production**. Each service can be scoped as a focused project or a larger engagement depending on what you need.", open: false },
  { q: "Can you work with our existing team?", a: "Yes. We can work independently or collaborate directly with your **founders**, **product managers**, **marketers**, **designers**, and **developers**.", open: false },
  { q: "How much does a project usually cost?", a: "Pricing depends on the service, scope, and complexity. Product design engagements currently start from **Rp5 million**, website projects from **Rp12 million**, and AI video production from **Rp5 million**. Larger or more complex projects are quoted separately.", open: false },
  { q: "How long does a typical project take?", a: "Focused engagements can take around **1–2 weeks**. Product and website projects typically run from **4 weeks onward**, depending on scope, feedback cycles, and complexity.", open: false },
  { q: "What does working together look like?", a: "**We start by aligning on the problem, goals, requirements, and priorities.** From there, we structure the work, design the solution, review it together, and prepare everything needed for implementation or launch. You’ll always know what we’re working on, what needs your review, and what comes next.", open: false },
  { q: "What if we need revisions?", a: "Revisions are included within the agreed scope.** We’ll refine the work together until the direction is aligned with the project goals. **Major scope changes are handled separately.", open: false },
  { q: "Can you sign an NDA?", a: "**Yes. We’re happy to sign an NDA** before reviewing confidential product, business, or technical information.", open: false },
];

function renderHighlightedText(text: React.ReactNode) {
  if (typeof text !== "string") return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={index} className="text-[#1e1e1e] font-medium">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

function FAQRow({ q, a, isOpen, onToggle }: { q: string; a: React.ReactNode; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-[#f9f9f9] flex flex-col p-5 rounded-lg cursor-pointer w-full transition-colors duration-300 hover:bg-[#f4f4f4]" onClick={onToggle}>
      <div className="flex gap-2 items-center w-full">
        <p className="flex-1 min-w-px font-sans font-medium leading-[1.2] text-[#1e1e1e] text-lg tracking-[-0.14px]">{q}</p>
        <ChevronDown className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
      </div>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
          <p className="font-sans text-[#77786d] text-base md:text-md leading-[1.6] font-regular">
            {renderHighlightedText(a)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const initialOpenIndex = FAQ_ITEMS.findIndex((item) => item.open);
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex !== -1 ? initialOpenIndex : null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#1e1e1e] w-full">
      <section className="bg-white rounded-b-[32px] sm:rounded-b-[40px] md:rounded-b-[48px] w-full px-5 md:px-16 min-[1080px]:px-[250px] py-16 md:py-24 lg:py-[150px] flex flex-col gap-3 items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center px-2.5 py-1 bg-[#f9f9f9] border border-black/[0.04] mb-4">
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            FAQ
          </span>
        </div>

        <div className="flex flex-col gap-12 items-center">
          {/* Headline */}
          <h2 className="font-sans font-regular text-[24px] sm:text-[24px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center">
            Still have questions?
          </h2>

          <div className="flex flex-col gap-2 w-full max-w-[600px]">
            {FAQ_ITEMS.map((item, i) => (
              <FAQRow
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>

          {/* Subtitle */}
          <p className="font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[400px] text-center mb-12 md:mb-16">
            Looking for something else? Reach out to us by{" "}
            <a
              href="https://wa.me/+6285128034600"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#eb5503] font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              WhatsApp
            </a>{" "}
            or{" "}
            <a
              href="mailto:trdcreativestudio@gmail.com"
              className="text-[#eb5503] font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              email us
            </a>
          </p>

        </div>

      </section>
    </div>
  );
}
