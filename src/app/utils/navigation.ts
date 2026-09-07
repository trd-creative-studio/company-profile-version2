/**
 * Centralized navigation helpers for SPA routing & luxury smooth section scrolling.
 */

export function navigateTo(url: string) {
  window.history.pushState({}, "", url);
  window.dispatchEvent(new Event("popstate"));
}

export function navigateToInquiry(serviceId?: string) {
  const url = serviceId ? `/?page=inquiry&service=${serviceId}` : "/?page=inquiry";
  navigateTo(url);
}

export function navigateToService(serviceId: string) {
  navigateTo(`/?service=${serviceId}`);
}

export function navigateToHome() {
  navigateTo("/");
}

/**
 * Luxury smooth scroll animation using requestAnimationFrame and easeInOutQuart.
 */
export function smoothScrollToTarget(targetY: number, customDuration?: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  // Calculate dynamic luxury duration based on distance (600ms - 950ms)
  const duration = customDuration ?? Math.min(1000, Math.max(600, Math.abs(distance) * 0.4 + 450));
  const startTime = performance.now();

  // Luxury easeInOutQuart function for ultra-smooth easing
  const easeInOutQuart = (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuart(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

export const SECTION_OFFSETS: Record<string, number> = {
  about: 40,        // About section offset
  services: -10,     // Services section offset
  process: -20,      // Our Process section offset
  testimonials: 0,  // Testimonials section offset
  contact: 40,      // Contact section offset
};

export function scrollToSection(sectionId: string, customOffset?: number, duration?: number) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = customOffset ?? SECTION_OFFSETS[sectionId] ?? 60;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - offset);
    smoothScrollToTarget(offsetPosition, duration);
  }
}

