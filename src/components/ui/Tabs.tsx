"use client";

import type { KeyboardEvent, ReactNode } from "react";

export type TabItem = { id: string; label: string; icon?: ReactNode };

/**
 * Lista de abas acessível (role=tablist, setas, Home/End).
 * O painel correspondente deve usar id `${idPrefix}-panel` e aria-labelledby `${idPrefix}-tab-${value}`.
 */
export function TabList({
  items, value, onChange, label, idPrefix, orientation = "horizontal", className = "", tabClassName,
}: {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  label: string;
  idPrefix: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
  tabClassName: (active: boolean) => string;
}) {
  const move = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys = orientation === "vertical" ? ["ArrowDown", "ArrowUp"] : ["ArrowRight", "ArrowLeft"];
    let next = i;
    if (e.key === keys[0]) next = (i + 1) % items.length;
    else if (e.key === keys[1]) next = (i - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    onChange(items[next].id);
    document.getElementById(`${idPrefix}-tab-${items[next].id}`)?.focus();
  };

  return (
    <div role="tablist" aria-label={label} aria-orientation={orientation} className={className}>
      {items.map((t, i) => {
        const active = t.id === value;
        return (
          <button
            key={t.id}
            id={`${idPrefix}-tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={active}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(t.id)}
            onKeyDown={(e) => move(e, i)}
            className={tabClassName(active)}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
