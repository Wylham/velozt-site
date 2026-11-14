import { AppShell } from "./AppShell";
import { Btn, Card, Row } from "./mock-ui";
import { product, tabs, tabTotal } from "@/lib/demo-data";
import { brl } from "@/lib/format";

export function PaymentScreen() {
  const tab = tabs.find((t) => t.table === 9)!;
  const total = tabTotal(tab);
  const part = Math.floor(total / 3);
  const parts = [
    { who: "Pessoa 1", method: "Crédito", value: part },
    { who: "Pessoa 2", method: "Dinheiro", value: part },
    { who: "Pessoa 3", method: "Débito", value: total - part * 2 },
  ];
  const received = 10000;
  return (
    <AppShell title="Fechamento de conta" subtitle="Mesa 9 · Pré-conta para conferência">
      <div className="flex h-full gap-3">
        <Card title="Pré-conta" aside={`aberta há ${tab.minutes} min`} className="w-[330px] shrink-0">
          <div className="flex h-full flex-col">
            <div className="flex-1">
              {tab.lines.map((l) => (
                <Row key={l.id} left={<span><span className="tabular-nums text-ink-mute">{l.qty}× </span>{product(l.id).name}</span>} right={brl(product(l.id).price * l.qty)} />
              ))}
            </div>
            <div className="flex items-baseline justify-between border-t border-line pt-3">
              <span className="text-[11px] text-ink-mute">Total</span>
              <span className="font-display text-[22px] font-semibold tabular-nums">{brl(total)}</span>
            </div>
          </div>
        </Card>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <Card title="Divisão em 3 pagamentos" aside="Pagamento fracionado" className="flex-1">
            {parts.map((p) => (
              <Row key={p.who} left={p.who} sub={p.method} right={brl(p.value)} />
            ))}
          </Card>
          <Card title="Pagamento em dinheiro · Pessoa 2">
            <Row left="Valor recebido" right={brl(received)} />
            <Row left="Valor da parte" right={brl(part)} />
            <Row left={<span className="font-semibold">Troco</span>} right={<span className="font-semibold text-brand-700">{brl(received - part)}</span>} />
          </Card>
          <div className="flex gap-2">
            <Btn className="flex-1">Aplicar desconto (autorização)</Btn>
            <Btn primary className="flex-1">Concluir pagamento</Btn>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
