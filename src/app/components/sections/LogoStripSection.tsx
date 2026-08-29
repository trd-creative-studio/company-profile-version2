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
  clientHeight: "h-[56px] md:h-[42px]", // Height of client logos (Junso, Tehc House, etc.)
};

// ==========================================
// HELPER COMPONENTS
// ==========================================
function LogoImage({ src, alt, type }: { src: string; alt: string; type: "tool" | "client" }) {
  const heightClass = type === "tool" ? LOGO_CONFIG.toolHeight : LOGO_CONFIG.clientHeight;
  const opacityClass = type === "client" ? "opacity-70 hover:opacity-100 transition-opacity duration-300" : "";

  return (
    <img
      src={src}
      className={`${heightClass} ${opacityClass} object-contain`}
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
  const clients = [
    "client-junso",
    "client-metalindo",
    "client-nyambee",
    "client-pupuk",
    "client-synapsis",
    "client-tehchouse",
    "client-greenflags"
  ];
  // Repeat the list to ensure the marquee fills the screen and flows smoothly
  const doubleClients = [...clients, ...clients];

  return (
    <section className="bg-white w-full py-8 overflow-hidden flex" data-name="CTA Section">
      <Marquee speed={0.2} gap="gap-6">
        {doubleClients.map((logo, i) => <LogoSlot key={`logo-${i}`} name={logo} />)}
      </Marquee>
    </section>
  );
}
