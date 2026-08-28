import { Marquee } from "../Marquee";

function FigmaLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="14" height="21" viewBox="0 0 12 18" fill="none" className="shrink-0">
        <path d="M3 0C1.34 0 0 1.34 0 3C0 4.66 1.34 6 3 6H6V0H3Z" fill="#F24E1E"/>
        <path d="M3 6C1.34 6 0 7.34 0 9C0 10.66 1.34 12 3 12H6V6H3Z" fill="#A259FF"/>
        <path d="M3 12C1.34 12 0 13.34 0 15C0 16.66 1.34 18 3 18C4.66 18 6 16.66 6 15V12H3Z" fill="#0ACF83"/>
        <path d="M9 6C10.66 6 12 4.66 12 3C12 1.34 10.66 0 9 0C7.34 0 6 1.34 6 3H9V6Z" fill="#FF7262"/>
        <path d="M9 12C10.66 12 12 10.66 12 9C12 7.34 10.66 6 9 6H6V9C6 10.66 7.34 12 9 12Z" fill="#1ABCFE"/>
      </svg>
      <span className="font-sans font-bold text-[#1e1e1e] text-[18px] tracking-[-0.36px]">Figma</span>
    </div>
  );
}

function NextjsLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 180 180" fill="none" className="shrink-0">
        <circle cx="90" cy="90" r="90" fill="#1e1e1e" />
        <path d="M149.5 157.5L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.2 149.5 157.5Z" fill="url(#nextjs-grad-1)" />
        <rect x="120" y="54" width="12.1" height="72" fill="url(#nextjs-grad-2)" />
        <defs>
          <linearGradient id="nextjs-grad-1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextjs-grad-2" x1="121" y1="54" x2="120.7" y2="108.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-sans font-bold text-[#1e1e1e] text-[18px] tracking-[-0.36px]">Next.js</span>
    </div>
  );
}

function MedusaLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect width="24" height="24" rx="5" fill="#5C2BE2" />
        <path d="M12 5C8.5 5 8 8 8 9.5C8 11.5 9.5 12.5 12 12.5C14.5 12.5 16 11.5 16 9.5C16 8 15.5 5 12 5Z" fill="white" />
        <path d="M9.5 12.5V17.5C9.5 18.5 9 19 9 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12.5V18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 12.5V17.5C14.5 18.5 15 19 15 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="font-sans font-bold text-[#1e1e1e] text-[18px] tracking-[-0.36px]">Medusa</span>
    </div>
  );
}

function ChatgptLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect width="24" height="24" rx="5" fill="#10a37f" />
        <path d="M9.2 8.6v-2.2c0-.2.1-.3.2-.4l4.5-2.6c.6-.4 1.4-.5 2.1-.5 2.8 0 4.7 2.2 4.7 4.6 0 .2 0 .4 0 .5l-4.7-2.8c-.3-.2-.6-.2-.9 0L9.2 8.6zm10.6 8.8v-5.4c0-.3-.1-.6-.4-.7l-6-3.5 2-1.1c.1-.1.3-.1.5 0l4.5 2.6c1.3.8 2.2 2.4 2.2 3.9 0 1.8-1.1 3.5-2.8 4.2zm-12-4.7l-2-1.1c-.2-.1-.2-.2-.2-.4V5.9C5.6 3.4 7.6 1.4 10.2 1.4c1 0 1.9.3 2.7.9l-4.7 2.7c-.3.2-.4.4-.4.7v7zm4.2 2.4l-2.8-1.6v-3.3l2.8-1.6 2.8 1.6v3.3l-2.8 1.6zm1.8 7.2c-1 0-1.9-.3-2.7-.9l4.7-2.7c.3-.2.4-.4.4-.7v-6.9l2 1.1c.2.1.2.2.2.4v5.2c0 2.6-2 4.5-4.6 4.5zm-5.6-5.3l-4.5-2.6c-1.3-.8-2.2-2.4-2.2-3.9 0-.8.2-1.6.7-2.2v5.4c0 .3.1.6.4.7l6 3.5-2 1.1c-.2 0-.4 0-.4-.1zm-.3 3.9c-2.7 0-4.7-2-4.7-4.5 0-.2 0-.4.1-.6l4.7 2.7c.3.2.6.2.9 0l6-3.5v2.3c0 .2-.1.3-.2.4l-4.5 2.6c-.7.4-1.5.6-2.3.6z" fill="white" />
      </svg>
      <span className="font-sans font-bold text-[#1e1e1e] text-[18px] tracking-[-0.36px]">ChatGPT</span>
    </div>
  );
}

function WeavyLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect width="24" height="24" rx="5" fill="#0066FF" />
        <path d="M6 14C8 14 9 10 11 10C13 10 14 14 16 14C18 14 19 12 19 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="14" r="1.5" fill="white" />
        <circle cx="11" cy="10" r="1.5" fill="white" />
        <circle cx="16" cy="14" r="1.5" fill="white" />
      </svg>
      <span className="font-sans font-bold text-[#1e1e1e] text-[18px] tracking-[-0.36px]">Weavy</span>
    </div>
  );
}

function SeedanceLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect width="24" height="24" rx="5" fill="#FF5E3A" />
        <path d="M10 8.5L15 12L10 15.5V8.5Z" fill="white" />
        <path d="M6 6C6 6 8 8 8 12C8 16 6 18 6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 6C18 6 16 8 16 12C16 16 18 18 18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="font-sans font-bold text-[#1e1e1e] text-[18px] tracking-[-0.36px]">Seedance</span>
    </div>
  );
}

export function LogoSlot({ name }: { name: string }) {
  return (
    <div className="h-[56.814px] px-6 overflow-clip relative shrink-0 flex items-center justify-center">
      {name === "figma" && <FigmaLogo />}
      {name === "nextjs" && <NextjsLogo />}
      {name === "medusa" && <MedusaLogo />}
      {name === "chatgpt" && <ChatgptLogo />}
      {name === "weavy" && <WeavyLogo />}
      {name === "seedance" && <SeedanceLogo />}
    </div>
  );
}

export function LogoStripSection() {
  const tools = ["figma", "nextjs", "medusa", "chatgpt", "weavy", "seedance"];
  // Repeat the list to ensure the marquee fills the screen and flows smoothly
  const doubleTools = [...tools, ...tools];
  
  return (
    <section className="bg-white w-full py-8 overflow-hidden flex" data-name="CTA Section">
      <Marquee speed={0.2} gap="gap-12">
        {doubleTools.map((logo, i) => <LogoSlot key={`logo-${i}`} name={logo} />)}
      </Marquee>
    </section>
  );
}
