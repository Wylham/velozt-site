"use client";

import { useState } from "react";
import { BarChart3, ClipboardList, LayoutDashboard, LayoutGrid, Receipt, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabList, type TabItem } from "@/components/ui/Tabs";
import { ScreenPanel } from "@/components/mockups/DeviceFrames";
import type { ScreenKey } from "@/components/mockups/screens";

const tabs: (TabItem & { id: ScreenKey })[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="size-4" aria-hidden /> },
  { id: "mesas", label: "Mapa de mesas", icon: <LayoutGrid className="size-4" aria-hidden /> },
  { id: "comandas", label: "Comandas", icon: <Receipt className="size-4" aria-hidden /> },
  { id: "pedidos", label: "Lançamento de pedidos", icon: <ClipboardList className="size-4" aria-hidden /> },
  { id: "caixa", label: "Painel de caixa", icon: <Wallet className="size-4" aria-hidden /> },
  { id: "relatorios", label: "Relatórios", icon: <BarChart3 className="size-4" aria-hidden /> },
];

export function ProductDemo() {
  const [active, setActive] = useState<ScreenKey>("dashboard");
  return (
    <section aria-labelledby="demo-titulo" className="bg-mist py-24 lg:py-32">
      <Container>
        <SectionHeading id="demo-titulo" title="Veja como a Velozt simplifica a operação." />
        <TabList
          items={tabs}
          value={active}
          onChange={(id) => setActive(id as ScreenKey)}
          label="Telas da plataforma"
          idPrefix="demo"
          className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          tabClassName={(on) =>
            `flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[14.5px] font-medium transition ${
              on ? "bg-ink text-white" : "border border-line bg-white text-ink-soft hover:border-brand-200"
            }`
          }
        />
        <div role="tabpanel" id="demo-panel" aria-labelledby={`demo-tab-${active}`} className="mt-6">
          <ScreenPanel screen={active} />
          <p className="mt-3 text-[13px] text-ink-mute">Telas ilustrativas com dados demonstrativos.</p>
        </div>
      </Container>
    </section>
  );
}
