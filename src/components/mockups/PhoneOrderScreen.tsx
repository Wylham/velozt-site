import { Plus, Send } from "lucide-react";
import { categories, products, tabsOf, tabTotal } from "@/lib/demo-data";
import { brl } from "@/lib/format";
import { SectorChip } from "./mock-ui";

/** Tela de celular (360 × 740): lançamento de pedido na Mesa 4 · Comanda 2. */
export function PhoneOrderScreen() {
  const tab = tabsOf(4)[1];
  const count = tab.lines.reduce((s, l) => s + l.qty, 0);
  return (
    <div className="flex h-full w-full flex-col bg-mist text-[13px] text-ink">
      <header className="shrink-0 bg-white px-4 pb-3 pt-9">
        <div className="font-display text-[17px] font-semibold">Mesa 4 · Comanda 2</div>
        <div className="text-[11.5px] text-ink-mute">Rafael · Marina (Caixa)</div>
      </header>
      <div className="flex shrink-0 gap-1.5 overflow-hidden px-4 py-3">
        {categories.slice(1, 5).map((c) => (
          <span key={c} className={`rounded-full px-3 py-1.5 text-[12px] font-medium ${c === "Chapa" ? "bg-ink text-white" : "border border-line bg-white text-ink-soft"}`}>{c}</span>
        ))}
      </div>
      <div className="flex-1 space-y-2 overflow-hidden px-4">
        {products.slice(1, 8).map((p) => (
          <div key={p.id} className="flex items-center justify-between rounded-xl border border-line bg-white px-3.5 py-3">
            <div>
              <div className="text-[13.5px] font-medium">{p.name}</div>
              <div className="mt-1 flex items-center gap-2 text-[11.5px] text-ink-mute"><span className="tabular-nums">{brl(p.price)}</span><SectorChip sector={p.sector} /></div>
            </div>
            <span className="grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-700"><Plus className="size-4" /></span>
          </div>
        ))}
      </div>
      <div className="shrink-0 bg-white p-4 pb-7">
        <div className="flex h-12 items-center justify-between rounded-xl bg-brand-gradient px-4 text-white">
          <span className="flex items-center gap-2 text-[13.5px] font-semibold"><Send className="size-4" />Enviar pedido · {count} itens</span>
          <span className="font-display text-[14px] font-semibold tabular-nums">{brl(tabTotal(tab))}</span>
        </div>
      </div>
    </div>
  );
}
