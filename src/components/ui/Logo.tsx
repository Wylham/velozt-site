import Image from "next/image";

const src = {
  secondary: "/brand/fullsecondary-velozt.webp",
  white: "/brand/fullwhite-velozt.webp",
  primary: "/brand/fullprimary-velozt.webp",
} as const;

/** Logo oficial, mantendo a proporção original do arquivo (634,37 × 100,82). */
export function Logo({
  variant = "secondary",
  height = 26,
  className = "",
}: {
  variant?: keyof typeof src;
  height?: number;
  className?: string;
}) {
  const width = Math.round((height * 634.37) / 100.82);
  return <Image src={src[variant]} alt="Velozt" width={width} height={height} unoptimized className={className} />;
}
