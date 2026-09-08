import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/home/Hero";
import { StudioStatementSection } from "../components/sections/home/StudioStatementSection";
import { LogoStripSection } from "../components/sections/home/LogoStripSection";
import { HowWeHelpSection } from "../components/sections/home/HowWeHelpSection";
import { ProcessSection } from "../components/sections/home/ProcessSection";
import { ClientsSection } from "../components/sections/home/ClientsSection";
import { FAQSection } from "../components/common/FAQSection";
import { Footer } from "../components/layout/Footer";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <StudioStatementSection />
      <LogoStripSection />
      <HowWeHelpSection />
      <ProcessSection />
      <ClientsSection />
      <FAQSection />
      <Footer />
    </>
  );
}
