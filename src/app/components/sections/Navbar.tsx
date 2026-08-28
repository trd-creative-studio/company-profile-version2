import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import navSvgPaths from "@/imports/Navigation/svg-f3oboy1128";
import { ChevronDown, ArrowUpRight } from "../Icons";
import { OrangeBtn } from "../OrangeBtn";

function CompassMark() {
  return (
    <div className="relative size-[13px] shrink-0">
      <div className="absolute bg-[#1e1e1e] h-[0.76px] left-0 top-[6.08px] w-[6.84px]" />
      <div className="absolute flex h-[0.76px] items-center justify-center right-0 top-[6.08px] w-[6.84px]">
        <div className="flex-none rotate-180"><div className="bg-[#1e1e1e] h-[0.76px] w-[6.84px]" /></div>
      </div>
      <div className="absolute flex h-[6.84px] items-center justify-center left-[6.08px] top-[6.08px] w-[0.76px]">
        <div className="flex-none rotate-90"><div className="bg-[#1e1e1e] h-[0.76px] w-[6.84px]" /></div>
      </div>
      <div className="absolute flex h-[6.84px] items-center justify-center left-[6.08px] top-0 w-[0.76px]">
        <div className="-rotate-90 flex-none"><div className="bg-[#1e1e1e] h-[0.76px] w-[6.84px]" /></div>
      </div>
      <div className="absolute flex items-center justify-center left-[1.52px] size-[5.374px] top-[1.52px]">
        <div className="-rotate-135 flex-none"><div className="bg-[#1e1e1e] h-[0.76px] w-[6.84px]" /></div>
      </div>
      <div className="absolute flex items-center justify-center left-[8.36px] size-[2.15px] top-[2.28px]">
        <div className="-rotate-45 flex-none"><div className="bg-[#1e1e1e] rounded-[38px] size-[1.52px]" /></div>
      </div>
      <div className="absolute flex items-center justify-center left-[6.08px] size-[5.374px] top-[6.08px]">
        <div className="flex-none rotate-45"><div className="bg-[#1e1e1e] h-[0.76px] w-[6.84px]" /></div>
      </div>
      <div className="absolute flex items-center justify-center left-[1.52px] size-[5.374px] top-[6.08px]">
        <div className="flex-none rotate-135"><div className="bg-[#1e1e1e] h-[0.76px] w-[6.84px]" /></div>
      </div>
    </div>
  );
}

function BrandMark() {
  return (
    <div className="h-[37.863px] relative w-[57px] shrink-0 cursor-pointer" onClick={(e) => {
      e.preventDefault();
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new Event("popstate"));
    }}>
      <div className="[word-break:break-word] absolute font-sans font-normal leading-[0] left-0 text-[#1e1e1e] text-[15.2px] top-[calc(50%-17.07px)] tracking-[-0.608px]">
        <p className="leading-[0.8] mb-0">The</p>
        <p className="leading-[0.8] mb-0">Realistic</p>
        <p className="leading-[0.8]">Dreamer</p>
      </div>
      <div className="absolute left-[44.08px] top-0">
        <CompassMark />
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  badge,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-[#ffffff] hover:bg-[#f9f9f9] flex gap-6 items-center px-4 py-4 rounded-2xl w-full cursor-pointer transition-all duration-300 ease-out group"
    >
      <div className="relative shrink-0 size-[42px] rounded-full overflow-hidden flex items-center justify-center bg-[#f4f4f4] group-hover:bg-[#ffffff] transition-colors duration-300">
        {icon}
      </div>
      <div className="flex flex-col flex-1 min-w-0 gap-1">
        <div className="flex items-center gap-1">
          <p className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-lg tracking-[-0.14px]">{title}</p>
          {badge && (
            <div className="bg-[#eb5503] flex items-center justify-center px-2 rounded-full">
              <span className="font-mono font-medium text-white text-xs">NEW</span>
            </div>
          )}
        </div>
        <p className="font-sans font-regular leading-[1.5] text-[#4d4d4d] text-sm">{desc}</p>
      </div>
    </div>
  );
}

