import type { ReactNode } from "react";

export function SectionHeading({
  id, title, children, invert = false, className = "",
}: { id?: string; title: string; children?: ReactNode; invert?: boolean; className?: string }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 id={id} className={`text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.6rem] ${invert ? "font-display text-white" : "text-ink"}`}>
        {title}
      </h2>
      {children && <p className={`mt-5 text-[17px] leading-relaxed ${invert ? "text-white/75" : "text-ink-soft"}`}>{children}</p>}
    </div>
  );
}
