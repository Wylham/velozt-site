# Velozt — site institucional e comercial

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Lucide Icons

## Como rodar

```bash
npm install
cp .env.example .env.local   # opcional: contato, redes, URL do site, webhook
npm run dev                  # http://localhost:3000
npm run build && npm start   # produção
npm run typecheck
```

## Configuração (.env.local)

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (SEO, sitemap, Open Graph) |
| `NEXT_PUBLIC_CONTACT_EMAIL` / `NEXT_PUBLIC_CONTACT_PHONE` | Contato comercial no rodapé. Vazio = oculto |
| `NEXT_PUBLIC_INSTAGRAM_URL` / `NEXT_PUBLIC_LINKEDIN_URL` | Redes sociais no rodapé. Vazio = oculto |
| `DEMO_WEBHOOK_URL` | Recebe um `POST` JSON com cada solicitação de demonstração |

Sem `DEMO_WEBHOOK_URL`, o formulário só funciona em desenvolvimento (registra no terminal). Em produção ele responde erro até o destino ser configurado.

## Estrutura

```
src/
  app/                 layout, página, SEO (robots, sitemap), API do formulário, páginas legais
  config/site.ts       nome, descrição, navegação, contatos (só aparece o que estiver preenchido)
  content.ts           funcionalidades e FAQ
  lib/demo-data.ts     dados demonstrativos: todos os totais dos mockups saem daqui
  components/
    layout/            Header, Footer
    sections/          uma seção por arquivo (Hero, Platform, Features, Security, Devices, Audience,
                       Differentials, ProductDemo, Faq, FinalCta, DemoForm)
    mockups/           telas ilustrativas do sistema + molduras de computador, tablet e celular
    ui/                Logo, BrandMark, Button, Tabs, Container, SectionHeading
public/brand/          logos oficiais (WebP), sem alteração
```

## Marca

- Logos: `fullsecondary` no cabeçalho e rodapé, `fullwhite` sobre o gradiente do CTA final.
- O ícone (`BrandMark`) usa os arquivos oficiais `iconblack`, `icongradient` e `iconwhite` em WebP.
- Cores no `globals.css` (`@theme`). O azul principal `#0042bf` e o ciano `#00b8e8` seguem o gradiente da logo; `#0879e8` fica como azul intermediário.
- Tipografia: Sora (títulos) e Instrument Sans (texto), via `next/font`.

## Regras de comunicação

O site só apresenta o que está no escopo: sem preços, planos, clientes, depoimentos, integrações, roadmap ou certificações. As telas são ilustrativas e identificadas como tal ("Tela ilustrativa com dados demonstrativos").

## Antes de publicar

- Substituir o texto das páginas `/politica-de-privacidade` e `/termos-de-uso` pelo texto jurídico oficial.
- Definir `DEMO_WEBHOOK_URL`, `NEXT_PUBLIC_SITE_URL` e, se houver, contatos e redes sociais.
