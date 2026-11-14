import { ArrowLeftRight, Plus, Receipt } from "lucide-react";
import { AppShell } from "./AppShell";
import { Btn, Row, StatusChip, statusLabel } from "./mock-ui";
import { seats, tableNumbers, tableStatus, tableTotal, tabsOf, tabTotal } from "@/lib/demo-data";
import { brl } from "@/lib/format";

const SELECTED = 4;

export function TableMapScreen() {
  return (
    <AppShell active="mesas" title="Mapa de mesas" subtitle="Salão principal">
      <div className="flex h-full gap-3">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="flex items-center gap-4 text-[11px] text-ink-soft">
            {(["livre", "ocupada", "pre-conta"] as const).map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <i className={`size-2.5 rounded-full ${s === "livre" ? "border border-ink-mute/40 bg-white" : s === "ocupada" ? "bg-brand-500" : "bg-amber-500"}`} />
                {statusLabel[s]}
              </span>
            ))}
          </div>
          <div className="grid flex-1 grid-cols-4 grid-rows-3 gap-3">
            {tableNumbers.map((n) => {
              const s = tableStatus(n);
              const open = tabsOf(n);
              return (
                <div
                  key={n}
                  className={`flex flex-col justify-between rounded-xl border bg-white p-3 ${n === SELECTED ? "border-brand-500 ring-2 ring-brand-500/20" : "border-line"}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-display text-[22px] font-semibold leading-none">{n}</div>
                      <div className="mt-1 text-[10.5px] text-ink-mute">{seats[n]} lugares</div>
                    </div>
                    <StatusChip status={s} />
                  </div>
                  {s === "livre" ? (
                    <div className="text-[11px] text-ink-mute">Disponível</div>
                  ) : (
                    <div className="flex items-end justify-between">
                      <span className="text-[10.5px] text-ink-mute">{open.length} {open.length > 1 ? "comandas" : "comanda"} · {Math.max(...open.map((t) => t.minutes))} min</span>
                      <span className="font-display text-[14px] font-semibold tabular-nums">{brl(tableTotal(n))}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <aside className="flex w-[250px] shrink-0 flex-col rounded-xl border border-line bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="font-display text-[16px] font-semibold">Mesa {SELECTED}</div>
            <StatusChip status={tableStatus(SELECTED)} />
          </div>
          <div className="mt-0.5 text-[11px] text-ink-mute">{seats[SELECTED]} lugares · {tabsOf(SELECTED).length} comandas</div>
          <div className="mt-3 flex-1">
            {tabsOf(SELECTED).map((t) => (
              <Row key={t.id} left={`${t.label} · ${t.owner}`} sub={`${t.lines.reduce((s, l) => s + l.qty, 0)} itens`} right={brl(tabTotal(t))} />
            ))}
          </div>
          <div className="flex items-baseline justify-between border-t border-line pt-3">
            <span className="text-[11px] text-ink-mute">Total da mesa</span>
            <span className="font-display text-[20px] font-semibold tabular-nums">{brl(tableTotal(SELECTED))}</span>
          </div>
          <div className="mt-3 grid gap-2">
            <Btn primary><Plus className="size-3.5" />Nova comanda</Btn>
            <div className="grid grid-cols-2 gap-2">
              <Btn><ArrowLeftRight className="size-3.5" />Transferir</Btn>
              <Btn><Receipt className="size-3.5" />Pré-conta</Btn>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
