import {
  BarChart3,
  ChefHat,
  CreditCard,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import type { ScreenKey } from "@/components/mockups/screens";

export type Solution = {
  slug: string;
  eyebrow: string;
  navLabel: string;
  title: string;
  description: string;
  intro: string;
  icon: LucideIcon;
  screen: ScreenKey;
  imageFile: string;
  imageAlt: string;
  howItHelps: string[];
  differentiators: { title: string; text: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "salao-e-comandas",
    eyebrow: "Atendimento presencial",
    navLabel: "Salão e comandas",
    title: "Um salão mais fluido, da primeira mesa à conta final.",
    description: "Organize mesas, comandas e atendimento para sua equipe trabalhar com ritmo e segurança.",
    intro: "A Velozt reúne a visão do salão e o histórico de cada comanda em uma tela clara. A equipe sabe o que está aberto, o que foi pedido e o que precisa acontecer a seguir — sem depender de papel ou memória.",
    icon: LayoutGrid,
    screen: "mesas",
    imageFile: "salao-e-comandas.webp",
    imageAlt: "Equipe atendendo mesas em restaurante",
    howItHelps: ["Mapa de mesas com status da operação em tempo real.", "Múltiplas comandas e comandas individuais na mesma mesa.", "Transferência de itens ou comandas sem perder o histórico.", "Acompanhamento do consumo para um fechamento mais tranquilo."],
    differentiators: [
      { title: "Visão que a equipe entende", text: "Mesas, comandas e estados da operação aparecem de forma visual para reduzir dúvidas durante o atendimento." },
      { title: "Flexibilidade no salão", text: "Atenda grupos, separe consumos e faça transferências sem criar controles paralelos." },
      { title: "Histórico preservado", text: "Cada ação fica registrada para que a gestão tenha mais clareza na conferência." },
    ],
    outcomes: ["Mais organização nos horários de pico.", "Menos retrabalho entre atendimento e caixa.", "Contas mais fáceis de conferir e fechar."],
    faqs: [
      { q: "Posso ter mais de uma comanda na mesma mesa?", a: "Sim. A Velozt permite organizar múltiplas comandas por mesa ou comandas individuais, conforme o jeito que seu atendimento funciona." },
      { q: "É possível transferir uma comanda?", a: "Sim. Itens e comandas podem ser transferidos entre mesas, mantendo a operação organizada." },
      { q: "Como acompanho o status das mesas?", a: "O mapa de mesas oferece uma visão centralizada do salão para a equipe acompanhar a situação de cada atendimento." },
    ],
  },
  {
    slug: "pedidos-e-producao",
    eyebrow: "Operação de cozinha",
    navLabel: "Pedidos e produção",
    title: "Do pedido à produção, cada detalhe chega ao setor certo.",
    description: "Conecte atendimento, cozinha, bar e chapa com pedidos organizados e observações preservadas.",
    intro: "Um pedido bem lançado evita conversa repetida, papel perdido e preparo errado. A Velozt organiza itens, adicionais e observações para que cada setor receba apenas o que precisa produzir.",
    icon: ChefHat,
    screen: "pedidos",
    imageFile: "pedidos-e-producao.webp",
    imageAlt: "Cozinha profissional em operação",
    howItHelps: ["Lançamento de pedidos com adicionais e modificadores.", "Observações visíveis junto de cada item.", "Envio por setor: cozinha, bar e chapa.", "Registro de alterações e cancelamentos para conferência."],
    differentiators: [
      { title: "Pedido completo", text: "A informação sai do atendimento com os detalhes necessários para reduzir interpretações no preparo." },
      { title: "Produção por setor", text: "Cada área recebe os itens correspondentes, ajudando a manter o fluxo de trabalho mais claro." },
      { title: "Rastreabilidade operacional", text: "Alterações e cancelamentos ficam registrados para facilitar a gestão do turno." },
    ],
    outcomes: ["Menos ruído entre salão e produção.", "Mais padrão no preparo dos pedidos.", "Conferência mais simples ao final do turno."],
    faqs: [
      { q: "Posso incluir observações no pedido?", a: "Sim. A equipe pode lançar observações e modificadores junto aos itens do pedido." },
      { q: "O pedido pode ser separado por setor?", a: "Sim. A Velozt organiza o envio por setores de produção, como cozinha, bar e chapa." },
      { q: "O que acontece com alterações e cancelamentos?", a: "Essas ações ficam registradas, oferecendo mais transparência para a operação e para a conferência." },
    ],
  },
  {
    slug: "caixa-e-pagamentos",
    eyebrow: "Fechamento sem fricção",
    navLabel: "Caixa e pagamentos",
    title: "Feche cada conta com clareza e do jeito que o cliente precisa.",
    description: "Divida contas, registre diferentes formas de pagamento e acompanhe o caixa com mais controle.",
    intro: "O fim da experiência também importa. A Velozt reúne consumo, pré-conta e recebimentos para a equipe concluir cada atendimento com agilidade, sem abrir mão da conferência.",
    icon: CreditCard,
    screen: "pagamentos",
    imageFile: "caixa-e-pagamentos.webp",
    imageAlt: "Atendimento de caixa em restaurante",
    howItHelps: ["Divisão de contas e pagamentos fracionados.", "Registro de diferentes formas de pagamento.", "Cálculo de troco e pré-conta para conferência.", "Descontos com autorização e histórico de movimentações."],
    differentiators: [
      { title: "Pagamento sem improviso", text: "A conta pode ser dividida e recebida de maneiras diferentes, acompanhando situações reais do salão." },
      { title: "Conferência antes de concluir", text: "A pré-conta ajuda a equipe a revisar o consumo antes do fechamento." },
      { title: "Caixa com rastreabilidade", text: "Abertura, sangrias, suprimentos e fechamento de turno ficam organizados no mesmo ambiente." },
    ],
    outcomes: ["Menos dúvidas no fechamento das mesas.", "Mais consistência na rotina de caixa.", "Informações prontas para a conferência."],
    faqs: [
      { q: "A Velozt permite dividir uma conta?", a: "Sim. É possível dividir contas e registrar pagamentos fracionados." },
      { q: "Quais formas de pagamento posso registrar?", a: "A plataforma permite registrar diferentes formas de pagamento e calcular o troco quando necessário." },
      { q: "Consigo acompanhar sangrias e suprimentos?", a: "Sim. A rotina de caixa contempla abertura, fundo de troco, sangrias, suprimentos, fechamento e histórico de movimentações." },
    ],
  },
  {
    slug: "gestao-e-relatorios",
    eyebrow: "Decisões com contexto",
    navLabel: "Gestão e relatórios",
    title: "Transforme a rotina do restaurante em decisões mais seguras.",
    description: "Acompanhe vendas, operação e movimentações para enxergar o que está funcionando no seu negócio.",
    intro: "A gestão não precisa depender de planilhas montadas às pressas. A Velozt centraliza informações da operação para você acompanhar o desempenho do estabelecimento e fazer conferências com mais contexto.",
    icon: BarChart3,
    screen: "relatorios",
    imageFile: "gestao-e-relatorios.webp",
    imageAlt: "Gestor analisando indicadores de restaurante",
    howItHelps: ["Vendas por período, produto e operador.", "Acompanhamento das formas de pagamento.", "Relatórios de cancelamentos e descontos.", "Consulta às movimentações de caixa e desempenho da operação."],
    differentiators: [
      { title: "Informação que vem da operação", text: "Os dados acompanham o que acontece no salão, nos pedidos e no caixa — sem depender de controles isolados." },
      { title: "Conferência mais objetiva", text: "Visualize movimentações e indicadores importantes para entender cada turno com mais segurança." },
      { title: "Uma plataforma conectada", text: "Atendimento, pedidos, pagamentos e controle de caixa formam uma base única para a gestão." },
    ],
    outcomes: ["Mais visibilidade sobre vendas e movimentações.", "Conferências mais rápidas ao fechar o turno.", "Decisões orientadas pela rotina real do restaurante."],
    faqs: [
      { q: "Quais relatórios a Velozt oferece?", a: "Você pode acompanhar vendas por período, produto e operador, formas de pagamento, cancelamentos, descontos e movimentações de caixa." },
      { q: "Posso acompanhar o desempenho por operador?", a: "Sim. Os relatórios incluem vendas por operador para ajudar na leitura da operação." },
      { q: "Os dados de caixa entram nos relatórios?", a: "Sim. A plataforma organiza movimentações de caixa e informações de pagamento para apoiar a conferência." },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
