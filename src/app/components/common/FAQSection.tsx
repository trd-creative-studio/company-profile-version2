import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "./Icons";

type FAQItem = {
  q: string;
  a: React.ReactNode;
  open: boolean;
};

const FAQ_ITEMS: FAQItem[] = [
  { q: "Who do you work with?", a: "**Startups**, **growing businesses**, and **product teams** that want good design and direct communication.", open: true },
  { q: "What do you do?", a: "Three things: **product design** (UI/UX), **website development**, and **social media content**. Hire us for one project or keep us on monthly.", open: false },
  { q: "Can you work with our existing team?", a: "Yes. We work directly with your **founders**, **PMs**, **marketers**, and **developers**.", open: false },
  { q: "How much does it cost?", a: "Product design starts from **Rp5 million**. Websites start from **Rp2 million** for a landing page, **Rp5 million** for a company profile, and **Rp15 million** for e-commerce or custom builds. Social media content starts from **Rp2 million per month**.", open: false },
  { q: "How long does a project take?", a: "Small projects take **1–2 weeks**. Full product or website projects take **4 weeks or more**.", open: false },
  { q: "What does working together look like?", a: "**We agree on goals, do the work, review it with you, and deliver.** You’ll always know what’s next.", open: false },
  { q: "What about revisions?", a: "**Revisions within scope are included.** Bigger changes are quoted separately.", open: false },
  { q: "Can you sign an NDA?", a: "**Yes**, before you share anything.", open: false },
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

function FAQRow({
  q,
  a,
  isOpen,
  onToggle,
  isVisible,
  delayIndex,
}: {
  q: string;
  a: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  isVisible: boolean;
  delayIndex: number;
}) {
  return (
    <div
      className={`bg-[#f9f9f9] flex flex-col p-5 rounded-lg cursor-pointer w-full transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#f4f4f4] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{
        transitionDelay: `${delayIndex * 100 + 150}ms`,
      }}
      onClick={onToggle}
    >
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div ref={sectionRef} className="relative z-10 w-full overflow-hidden">
      <section className="bg-white rounded-b-[32px] sm:rounded-b-[40px] md:rounded-b-[48px] w-full px-5 md:px-16 min-[1080px]:px-[250px] py-16 md:py-20 lg:py-24 flex flex-col gap-3 items-center">
        {/* Top Badge */}
        <div
          className={`inline-flex items-center px-3 py-1 bg-[#f9f9f9] rounded-full mb-4 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="font-mono text-xs text-[#77786d] font-regular tracking-wider uppercase">
            FAQ
          </span>
        </div>

        <div className="flex flex-col gap-12 items-center w-full">
          {/* Headline */}
          <h2
            className={`font-sans font-regular text-[28px] sm:text-[28px] md:text-[38px] text-[#1e1e1e] tracking-[-1px] text-center transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
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
                isVisible={isVisible}
                delayIndex={i}
              />
            ))}
          </div>

          {/* Subtitle */}
          <p
            className={`font-sans text-[#4d4d4d] text-base md:text-lg leading-[1.5] max-w-[400px] text-center mb-12 md:mb-16 transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Something else? Message us on{" "}
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
              href="mailto:hi@trdcreativestudio.com"
              className="text-[#eb5503] font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              email
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
