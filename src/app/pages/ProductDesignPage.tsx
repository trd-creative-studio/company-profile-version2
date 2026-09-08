import { Navbar } from "../components/layout/Navbar";
import { ProductHero } from "../components/sections/product-design/ProductHero";
import { ProductProcessSection } from "../components/sections/product-design/ProductProcessSection";
import { ProductDeliverablesSection } from "../components/sections/product-design/ProductDeliverablesSection";
import { ProductEngagementsSection } from "../components/sections/product-design/ProductEngagementsSection";
import { ProductShowcaseSection } from "../components/sections/product-design/ProductShowcaseSection";
import { LogoStripSection } from "../components/sections/product-design/LogoStripSection";
import { ProductToolsSection } from "../components/sections/product-design/ProductToolsSection";
import { FAQSection } from "../components/common/FAQSection";
import { Footer } from "../components/layout/Footer";

export function ProductDesignPage() {
  return (
    <div className="flex flex-col w-full min-h-screen relative">
      <Navbar />
      <ProductHero />
      <ProductProcessSection />
      <ProductDeliverablesSection />
      <ProductEngagementsSection />
      <ProductShowcaseSection />
      <LogoStripSection title="Selected experience & collaborations" />
      <ProductToolsSection />
      <FAQSection />
      <Footer
        tag="PRODUCT & EXPERIENCE DESIGN"
        title="Have a product that needs more clarity?"
        description="Tell us where the experience is getting complicated and what your team needs to move forward."
        secondaryCta="BOOK A DISCOVERY CALL"
        inquiryService="product-design"
      />
    </div>
  );
}
