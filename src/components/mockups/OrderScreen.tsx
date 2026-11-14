import { Printer, Search, Send } from "lucide-react";
import { AppShell } from "./AppShell";
import { Btn, Row, SectorChip } from "./mock-ui";
import { categories, product, products, tabsOf, tabTotal, type Sector } from "@/lib/demo-data";
import { brl } from "@/lib/format";

export function OrderScreen() {
  const tab = tabsOf(4)[1]; // Comanda 2 · Rafael
  const sectors = [...new Set(tab.lines.map((l) => product(l.id).sector))] as Sector[];
  return (
    <AppShell active="pedidos" title="Lançamento de pedidos" subtitle="Mesa 4 · Comanda 2 · Rafael">
      <div className="flex h-full gap-3">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 flex-1 items-center gap-2 rounded-lg border border-line bg-white px-3 text-[12px] text-ink-mute">
              <Search className="size-3.5" />Buscar produto
            </div>
          </div>
          <div className="flex gap-1.5">
            {categories.map((c) => (
              <span key={c} className={`rounded-full px-3 py-1.5 text-[11.5px] font-medium ${c === "Chapa" ? "bg-ink text-white" : "border border-line bg-white text-ink-soft"}`}>{c}</span>
            ))}
          </div>
          <div className="grid flex-1 grid-cols-3 content-start gap-2.5">
            {products.map((p) => (
              <div key={p.id} className="flex h-[88px] flex-col justify-between rounded-xl border border-line bg-white p-3">
                <div className="text-[12.5px] font-medium leading-tight">{p.name}</div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-[13px] font-semibold tabular-nums">{brl(p.price)}</span>
                  <SectorChip sector={p.sector} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="flex w-[290px] shrink-0 flex-col rounded-xl border border-line bg-white p-4">
          <div className="font-display text-[14px] font-semibold">Pedido atual</div>
          <div className="mt-2 flex-1">
            {tab.lines.map((l) => (
              <Row
                key={l.id}
                left={<span><span className="tabular-nums text-ink-mute">{l.qty}× </span>{product(l.id).name}</span>}
                sub={l.note ? `Obs.: ${l.note}` : undefined}
                right={brl(product(l.id).price * l.qty)}
              />
            ))}
          </div>
          <div className="flex items-baseline justify-between border-t border-line pt-3">
            <span className="text-[11px] text-ink-mute">Subtotal</span>
            <span className="font-display text-[19px] font-semibold tabular-nums">{brl(tabTotal(tab))}</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[10.5px] text-ink-mute">
            <Printer className="size-3.5" />Impressão em:
            {sectors.map((s) => <SectorChip key={s} sector={s} />)}
          </div>
          <Btn primary large className="mt-3"><Send className="size-3.5" />Enviar pedido</Btn>
        </aside>
      </div>
    </AppShell>
  );
}
