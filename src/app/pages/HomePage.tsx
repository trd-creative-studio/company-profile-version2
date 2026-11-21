import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/home/Hero";
import { StudioStatementSection } from "../components/sections/home/StudioStatementSection";
import { LogoStripSection } from "../components/sections/home/LogoStripSection";
import { HowWeHelpSection } from "../components/sections/home/HowWeHelpSection";
import { ProcessSection } from "../components/sections/home/ProcessSection";
// Testimonials hidden until real client quotes are ready. Re-enable by restoring this import and <ClientsSection /> below.
// import { ClientsSection } from "../components/sections/home/ClientsSection";
import { FounderMessageSection } from "../components/sections/home/FounderMessageSection";
import { FAQSection } from "../components/common/FAQSection";
import { Footer } from "../components/layout/Footer";

export function HomePage() {
  return (
    <>
      <Navbar />
      {/* Page content sits above the footer so the footer is revealed on scroll */}
      <div className="relative z-10 bg-[#f8f8f8]">
      <Hero />
      <StudioStatementSection />
      <LogoStripSection />
      <HowWeHelpSection />
      <ProcessSection />
      {/* <ClientsSection /> */}
      <FounderMessageSection />
      </div>
      <FAQSection />
      <Footer reveal />
    </>
  );
}
