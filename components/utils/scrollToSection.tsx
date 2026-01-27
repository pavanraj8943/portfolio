export const scrollToSection = (sectionId: string, offset: number = 80) => {
  if (typeof window === "undefined") return;

  const section = document.getElementById(sectionId);
  if (!section) return;

  const top = section.offsetTop - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

