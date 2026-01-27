import { useEffect, useState } from 'react';

export const useScrollSpy = (
  sectionIds: string[],
  offset: number = 100
): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Loop from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll(); // run on mount
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};


export const scrollToSection = (
  sectionId: string,
  offset: number = 80
) => {
  const section = document.getElementById(sectionId);

  if (!section) return;

  const top = section.offsetTop - offset;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
};
