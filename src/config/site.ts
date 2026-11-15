export const site = {
  name: "Velozt",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  tagline: "Gestão inteligente para o seu restaurante.",
  title: "Velozt: PDV e gestão para food services",
  description:
    "Centralize mesas, comandas, pedidos, produção, pagamentos e controle de caixa em uma plataforma de PDV desenvolvida para o Food Service.",
  // Só aparece no site o que estiver preenchido (veja .env.example).
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  },
  social: [
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "" },
  ].filter((s) => s.href),
  nav: [
    { label: "Início", href: "/#inicio" },
    { label: "Plataforma", href: "/#plataforma" },
    { label: "Funcionalidades", href: "/#funcionalidades" },
    { label: "Diferenciais", href: "/#diferenciais" },
    { label: "Contato", href: "/#contato" },
  ],
} as const;
