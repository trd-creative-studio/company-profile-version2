import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { OrangeBtn } from "../OrangeBtn";

const SCOPE_OPTIONS_MAP: Record<string, string[]> = {
  "Product & Experience Design": [
    "Landing Page Design",
    "UX Focus",
    "Mobile App Design",
    "Website Design",
    "SaaS",
    "Dashboard",
    "Ongoing Support",
    "Figma File MakeUp",
  ],
  "Web Design & Development": [
    "Landing Page & Marketing Sites",
    "E-Commerce",
    "SaaS",
    "Mobile App",
    "Company Profile",
    "Custom Web",
    "SEO",
  ],
  "AI Video Production": [
    "Product & Explainer Videos",
    "AI Video Generation",
    "Social & Short Form Content",
    "Campaign Assets",
  ],
};

const BUDGET_OPTIONS_MAP: Record<string, string[]> = {
  "Web Design & Development": [
    "< Rp5.000.000",
    "Rp5.000.000 – Rp10.000.000",
    "Rp10.000.000 – Rp20.000.000",
    "Rp20.000.000 – Rp50.000.000",
    "Rp50.000.000+",
    "Not sure yet",
  ],
  "Product & Experience Design": [
    "< Rp5.000.000",
    "Rp5.000.000 – Rp12.000.000",
    "Rp12.000.000 – Rp25.000.000",
    "Rp25.000.000 – Rp50.000.000",
    "Rp50.000.000+",
    "Not sure yet",
  ],
  "AI Video Production": [
    "< Rp5.000.000",
    "Rp5.000.000 – Rp10.000.000",
    "Rp10.000.000 – Rp20.000.000",
    "Rp20.000.000+",
    "Not sure yet",
  ],
};

const DEFAULT_BUDGET_OPTIONS = [
  "< Rp5.000.000",
  "Rp5.000.000 – Rp10.000.000",
  "Rp10.000.000 – Rp20.000.000",
  "Rp20.000.000 – Rp50.000.000",
  "Rp50.000.000+",
  "Not sure yet",
];

const MAIN_SERVICES = [
  { name: "Product & Experience Design", enabled: true },
  { name: "Web Design & Development", enabled: true },
  { name: "AI Video Production", enabled: true },
];

