export const site = {
  name: "Velozt",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  tagline: "Gestão inteligente para o seu restaurante.",
  title: "Velozt: PDV e gestão para food services",
  description:
    "Centralize atendimento, pedidos, produção, estoque, clientes e financeiro em uma plataforma de PDV e gestão desenvolvida para o Food Service.",
  // Só aparece no site o que estiver preenchido (veja .env.example).
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  },
  social: [
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "" },
  ].filter((s) => s.href),
  // Navegação principal (header). "Soluções" abre o mega menu definido em `solutionsMenu`.
  nav: [
    { label: "Soluções", href: "/solucoes/salao-e-comandas" },
    { label: "Preço", href: "/planos" },
    { label: "Contato", href: "/contato" },
    { label: "Blog", href: "/blog" },
  ],
  // O rodapé mantém o mapa completo do site.
  footerNav: [
    { label: "Início", href: "/" },
    { label: "Soluções", href: "/solucoes/salao-e-comandas" },
    { label: "Plataforma", href: "/plataforma" },
    { label: "Diferenciais", href: "/diferenciais" },
    { label: "Preço", href: "/planos" },
    { label: "Contato", href: "/contato" },
    { label: "Blog", href: "/blog" },
  ],
  solutionsMenu: {
    columns: [
      {
        title: "No atendimento",
        items: [
          {
            label: "Salão e comandas",
            href: "/solucoes/salao-e-comandas",
            description: "Mesas e comandas sem perder o histórico.",
          },
          {
            label: "Pedidos e produção",
            href: "/solucoes/pedidos-e-producao",
            description: "Pedidos claros para cozinha, bar e chapa.",
          },
        ],
      },
      {
        title: "No fechamento e na gestão",
        items: [
          {
            label: "Caixa e pagamentos",
            href: "/solucoes/caixa-e-pagamentos",
            description: "Divida contas e feche o caixa com controle.",
          },
          {
            label: "Gestão e relatórios",
            href: "/solucoes/gestao-e-relatorios",
            description: "Vendas e movimentações para decidir melhor.",
          },
        ],
      },
      {
        title: "Conheça a Velozt",
        items: [
          {
            label: "Plataforma",
            href: "/plataforma",
            description: "Toda a operação conectada em um só lugar.",
          },
          {
            label: "Diferenciais",
            href: "/diferenciais",
            description: "O que nos torna diferentes no Food Service.",
          },
        ],
      },
    ],
    footer: {
      label: "Fale com o nosso time",
      description: "Mostramos a Velozt funcionando na rotina da sua operação.",
      href: "/contato",
    },
  },
} as const;
