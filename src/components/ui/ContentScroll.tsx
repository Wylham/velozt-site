"use client";

import { useEffect } from "react";

/**
 * Aplica a entrada progressiva às seções de conteúdo da página inicial.
 * O conteúdo continua visível sem JavaScript e após a primeira entrada na viewport.
 */
export function ContentScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(#inicio)"));

    root.dataset.contentScroll = "ready";
    sections.forEach((section) => { section.dataset.scrollSection = ""; });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const section = entry.target as HTMLElement;
          section.dataset.inView = "";
          observer.unobserve(section);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      delete root.dataset.contentScroll;
      sections.forEach((section) => {
        delete section.dataset.scrollSection;
        delete section.dataset.inView;
      });
    };
  }, []);

  return null;
}
