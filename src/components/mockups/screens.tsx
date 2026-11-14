import type { ReactNode } from "react";
import { CashScreen } from "./CashScreen";
import { ComandasScreen } from "./ComandasScreen";
import { DashboardScreen } from "./DashboardScreen";
import { FiscalScreen } from "./FiscalScreen";
import { MenuScreen } from "./MenuScreen";
import { OrderScreen } from "./OrderScreen";
import { PaymentScreen } from "./PaymentScreen";
import { ReportsScreen } from "./ReportsScreen";
import { TableMapScreen } from "./TableMapScreen";

export type ScreenKey = "dashboard" | "mesas" | "comandas" | "pedidos" | "caixa" | "relatorios" | "cardapio" | "pagamentos" | "fiscal";

/** Tamanho de projeto comum a todas as telas de desktop. */
export const SCREEN_SIZE = { width: 1000, height: 620 } as const;

export const screens: Record<ScreenKey, ReactNode> = {
  dashboard: <DashboardScreen />,
  mesas: <TableMapScreen />,
  comandas: <ComandasScreen />,
  pedidos: <OrderScreen />,
  caixa: <CashScreen />,
  relatorios: <ReportsScreen />,
  cardapio: <MenuScreen />,
  pagamentos: <PaymentScreen />,
  fiscal: <FiscalScreen />,
};
