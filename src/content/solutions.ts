import { BarChart3, ChefHat, CreditCard, LayoutGrid, type LucideIcon } from "lucide-react";
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
    intro:
      "A Velozt reúne a visão do salão e o histórico de cada comanda em uma tela clara. A equipe sabe o que está aberto, o que foi pedido e o que precisa acontecer a seguir sem depender de papel ou memória.",
    icon: LayoutGrid,
    screen: "mesas",
    imageFile: "salao-e-comandas.jpg",
    imageAlt: "Equipe atendendo mesas em restaurante",
    howItHelps: [
      "Mapa de mesas com status da operação em tempo real.",
      "Múltiplas comandas e comandas individuais na mesma mesa.",
      "Transferência de itens ou comandas sem perder o histórico.",
      "Acompanhamento do consumo para um fechamento mais tranquilo.",
    ],
    differentiators: [
      {
        title: "Visão que a equipe entende",
        text: "Mesas, comandas e estados da operação aparecem de forma visual para reduzir dúvidas durante o atendimento.",
      },
      {
        title: "Flexibilidade no salão",
        text: "Atenda grupos, separe consumos e faça transferências sem criar controles paralelos.",
      },
      {
        title: "Histórico preservado",
        text: "Cada ação fica registrada para que a gestão tenha mais clareza na conferência.",
      },
    ],
    outcomes: [
      "Mais organização nos horários de pico.",
      "Menos retrabalho entre atendimento e caixa.",
      "Contas mais fáceis de conferir e fechar.",
    ],
    faqs: [
      {
        q: "Posso ter mais de uma comanda na mesma mesa?",
        a: "Sim. Você pode abrir comandas individuais para cada pessoa ou grupo na mesma mesa, mantendo o consumo separado até o momento de fechar a conta.",
      },
      {
        q: "É possível transferir uma comanda ou apenas alguns itens?",
        a: "Sim. A equipe pode transferir a comanda inteira ou itens específicos entre mesas e comandas. Assim, mudanças de lugar, divisão de grupos e correções não exigem refazer o pedido.",
      },
      {
        q: "Como a equipe sabe quais mesas precisam de atenção?",
        a: "O mapa de mesas concentra os atendimentos abertos e o status de cada um. Garçons e gestores consultam o mesmo cenário para organizar a sequência de atendimento e o fechamento.",
      },
      {
        q: "O consumo do salão chega ao caixa e à gestão?",
        a: "Sim. Os lançamentos feitos na comanda seguem para o fechamento e compõem as informações usadas no caixa e nos relatórios, reduzindo conferências manuais entre áreas.",
      },
    ],
  },
  {
    slug: "pedidos-e-producao",
    eyebrow: "Operação de cozinha",
    navLabel: "Pedidos e produção",
    title: "Do pedido à produção, cada detalhe chega ao setor certo.",
    description: "Conecte atendimento, cozinha, bar e chapa com pedidos organizados e observações preservadas.",
    intro:
      "Um pedido bem lançado evita conversa repetida, papel perdido e preparo errado. A Velozt organiza itens, adicionais e observações para que cada setor receba apenas o que precisa produzir.",
    icon: ChefHat,
    screen: "pedidos",
    imageFile: "pedidos-e-producao.jpg",
    imageAlt: "Cozinha profissional em operação",
    howItHelps: [
      "Lançamento de pedidos com adicionais e modificadores.",
      "Observações visíveis junto de cada item.",
      "Envio por setor: cozinha, bar e chapa.",
      "Registro de alterações e cancelamentos para conferência.",
    ],
    differentiators: [
      {
        title: "Pedido completo",
        text: "A informação sai do atendimento com os detalhes necessários para reduzir interpretações no preparo.",
      },
      {
        title: "Produção por setor",
        text: "Cada área recebe os itens correspondentes, ajudando a manter o fluxo de trabalho mais claro.",
      },
      {
        title: "Rastreabilidade operacional",
        text: "Alterações e cancelamentos ficam registrados para facilitar a gestão do turno.",
      },
    ],
    outcomes: [
      "Menos ruído entre salão e produção.",
      "Mais padrão no preparo dos pedidos.",
      "Conferência mais simples ao final do turno.",
    ],
    faqs: [
      {
        q: "Como observações e adicionais chegam à produção?",
        a: "Eles seguem vinculados ao item do pedido. A cozinha recebe o contexto necessário para preparar o pedido conforme combinado, sem depender de recados paralelos.",
      },
      {
        q: "O pedido pode ser separado por setor?",
        a: "Sim. A operação pode direcionar os itens para setores como cozinha, bar e chapa, para que cada time visualize o que precisa produzir.",
      },
      {
        q: "O que acontece quando um pedido é alterado ou cancelado?",
        a: "As alterações e os cancelamentos ficam registrados para a conferência do turno. Isso dá mais clareza à equipe e à gestão sobre o que mudou na operação.",
      },
      {
        q: "A produção conversa com o atendimento e o caixa?",
        a: "Sim. O pedido nasce no atendimento, é enviado à produção e permanece ligado ao consumo que será conferido no caixa e nos relatórios.",
      },
    ],
  },
  {
    slug: "caixa-e-pagamentos",
    eyebrow: "Fechamento sem fricção",
    navLabel: "Caixa e pagamentos",
    title: "Feche cada conta com clareza e do jeito que o cliente precisa.",
    description: "Divida contas, registre diferentes formas de pagamento e acompanhe o caixa com mais controle.",
    intro:
      "O fim da experiência também importa. A Velozt reúne consumo, pré-conta e recebimentos para a equipe concluir cada atendimento com agilidade, sem abrir mão da conferência.",
    icon: CreditCard,
    screen: "pagamentos",
    imageFile: "caixa-e-pagamentos.jpg",
    imageAlt: "Atendimento de caixa em restaurante",
    howItHelps: [
      "Divisão de contas e pagamentos fracionados.",
      "Registro de diferentes formas de pagamento.",
      "Cálculo de troco e pré-conta para conferência.",
      "Descontos com autorização e histórico de movimentações.",
    ],
    differentiators: [
      {
        title: "Pagamento sem improviso",
        text: "A conta pode ser dividida e recebida de maneiras diferentes, acompanhando situações reais do salão.",
      },
      {
        title: "Conferência antes de concluir",
        text: "A pré-conta ajuda a equipe a revisar o consumo antes do fechamento.",
      },
      {
        title: "Caixa com rastreabilidade",
        text: "Abertura, sangrias, suprimentos e fechamento de turno ficam organizados no mesmo ambiente.",
      },
    ],
    outcomes: [
      "Menos dúvidas no fechamento das mesas.",
      "Mais consistência na rotina de caixa.",
      "Informações prontas para a conferência.",
    ],
    faqs: [
      {
        q: "Como funciona a divisão de conta?",
        a: "A equipe pode dividir o consumo e registrar pagamentos fracionados, acompanhando situações comuns como grupos que pagam separadamente ou usam mais de uma forma de pagamento.",
      },
      {
        q: "Quais formas de pagamento posso registrar?",
        a: "A plataforma registra as formas de recebimento utilizadas e calcula o troco quando necessário, deixando a conferência do fechamento mais objetiva.",
      },
      {
        q: "Consigo controlar abertura, sangrias e suprimentos?",
        a: "Sim. A rotina contempla fundo de troco, abertura, sangrias, suprimentos e fechamento, com histórico das movimentações para a conferência do turno.",
      },
      {
        q: "O que acontece com os recebimentos depois do fechamento?",
        a: "Os pagamentos registrados alimentam o caixa e os relatórios de gestão, dando visibilidade sobre vendas e formas de recebimento sem consolidar dados à mão.",
      },
    ],
  },
  {
    slug: "gestao-e-relatorios",
    eyebrow: "Decisões com contexto",
    navLabel: "Gestão e relatórios",
    title: "Transforme a rotina do restaurante em decisões mais seguras.",
    description: "Acompanhe vendas, operação e movimentações para enxergar o que está funcionando no seu negócio.",
    intro:
      "A gestão não precisa depender de planilhas montadas às pressas. A Velozt centraliza informações da operação para você acompanhar o desempenho do estabelecimento e fazer conferências com mais contexto.",
    icon: BarChart3,
    screen: "relatorios",
    imageFile: "gestao-e-relatorios.jpg",
    imageAlt: "Gestor analisando indicadores de restaurante",
    howItHelps: [
      "Vendas por período, produto e operador.",
      "Acompanhamento das formas de pagamento.",
      "Relatórios de cancelamentos e descontos.",
      "Consulta às movimentações de caixa e desempenho da operação.",
    ],
    differentiators: [
      {
        title: "Informação que vem da operação",
        text: "Os dados acompanham o que acontece no salão, nos pedidos e no caixa sem depender de controles isolados.",
      },
      {
        title: "Conferência mais objetiva",
        text: "Visualize movimentações e indicadores importantes para entender cada turno com mais segurança.",
      },
      {
        title: "Uma plataforma conectada",
        text: "Atendimento, pedidos, pagamentos e controle de caixa formam uma base única para a gestão.",
      },
    ],
    outcomes: [
      "Mais visibilidade sobre vendas e movimentações.",
      "Conferências mais rápidas ao fechar o turno.",
      "Decisões orientadas pela rotina real do restaurante.",
    ],
    faqs: [
      {
        q: "Quais informações posso acompanhar nos relatórios?",
        a: "Você pode analisar vendas por período, produto e operador, formas de pagamento, descontos, cancelamentos e movimentações de caixa para entender o desempenho da operação.",
      },
      {
        q: "Consigo comparar a atuação de operadores e turnos?",
        a: "Sim. As vendas por operador ajudam a contextualizar cada turno e tornam a conferência mais objetiva, sem transformar a rotina em uma planilha paralela.",
      },
      {
        q: "Os dados de caixa entram nos relatórios?",
        a: "Sim. Recebimentos e movimentações de caixa ficam organizados na mesma base usada pela gestão, facilitando a leitura e a conferência ao final do dia.",
      },
      {
        q: "A gestão também considera estoque, financeiro e fiscal?",
        a: "A Velozt foi pensada como uma plataforma conectada: a rotina operacional gera dados que apoiam a gestão, o controle de estoque, o financeiro e as obrigações fiscais.",
      },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
