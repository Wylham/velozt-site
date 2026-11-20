import { BarChart3, ChefHat, CreditCard, LayoutGrid, Wallet, type LucideIcon } from "lucide-react";

export type BlogCategory = "Operação" | "Gestão" | "Guias";

export type BlogSection = { heading?: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** AAAA-MM-DD */
  date: string;
  author: string;
  readingTime: string;
  /** Ícone usado na capa enquanto não houver imagem. */
  icon: LucideIcon;
  /** Opcional: arquivo em /public/images/blog/. Sem ele, a capa usa o gradiente da marca. */
  coverFile?: string;
  coverAlt?: string;
  sections: BlogSection[];
};

/**
 * Artigos de EXEMPLO: substitua pelos textos reais.
 * O primeiro (mais recente) vira o destaque; os dois seguintes formam a coluna empilhada;
 * os demais aparecem na grade "Mais artigos".
 */
const posts: BlogPost[] = [
  {
    slug: "como-organizar-o-salao-nos-horarios-de-pico",
    title: "Como organizar o salão nos horários de pico",
    excerpt:
      "Mesas, comandas e transferências em um só lugar ajudam a equipe a manter o ritmo quando o movimento aumenta.",
    category: "Operação",
    date: "2026-11-18",
    author: "Equipe Velozt",
    readingTime: "4 min de leitura",
    icon: LayoutGrid,
    sections: [
      {
        paragraphs: [
          "Nos horários de maior movimento, o que mais atrapalha o atendimento raramente é a falta de gente. Em geral, é a falta de informação: qual mesa está livre, o que já foi pedido e quem está esperando a conta.",
        ],
      },
      {
        heading: "Deixe o status das mesas visível para todos",
        paragraphs: [
          "Quando garçons e gestores olham para o mesmo mapa de mesas, a equipe decide mais rápido quem atende quem. Mesas livres, ocupadas e em pré-conta ficam claras logo de início, sem precisar perguntar no salão.",
        ],
      },
      {
        heading: "Use comandas individuais quando o grupo for grande",
        paragraphs: [
          "Separar o consumo por pessoa desde o início reduz a conversa na hora de fechar a conta. Se alguém mudar de lugar ou o grupo se dividir, a transferência de itens e comandas evita refazer o pedido.",
        ],
      },
    ],
  },
  {
    slug: "divisao-de-conta-sem-confusao",
    title: "Divisão de conta sem confusão: como fechar mesas com vários pagamentos",
    excerpt:
      "Pré-conta, pagamento fracionado e troco calculado: o passo a passo para fechar a conta sem fila no caixa.",
    category: "Operação",
    date: "2026-11-12",
    author: "Equipe Velozt",
    readingTime: "5 min de leitura",
    icon: CreditCard,
    sections: [
      {
        paragraphs: [
          "Grupos que pagam separadamente, usam mais de uma forma de pagamento ou pedem a conta dividida em partes iguais fazem parte da rotina do salão. O fechamento fica mais simples quando a equipe tem um roteiro claro.",
        ],
      },
      {
        heading: "Comece pela pré-conta",
        paragraphs: [
          "Apresentar a pré-conta antes do pagamento permite que o cliente confira o consumo e que a equipe corrija qualquer item antes de registrar os recebimentos.",
        ],
      },
      {
        heading: "Registre cada pagamento separadamente",
        paragraphs: [
          "Com o pagamento fracionado, cada parte é recebida na forma escolhida: dinheiro, débito ou crédito. Em pagamentos em dinheiro, o troco é calculado na própria tela, o que evita erro de conta no balcão.",
        ],
      },
    ],
  },
  {
    slug: "o-que-conferir-no-fechamento-de-caixa",
    title: "O que conferir no fechamento de caixa ao final do turno",
    excerpt:
      "Fundo de troco, sangrias, suprimentos e recebimentos: uma lista simples para começar o dia seguinte sem dúvidas.",
    category: "Gestão",
    date: "2026-11-05",
    author: "Equipe Velozt",
    readingTime: "4 min de leitura",
    icon: Wallet,
    sections: [
      {
        paragraphs: [
          "Um fechamento de caixa organizado começa na abertura do turno. Saber quanto havia de fundo de troco e quais movimentações aconteceram ao longo do dia torna a conferência final bem mais objetiva.",
        ],
      },
      {
        heading: "Compare o saldo esperado com o valor conferido",
        paragraphs: [
          "O saldo esperado considera o fundo de troco, as vendas em dinheiro, os suprimentos e as sangrias. Quando o valor contado no caixa é diferente, o histórico de movimentações ajuda a encontrar a origem da diferença.",
        ],
      },
      {
        heading: "Registre toda movimentação no momento em que ela acontece",
        paragraphs: [
          "Sangrias e suprimentos anotados depois costumam ser a principal fonte de divergência. Registrar na hora deixa o histórico completo e o fechamento sem surpresas.",
        ],
      },
    ],
  },
  {
    slug: "pedidos-por-setor-menos-ruido-entre-salao-e-cozinha",
    title: "Pedidos por setor: menos ruído entre salão e cozinha",
    excerpt:
      "Observações, adicionais e envio por setor ajudam cozinha, bar e chapa a produzir exatamente o que foi pedido.",
    category: "Guias",
    date: "2026-10-29",
    author: "Equipe Velozt",
    readingTime: "3 min de leitura",
    icon: ChefHat,
    sections: [
      {
        paragraphs: [
          "Recado repetido, papel perdido e preparo errado costumam ter a mesma origem: o pedido saiu do salão incompleto. Organizar a informação antes de enviar à produção evita boa parte desses problemas.",
        ],
      },
      {
        heading: "Mantenha as observações junto do item",
        paragraphs: [
          "Quando a observação (como o ponto da carne ou a retirada de um ingrediente) fica ligada ao item, o setor recebe o contexto completo e não depende de recados paralelos.",
        ],
      },
      {
        heading: "Envie cada item para o setor certo",
        paragraphs: [
          "Direcionar os itens para cozinha, bar e chapa permite que cada equipe veja apenas o que precisa produzir, e que alterações e cancelamentos fiquem registrados para a conferência do turno.",
        ],
      },
    ],
  },
  {
    slug: "relatorios-para-acompanhar-no-dia-a-dia",
    title: "Quais relatórios acompanhar no dia a dia do Food Service",
    excerpt:
      "Vendas por período, por produto e por operador, além de descontos e cancelamentos: por onde começar a olhar os números.",
    category: "Gestão",
    date: "2026-10-22",
    author: "Equipe Velozt",
    readingTime: "5 min de leitura",
    icon: BarChart3,
    sections: [
      {
        paragraphs: [
          "Ter muitos relatórios não ajuda se ninguém sabe qual olhar primeiro. Para começar, vale escolher poucos indicadores e acompanhá-los com regularidade.",
        ],
      },
      {
        heading: "Vendas por período e por produto",
        paragraphs: [
          "Comparar dias e turnos mostra os horários de maior movimento. Já as vendas por produto indicam o que sustenta o cardápio e o que pode ser revisto.",
        ],
      },
      {
        heading: "Descontos e cancelamentos com autorização",
        paragraphs: [
          "Acompanhar descontos e cancelamentos, junto de quem autorizou cada um, dá à gestão clareza sobre o que mudou na operação e facilita a conversa com a equipe.",
        ],
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

/** Categorias que realmente têm artigos, na ordem em que aparecem. */
export const blogCategories: BlogCategory[] = [...new Set(blogPosts.map((p) => p.category))];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
