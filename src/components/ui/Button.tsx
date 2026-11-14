import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-[0_10px_24px_-10px_rgba(8,121,232,0.7)] hover:brightness-110 active:brightness-95",
  secondary: "border border-line bg-white text-ink hover:border-brand-200 hover:bg-brand-50",
  light: "bg-white text-brand-700 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] hover:bg-brand-50",
};

const sizes = { md: "h-12 px-6 text-[15px]", sm: "h-10 px-5 text-[14px]" } as const;

export function ButtonLink({
  href, children, variant = "primary", size = "md", arrow = false, className = "",
}: { href: string; children: ReactNode; variant?: Variant; size?: keyof typeof sizes; arrow?: boolean; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition ${sizes[size]} ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="size-4" aria-hidden />}
    </a>
  );
}
