"use client";

import type { CSSProperties } from "react";
import { Check, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PanelFrame } from "@/components/mockups/DeviceFrames";
import { DashboardScreen } from "@/components/mockups/DashboardScreen";
import { Scaled } from "@/components/mockups/Scaled";
import { SectorChip } from "@/components/mockups/mock-ui";
import { screens, SCREEN_SIZE } from "@/components/mockups/screens";
import { tabsOf, tabTotal, tableTotal, tabs } from "@/lib/demo-data";
import { brl } from "@/lib/format";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const businesses = ["Hamburguerias", "Pizzarias", "Lanchonetes", "Churrascarias", "Padarias", "Restaurantes"];

export function Hero() {
  const mesa9 = tabs.find((t) => t.table === 9)!;
  const comanda = tabsOf(4)[1];
  const [businessIndex, setBusinessIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [animateDashboard, setAnimateDashboard] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBusinessIndex((current) => (current + 1) % businesses.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setHasScrolled(true);
    window.addEventListener("scroll", onScroll, { once: true, passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!hasScrolled || !productRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setAnimateDashboard(true);
        observer.disconnect();
      },
      { threshold: 0.22 },
    );

    observer.observe(productRef.current);
    return () => observer.disconnect();
  }, [hasScrolled]);

  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-20">
      <Container className="hero-content relative">
        <div className="hero-copy max-w-[46rem]">
          <h1 className="hero-title font-hero text-[2.6rem] font-semibold leading-[1.04] sm:text-5xl lg:text-[4rem]">
            {/*
            Seu restaurante merece uma gestão mais inteligente.
            */}
            <span className="block">A tecnologia que faz</span>
            <span className="mt-1 block overflow-hidden pb-[0.12em] text-brand-700" aria-live="polite">
              <span key={businesses[businessIndex]} className="hero-business block">
                {businesses[businessIndex]}
              </span>
            </span>
            <span className="block">faturarem mais!</span>
          </h1>
          <p className="mt-6 max-w-[39rem] text-lg leading-relaxed text-ink-soft">
            Centralize atendimento, pedidos, estoque e financeiro em uma plataforma desenvolvida para simplificar e fazer crescer o seu Food Service.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/plataforma" variant="secondary">Conhecer a plataforma</ButtonLink>
            <ButtonLink href="/contato">Solicitar demonstração</ButtonLink>
          </div>
        </div>

        <div ref={productRef} className="hero-product relative isolate mx-auto mt-14 w-full max-w-[1280px] pb-10 pt-3 sm:mt-16 lg:mt-20 lg:pt-5">
          <div className="hero-product-glow" aria-hidden="true" />
          <div className="anim-rise relative" style={delay(250)}>
            <PanelFrame className={`hero-dashboard hero-dashboard--pending ${animateDashboard ? "hero-dashboard--active" : ""}`}>
              <Scaled width={SCREEN_SIZE.width} height={SCREEN_SIZE.height}><DashboardScreen animate={animateDashboard} /></Scaled>
            </PanelFrame>
          </div>

          <div className="anim-rise absolute -top-3 right-3 hidden w-[230px] rounded-2xl border border-line bg-white p-4 shadow-lift lg:block" style={delay(700)}>
            <div className="flex items-center gap-2 text-[12.5px] font-semibold">
              <span className="grid size-6 place-items-center rounded-full bg-brand-50 text-brand-700"><Send className="size-3.5" /></span>
              Pedido enviado
            </div>
            <div className="mt-1 text-[12px] text-ink-mute">Mesa 4 · Comanda 2</div>
            <div className="mt-3 flex gap-1.5">
              <SectorChip sector="Chapa" /><SectorChip sector="Bar" />
            </div>
            <div className="mt-3 flex items-baseline justify-between border-t border-line pt-2.5 text-[12px]">
              <span className="text-ink-mute">{comanda.lines.reduce((s, l) => s + l.qty, 0)} itens</span>
              <span className="font-display font-semibold tabular-nums">{brl(tabTotal(comanda))}</span>
            </div>
          </div>

          <div className="anim-rise absolute -bottom-4 -left-5 hidden w-[240px] rounded-2xl border border-line bg-white p-4 shadow-lift lg:block" style={delay(950)}>
            <div className="flex items-center justify-between text-[12.5px] font-semibold">
              Mesa 9
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10.5px] font-medium text-amber-700">Pré-conta</span>
            </div>
            <div className="mt-1 text-[12px] text-ink-mute">{mesa9.lines.reduce((s, l) => s + l.qty, 0)} itens · conferência</div>
            <div className="mt-3 flex items-baseline justify-between border-t border-line pt-2.5">
              <span className="flex items-center gap-1.5 text-[12px] text-ink-mute"><Check className="size-3.5 text-ok" />Dividir em 3</span>
              <span className="font-display text-[16px] font-semibold tabular-nums">{brl(tableTotal(9))}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
