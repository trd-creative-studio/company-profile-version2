import React from "react";
import { LogoSlot } from "../../common/LogoSlot";

export function LogoStripSection() {
  const clientLogos = [
    "client-junso",
    "client-metalindo",
    "client-nyambee",
    "client-pupuk",
    "client-synapsis",
    "client-tehchouse",
    "client-greenflags",
  ];

  return (
    <section className="bg-[#f9f9f9] w-full py-[75px] md:pb-24 flex flex-col gap-6 md:gap-8 items-center" data-name="Home Clients Section">
      {/* Title */}
      <div className="text-center px-5">
        <p className="font-sans font-medium text-[#1e1e1e] text-center text-sm md:text-md tracking-[-0.1px]">
          Selected experience & collaborations
        </p>
      </div>

      {/* Static Logo Row with client logos */}
      <div className="max-w-[1200px] w-full px-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2 md:gap-2 lg:gap-0">
        {clientLogos.map((logo) => (
          <LogoSlot key={logo} name={logo} />
        ))}
      </div>
    </section>
  );
}
