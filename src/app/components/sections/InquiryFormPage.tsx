import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { OrangeBtn } from "../OrangeBtn";
import { ArrowUpRight } from "../Icons";
import { Footer } from "./Footer";

export function InquiryFormPage() {
  const [submitted, setSubmitted] = useState(false);

  // Form Fields State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [helpServices, setHelpServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [findUs, setFindUs] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Auto pre-fill service from URL search parameters on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam === "product-design") {
      setHelpServices(["UI/UX Design"]);
    } else if (serviceParam === "website") {
      setHelpServices(["Company Profile Website"]);
    } else if (serviceParam === "ai-video") {
      setHelpServices(["AI Video Production"]);
    }
  }, []);

  const handleServiceToggle = (opt: string) => {
    if (helpServices.includes(opt)) {
      setHelpServices(helpServices.filter((s) => s !== opt));
    } else {
      setHelpServices([...helpServices, opt]);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!companyName.trim()) newErrors.companyName = "Company/Brand name is required";
    if (helpServices.length === 0) newErrors.helpServices = "Please select at least one service";
    if (!budget) newErrors.budget = "Please select a budget range";
    if (!findUs) newErrors.findUs = "Please select how you found us";
    if (!projectDetails.trim()) newErrors.projectDetails = "Please describe your project";

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
            helpServices,
            budget,
            findUs,
            projectDetails,
          }),
        });

        const data = await response.json();
        if (response.ok && data.success) {
          setSubmitted(true);
        } else {
          setSubmitError(data.error || "Failed to submit project inquiry.");
        }
      } catch (err) {
        setSubmitError("A connection error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Scroll to the first error
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
      <Navbar />

      <main className="bg-white w-full rounded-b-[40px] pb-24 pt-0 z-10 relative flex-1">
        <div className="max-w-[1200px] w-full mx-auto px-5 md:px-[50px] flex flex-col justify-center pt-[50px] pb-8">
          {submitted ? (
            /* SUCCESS STATE */
            <div className="flex flex-col items-center text-center gap-8 py-8 animate-fade-in">
              <div className="bg-[#eb5503]/10 size-20 rounded-full flex items-center justify-center text-[#eb5503] animate-scale-up">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="flex flex-col gap-4 max-w-[550px]">
                <h2 className="font-sans font-regular leading-[1.2] text-[#1e1e1e] text-[28px] md:text-[36px] tracking-[-1px]">
                  Thanks — we’ve received your project inquiry.
                </h2>
                <p className="font-sans font-regular leading-[1.6] text-[#4d4d4d] text-[15px] md:text-[16px]">
                  We’ll review the details and get back to you within 1–2 business days.
                  <br /><br />
                  If the project looks like a good fit, we’ll invite you to a discovery call to discuss the scope, priorities, and next steps.
                </p>
              </div>
              <OrangeBtn label="RETURN TO HOMEPAGE" onClick={handleBackHome} className="mt-4" />
            </div>
          ) : (
            /* FORM STATE - SPLIT SCREEN */
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full items-start">
              {/* Left Column (Sticky) */}
              <div className="lg:sticky lg:top-[120px] lg:w-[350px] xl:w-[400px] w-full flex flex-col shrink-0 gap-12 lg:gap-[180px]">
                <div className="flex flex-col gap-6 text-left">
                  <span className="font-mono font-regular text-[#77786d] text-sm uppercase tracking-wider">START A PROJECT</span>
                  <h1 className="font-sans font-regular leading-[1.1] text-[#1e1e1e] text-[36px] md:text-[44px] tracking-[-1.5px] max-w-[360px]">
                    Tell us what you’re building.
                  </h1>
                </div>

                {/* Contact Card */}
                <div className="bg-[#f9f9f9] p-6 rounded-2xl flex flex-col gap-5 border border-black/[0.04] w-full max-w-[320px] text-left">
                  <span className="font-mono text-xs text-[#707070] font-regular tracking-wider">CONTACT</span>
                  <div className="flex flex-col gap-3.5">
                    <a href="mailto:trdcreativestudio@gmail.com" className="flex justify-between items-center group cursor-pointer">
                      <span className="font-sans text-[#1e1e1e] text-sm group-hover:opacity-75 transition-opacity">trdcreativestudio@gmail.com</span>
                      <ArrowUpRight className="size-4 text-[#1e1e1e] opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center group cursor-pointer">
                      <span className="font-sans text-[#1e1e1e] text-sm group-hover:opacity-75 transition-opacity">LinkedIn</span>
                      <ArrowUpRight className="size-4 text-[#1e1e1e] opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center group cursor-pointer">
                      <span className="font-sans text-[#1e1e1e] text-sm group-hover:opacity-75 transition-opacity">Instagram</span>
                      <ArrowUpRight className="size-4 text-[#1e1e1e] opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column (Form scrollable) */}
              <div className="flex-1 min-w-0 w-full">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-16">

                  {/* 01. Details */}
                  <div className="flex flex-col gap-8 w-full" id="detailsSection">
                    <h2 className="font-sans font-medium text-xl text-[#1e1e1e] tracking-tight">
                      Tell us about your details*
                    </h2>

                    <div className="flex flex-col gap-2 w-full" id="name">
                      <span className="font-sans font-regular text-sm text-[#4d4d4d]">Name</span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="your name"
                        className={`w-full py-3 bg-transparent border-b ${errors.name ? "border-[#d4183d]" : "border-black/[0.12]"
                          } focus:outline-none focus:border-[#eb5503] text-[#1e1e1e] placeholder-black/20 font-sans text-base transition-colors`}
                      />
                      {errors.name && <span className="font-mono text-xs text-[#d4183d] mt-1">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-2 w-full" id="email">
                      <span className="font-sans font-regular text-sm text-[#4d4d4d]">Email</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className={`w-full py-3 bg-transparent border-b ${errors.email ? "border-[#d4183d]" : "border-black/[0.12]"
                          } focus:outline-none focus:border-[#eb5503] text-[#1e1e1e] placeholder-black/20 font-sans text-base transition-colors`}
                      />
                      {errors.email && <span className="font-mono text-xs text-[#d4183d] mt-1">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-2 w-full" id="companyName">
                      <span className="font-sans font-regular text-sm text-[#4d4d4d]">Company / Brand</span>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g TRD Creative Studio"
                        className={`w-full py-3 bg-transparent border-b ${errors.companyName ? "border-[#d4183d]" : "border-black/[0.12]"
                          } focus:outline-none focus:border-[#eb5503] text-[#1e1e1e] placeholder-black/20 font-sans text-base transition-colors`}
                      />
                      {errors.companyName && <span className="font-mono text-xs text-[#d4183d] mt-1">{errors.companyName}</span>}
                    </div>
                  </div>

                  {/* 02. Help options */}
                  <div className="flex flex-col gap-6 w-full" id="helpServices">
                    <h2 className="font-sans font-medium text-xl text-[#1e1e1e] tracking-tight">
                      What do you need help with?
                    </h2>
                    <div className="flex flex-wrap gap-2.5 w-full">
                      {[
                        "Landing Page",
                        "Company Profile Website",
                        "UI/UX Design",
                        "Mobile App Design",
                        "Web Development",
                        "E-Commerce",
                        "Custom Website",
                        "AI Video Production",
                        "AI UGC Content"
                      ].map((opt) => {
                        const isSelected = helpServices.includes(opt);
                        return (
                          <div
                            key={opt}
                            onClick={() => handleServiceToggle(opt)}
                            className={`px-6 py-3 rounded-full border transition-all cursor-pointer text-sm font-sans select-none ${isSelected
                              ? "bg-[#eb5503] border-[#eb5503] text-white font-medium shadow-sm"
                              : "bg-white border-black/[0.08] hover:border-black/[0.2] text-[#1e1e1e]"
                              }`}
                          >
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                    {errors.helpServices && <span className="font-mono text-xs text-[#d4183d]">{errors.helpServices}</span>}
                  </div>

                  {/* 03. Budget options */}
                  <div className="flex flex-col gap-6 w-full" id="budget">
                    <h2 className="font-sans font-medium text-xl text-[#1e1e1e] tracking-tight">
                      Project Budget*
                    </h2>
                    <div className="flex flex-wrap gap-2.5 w-full">
                      {[
                        "Under $5K",
                        "$5K - $10K",
                        "$10K - $15K",
                        "$20K+",
                        "Not sure yet"
                      ].map((opt) => {
                        const isSelected = budget === opt;
                        return (
                          <div
                            key={opt}
                            onClick={() => setBudget(opt)}
                            className={`px-6 py-3 rounded-full border transition-all cursor-pointer text-sm font-sans select-none ${isSelected
                              ? "bg-[#eb5503] border-[#eb5503] text-white font-medium shadow-sm"
                              : "bg-white border-black/[0.08] hover:border-black/[0.2] text-[#1e1e1e]"
                              }`}
                          >
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                    {errors.budget && <span className="font-mono text-xs text-[#d4183d]">{errors.budget}</span>}
                  </div>

                  {/* 04. Referral options */}
                  <div className="flex flex-col gap-6 w-full" id="findUs">
                    <h2 className="font-sans font-medium text-xl text-[#1e1e1e] tracking-tight">
                      How did you find us?
                    </h2>
                    <div className="flex flex-wrap gap-2.5 w-full">
                      {[
                        "Dribbble",
                        "Behance",
                        "Instagram",
                        "Google",
                        "Pinterest",
                        "LinkedIn"
                      ].map((opt) => {
                        const isSelected = findUs === opt;
                        return (
                          <div
                            key={opt}
                            onClick={() => setFindUs(opt)}
                            className={`px-6 py-3 rounded-full border transition-all cursor-pointer text-sm font-sans select-none ${isSelected
                              ? "bg-[#eb5503] border-[#eb5503] text-white font-medium shadow-sm"
                              : "bg-white border-black/[0.08] hover:border-black/[0.2] text-[#1e1e1e]"
                              }`}
                          >
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                    {errors.findUs && <span className="font-mono text-xs text-[#d4183d]">{errors.findUs}</span>}
                  </div>

                  {/* 05. Description */}
                  <div className="flex flex-col gap-4 w-full" id="projectDetails">
                    <h2 className="font-sans font-medium text-xl text-[#1e1e1e] tracking-tight">
                      Describe your project*
                    </h2>
                    <div className="flex flex-col gap-2 w-full">
                      <textarea
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder="Tell us what you're building, what isn't working today, and what you'd like to improve."
                        rows={3}
                        className={`w-full py-3 bg-transparent border-b ${errors.projectDetails ? "border-[#d4183d]" : "border-black/[0.12]"
                          } focus:outline-none focus:border-[#eb5503] text-[#1e1e1e] placeholder-black/20 font-sans text-base transition-colors resize-y`}
                      />
                      {errors.projectDetails && <span className="font-mono text-xs text-[#d4183d] mt-1">{errors.projectDetails}</span>}
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="flex items-center justify-between w-full pt-8 mt-4">
                    <button
                      type="button"
                      onClick={handleBackHome}
                      className="font-mono font-medium text-sm text-[#707070] cursor-pointer hover:text-[#1e1e1e] transition-colors flex items-center gap-1.5"
                    >
                      ← BACK TO HOME
                    </button>

                    <div className="flex flex-col items-end gap-2">
                      <OrangeBtn
                        type="submit"
                        label={isSubmitting ? "SUBMITTING..." : "SUBMIT INQUIRY"}
                        disabled={isSubmitting}
                      />
                      {submitError && (
                        <span className="font-mono text-xs text-[#d4183d] mt-1 text-right max-w-[250px]">
                          {submitError}
                        </span>
                      )}
                    </div>
                  </div>

                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
