import { ArrowLeftRight, Receipt, Split } from "lucide-react";
import { AppShell } from "./AppShell";
import { Btn, Card, Row, SectorChip } from "./mock-ui";
import { product, tableTotal, tabsOf, tabTotal } from "@/lib/demo-data";
import { brl } from "@/lib/format";

export function ComandasScreen() {
  const list = tabsOf(4);
  return (
    <AppShell active="comandas" title="Mesa 4 · Comandas" subtitle="Comandas individuais na mesma mesa">
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="text-[12px] text-ink-soft">{list.length} comandas abertas</div>
          <div className="flex gap-2">
            <Btn><ArrowLeftRight className="size-3.5" />Transferir itens</Btn>
            <Btn><Split className="size-3.5" />Dividir conta</Btn>
            <Btn primary><Receipt className="size-3.5" />Pré-conta</Btn>
          </div>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">
          {list.map((t) => (
            <Card key={t.id} title={`${t.label} · ${t.owner}`} aside={`aberta há ${t.minutes} min`} className="h-full">
              <div className="flex h-full flex-col">
                <div className="flex-1">
                  {t.lines.map((l) => (
                    <Row
                      key={l.id}
                      left={<span className="flex items-center gap-2"><span className="tabular-nums text-ink-mute">{l.qty}×</span>{product(l.id).name}</span>}
                      sub={<span className="flex items-center gap-1.5"><SectorChip sector={product(l.id).sector} />{l.note}</span>}
                      right={brl(product(l.id).price * l.qty)}
                    />
                  ))}
                </div>
                <div className="flex items-baseline justify-between border-t border-line pt-2.5">
                  <span className="text-[11px] text-ink-mute">Subtotal</span>
                  <span className="font-display text-[17px] font-semibold tabular-nums">{brl(tabTotal(t))}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-xl border border-brand-200 bg-brand-50 px-4 py-3">
          <span className="text-[12px] text-brand-700">Total da mesa 4</span>
          <span className="font-display text-[20px] font-semibold tabular-nums text-brand-700">{brl(tableTotal(4))}</span>
        </div>
      </div>
    </AppShell>
  );
}
