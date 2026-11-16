"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-titulo" className="py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[minmax(22rem,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-20">
        <div className="mx-auto w-full lg:sticky lg:top-28">
          <SectionHeading id="faq-titulo" title="Perguntas frequentes" />

          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-brand-50 shadow-soft">
            <Image
              src="/images/solucoes/chef-faq.jpg"
              alt="Chef pensando em uma dúvida"
              fill
              sizes="(max-width: 1024px) min(100vw - 3rem, 28rem), 30vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-[17px] font-medium"
                  >
                    {f.q}
                    <ChevronDown
                      className={`size-5 shrink-0 text-brand-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="acc-panel"
                  data-open={isOpen}
                >
                  <div>
                    <p className="max-w-2xl pb-6 text-[16px] leading-relaxed text-ink-soft">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
