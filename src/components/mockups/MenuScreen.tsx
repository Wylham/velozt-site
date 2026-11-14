import { AppShell } from "./AppShell";
import { Card, SectorChip } from "./mock-ui";
import { categories, combo, product, products } from "@/lib/demo-data";
import { brl } from "@/lib/format";

export function MenuScreen() {
  return (
    <AppShell title="Cardápio e produtos" subtitle="Categorias, preços e setores de produção">
      <div className="flex h-full gap-3">
        <aside className="w-[170px] shrink-0 rounded-xl border border-line bg-white p-2.5">
          {categories.map((c, i) => (
            <div key={c} className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-[12px] ${i === 1 ? "bg-brand-50 font-medium text-brand-700" : "text-ink-soft"}`}>
              {c}<span className="text-[10.5px] tabular-nums text-ink-mute">{products.filter((p) => p.category === c).length}</span>
            </div>
          ))}
        </aside>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <Card title="Produtos" className="flex-1">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.7fr_1.3fr] gap-2 border-b border-line pb-1.5 text-[10.5px] text-ink-mute">
              <span>Produto</span><span>Setor</span><span>Preço</span><span>Variações e adicionais</span>
            </div>
            {products.slice(0, 6).map((p) => (
              <div key={p.id} className="grid grid-cols-[1.4fr_0.8fr_0.7fr_1.3fr] items-center gap-2 border-b border-line/70 py-2 text-[12px] last:border-0">
                <span className="font-medium">{p.name}</span>
                <span><SectorChip sector={p.sector} /></span>
                <span className="tabular-nums">{brl(p.price)}</span>
                <span className="flex flex-wrap gap-1">
                  {[...(p.variants ?? []), ...(p.extras ?? []).map((e) => `+ ${e}`)].slice(0, 2).map((v) => (
                    <i key={v} className="rounded-md bg-mist px-1.5 py-0.5 text-[10px] not-italic text-ink-soft">{v}</i>
                  ))}
                </span>
              </div>
            ))}
          </Card>
          <Card title="Combos">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12.5px] font-medium">{combo.name}</div>
                <div className="text-[10.5px] text-ink-mute">{combo.items.map((id) => product(id).name).join(" + ")}</div>
              </div>
              <span className="font-display text-[15px] font-semibold tabular-nums">{brl(combo.price)}</span>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
