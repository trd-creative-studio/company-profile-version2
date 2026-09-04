import { Marquee } from "../Marquee";

// Import tool logos
import logoFigma from "@/assets/logo/logo-figma.png";
import logoNextjs from "@/assets/logo/logo-nextjs.png";
import logoChatgpt from "@/assets/logo/logo-chatgpt.png";
import logoWeavy from "@/assets/logo/logo-weavy.png";
import logoSeedance from "@/assets/logo/logo-seedance.png";

// Import client logos
import clientJunso from "@/assets/logo/client-junso.png";
import clientMetalindo from "@/assets/logo/client-metalindo.png";
import clientNyambee from "@/assets/logo/client-nyambee.png";
import clientPupuk from "@/assets/logo/client-pupuk.png";
import clientSynapsis from "@/assets/logo/client-synapsis.png";
import clientTehchouse from "@/assets/logo/client-tehchouse.png";
import clientGreenflags from "@/assets/logo/Frame 467.png";

// ==========================================
// CONFIGURATION: Edit these to resize all logos
// ==========================================
const LOGO_CONFIG = {
  slotHeight: "h-[64px]",          // Height of the logo container slot
  toolHeight: "h-[36px] md:h-[42px]",   // Height of the tool logos (Figma, ChatGPT, etc.)
  clientHeight: "h-[42px] md:h-[42px]", // Height of client logos (Junso, Tehc House, etc.)
};

// ==========================================
// HELPER COMPONENTS
// ==========================================
function LogoImage({ src, alt, type }: { src: string; alt: string; type: "tool" | "client" }) {
  const heightClass = type === "tool" ? LOGO_CONFIG.toolHeight : LOGO_CONFIG.clientHeight;
  const filterClass = type === "client" ? "grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300" : "";

  return (
    <img
      src={src}
      className={`${heightClass} ${filterClass} object-contain`}
      alt={alt}
    />
  );
}

// ==========================================
// EXPORTED COMPONENTS
// ==========================================
export function LogoSlot({ name }: { name: string }) {
  return (
    <div className={`${LOGO_CONFIG.slotHeight} px-5 overflow-clip relative shrink-0 flex items-center justify-center`}>
      {/* Tool Logos */}
      {name === "figma" && <LogoImage src={logoFigma} alt="Figma" type="tool" />}
      {name === "nextjs" && <LogoImage src={logoNextjs} alt="Next.js" type="tool" />}
      {name === "chatgpt" && <LogoImage src={logoChatgpt} alt="ChatGPT" type="tool" />}
      {name === "weavy" && <LogoImage src={logoWeavy} alt="Weavy" type="tool" />}
      {name === "seedance" && <LogoImage src={logoSeedance} alt="Seedance" type="tool" />}

      {/* Client Logos */}
      {name === "client-junso" && <LogoImage src={clientJunso} alt="Junso" type="client" />}
      {name === "client-metalindo" && <LogoImage src={clientMetalindo} alt="Metalindo" type="client" />}
      {name === "client-nyambee" && <LogoImage src={clientNyambee} alt="Nyambee" type="client" />}
      {name === "client-pupuk" && <LogoImage src={clientPupuk} alt="Pupuk" type="client" />}
      {name === "client-synapsis" && <LogoImage src={clientSynapsis} alt="Synapsis" type="client" />}
      {name === "client-tehchouse" && <LogoImage src={clientTehchouse} alt="Tehc House" type="client" />}
      {name === "client-greenflags" && <LogoImage src={clientGreenflags} alt="Greenflags" type="client" />}
    </div>
  );
}

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
    <section className="bg-[#f8f8f8] w-full pt-4 pb-16 md:pb-24 flex flex-col gap-6 md:gap-8 items-center" data-name="Clients Section">
      {/* Title */}
      <div className="text-center px-5">
        <p className="font-sans font-medium text-[#1e1e1e] text-center text-sm md:text-base tracking-[-0.1px]">
          Trusted by 40+ companies
        </p>
      </div>

      {/* Static Logo Row with the new uploaded client logos */}
      <div className="max-w-[1100px] w-full px-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-0">
        {clientLogos.map((logo) => (
          <LogoSlot key={logo} name={logo} />
        ))}
      </div>
    </section>
  );
}

