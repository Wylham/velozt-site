import { BarChart3, ClipboardList, LayoutDashboard, LayoutGrid, Receipt, Wallet, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/ui/BrandMark";

export type ScreenId = "dashboard" | "mesas" | "comandas" | "pedidos" | "caixa" | "relatorios";

const nav: { id: ScreenId; icon: LucideIcon }[] = [
  { id: "dashboard", icon: LayoutDashboard },
  { id: "mesas", icon: LayoutGrid },
  { id: "comandas", icon: Receipt },
  { id: "pedidos", icon: ClipboardList },
  { id: "caixa", icon: Wallet },
  { id: "relatorios", icon: BarChart3 },
];

/** Moldura comum das telas demonstrativas (tamanho de projeto 1000 × 620 ou similar). */
export function AppShell({ active, title, subtitle, children }: { active?: ScreenId; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="flex h-full w-full bg-mist text-[13px] leading-snug text-ink">
      <aside className="flex w-[64px] shrink-0 flex-col items-center gap-1.5 border-r border-line bg-white py-4">
        <BrandMark variant="gradient" className="mb-4 h-5 w-auto" />
        {nav.map(({ id, icon: Icon }) => (
          <span
            key={id}
            className={`grid size-10 place-items-center rounded-xl ${id === active ? "bg-brand-50 text-brand-700" : "text-ink-mute"}`}
          >
            <Icon className="size-[18px]" />
          </span>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-line bg-white px-5">
          <div>
            <div className="font-display text-[15px] font-semibold leading-tight">{title}</div>
            {subtitle && <div className="text-[11px] text-ink-mute">{subtitle}</div>}
          </div>
          <div className="flex items-center gap-2.5 text-[11px]">
            <span className="rounded-md border border-line px-2 py-1 text-ink-soft">Terminal PDV 01</span>
            <span className="text-ink-soft">Marina · Caixa</span>
            <span className="grid size-7 place-items-center rounded-full bg-brand-gradient text-[11px] font-semibold text-white">M</span>
          </div>
        </header>
        <main className="min-h-0 flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
