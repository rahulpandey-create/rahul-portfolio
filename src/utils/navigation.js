export function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
  
    if (!section) return;
  
    // Remove # from the URL
    window.history.pushState({}, "", `/${sectionId}`);
  
    // Scroll to the section
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }