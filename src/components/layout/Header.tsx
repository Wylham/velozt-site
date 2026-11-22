"use client";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const { columns, footer } = site.solutionsMenu;
const CLOSE_DELAY = 140;
const BAR_HEIGHT = 72;
// O card começa um pouco abaixo do topo da página, para "descolar" da borda da janela.
const CARD_TOP = 8;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const openSolutions = useCallback(() => {
    clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), CLOSE_DELAY);
  }, []);

  const cancelClose = useCallback(() => clearTimeout(closeTimer.current), []);

  const closeSolutions = useCallback(() => {
    clearTimeout(closeTimer.current);
    setSolutionsOpen(false);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // A altura do painel define até onde o card do header cresce.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const measure = () => setPanelHeight(el.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open && !solutionsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (solutionsOpen) {
        closeSolutions();
        triggerRef.current?.focus();
      }
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, solutionsOpen, closeSolutions]);

  const navLinkClass = "text-[14.5px] font-medium text-ink-soft transition hover:text-brand-700";
  const cardHeight = BAR_HEIGHT - CARD_TOP + (solutionsOpen ? panelHeight : 0);

  return (
    <>
      {/* Sem fundo em repouso: o header "flutua" sobre a página. Ao rolar ganha um vidro leve
          para continuar legível. Com Soluções aberto, quem assume é o card (barra + painel). */}
      <header
        className={`sticky top-0 z-50 h-[72px] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          open
            ? "bg-white shadow-[0_1px_0_var(--color-line)]"
            : solutionsOpen
              ? "bg-transparent"
              : scrolled
                ? "bg-white/80 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
                : "bg-transparent"
        }`}
      >
        <div className="mx-auto h-full w-full max-w-[1200px] px-5 sm:px-8">
          {/* "Casca" do header: a barra fica em fluxo (72px) e o painel transborda para baixo
              sem empurrar a página. Tudo aqui dentro conta como "dentro do menu" para o mouse. */}
          <div
            className="relative flex h-full items-center justify-between"
            onMouseEnter={solutionsOpen ? cancelClose : undefined}
            onMouseLeave={solutionsOpen ? scheduleClose : undefined}
          >
            {/* Card que une barra e painel: aparece e cresce junto com o menu. */}
            <div
              aria-hidden="true"
              // -z-10: fica atrás da barra e do painel, mas dentro do contexto do <header> (z-50).
              className={`absolute -inset-x-6 -z-10 hidden rounded-[26px] border bg-white lg:block ${
                solutionsOpen
                  ? "border-line/70 opacity-100 shadow-[0_1px_2px_rgb(17_24_39/0.03),0_16px_32px_-20px_rgb(17_24_39/0.08)]"
                  : "pointer-events-none border-transparent opacity-0 shadow-none"
              }`}
              style={{
                top: CARD_TOP,
                height: cardHeight,
                // O fundo aparece rápido (nada vaza por trás) e a altura cresce com calma.
                transition:
                  "height 440ms cubic-bezier(0.22, 1, 0.36, 1), opacity 140ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
              }}
            />

            <div className="flex h-full min-w-0 items-center gap-9">
              <a href="/" aria-label="Velozt, ir para o início" className="shrink-0">
                <Logo height={22} priority />
              </a>
              <nav aria-label="Principal" className="hidden h-full items-center gap-7 lg:flex">
                {site.nav.map((n) =>
                  n.label === "Soluções" ? (
                    // Nenhum ancestral entre este ponto e a casca pode ter `relative`: o painel
                    // se posiciona em relação à casca, mas continua logo depois do botão no foco.
                    <div
                      key={n.href}
                      className="flex h-full items-center"
                      onMouseEnter={openSolutions}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node)) closeSolutions();
                      }}
                    >
                      <button
                        ref={triggerRef}
                        type="button"
                        className={`flex items-center gap-1 text-[14.5px] font-medium transition hover:text-brand-700 ${
                          solutionsOpen ? "text-brand-700" : "text-ink-soft"
                        }`}
                        aria-expanded={solutionsOpen}
                        aria-controls="menu-solucoes"
                        onClick={() => (solutionsOpen ? closeSolutions() : openSolutions())}
                      >
                        Soluções
                        <ChevronDown
                          className={`size-4 transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        ref={panelRef}
                        id="menu-solucoes"
                        data-open={solutionsOpen}
                        className={`absolute -inset-x-6 top-full transition-[clip-path,opacity,visibility] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          solutionsOpen
                            ? "visible opacity-100 [clip-path:inset(0_0_0_0)]"
                            : "invisible opacity-0 [clip-path:inset(0_0_100%_0)]"
                        }`}
                      >
                        <div className="grid grid-cols-3 gap-x-10 px-6 pb-8 pt-5">
                          {columns.map((col, colIndex) => (
                            <div key={col.title} className="mega-col">
                              <p className="text-[13.5px] font-medium text-ink-mute">{col.title}</p>
                              <span
                                aria-hidden="true"
                                className="mega-sep mt-4"
                                style={{ "--sep-delay": `${120 + colIndex * 90}ms` } as CSSProperties}
                              />
                              <ul className="mt-4 space-y-1">
                                {col.items.map((item, itemIndex) => (
                                  <li
                                    key={item.href}
                                    className="mega-item"
                                    style={
                                      { "--item-delay": `${160 + colIndex * 90 + itemIndex * 60}ms` } as CSSProperties
                                    }
                                  >
                                    <a
                                      href={item.href}
                                      onClick={closeSolutions}
                                      className="group -mx-3 block rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50/60"
                                    >
                                      <span className="flex items-center gap-1.5 text-[15px] font-medium text-ink transition-colors group-hover:text-brand-700">
                                        {item.label}
                                        <ArrowRight className="size-3.5 -translate-x-1 text-brand-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                      </span>
                                      <span className="mt-1 block text-[13.5px] leading-snug text-ink-mute">
                                        {item.description}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <a
                          href={footer.href}
                          onClick={closeSolutions}
                          className="mega-footer group relative flex items-center justify-between rounded-b-[25px] bg-mist/70 px-6 py-5 transition-colors hover:bg-brand-50/70"
                        >
                          <span
                            aria-hidden="true"
                            className="mega-sep absolute inset-x-0 top-0"
                            style={{ "--sep-delay": "400ms" } as CSSProperties}
                          />
                          <span>
                            <span className="block text-[15px] font-medium text-ink transition-colors group-hover:text-brand-700">
                              {footer.label}
                            </span>
                            <span className="mt-0.5 block text-[13.5px] text-ink-mute">{footer.description}</span>
                          </span>
                          <ArrowRight className="size-[18px] text-ink-soft transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-700" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <a key={n.href} href={n.href} onMouseEnter={closeSolutions} className={navLinkClass}>
                      {n.label}
                    </a>
                  ),
                )}
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <ButtonLink href="/contato" size="sm">
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
        </div>
        {open && (
          <nav id="menu-mobile" aria-label="Principal (mobile)" className="border-t border-line bg-white lg:hidden">
            <Container className="flex max-h-[calc(100dvh-72px)] flex-col overflow-y-auto py-3">
              {site.nav.map((n) =>
                n.label === "Soluções" ? (
                  <details key={n.href} className="group border-b border-line/70">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-[16px] font-medium marker:content-none">
                      Soluções <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="space-y-5 pb-4">
                      {columns.map((col) => (
                        <div key={col.title}>
                          <p className="text-[13px] font-medium text-ink-mute">{col.title}</p>
                          <span aria-hidden="true" className="mega-sep mega-sep-static mt-2.5" />
                          <ul className="mt-2">
                            {col.items.map((item) => (
                              <li key={item.href}>
                                <a
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="-mx-3 block rounded-lg px-3 py-2.5 hover:bg-brand-50"
                                >
                                  <span className="block text-[15px] font-medium text-ink">{item.label}</span>
                                  <span className="mt-0.5 block text-[13.5px] leading-snug text-ink-mute">
                                    {item.description}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
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
              <ButtonLink href="/contato" className="mt-4 w-full">
                Solicitar demonstração
              </ButtonLink>
            </Container>
          </nav>
        )}
      </header>

      {/* Véu sutil sobre a página enquanto o mega menu está aberto (só desktop). */}
      <div
        aria-hidden="true"
        onClick={closeSolutions}
        className={`fixed inset-0 z-40 hidden bg-ink/[0.04] transition-opacity duration-300 lg:block ${
          solutionsOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
