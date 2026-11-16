"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { solutions } from "@/content/solutions";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow ${scrolled || open ? "shadow-[0_1px_0_var(--color-line)]" : ""}`}
    >
      <div className="flex h-[70px] w-full items-center justify-between px-5 sm:px-8 lg:px-16">
        <div className="flex min-w-0 items-center gap-9">
          <a href="/#inicio" aria-label="Velozt, ir para o início" className="shrink-0">
            <Logo height={25} />
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
            {site.nav.map((n) =>
              n.label === "Soluções" ? (
                <div
                  key={n.href}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  onFocus={() => setSolutionsOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) setSolutionsOpen(false);
                  }}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 text-[14.5px] font-medium text-ink-soft transition hover:text-brand-700"
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                    onClick={() => setSolutionsOpen(true)}
                  >
                    Soluções{" "}
                    <ChevronDown className={`size-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {solutionsOpen && (
                    <div className="absolute left-0 top-full z-20 w-[248px] pt-3">
                      <div className="overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-lift">
                        <p className="border-b border-line px-3.5 py-2 text-[13px] font-bold tracking-[0.08em] text-ink-mute">
                          Módulos
                        </p>
                        <div className="py-1">
                          {solutions.map(({ slug, navLabel }) => (
                            <a
                              key={slug}
                              href={`/solucoes/${slug}`}
                              className="block rounded-lg px-3.5 py-2.5 text-[14px] font-medium text-ink transition hover:bg-brand-50 hover:text-brand-700"
                              onClick={() => setSolutionsOpen(false)}
                            >
                              {navLabel}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-[14.5px] font-medium text-ink-soft transition hover:text-brand-700"
                >
                  {n.label}
                </a>
              ),
            )}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/#contato" size="sm">
              Solicitar demonstração
            </ButtonLink>
          </div>
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
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Principal (mobile)" className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col py-3">
            {site.nav.map((n) =>
              n.label === "Soluções" ? (
                <details key={n.href} className="group border-b border-line/70">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-[16px] font-medium marker:content-none">
                    Soluções <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="-mt-1 space-y-1 pb-3 pl-3">
                    {solutions.map(({ slug, navLabel }) => (
                      <a
                        key={slug}
                        href={`/solucoes/${slug}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-[15px] text-ink-soft hover:bg-brand-50 hover:text-brand-700"
                      >
                        {navLabel}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/70 py-3.5 text-[16px] font-medium"
                >
                  {n.label}
                </a>
              ),
            )}
            <ButtonLink href="/#contato" className="mt-4 w-full">
              Solicitar demonstração
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
