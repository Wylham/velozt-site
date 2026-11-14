import type { ReactNode } from "react";
import type { Sector, TableStatus } from "@/lib/demo-data";

export function Card({ title, aside, children, className = "" }: { title?: string; aside?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`flex min-h-0 flex-col rounded-xl border border-line bg-white ${className}`}>
      {(title || aside) && (
        <header className="flex items-center justify-between px-3.5 pb-1.5 pt-3">
          <h3 className="font-display text-[12px] font-semibold">{title}</h3>
          {aside && <span className="text-[10.5px] text-ink-mute">{aside}</span>}
        </header>
      )}
      <div className="min-h-0 flex-1 px-3.5 pb-3 pt-1">{children}</div>
    </section>
  );
}

const statusStyle: Record<TableStatus, string> = {
  livre: "border-line bg-white text-ink-mute",
  ocupada: "border-brand-200 bg-brand-50 text-brand-700",
  "pre-conta": "border-amber-200 bg-amber-50 text-amber-700",
};
export const statusLabel: Record<TableStatus, string> = { livre: "Livre", ocupada: "Ocupada", "pre-conta": "Pré-conta" };

export function StatusChip({ status }: { status: TableStatus }) {
  return <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusStyle[status]}`}>{statusLabel[status]}</span>;
}

const sectorStyle: Record<Sector, string> = {
  Cozinha: "bg-brand-50 text-brand-700",
  Bar: "bg-cyan-50 text-cyan-700",
  Chapa: "bg-slate-100 text-slate-700",
};
export function SectorChip({ sector }: { sector: Sector }) {
  return <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${sectorStyle[sector]}`}>{sector}</span>;
}

export function Btn({ children, primary = false, large = false, className = "" }: { children: ReactNode; primary?: boolean; large?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold ${large ? "h-10 px-3 text-[12.5px]" : "h-8 px-3 text-[11.5px]"} ${
        primary ? "bg-brand-gradient text-white" : "border border-line bg-white text-ink"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function BarChart({ labels, values, height = 140, money }: { labels: string[]; values: number[]; height?: number; money: (n: number) => string }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-2.5" style={{ height }}>
      {values.map((v, i) => {
        const last = i === values.length - 1;
        return (
          <div key={labels[i]} className="flex h-full flex-1 flex-col justify-end gap-1.5">
            <span className={`text-center text-[9.5px] tabular-nums ${last ? "font-semibold text-brand-700" : "text-ink-mute"}`}>{money(v)}</span>
            <div
              className={`rounded-t-md ${last ? "bg-gradient-to-t from-brand-700 to-aqua" : "bg-brand-100"}`}
              style={{ height: `${(v / max) * (height - 38)}px` }}
            />
            <span className={`text-center text-[10px] ${last ? "font-semibold text-ink" : "text-ink-mute"}`}>{labels[i]}</span>
          </div>
        );
      })}
    </div>
  );
}

export function Row({ left, right, sub, className = "" }: { left: ReactNode; right?: ReactNode; sub?: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center justify-between gap-3 border-b border-line/70 py-1.5 last:border-0 ${className}`}>
      <div className="min-w-0">
        <div className="truncate text-[12px]">{left}</div>
        {sub && <div className="text-[10.5px] text-ink-mute">{sub}</div>}
      </div>
      {right !== undefined && <div className="shrink-0 text-[12px] font-medium tabular-nums">{right}</div>}
    </div>
  );
}
