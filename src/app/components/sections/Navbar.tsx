import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import navSvgPaths from "@/imports/Navigation/svg-f3oboy1128";
import { ChevronDown, ArrowUpRight } from "../Icons";
import { OrangeBtn } from "../OrangeBtn";
import { navigateToHome, navigateToInquiry, navigateToService, navigateTo, scrollToSection } from "../../utils/navigation";

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
  badgeText,
  disabled,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badgeText?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex gap-3.5 items-center p-2.5 rounded-lg transition-all duration-200 ${disabled
        ? "opacity-60 cursor-default"
        : "cursor-pointer hover:bg-[#f8f8f8] group"
        }`}
    >
      <div className="shrink-0 size-[40px] rounded-full flex items-center justify-center bg-[#f4f4f4] group-hover:bg-white transition-colors duration-200">
        {icon}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-sans font-medium text-[#1e1e1e] text-md">{title}</p>
          {badgeText && (
            <span className="bg-[#eb5503] text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
              {badgeText}
            </span>
          )}
        </div>
        <p className="font-sans text-[#626262] text-sm">{desc}</p>
      </div>
    </div>
  );
}

function ServicesDropdown({
  onItemClick,
  onClose,
}: {
  onItemClick: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="bg-white rounded-lg p-6 w-[740px] max-w-[calc(100vw-48px)] cursor-default">
      <div className="grid grid-cols-[1fr_250px] gap-8 items-stretch w-full">
        {/* Left Column: Our Services */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="mb-6">
            <span className="font-mono text-xs text-[#77786d] bg-[#f9f9f9] px-4 py-1 font-regular tracking-wider uppercase">
              OUR SERVICES
            </span>
          </div>

          <div className="flex flex-col w-full">
            <ServiceCard
              onClick={() => {
                navigateToService("product-design");
                onClose();
              }}
              title="Product & Experience Design"
              desc="Cleaner products, faster decisions"
              icon={
                <svg width="18" height="18" viewBox="0 0 17.9167 17.9168" fill="none">
                  <path d={navSvgPaths.p16828200} stroke="#1E1E1E" strokeWidth="1.25" />
                  <path d={navSvgPaths.p262ad200} stroke="#1E1E1E" strokeWidth="1.25" />
                  <path d={navSvgPaths.p2bac7840} stroke="#1E1E1E" strokeWidth="1.25" />
                  <path d={navSvgPaths.pfa40d80} stroke="#1E1E1E" strokeWidth="1.25" />
                  <path d={navSvgPaths.p1791bc00} stroke="#1E1E1E" strokeWidth="1.25" />
                </svg>
              }
            />

            <div className="h-[1px] bg-black/[0.03] w-full my-2" />

            <ServiceCard
              onClick={() => {
                navigateToService("website-design");
                onClose();
              }}
              title="Website Design"
              desc="Websites built to convert."
              icon={
                <svg width="18" height="18" viewBox="0 0 17.9167 17.9167" fill="none">
                  <path d={navSvgPaths.pb805f80} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                  <path d={navSvgPaths.p33afdb00} stroke="#1E1E1E" strokeWidth="1.25" />
                  <path d="M14.7917 15.625H13.125" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                  <path d="M8.125 17.2917H5.625" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                  <path d="M8.125 17.2917V13.125" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                  <path d="M8.125 9.79167H0.625001" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
                </svg>
              }
            />

            <div className="h-[1px] bg-black/[0.03] w-full my-2" />

            <ServiceCard
              title="AI Video Production"
              desc="Creative Production, AI Video"
              badgeText="COMING SOON"
              disabled={true}
              icon={
                <svg width="18" height="18" viewBox="0 0 17.9167 17.9167" fill="none">
                  <path d={navSvgPaths.p2b4cea80} stroke="#777777" strokeWidth="1.25" />
                  <path d="M16.875 13.125H1.04167" stroke="#777777" strokeLinecap="round" strokeWidth="1.25" />
                  <path d="M16.875 4.79167H1.04167" stroke="#777777" strokeLinecap="round" strokeWidth="1.25" />
                  <path d={navSvgPaths.p8a28a00} stroke="#777777" strokeLinecap="round" strokeWidth="1.25" />
                  <path d={navSvgPaths.p3fc5aa00} stroke="#777777" strokeLinecap="round" strokeWidth="1.25" />
                  <path d={navSvgPaths.p1cee8000} stroke="#777777" strokeLinecap="round" strokeWidth="1.25" />
                  <path d={navSvgPaths.p33d75400} stroke="#777777" strokeLinecap="round" strokeWidth="1.25" />
                </svg>
              }
            />

            <div className="h-[1px] bg-black/[0.03] w-full my-2" />

            <ServiceCard
              title="Social Media Design"
              desc="Digital Marketing Content"
              badgeText="COMING SOON"
              disabled={true}
              icon={
                <svg width="18" height="18" viewBox="0 0 17.9167 12.9167" fill="none">
                  <path d={navSvgPaths.p1522ea00} stroke="#777777" strokeWidth="1.25" />
                  <path d={navSvgPaths.p247137c0} stroke="#777777" strokeLinecap="round" strokeWidth="1.25" />
                  <path d={navSvgPaths.p34d756a0} stroke="#777777" strokeLinecap="round" strokeWidth="1.25" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Right Column: Most Requested */}
        <div className="flex flex-col justify-between h-full flex-1 min-w-0">
          <div className="flex flex-col w-full">
            <div className="mb-6">
              <span className="font-mono text-xs text-[#77786d] bg-[#f9f9f9] px-4 py-1 font-regular tracking-wider uppercase">
                MOST REQUESTED
              </span>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {[
                { label: "UI/UX Design", service: "product-design" },
                { label: "Landing Pages", service: "website-design" },
                { label: "E-Commerce Website", service: "website-design" },
              ].map((item) => (
                <div
                  key={item.label}
                  onClick={() => {
                    navigateToService(item.service);
                    onClose();
                  }}
                  className="bg-[#f9f9f9] hover:bg-[#f7f7f7] flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group"
                >
                  <span className="font-sans font-medium text-[#1e1e1e] text-md">{item.label}</span>
                  <ArrowUpRight className="size-4 text-[#1e1e1e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Contact Info */}
          <div className="mt-6 flex flex-col gap-0.5 px-1">
            <span className="font-sans text-[#777777] text-sm">Looking for something?</span>
            <a
              href="mailto:hi@trdcreativestudio.com"
              className="font-sans text-[#1e1e1e] text-sm font-medium underline hover:opacity-75 transition-opacity"
            >
              hi@trdcreativestudio.com
            </a>
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
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 250);
  };

  const closeServicesImmediately = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(false);
  };

  const handleScroll = (id: string) => {
    closeServicesImmediately();
    setMenuOpen(false);

    const params = new URLSearchParams(window.location.search);
    const isHomepage = !params.get("page") && !params.get("service");

    if (isHomepage) {
      scrollToSection(id);
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
                onClick={() => handleScroll("about")}
                onMouseEnter={closeServicesImmediately}
                className="font-mono font-medium text-[#1e1e1e] text-xs md:text-sm tracking-wider cursor-pointer hover:opacity-60 transition-opacity"
              >
                ABOUT
              </span>

              {/* SERVICES Trigger (Clickable & Hoverable) */}
              <div
                className="relative py-1 flex items-center cursor-pointer"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
                onClick={() => handleScroll("services")}
              >
                <div
                  className="flex items-center gap-1.5 cursor-pointer group"
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

                {/* Services Megamenu Dropdown Card - Centered on SERVICES */}
                <div
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                  className={`absolute top-full left-1/2 -translate-x-1/2 bg-shadow-md pt-6 transition-all duration-350 ease-out z-50 ${servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                >
                  {/* Invisible Hover Bridge */}
                  <div
                    className="absolute -top-4 left-0 right-0 h-4 w-full cursor-pointer"
                    onClick={() => handleScroll("services")}
                  />
                  <div onClick={(e) => e.stopPropagation()}>
                    <ServicesDropdown
                      onItemClick={handleScroll}
                      onClose={closeServicesImmediately}
                    />
                  </div>
                </div>
              </div>

              <span
                onClick={() => handleScroll("process")}
                onMouseEnter={closeServicesImmediately}
                className="font-mono font-medium text-[#1e1e1e] text-xs md:text-sm tracking-wider cursor-pointer hover:opacity-60 transition-opacity"
              >
                OUR PROCESS
              </span>

              <span
                onClick={() => handleScroll("testimonials")}
                onMouseEnter={closeServicesImmediately}
                className="font-mono font-medium text-[#1e1e1e] text-xs md:text-sm tracking-wider cursor-pointer hover:opacity-60 transition-opacity"
              >
                TESTIMONIALS
              </span>

              <span
                onClick={() => handleScroll("contact")}
                onMouseEnter={closeServicesImmediately}
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
              onMouseEnter={closeServicesImmediately}
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

        {/* Backdrop blur overlay */}
        <div
          className={`hidden lg:block fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${servicesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onMouseEnter={closeServices}
          onClick={closeServicesImmediately}
        />



        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="lg:hidden fixed left-0 right-0 bottom-0 top-[80px] bg-[#f9f9f9] z-[9999] flex flex-col justify-between px-6 py-8 overflow-y-auto">
            {/* Links */}
            <div className="flex flex-col">
              {[
                { label: "ABOUT", id: "about" },
                { label: "SERVICES", id: "services" },
                { label: "OUR PROCESS", id: "process" },
                { label: "TESTIMONIALS", id: "testimonials" },
                { label: "CONTACT", id: "contact" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  onClick={() => handleScroll(item.id)}
                  className="flex items-center justify-between py-4 border-b border-black/[0.06] cursor-pointer group active:opacity-60 transition-opacity"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[#77786d] text-xs">0{i + 1}</span>
                    <span className="font-sans font-regular text-[#1e1e1e] text-[24px] tracking-[-0.56px] uppercase">{item.label}</span>
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

