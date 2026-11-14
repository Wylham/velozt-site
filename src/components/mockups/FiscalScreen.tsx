import { AppShell } from "./AppShell";
import { Btn, Card, Row } from "./mock-ui";
import { product, sales, saleTotal } from "@/lib/demo-data";
import { brl } from "@/lib/format";

export function FiscalScreen() {
  const docs = sales.slice(0, 6).map((s, i) => ({ ...s, status: i === 4 ? "Cancelada" : "Emitida" }));
  const sel = docs[0];
  return (
    <AppShell title="Documentos fiscais" subtitle="NFC-e emitidas hoje">
      <div className="flex h-full gap-3">
        <Card title="NFC-e" aside={`${docs.length} documentos`} className="min-w-0 flex-1">
          <div className="grid grid-cols-[0.8fr_0.8fr_0.9fr_0.9fr] gap-2 border-b border-line pb-1.5 text-[10.5px] text-ink-mute">
            <span>Número</span><span>Horário</span><span>Valor</span><span>Situação</span>
          </div>
          {docs.map((d, i) => (
            <div key={d.no} className={`grid grid-cols-[0.8fr_0.8fr_0.9fr_0.9fr] items-center gap-2 border-b border-line/70 py-2 text-[12px] last:border-0 ${i === 0 ? "-mx-2 rounded-md bg-brand-50 px-2" : ""}`}>
              <span className="tabular-nums">{d.no}</span>
              <span className="tabular-nums text-ink-soft">{d.time}</span>
              <span className="tabular-nums">{brl(saleTotal(d))}</span>
              <span className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-medium ${d.status === "Emitida" ? "bg-brand-50 text-brand-700" : "bg-slate-100 text-slate-600"}`}>{d.status}</span>
            </div>
          ))}
        </Card>
        <aside className="flex w-[290px] shrink-0 flex-col rounded-xl border border-line bg-white p-4">
          <div className="font-display text-[14px] font-semibold">NFC-e {sel.no}</div>
          <div className="text-[11px] text-ink-mute">Emitida às {sel.time}</div>
          <div className="mt-2 flex-1">
            {sel.lines.map((l) => (
              <Row key={l.id} left={<span><span className="tabular-nums text-ink-mute">{l.qty}× </span>{product(l.id).name}</span>} right={brl(product(l.id).price * l.qty)} />
            ))}
          </div>
          <div className="flex items-baseline justify-between border-t border-line pt-3">
            <span className="text-[11px] text-ink-mute">Total</span>
            <span className="font-display text-[19px] font-semibold tabular-nums">{brl(saleTotal(sel))}</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2"><Btn>Consultar</Btn><Btn>Cancelar</Btn></div>
        </aside>
      </div>
    </AppShell>
  );
}
