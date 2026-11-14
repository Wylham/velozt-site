"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabList } from "@/components/ui/Tabs";
import { ScreenPanel } from "@/components/mockups/DeviceFrames";
import { features } from "@/content";

export function Features() {
  const [active, setActive] = useState(features[0].id);
  const current = features.find((f) => f.id === active) ?? features[0];

  return (
    <section id="funcionalidades" aria-labelledby="funcionalidades-titulo" className="py-24 lg:py-32">
      <Container>
        <SectionHeading id="funcionalidades-titulo" title="Tudo o que a rotina do salão precisa, em um só lugar." />
        <div className="mt-14 grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <TabList
            items={features.map((f) => ({ id: f.id, label: f.label, icon: <f.icon className="size-[18px] shrink-0" aria-hidden /> }))}
            value={active}
            onChange={setActive}
            label="Funcionalidades"
            idPrefix="feat"
            orientation="vertical"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0"
            tabClassName={(on) =>
              `flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] font-medium transition lg:w-full ${
                on ? "bg-brand-50 text-brand-700 shadow-[inset_3px_0_0_var(--color-brand-500)]" : "text-ink-soft hover:bg-mist"
              }`
            }
          />
          <div role="tabpanel" id="feat-panel" aria-labelledby={`feat-tab-${current.id}`} className="min-w-0">
            <h3 className="max-w-2xl text-2xl font-semibold leading-snug sm:text-[1.7rem]">{current.headline}</h3>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {current.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[15.5px] text-ink-soft">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white"><Check className="size-3" strokeWidth={3} /></span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ScreenPanel screen={current.screen} />
              <p className="mt-3 text-[13px] text-ink-mute">Tela ilustrativa com dados demonstrativos.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
