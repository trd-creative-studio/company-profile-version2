import { useState, useEffect } from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { WorkSection } from "./components/sections/WorkSection";
import { WhyTRDSection } from "./components/sections/WhyTRDSection";
import { LogoStripSection } from "./components/sections/LogoStripSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ClientsSection } from "./components/sections/ClientsSection";
import { PricingSection } from "./components/sections/PricingSection";
import { FAQSection } from "./components/sections/FAQSection";
import { Footer } from "./components/sections/Footer";
import { ProductDesignPage } from "./components/sections/ProductDesignPage";
import { InquiryFormPage } from "./components/sections/InquiryFormPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [transitioning, setTransitioning] = useState(false);
  const [transitionClass, setTransitionClass] = useState("translate-x-full");

  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      let targetPage = "home";

      if (params.get("page") === "inquiry") {
        targetPage = "inquiry";
      } else if (params.get("service") === "product-design") {
        targetPage = "product-design";
      }

      if (page === targetPage) {
        handleScrollParam(params);
        return;
      }

      // Start transition
      setTransitioning(true);
      setTransitionClass("translate-x-full");

      // Slide in from right (translate-x-full to translate-x-0)
      setTimeout(() => {
        setTransitionClass("translate-x-0 transition-transform duration-500 ease-in-out");
      }, 50);

      // Switch page when screen is fully covered (at 550ms)
      setTimeout(() => {
        setPage(targetPage);
        window.scrollTo(0, 0); // Scroll to top before new page renders

        handleScrollParam(params);

        // Slide out to left (translate-x-0 to -translate-x-full)
        setTransitionClass("-translate-x-full transition-transform duration-500 ease-in-out");
      }, 550);

      // Finish transition and reset overlay back to right
      setTimeout(() => {
        setTransitioning(false);
        setTransitionClass("translate-x-full");
      }, 1100);
    };

    const handleScrollParam = (params: URLSearchParams) => {
      const scrollToId = params.get("scroll");
      if (scrollToId) {
        setTimeout(() => {
          const element = document.getElementById(scrollToId);
          if (element) {
            const offset = 70;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 150);
      }
    };

    window.addEventListener("popstate", handleLocationChange);

    // Initial check (no animation on first load)
    const initialParams = new URLSearchParams(window.location.search);
    if (initialParams.get("page") === "inquiry") {
      setPage("inquiry");
    } else if (initialParams.get("service") === "product-design") {
      setPage("product-design");
    }
    handleScrollParam(initialParams);

    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [page]);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const params = new URLSearchParams(window.location.search);
    if (!params.get("scroll")) {
      window.scrollTo(0, 0);
    }
  }, [page]);

  return (
    <div className="bg-[#1e1e1e] flex flex-col w-full min-h-screen relative">
      {/* Orange transition overlay */}
      {transitioning && (
        <div className={`fixed inset-0 bg-[#eb5503] z-[9999] transform ${transitionClass}`} />
      )}

      {page === "inquiry" ? (
        <InquiryFormPage />
      ) : page === "product-design" ? (
        <ProductDesignPage />
      ) : (
        <>
          <Navbar />
          <Hero />
          <WorkSection />
          <WhyTRDSection />
          <ServicesSection />
          <LogoStripSection />
          <ClientsSection />
          <PricingSection />
          <FAQSection />
          <Footer />
        </>
      )}
    </div>
  );
}
