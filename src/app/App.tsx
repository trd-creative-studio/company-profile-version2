import { useState, useEffect } from "react";
import { scrollToSection } from "./utils/navigation";
import { HomePage } from "./pages/HomePage";
import { ProductDesignPage } from "./pages/ProductDesignPage";
import { InquiryFormPage } from "./pages/InquiryFormPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [transitioning, setTransitioning] = useState(false);
  const [transitionClass, setTransitionClass] = useState("translate-x-full");

  const determineTargetPage = () => {
    const pathname = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);

    if (
      pathname.includes("/inquiry") ||
      pathname.includes("/start-project") ||
      pathname.includes("/contact-us") ||
      params.get("page") === "inquiry"
    ) {
      return "inquiry";
    }
    if (
      pathname.includes("/services/product-design") ||
      pathname.includes("/product-design") ||
      params.get("service") === "product-design"
    ) {
      return "product-design";
    }
    return "home";
  };

  const handleScrollToTarget = () => {
    const hash = window.location.hash.replace("#", "");
    const params = new URLSearchParams(window.location.search);
    const scrollId = hash || params.get("scroll");

    const pathname = window.location.pathname.toLowerCase();
    const pathSectionMap: Record<string, string> = {
      "/about": "about",
      "/services": "services",
      "/process": "process",
      "/testimonials": "testimonials",
      "/contact": "contact",
    };

    const targetSection = scrollId || pathSectionMap[pathname];

    if (targetSection) {
      setTimeout(() => {
        scrollToSection(targetSection, 80);
      }, 150);
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      const targetPage = determineTargetPage();

      if (page === targetPage) {
        handleScrollToTarget();
        return;
      }

      // Start transition
      setTransitioning(true);
      setTransitionClass("translate-x-full");

      setTimeout(() => {
        setTransitionClass("translate-x-0 transition-transform duration-500 ease-in-out");
      }, 50);

      setTimeout(() => {
        setPage(targetPage);
        window.scrollTo(0, 0);

        handleScrollToTarget();

        setTransitionClass("-translate-x-full transition-transform duration-500 ease-in-out");
      }, 550);

      setTimeout(() => {
        setTransitioning(false);
        setTransitionClass("translate-x-full");
      }, 1100);
    };

    window.addEventListener("popstate", handleLocationChange);

    // Initial check on load
    const initialPage = determineTargetPage();
    setPage(initialPage);
    handleScrollToTarget();

    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [page]);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    if (!hash && !params.get("scroll")) {
      window.scrollTo(0, 0);
    }

    // Dynamic SEO Metadata
    let title = "TRD Creative Studio | UI/UX Design, Website & AI Video Production";
    let description = "TRD Creative Studio helps product and business owners turn complex ideas into clear, high-converting digital products, UI/UX designs, custom websites, and AI video productions.";
    let canonical = "https://trdcreativestudio.com/";

    if (page === "inquiry") {
      title = "Start a Project | TRD Creative Studio";
      description = "Get in touch with TRD Creative Studio to kickstart your next digital product, UI/UX design, or web project.";
      canonical = "https://trdcreativestudio.com/inquiry";
    } else if (page === "product-design") {
      title = "Product & Experience Design | TRD Creative Studio";
      description = "UI/UX Design, Product Strategy, Mobile App & SaaS Dashboard Design Systems by TRD Creative Studio.";
      canonical = "https://trdcreativestudio.com/services/product-design";
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute("href", canonical);
  }, [page]);

  return (
    <div className="bg-[#f8f8f8] flex flex-col w-full min-h-screen relative">
      {/* Orange transition overlay */}
      {transitioning && (
        <div className={`fixed inset-0 bg-[#eb5503] z-[9999] transform ${transitionClass}`} />
      )}

      {page === "inquiry" ? (
        <InquiryFormPage />
      ) : page === "product-design" ? (
        <ProductDesignPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
}
