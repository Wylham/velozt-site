"use client";

import { AppShell } from "./AppShell";
import { BarChart, Card, Row, SectorChip } from "./mock-ui";
import { avgTicket, byMethod, occupiedTables, openTotal, production, revenue, sales, tableNumbers, tableStatus, tableTotal, weekLabels, weekValues } from "@/lib/demo-data";
import { brl } from "@/lib/format";
import { useEffect, useState } from "react";

const short = (n: number) => `${Math.round(n / 100)}`;

function CountUp({ value, format, animate }: { value: number; format: (value: number) => string; animate: boolean }) {
  const [current, setCurrent] = useState(animate ? 0 : value);

  useEffect(() => {
    if (!animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(value);
      return;
    }

    let frame = 0;
    const delay = window.setTimeout(() => {
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 4))));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    }, 270);

    return () => {
      window.clearTimeout(delay);
      window.cancelAnimationFrame(frame);
    };
  }, [animate, value]);

  return <>{format(current)}</>;
}

export function DashboardScreen({ animate = false }: { animate?: boolean }) {
  const kpis = [
    { label: "Vendas de hoje", value: revenue, format: brl, hint: `${sales.length} comandas fechadas` },
    { label: "Ticket médio", value: avgTicket, format: brl, hint: "por comanda fechada" },
    { label: "Em aberto", value: openTotal, format: brl, hint: `${occupiedTables} de ${tableNumbers.length} mesas ocupadas` },
    { label: "Na produção", value: production.length, format: String, hint: "pedidos em andamento" },
  ];
  return (
    <AppShell active="dashboard" title="Painel" subtitle="Resumo da operação de hoje">
      <div className="flex h-full flex-col gap-3">
        <div className="grid grid-cols-4 gap-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-line bg-white px-3.5 py-3">
              <div className="text-[11px] text-ink-mute">{k.label}</div>
              <div className="mt-1 font-display text-[21px] font-semibold tabular-nums leading-none"><CountUp value={k.value} format={k.format} animate={animate} /></div>
              <div className="mt-1.5 text-[10.5px] text-ink-mute">{k.hint}</div>
            </div>
          ))}
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1.45fr_1fr] gap-3">
          <div className="flex min-h-0 flex-col gap-3">
            <Card title="Vendas dos últimos 7 dias" aside="R$">
              <BarChart labels={weekLabels} values={weekValues} height={150} money={short} animate={animate} />
            </Card>
            <Card title="Na produção" aside="Por setor" className="flex-1">
              {production.slice(0, 3).map((p) => (
                <Row key={p.item} left={<span className="flex items-center gap-2"><SectorChip sector={p.sector} />Mesa {p.table} · {p.item}</span>} right={p.status} sub={`há ${p.minutes} min`} />
              ))}
            </Card>
          </div>
          <div className="flex min-h-0 flex-col gap-3">
            <Card title="Mesas" aside={`${occupiedTables} ocupadas`}>
              <div className="grid grid-cols-4 gap-1.5">
                {tableNumbers.map((n) => {
                  const s = tableStatus(n);
                  return (
                    <div key={n} className={`rounded-lg border px-1.5 py-1.5 text-center ${s === "livre" ? "border-line bg-white text-ink-mute" : s === "ocupada" ? "border-brand-200 bg-brand-50 text-brand-700" : "border-amber-200 bg-amber-50 text-amber-700"}`}>
                      <div className="font-display text-[13px] font-semibold leading-none">{n}</div>
                      <div className="mt-1 text-[9px] tabular-nums">{s === "livre" ? "livre" : brl(tableTotal(n)).replace(",00", "")}</div>
                    </div>
                  );
                })}
              </div>
            </Card>
            <Card title="Pagamentos de hoje" className="flex-1">
              {byMethod.map((m) => (
                <Row key={m.name} left={m.name} right={brl(m.total)} />
              ))}
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
