/**
 * Centralized navigation helpers for SPA routing & smooth section scrolling.
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

export function scrollToSection(sectionId: string, offset = 70) {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
