import { ArrowDownToLine, ArrowUpFromLine, Lock } from "lucide-react";
import { AppShell } from "./AppShell";
import { Btn, Card, Row } from "./mock-ui";
import { byMethod, cash, revenue } from "@/lib/demo-data";
import { brl } from "@/lib/format";

export function CashScreen() {
  const stats = [
    { label: "Fundo de troco", value: cash.opening },
    { label: "Vendas em dinheiro", value: cash.cashSales },
    { label: "Suprimentos", value: cash.supplies },
    { label: "Sangrias", value: -cash.withdrawals },
  ];
  return (
    <AppShell active="caixa" title="Painel de caixa" subtitle="Turno aberto às 11:00 · Marina">
      <div className="flex h-full flex-col gap-3">
        <div className="flex justify-end gap-2">
          <Btn><ArrowUpFromLine className="size-3.5" />Sangria</Btn>
          <Btn><ArrowDownToLine className="size-3.5" />Suprimento</Btn>
          <Btn primary><Lock className="size-3.5" />Fechar turno</Btn>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.1fr] gap-3">
          <div className="flex flex-col gap-3">
            <Card title="Dinheiro em caixa" className="flex-1">
              {stats.map((s) => (
                <Row key={s.label} left={s.label} right={<span className={s.value < 0 ? "text-ink-soft" : ""}>{brl(s.value)}</span>} />
              ))}
              <div className="mt-2 flex items-baseline justify-between rounded-lg bg-brand-50 px-3 py-2.5">
                <span className="text-[11.5px] text-brand-700">Saldo esperado</span>
                <span className="font-display text-[19px] font-semibold tabular-nums text-brand-700">{brl(cash.expected)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-lg border border-dashed border-line px-3 py-2 text-[11.5px] text-ink-mute">
                Valor conferido <span className="tabular-nums">R$ 0,00</span>
              </div>
            </Card>
          </div>
          <div className="flex flex-col gap-3">
            <Card title="Recebimentos do turno" aside={brl(revenue)}>
              {byMethod.map((m) => (
                <div key={m.name} className="py-1.5">
                  <div className="flex justify-between text-[12px]"><span>{m.name}</span><span className="tabular-nums">{brl(m.total)}</span></div>
                  <div className="mt-1 h-1.5 rounded-full bg-brand-50">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-700 to-aqua" style={{ width: `${(m.total / revenue) * 100}%` }} />
                  </div>
                </div>
              ))}
            </Card>
            <Card title="Histórico de movimentações" className="flex-1">
              {cash.movements.map((m) => (
                <Row key={m.time} left={m.type} sub={`${m.time} · ${m.detail} · ${m.operator}`} right={<span className={m.value < 0 ? "text-ink-soft" : ""}>{brl(m.value)}</span>} />
              ))}
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
