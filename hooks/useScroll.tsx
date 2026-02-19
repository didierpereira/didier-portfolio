import { NAV_SECTIONS } from "@/constants";
import { useState, useEffect, useCallback } from "react";

const useScroll = () => {
  const [current, setCurrent] = useState<string>("inicio");

  // Lee el key desde data-section del elemento clicado
  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const key = (e.currentTarget as HTMLElement).dataset.section;
    const section = NAV_SECTIONS.find((s) => s.key === key);
    if (!section) return;
    setCurrent(section.key);
    const el = document.getElementById(section.id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleClickMobile = handleClick;
  const currentMobile = current;

  // IntersectionObserver: marca activa la sección más visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const section = NAV_SECTIONS.find((s) => s.id === visible.target.id);
          if (section) setCurrent(section.key);
        }
      },
      { threshold: [0.2, 0.5], rootMargin: "-10% 0px -10% 0px" }
    );

    NAV_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { current, currentMobile, handleClick, handleClickMobile };
};

export default useScroll;
