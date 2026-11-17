"use client";

import { useEffect } from "react";

/**
 * Aplica a entrada progressiva às seções de conteúdo da página inicial.
 * O conteúdo continua visível sem JavaScript e após a primeira entrada na viewport.
 */
export function ContentScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(#inicio):not(#faq):not(#contato)",
      ),
    );
    const blocks = sections.flatMap((section) =>
      Array.from(section.querySelectorAll<HTMLElement>(":scope > [class~='mx-auto'] > *")).flatMap((block) => {
        const items = Array.from(block.querySelectorAll<HTMLElement>(":scope > li"));
        return items.length > 0 ? items : [block];
      }),
    );

    root.dataset.contentScroll = "ready";
    blocks.forEach((block) => { block.dataset.scrollReveal = ""; });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const block = entry.target as HTMLElement;
          block.dataset.scrollInView = "";
          observer.unobserve(block);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.12 },
    );

    blocks.forEach((block) => observer.observe(block));

    return () => {
      observer.disconnect();
      delete root.dataset.contentScroll;
      blocks.forEach((block) => {
        delete block.dataset.scrollReveal;
        delete block.dataset.scrollInView;
      });
    };
  }, []);

  return null;
}
