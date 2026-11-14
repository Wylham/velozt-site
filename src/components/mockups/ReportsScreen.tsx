import { AppShell } from "./AppShell";
import { BarChart, Card, Row } from "./mock-ui";
import { byMethod, byOperator, byProduct, cancellations, cancellationsTotal, discounts, discountsTotal, revenue, weekLabels, weekValues } from "@/lib/demo-data";
import { brl } from "@/lib/format";

export function ReportsScreen() {
  return (
    <AppShell active="relatorios" title="Relatórios" subtitle="Acompanhamento do desempenho">
      <div className="flex h-full flex-col gap-3">
        <div className="flex gap-1.5">
          {["Hoje", "7 dias", "Mês"].map((p, i) => (
            <span key={p} className={`rounded-full px-3 py-1.5 text-[11.5px] font-medium ${i === 0 ? "bg-ink text-white" : "border border-line bg-white text-ink-soft"}`}>{p}</span>
          ))}
        </div>
        <div className="grid grid-cols-[1.5fr_1fr] gap-3">
          <Card title="Vendas por período" aside="R$">
            <BarChart labels={weekLabels} values={weekValues} height={140} money={(n) => `${Math.round(n / 100)}`} />
          </Card>
          <Card title="Formas de pagamento" aside={brl(revenue)}>
            {byMethod.map((m) => (
              <Row key={m.name} left={m.name} sub={`${Math.round((m.total / revenue) * 100)}% do total`} right={brl(m.total)} />
            ))}
          </Card>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
          <Card title="Vendas por produto" aside="Qtd.">
            {byProduct.slice(0, 4).map((p) => (
              <Row key={p.name} left={p.name} sub={`${p.qty} un.`} right={brl(p.total)} />
            ))}
          </Card>
          <Card title="Vendas por operador">
            {byOperator.map((o) => (
              <Row key={o.name} left={o.name} right={brl(o.total)} />
            ))}
          </Card>
          <Card title="Cancelamentos e descontos">
            <Row left={`${cancellations.length} cancelamentos`} sub="Com autorização" right={brl(cancellationsTotal)} />
            <Row left={`${discounts.length} desconto aplicado`} sub="Com autorização" right={brl(discountsTotal)} />
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
