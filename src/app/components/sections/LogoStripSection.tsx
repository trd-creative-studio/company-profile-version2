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
  clientHeight: "h-[56px] md:h-[56px]", // Height of client logos (Junso, Tehc House, etc.)
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
  const row1 = [
    "client-tehchouse",
    "client-greenflags",
    "client-junso",
    "client-metalindo",
    "client-nyambee",
    "client-pupuk",
    "client-synapsis"
  ];
  const row2 = [
    "client-synapsis",
    "client-pupuk",
    "client-nyambee",
    "client-metalindo",
    "client-junso",
    "client-greenflags",
    "client-tehchouse"
  ];

  return (
    <section className="bg-white w-full py-16 md:py-24 lg:pb-[200px] overflow-hidden flex flex-col gap-10 md:gap-12" data-name="Clients Section">
      {/* Title */}
      <div className="text-center px-5">
        <p className="font-sans font-normal text-[#1e1e1e] text-center text-lg md:text-[22px] max-w-[480px] mx-auto leading-[1.3] tracking-[-0.2px]">
          Selected teams, clients, and
          <br className="hidden sm:inline" />
          collaborations behind our experience.
        </p>
      </div>

      {/* Two Marquee Rows */}
      <div className="w-full flex flex-col gap-4 overflow-hidden">
        {/* Row 1: Standard direction (left) */}
        <Marquee speed={0.3} gap="gap-2">
          {row1.map((logo, i) => (
            <LogoSlot key={`row1-${logo}-${i}`} name={logo} />
          ))}
        </Marquee>

        {/* Row 2: Reverse direction (right) */}
        <Marquee speed={0.3} gap="gap-2" reverse={true}>
          {row2.map((logo, i) => (
            <LogoSlot key={`row2-${logo}-${i}`} name={logo} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

