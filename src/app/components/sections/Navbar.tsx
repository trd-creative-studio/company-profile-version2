import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import navSvgPaths from "@/imports/Navigation/svg-f3oboy1128";
import { ChevronDown, ArrowUpRight } from "../Icons";
import { OrangeBtn } from "../OrangeBtn";
import { navigateToHome, navigateToInquiry, navigateToService, navigateTo } from "../../utils/navigation";

function CompassMark() {
  return (
    <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3.5 text-[#eb5503] shrink-0">
      <rect x="62" y="154.765" width="103.235" height="11.4706" fill="currentColor" />
      <rect x="256.999" y="166.235" width="103.235" height="11.4706" transform="rotate(-180 256.999 166.235)" fill="currentColor" />
      <rect x="165.235" y="154.765" width="103.235" height="11.4706" transform="rotate(90 165.235 154.765)" fill="currentColor" />
      <rect x="153.764" y="166.235" width="103.235" height="11.4706" transform="rotate(-90 153.764 166.235)" fill="currentColor" />
      <rect x="157.937" y="167.051" width="103.235" height="11.4706" transform="rotate(-135 157.937 167.051)" fill="currentColor" />
      <rect x="188.177" y="113.633" width="22.9412" height="22.9412" rx="11.4706" transform="rotate(-45 188.177 113.633)" fill="currentColor" />
      <rect x="161.875" y="154.765" width="103.235" height="11.4706" transform="rotate(45 161.875 154.765)" fill="currentColor" />
      <rect x="166.052" y="162.875" width="103.235" height="11.4706" transform="rotate(135 166.052 162.875)" fill="currentColor" />
    </svg>
  );
}

function BrandMark() {
  return (
    <div
      className="flex items-center cursor-pointer shrink-0"
      onClick={(e) => {
        e.preventDefault();
        navigateToHome();
      }}
    >
      <img
        src="/trd-logo.png"
        alt="The Realistic Dreamer"
        className="h-9 md:h-11 w-auto object-contain"
      />
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
    <div className="bg-white w-full px-6 md:px-[150px] py-[56px] mt-[-1px]">
      <div className="flex gap-[150px] lg:[150px] items-start w-full">
        {/* Left: service cards */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <span className="font-mono font-regular text-[#77786d] text-sm">OUR SERVICES</span>
          <div className="flex gap-1 items-start w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <ServiceCard
                onClick={() => {
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
      const offset = 80;
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

  return (
    <>
      <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
        {/* Top bar */}
        <div className="flex items-center justify-between h-[80px] px-6 md:px-[150px] w-full">
          {/* Brand Logo */}
          <BrandMark />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Nav Pill Container */}
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-5">
              <span
                onClick={() => handleScroll("work")}
                className="font-mono font-medium text-[#1e1e1e] text-xs md:text-sm tracking-wider cursor-pointer hover:opacity-60 transition-opacity"
              >
                WORK
              </span>

              <span
                onClick={() => handleScroll("about")}
                className="font-mono font-medium text-[#1e1e1e] text-xs md:text-sm tracking-wider cursor-pointer hover:opacity-60 transition-opacity"
              >
                ABOUT
              </span>

              {/* SERVICES Trigger */}
              <div
                className="flex items-center gap-1.5 cursor-pointer group"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
                onClick={() => handleScroll("services")}
              >
                <span
                  className={`font-mono font-medium text-xs md:text-sm tracking-wider transition-opacity ${servicesOpen ? "text-[#1e1e1e]" : "text-[#1e1e1e] group-hover:opacity-60"
                    }`}
                >
                  SERVICES
                </span>
                <ChevronDown
                  className={`size-3.5 text-[#1e1e1e] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                    }`}
                />
              </div>

              {/* <span
                onClick={() => handleScroll("pricing")}
                className="font-mono font-medium text-[#1e1e1e] text-xs md:text-sm tracking-wider cursor-pointer hover:opacity-60 transition-opacity"
              >
                PRICING
              </span> */}

              <span
                onClick={() => {
                  window.history.pushState({}, "", "/?page=inquiry");
                  window.dispatchEvent(new Event("popstate"));
                }}
                className="font-mono font-medium text-[#1e1e1e] text-xs md:text-sm tracking-wider cursor-pointer hover:opacity-60 transition-opacity"
              >
                CONTACT
              </span>
            </div>

            {/* Start a Project Pill Button */}
            <button
              onClick={() => {
                window.history.pushState({}, "", "/?page=inquiry");
                window.dispatchEvent(new Event("popstate"));
              }}
              className="bg-white hover:bg-gray-50 text-[#1e1e1e] px-4 py-2 rounded-full font-mono text-xs md:text-sm font-regular tracking-wider transition-all duration-200 cursor-pointer shrink-0"
            >
              START A PROJECT
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 text-[#1e1e1e] bg-white rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Backdrop blur */}
        <div
          className={`hidden lg:block fixed inset-0 top-[80px] bg-black/20 backdrop-blur-sm z-[-1] transition-opacity duration-500 ease-in-out ${servicesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onMouseEnter={closeServices}
        />

        {/* Services Megamenu */}
        <div
          className={`hidden lg:block absolute top-[80px] left-0 w-full border-t border-black/[0.06] transition-all duration-500 ease-in-out ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          onMouseEnter={openServices}
          onMouseLeave={closeServices}
        >
          <ServicesDropdown onItemClick={handleScroll} />
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="lg:hidden fixed left-0 right-0 bottom-0 top-[80px] bg-[#f9f9f9] z-[9999] flex flex-col justify-between px-6 py-8 overflow-y-auto">
            {/* Links */}
            <div className="flex flex-col">
              {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((l, i) => (
                <div
                  key={l}
                  onClick={() => {
                    if (l === "CONTACT") {
                      setMenuOpen(false);
                      window.history.pushState({}, "", "/?page=inquiry");
                      window.dispatchEvent(new Event("popstate"));
                    } else {
                      handleScroll(l.toLowerCase());
                    }
                  }}
                  className="flex items-center justify-between py-4 border-b border-black/[0.06] cursor-pointer group active:opacity-60 transition-opacity"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[#77786d] text-xs">0{i + 1}</span>
                    <span className="font-sans font-regular text-[#1e1e1e] text-[28px] tracking-[-0.56px] uppercase">{l}</span>
                  </div>
                  <ArrowUpRight className="text-[#1e1e1e] size-5" />
                </div>
              ))}
            </div>

            {/* Mobile Footer */}
            <div className="flex flex-col gap-8 pt-8">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[#77786d] text-[10px] tracking-[0.1em]">GET IN TOUCH</span>
                  <a href="mailto:trdcreativestudio@gmail.com" className="font-sans font-medium text-[#1e1e1e] text-sm underline">
                    hi@trdcreativestudio.com
                  </a>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span className="font-mono text-[#77786d] text-[10px] tracking-[0.1em]">FOLLOW US</span>
                  <span className="font-sans font-medium text-[#1e1e1e] text-sm">@trdcreativestudio</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  window.history.pushState({}, "", "/?page=inquiry");
                  window.dispatchEvent(new Event("popstate"));
                }}
                className="w-full bg-[#eb5503] text-white px-4 py-2 rounded-full font-mono text-sm font-medium tracking-wider justify-center"
              >
                START A PROJECT
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

