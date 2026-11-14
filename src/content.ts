import { BarChart3, ChefHat, CreditCard, FileText, LayoutGrid, UtensilsCrossed, Wallet, type LucideIcon } from "lucide-react";
import type { ScreenKey } from "@/components/mockups/screens";

export type Feature = {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  highlights: string[];
  screen: ScreenKey;
};

export const features: Feature[] = [
  {
    id: "mesas", label: "Mesas e comandas", icon: LayoutGrid, screen: "mesas",
    headline: "Organize o salão, acompanhe as mesas e gerencie comandas de maneira centralizada.",
    highlights: ["Abertura e gerenciamento de mesas", "Múltiplas comandas por mesa", "Comandas individuais", "Transferência de itens e comandas", "Acompanhamento do status das mesas"],
  },
  {
    id: "cardapio", label: "Cardápio e produtos", icon: UtensilsCrossed, screen: "cardapio",
    headline: "Tenha seus produtos organizados e facilite o gerenciamento do cardápio.",
    highlights: ["Categorias e produtos", "Preços e variações", "Adicionais e modificadores", "Combos", "Organização por setores de produção"],
  },
  {
    id: "pedidos", label: "Pedidos e produção", icon: ChefHat, screen: "pedidos",
    headline: "Conecte o atendimento à produção e mantenha os pedidos organizados durante toda a operação.",
    highlights: ["Lançamento de pedidos", "Observações e modificadores", "Envio de pedidos por setor", "Impressão para cozinha, bar e chapa", "Registro de alterações e cancelamentos"],
  },
  {
    id: "pagamentos", label: "Pagamentos e fechamento", icon: CreditCard, screen: "pagamentos",
    headline: "Tenha mais flexibilidade e controle no fechamento das contas.",
    highlights: ["Divisão de contas", "Pagamentos fracionados", "Registro de diferentes formas de pagamento", "Cálculo de troco", "Descontos com autorização", "Pré-conta para conferência"],
  },
  {
    id: "caixa", label: "Controle de caixa", icon: Wallet, screen: "caixa",
    headline: "Organize a movimentação financeira da operação com mais transparência.",
    highlights: ["Abertura de caixa", "Fundo de troco", "Sangrias e suprimentos", "Fechamento de turno", "Conferência de valores", "Histórico de movimentações"],
  },
  {
    id: "fiscal", label: "Emissão fiscal", icon: FileText, screen: "fiscal",
    headline: "Organize a emissão dos documentos fiscais da operação.",
    highlights: ["Emissão de NFC-e", "Consulta de documentos", "Cancelamento de documentos fiscais", "Organização das informações fiscais dos produtos"],
  },
  {
    id: "relatorios", label: "Relatórios e acompanhamento", icon: BarChart3, screen: "relatorios",
    headline: "Tenha informações importantes para acompanhar o desempenho do seu estabelecimento.",
    highlights: ["Vendas por período", "Vendas por produto", "Vendas por operador", "Formas de pagamento", "Relatórios de cancelamentos e descontos", "Acompanhamento das movimentações de caixa"],
  },
];

export const faqs = [
  { q: "O que é a Velozt?", a: "A Velozt é uma plataforma de PDV e gestão operacional para Food Service. Ela reúne mesas, comandas, pedidos, produção, pagamentos e controle de caixa em um só lugar." },
  { q: "Para quais estabelecimentos a plataforma é indicada?", a: "Para restaurantes que trabalham com atendimento em mesas e comandas, e para operações de alimentação com atendimento presencial." },
  { q: "Como funciona o gerenciamento de mesas e comandas?", a: "Você abre e acompanha as mesas, pode ter várias comandas na mesma mesa ou comandas individuais, transferir itens e comandas entre mesas e acompanhar o status de cada mesa." },
  { q: "É possível dividir uma conta?", a: "Sim. A Velozt permite dividir contas, receber pagamentos fracionados e registrar diferentes formas de pagamento, com cálculo de troco e pré-conta para conferência." },
  { q: "Como funciona o envio de pedidos para a cozinha?", a: "Os pedidos são lançados com observações e modificadores e enviados por setor, como cozinha, bar e chapa, com impressão para cada um deles. Alterações e cancelamentos ficam registrados." },
  { q: "A plataforma permite controlar diferentes usuários?", a: "Sim. Há controle de acesso por usuário, permissões por função e autorização para operações sensíveis, como descontos e cancelamentos. Operadores e terminais são identificados." },
  { q: "Como funciona a emissão de NFC-e?", a: "A Velozt permite emitir NFC-e, consultar e cancelar documentos fiscais e organizar as informações fiscais dos produtos." },
  { q: "Como posso solicitar uma demonstração?", a: "Use o botão Solicitar demonstração, preencha o formulário de contato e nossa equipe retornará para combinar a apresentação da plataforma." },
];
