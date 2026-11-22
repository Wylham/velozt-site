import Image from "next/image";

// Símbolo em SVG vetorial (mesmos traços e degradê do logo completo), nítido em qualquer tamanho.
const src = {
  black: "/brand/iconblack-velozt.svg",
  gradient: "/brand/icongradient-velozt.svg",
  white: "/brand/iconwhite-velozt.svg",
} as const;

/** Símbolo oficial da Velozt (proporção 174,72 × 99). */
export function BrandMark({ variant = "gradient", className = "" }: { variant?: keyof typeof src; className?: string }) {
  return <Image src={src[variant]} alt="" aria-hidden width={175} height={99} unoptimized className={className} />;
}
