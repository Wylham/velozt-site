"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow ${scrolled || open ? "shadow-[0_1px_0_var(--color-line)]" : ""}`}>
      <Container className="flex h-[68px] items-center justify-between">
        <a href="/#inicio" aria-label="Velozt, ir para o início" className="shrink-0">
          <Logo height={28} />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[14.5px] font-medium text-ink-soft transition hover:text-brand-700">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><ButtonLink href="/#contato" size="sm">Solicitar demonstração</ButtonLink></div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>
      {open && (
        <nav id="menu-mobile" aria-label="Principal (mobile)" className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col py-3">
            {site.nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line/70 py-3.5 text-[16px] font-medium">{n.label}</a>
            ))}
            <ButtonLink href="/#contato" className="mt-4 w-full">Solicitar demonstração</ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
