import Image from "next/image";

// Logos oficiais em SVG. `ratio` = largura ÷ altura do viewBox de cada arquivo,
// para o <img> reservar exatamente o espaço do desenho.
const logos = {
  // texto preto + ícone em degradê (fundos claros)
  secondary: { src: "/brand/blackprimary-velozt.svg", ratio: 634.38 / 100.98 },
  // texto branco + ícone em degradê (fundos escuros)
  primary: { src: "/brand/whiteprimary-velozt.svg", ratio: 634.53 / 100.88 },
  // tudo branco
  white: { src: "/brand/fullwhite-velozt.svg", ratio: 634.37 / 100.82 },
  // tudo preto
  black: { src: "/brand/fullblack-velozt.svg", ratio: 634.37 / 100.82 },
} as const;

export function Logo({
  variant = "secondary",
  height = 26,
  className = "",
  priority = false,
}: {
  variant?: keyof typeof logos;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const { src, ratio } = logos[variant];
  return (
    <Image
      src={src}
      alt="Velozt"
      width={Math.round(height * ratio)}
      height={height}
      unoptimized
      priority={priority}
      className={className}
    />
  );
}
