import { Navbar } from "../components/layout/Navbar";
import { ProductHero } from "../components/sections/product-design/ProductHero";
import { ProductProcessSection } from "../components/sections/product-design/ProductProcessSection";
import { ProductDeliverablesSection } from "../components/sections/product-design/ProductDeliverablesSection";
import { ProductEngagementsSection } from "../components/sections/product-design/ProductEngagementsSection";
import { ProductShowcaseSection } from "../components/sections/product-design/ProductShowcaseSection";
import { LogoStripSection } from "../components/sections/product-design/LogoStripSection";
import { ProductToolsSection } from "../components/sections/product-design/ProductToolsSection";
import { FounderMessageSection } from "../components/sections/home/FounderMessageSection";
import { FAQSection } from "../components/common/FAQSection";
import { Footer } from "../components/layout/Footer";

export function ProductDesignPage() {
  return (
    <div className="flex flex-col w-full min-h-screen relative">
      <Navbar />
      {/* Page content sits above the footer so the footer is revealed on scroll */}
      <div className="relative z-10 bg-[#f8f8f8]">
      <ProductHero />
      <ProductProcessSection />
      <ProductDeliverablesSection />
      <ProductEngagementsSection />
      <ProductShowcaseSection />
      <LogoStripSection title="Selected experience & collaborations" />
      <ProductToolsSection />
      <FounderMessageSection />
      </div>
      <FAQSection />
      <Footer
        reveal
        tag="PRODUCT & EXPERIENCE DESIGN"
        title="Have a product that needs more clarity?"
        description="Tell us where the experience is getting complicated and what your team needs to move forward."
        secondaryCta="BOOK A DISCOVERY CALL"
        inquiryService="product-design"
      />
    </div>
  );
}
