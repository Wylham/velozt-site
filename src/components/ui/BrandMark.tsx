import Image from "next/image";

const src = {
  black: "/brand/iconblack-velozt.webp",
  gradient: "/brand/icongradient-velozt.webp",
  white: "/brand/iconwhite-velozt.webp",
} as const;

/** Símbolo oficial da Velozt, fornecido diretamente pelos arquivos de marca. */
export function BrandMark({ variant = "gradient", className = "" }: { variant?: keyof typeof src; className?: string }) {
  return <Image src={src[variant]} alt="" aria-hidden width={729} height={413} unoptimized className={className} />;
}