function ServicesDropdown({ onItemClick }: { onItemClick: (id: string) => void }) {
  return (
    <div className="bg-white w-full px-[50px] py-[56px] mt-[-1px]">
      <div className="flex gap-[150px] items-start w-full">
        {/* Left: service cards */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <span className="font-mono font-regular text-[#77786d] text-sm">OUR SERVICES</span>
          <div className="flex gap-1 items-start w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <ServiceCard
                onClick={(e) => {
                  e?.preventDefault();
                  window.history.pushState({}, "", "/?service=product-design");
                  window.dispatchEvent(new Event("popstate"));
                }}
                title="Product & Experience Design"
                desc="UI/UX Design, Strategy, Mobile App, SaaS Dashboard & Design System"
                icon={
                  <svg width="20" height="20" viewBox="0 0 17.9167 17.9168" fill="none">
                    <path d={navSvgPaths.p16828200} stroke="#1E1E1E" strokeWidth="1.25" />
                    <path d={navSvgPaths.p262ad200} stroke="#1E1E1E" strokeWidth="1.25" />
                    <path d={navSvgPaths.p2bac7840} stroke="#1E1E1E" strokeWidth="1.25" />
                    <path d={navSvgPaths.pfa40d80} stroke="#1E1E1E" strokeWidth="1.25" />
                    <path d={navSvgPaths.p1791bc00} stroke="#1E1E1E" strokeWidth="1.25" />
                  </svg>
                }
              />
              <ServiceCard
                onClick={() => onItemClick("services")}
                title="Website Design & Development"
                desc="Website Design & Strategy, Landing Pages, Custom Web, E-Commerce & SEO"
                icon={
                  <svg width="20" height="20" viewBox="0 0 17.9167 17.9167" fill="none">
                    <path d={navSvgPaths.pb805f80} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d={navSvgPaths.p33afdb00} stroke="#1E1E1E" strokeWidth="1.25" />
                    <path d="M14.7917 15.625H13.125" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d="M8.125 17.2917H5.625" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d="M8.125 17.2917V13.125" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d="M8.125 9.79167H0.625001" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                  </svg>
                }
              />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <ServiceCard
                onClick={() => onItemClick("services")}
                title="AI Video Production"
                desc="Creative Production, AI Video, Product & Explainer Video, Campaign & Short-Form"
                badge={true}
                icon={
                  <svg width="20" height="20" viewBox="0 0 17.9167 17.9167" fill="none">
                    <path d={navSvgPaths.p2b4cea80} stroke="#1E1E1E" strokeWidth="1.25" />
                    <path d="M16.875 13.125H1.04167" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d="M16.875 4.79167H1.04167" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d={navSvgPaths.p8a28a00} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d={navSvgPaths.p3fc5aa00} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d={navSvgPaths.p1cee8000} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d={navSvgPaths.p33d75400} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                  </svg>
                }
              />
              <ServiceCard
                onClick={() => onItemClick("services")}
                title="Social Media Design"
                desc="Digital Marketing, Instagram Content Design, Social Media Planner & Brand"
                icon={
                  <svg width="20" height="20" viewBox="0 0 17.9167 12.9167" fill="none">
                    <path d={navSvgPaths.p1522ea00} stroke="#1E1E1E" strokeWidth="1.25" />
                    <path d={navSvgPaths.p247137c0} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                    <path d={navSvgPaths.p34d756a0} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>

        {/* Right: Most requested */}
        <div className="bg-[#f9f9f9] flex flex-col gap-6 items-start p-6 rounded-2xl w-[372px] shrink-0">
          <span className="font-mono font-regular text-[#77786d] text-sm">MOST REQUESTED</span>
          <div className="flex flex-col gap-3 items-start w-full">
            {["UI/UX Design", "Landing Pages", "E-Commerce Website", "AI Video Production"].map((item) => (
              <div
                key={item}
                onClick={() => onItemClick("services")}
                className="flex gap-6 items-center w-full rounded-lg cursor-pointer hover:opacity-60 transition-opacity"
              >
                <span className="flex-1 min-w-px font-sans font-normal leading-none text-[#1e1e1e] text-md">{item}</span>
                <ArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 80);
  };

  const handleScroll = (id: string) => {
    setServicesOpen(false);
    setMenuOpen(false);

    const params = new URLSearchParams(window.location.search);
    const isHomepage = !params.get("page") && !params.get("service");
    const element = document.getElementById(id);

    if (isHomepage && element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.history.pushState({}, "", `/?scroll=${id}`);
      window.dispatchEvent(new Event("popstate"));
    }
  };

  const navLinks = ["APPROACH", "PRICING", "ABOUT"];

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      {/* Top bar */}
      <div className={`flex items-center justify-between h-[70px] px-5 md:px-[50px] border-b ${servicesOpen ? "border-transparent" : "border-black/[0.06]"}`}>
        <BrandMark />

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-6">
            <span onClick={() => handleScroll("work")} className="font-mono font-regular text-[#1e1e1e] text-base cursor-pointer hover:opacity-60 transition-opacity">WORK</span>

            {/* SERVICES trigger */}
            <div
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
              onClick={() => handleScroll("services")}
            >
              <span className={`font-mono font-regular text-base transition-opacity ${servicesOpen ? "text-[#1e1e1e]" : "text-[#1e1e1e] hover:opacity-60"}`}>
                SERVICES
              </span>
              <ChevronDown className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </div>

            {navLinks.map((l) => (
              <span key={l} onClick={() => handleScroll(l.toLowerCase())} className="font-mono font-regular text-[#1e1e1e] text-base cursor-pointer hover:opacity-60 transition-opacity">{l}</span>
            ))}
          </div>
          <OrangeBtn label="START A PROJECT" onClick={() => {
            window.history.pushState({}, "", "/?page=inquiry");
            window.dispatchEvent(new Event("popstate"));
          }} />
        </div>

        {/* Hamburger */}
        <button className="lg:hidden p-2 text-[#1e1e1e]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Backdrop blur */}
      <div
        className={`hidden lg:block fixed inset-0 top-[70px] bg-black/20 backdrop-blur-sm z-[-1] transition-opacity duration-500 ease-in-out ${servicesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onMouseEnter={closeServices}
      />

      {/* Services megamenu — floating */}
      <div
        className={`hidden lg:block absolute top-[70px] left-0 w-full border-t border-black/[0.06] transition-all duration-500 ease-in-out ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        onMouseEnter={openServices}
        onMouseLeave={closeServices}
      >
        <ServicesDropdown onItemClick={handleScroll} />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-black/[0.06] px-5 pb-6 flex flex-col gap-1">
          {["WORK", "SERVICES", "APPROACH", "PRICING", "ABOUT"].map((l) => (
            <span key={l} onClick={() => handleScroll(l.toLowerCase())} className="font-mono font-medium text-[#1e1e1e] text-base py-3 border-b border-black/[0.06] cursor-pointer">{l}</span>
          ))}
          <div className="pt-4">
            <OrangeBtn label="START A PROJECT" className="w-fit" onClick={() => {
              setMenuOpen(false);
              window.history.pushState({}, "", "/?page=inquiry");
              window.dispatchEvent(new Event("popstate"));
            }} />
          </div>
        </div>
      )}
    </nav>
  );
}