export function InquiryFormPage() {
  const [submitted, setSubmitted] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionClass, setTransitionClass] = useState("translate-x-full");

  // Form Fields State matching reference defaults
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [serviceCategory, setServiceCategory] = useState<string>("");
  const [serviceScope, setServiceScope] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("As soon as possible");
  const [projectDetails, setProjectDetails] = useState("");
  const [referral, setReferral] = useState<string>("Dribbble");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Auto pre-fill service from URL search parameters on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam === "product-design") {
      setServiceCategory("Product & Experience Design");
    } else if (serviceParam === "website") {
      setServiceCategory("Web Design & Development");
    } else if (serviceParam === "ai-video") {
      setServiceCategory("AI Video Production");
    }
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!companyName.trim()) newErrors.companyName = "Company/Brand name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError("");
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            companyName,
            serviceCategory,
            serviceScope: Array.isArray(serviceScope) ? serviceScope.join(", ") : (serviceScope || ""),
            helpServices: Array.isArray(serviceScope) && serviceScope.length > 0
              ? [serviceCategory, ...serviceScope].filter(Boolean)
              : [serviceCategory].filter(Boolean),
            budget,
            timeline,
            projectDetails,
            referral,
            findUs: referral,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setTransitioning(true);
          setTransitionClass("translate-x-full");

          setTimeout(() => {
            setTransitionClass("translate-x-0 transition-transform duration-500 ease-in-out");
          }, 50);

          setTimeout(() => {
            setSubmitted(true);
            window.scrollTo(0, 0);
            setTransitionClass("-translate-x-full transition-transform duration-500 ease-in-out");
          }, 550);

          setTimeout(() => {
            setTransitioning(false);
            setTransitionClass("translate-x-full");
          }, 1100);
        } else {
          setSubmitError(data.error || "Failed to submit project inquiry.");
        }
      } catch (err) {
        setSubmitError("A connection error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      const firstErrorKey = Object.keys(errors)[0];
      const errorElement = document.getElementById(firstErrorKey);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleBackHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="bg-[#1e1e1e] flex flex-col w-full min-h-screen relative">
      {/* Orange transition overlay */}
      {transitioning && (
        <div className={`fixed inset-0 bg-[#eb5503] z-[9999] transform pointer-events-none ${transitionClass}`} />
      )}

      {/* Main Light Section Container with Rounded Bottom */}
      <div className="bg-[#f8f8f8] rounded-b-[32px] sm:rounded-b-[40px] md:rounded-b-[48px] w-full flex flex-col min-h-[calc(100vh-400px)]">
        <Navbar />

        <main className="w-full pb-20 pt-28 z-10 relative flex-1">
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-16">
            {submitted ? (
              /* SUCCESS STATE */
              <div className="p-8 md:p-16 flex flex-col items-center text-center gap-8 py-16 min-h-[450px]">
                <div className="bg-[#eb5503]/10 size-16 rounded-full flex items-center justify-center text-[#eb5503]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3 max-w-[520px]">
                  <h2 className="font-sans font-regular text-[#1e1e1e] text-2xl md:text-3xl tracking-[-0.8px]">
                    Thanks — we’ve received your project inquiry.
                  </h2>
                  <p className="font-sans text-[#4d4d4d] text-base leading-[1.6]">
                    We’ll review the details and get back to you within 1–2 business days.
                  </p>
                </div>
                <OrangeBtn label="RETURN TO HOMEPAGE" onClick={handleBackHome} className="mt-4" />
              </div>
            ) : (
              /* FORM STATE - SPLIT SCREEN */
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-start justify-center">
                {/* Left Column */}
                <div className="flex flex-col justify-between shrink-0 lg:w-[380px] w-full lg:sticky lg:top-[150px] lg:min-h-[500px]">
                  <div>
                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/[0.04] mb-6">
                      <span className="size-2 rounded-full bg-[#eb5503] animate-pulse" />
                      <span className="font-mono text-xs text-[#77786d] uppercase">
                        AVAILABLE FOR SELECTED PROJECTS
                      </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-sans font-regular text-[#1e1e1e] text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-1.5px] max-w-[400px] mt-4 mb-4">
                      Tell us about <br />
                      your project.
                    </h1>

                    {/* Subtitle */}
                    {/* <p className="font-sans text-[#4d4d4d] text-base leading-[1.5] max-w-[360px]">
                      Share a few details so we can understand what you need and recommend the best next step.
                    </p> */}
                  </div>

                  {/* Bottom Note */}
                  <div className="pt-12">
                    <p className="font-sans text-sm text-[#4d4d4d] leading-[1.6]">
                      Not ready to start a project? <br />
                      Reach us directly by{" "}
                      <a href="mailto:hi@trdcreativestudio.com" className="text-[#1e1e1e] underline underline-offset-4 hover:text-[#eb5503] transition-colors">
                        email
                      </a>{" "}
                      or{" "}
                      <a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-[#1e1e1e] underline underline-offset-4 hover:text-[#eb5503] transition-colors">
                        WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Right Column: Form Card */}
                <div className="bg-white rounded-lg w-full lg:w-[650px] shrink-0 overflow-hidden">
                  {/* Top Orange Alert Banner */}
                  <div className="bg-[#eb5503] text-white p-4 sm:p-4 flex items-start gap-3 rounded-t-lg">
                    <div className="size-4 rounded-full border-1 border-white flex items-center justify-center font-mono text-xs font-regular shrink-0 mt-0.5 select-none">
                      i
                    </div>
                    <p className="font-sans text-xs sm:text-sm font-regular leading-[1.4] text-white">
                      Share a few details so we can understand what you need and recommend the best next step. Only takes about 2 minutes.
                    </p>
                  </div>

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit} className="p-6 sm:p-6 md:p-8 flex flex-col gap-10">
                    {/* Name */}
                    <div className="flex flex-col gap-2 w-full" id="name">
                      <label className="font-sans text-md font-medium text-[#1e1e1e]">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={`w-full pb-2 pt-1 bg-transparent border-b ${errors.name ? "border-[#d4183d]" : "border-black/[0.1]"
                          } focus:outline-none focus:border-[#eb5503] text-[#1e1e1e] placeholder:text-black/25 font-sans text-sm md:text-base transition-colors`}
                      />
                      {errors.name && <span className="font-mono text-xs text-[#d4183d] mt-1">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2 w-full" id="email">
                      <label className="font-sans text-md font-medium text-[#1e1e1e]">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className={`w-full pb-2 pt-1 bg-transparent border-b ${errors.email ? "border-[#d4183d]" : "border-black/[0.1]"
                          } focus:outline-none focus:border-[#eb5503] text-[#1e1e1e] placeholder:text-black/25 font-sans text-sm md:text-base transition-colors`}
                      />
                      {errors.email && <span className="font-mono text-xs text-[#d4183d] mt-1">{errors.email}</span>}
                    </div>

                    {/* Company / Brand */}
                    <div className="flex flex-col gap-2 w-full" id="companyName">
                      <label className="font-sans text-md font-medium text-[#1e1e1e]">Company / Brand</label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g TRD Creative Studio"
                        className={`w-full pb-2 pt-1 bg-transparent border-b ${errors.companyName ? "border-[#d4183d]" : "border-black/[0.1]"
                          } focus:outline-none focus:border-[#eb5503] text-[#1e1e1e] placeholder:text-black/25 font-sans text-sm md:text-base transition-colors`}
                      />
                      {errors.companyName && <span className="font-mono text-xs text-[#d4183d] mt-1">{errors.companyName}</span>}
                    </div>

                    {/* What do you need help with? (Main Service Category) */}
                    <div className="flex flex-col gap-4 w-full">
                      <label className="font-sans text-md font-medium text-[#1e1e1e]">
                        What do you need help with?
                      </label>
                      <div className="flex flex-wrap gap-2.5 w-full">
                        {MAIN_SERVICES.map((item) => {
                          const isSelected = serviceCategory === item.name;
                          return (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => {
                                if (serviceCategory === item.name) {
                                  setServiceCategory("");
                                  setServiceScope([]);
                                  setBudget("");
                                } else {
                                  setServiceCategory(item.name);
                                  setServiceScope([]);
                                  setBudget("");
                                }
                              }}
                              className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-sans transition-all duration-200 select-none flex items-center gap-2 cursor-pointer ${
                                isSelected
                                  ? "bg-[#fff1eb] border-[#eb5503] text-[#eb5503] font-regular"
                                  : "bg-[#ffffff] border-black/[0.08] hover:border-black/[0.2] text-[#1e1e1e]"
                              }`}
                            >
                              <span>{item.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dynamic Child Scope Options (Only visible after a main category is selected) */}
                    {serviceCategory && SCOPE_OPTIONS_MAP[serviceCategory] && (
                      <div className="flex flex-col gap-4 w-full animate-fadeIn">
                        <label className="font-sans text-md font-medium text-[#1e1e1e]">
                          What specific scope do you need help with?
                        </label>
                        <div className="flex flex-wrap gap-2 w-full">
                          {SCOPE_OPTIONS_MAP[serviceCategory].map((item) => {
                            const isSelected = serviceScope.includes(item);
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  if (isSelected) {
                                    setServiceScope(serviceScope.filter((s) => s !== item));
                                  } else {
                                    setServiceScope([...serviceScope, item]);
                                  }
                                }}
                                className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-sans transition-all duration-200 cursor-pointer select-none ${isSelected
                                  ? "bg-[#fff1eb] border-[#eb5503] text-[#eb5503] font-medium"
                                  : "bg-[#ffffff] border-black/[0.08] hover:border-black/[0.2] text-[#1e1e1e]"
                                  }`}
                              >
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* What budget range are you considering? */}
                    <div className="flex flex-col gap-4 w-full">
                      <label className="font-sans text-md font-medium text-[#1e1e1e]">
                        What budget range are you considering?
                      </label>
                      <div className="flex flex-wrap gap-2 w-full">
                        {((serviceCategory && BUDGET_OPTIONS_MAP[serviceCategory]) || DEFAULT_BUDGET_OPTIONS).map((item) => {
                          const isSelected = budget === item;
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => setBudget(isSelected ? "" : item)}
                              className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-sans tracking-[-0.4px] transition-all duration-200 cursor-pointer select-none ${isSelected
                                ? "bg-[#fff1eb] border-[#eb5503] text-[#eb5503] font-medium"
                                : "bg-[#ffffff] border-black/[0.08] hover:border-black/[0.2] text-[#1e1e1e]"
                                }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* When would you like to start? */}
                    <div className="flex flex-col gap-4 w-full">
                      <label className="font-sans text-md font-medium text-[#1e1e1e]">
                        When would you like to start?
                      </label>
                      <div className="flex flex-wrap gap-2 w-full">
                        {[
                          "As soon as possible",
                          "Within 2-4 weeks",
                          "Within 1-2 months",
                          "3+ months",
                          "Still exploring",
                        ].map((item) => {
                          const isSelected = timeline === item;
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => setTimeline(item)}
                              className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-sans transition-all duration-200 cursor-pointer select-none ${isSelected
                                ? "bg-[#fff1eb] border-[#eb5503] text-[#eb5503] font-medium"
                                : "bg-[#ffffff] border-black/[0.08] hover:border-black/[0.2] text-[#1e1e1e]"
                                }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Describe your project* */}
                    <div className="flex flex-col gap-1 w-full" id="projectDetails">
                      <label className="font-sans text-md font-medium text-[#1e1e1e]">
                        Describe your project*
                      </label>
                      <textarea
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder="Tell us what you're building, the current challenge, and what you'd like to achieve."
                        rows={2}
                        className="w-full pb-2 pt-1 bg-transparent border-b border-black/[0.1] focus:outline-none focus:border-[#eb5503] text-[#1e1e1e] placeholder:text-black/25 font-sans text-sm md:text-base transition-colors resize-none"
                      />
                    </div>

                    {/* How did you hear us? */}
                    <div className="flex flex-col gap-3 w-full">
                      <label className="font-sans text-md font-medium text-[#1e1e1e]">
                        How did you hear us?
                      </label>
                      <div className="flex flex-wrap gap-2.5 w-full">
                        {[
                          "Dribbble",
                          "Behance",
                          "Instagram",
                          "Google",
                          "Pinterest",
                          "LinkedIn",
                        ].map((item) => {
                          const isSelected = referral === item;
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => setReferral(item)}
                              className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-sans transition-all duration-200 cursor-pointer select-none ${isSelected
                                ? "bg-[#fff1eb] border-[#eb5503] text-[#eb5503] font-medium"
                                : "bg-[#ffffff] border-black/[0.08] hover:border-black/[0.2] text-[#1e1e1e]"
                                }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Submit Button Row */}
                    <div className="flex flex-col items-end gap-2 w-full pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#eb5503] hover:bg-[#d44c02] text-white px-4 py-2 rounded-full font-mono text-xs md:text-sm font-regular tracking-wider flex items-center gap-4 transition-all duration-200 cursor-pointer"
                      >
                        <span>{isSubmitting ? "SUBMITTING..." : "SUBMIT PROJECT INQUIRY"}</span>
                        <span className="text-xs">▶</span>
                      </button>
                      {submitError && (
                        <span className="font-mono text-xs text-[#d4183d] mt-1 text-right max-w-[280px]">
                          {submitError}
                        </span>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

