/**
 * Dados demonstrativos usados nos mockups do site.
 * Todos os totais são calculados a partir das mesmas listas, então
 * dashboard, mesas, comandas, caixa e relatórios sempre ficam coerentes.
 * Valores em centavos.
 */
export type Sector = "Cozinha" | "Bar" | "Chapa";
export type Method = "Dinheiro" | "Débito" | "Crédito";
export type Product = {
  id: string;
  name: string;
  price: number;
  sector: Sector;
  category: string;
  variants?: string[];
  extras?: string[];
};

export const categories = ["Entradas", "Pratos", "Chapa", "Bebidas", "Sobremesas"] as const;

export const products: Product[] = [
  {
    id: "salada",
    name: "Salada Caesar",
    price: 2800,
    sector: "Cozinha",
    category: "Entradas",
    extras: ["Frango grelhado"],
  },
  {
    id: "parmegiana",
    name: "Filé à parmegiana",
    price: 5800,
    sector: "Cozinha",
    category: "Pratos",
    variants: ["Individual", "Para dividir"],
  },
  {
    id: "risoto",
    name: "Risoto de cogumelos",
    price: 5200,
    sector: "Cozinha",
    category: "Pratos",
    extras: ["Parmesão"],
  },
  {
    id: "hamburguer",
    name: "Hambúrguer da casa",
    price: 3600,
    sector: "Chapa",
    category: "Chapa",
    extras: ["Queijo extra", "Bacon"],
  },
  {
    id: "batata",
    name: "Batata rústica",
    price: 2200,
    sector: "Chapa",
    category: "Chapa",
    variants: ["Porção", "Meia porção"],
  },
  {
    id: "suco",
    name: "Suco de laranja",
    price: 1200,
    sector: "Bar",
    category: "Bebidas",
    variants: ["300 ml", "500 ml"],
  },
  { id: "refri", name: "Refrigerante lata", price: 900, sector: "Bar", category: "Bebidas" },
  {
    id: "chopp",
    name: "Chopp 300 ml",
    price: 1400,
    sector: "Bar",
    category: "Bebidas",
    variants: ["300 ml", "500 ml"],
  },
  { id: "tiramisu", name: "Tiramisù", price: 2400, sector: "Cozinha", category: "Sobremesas" },
];

const index = new Map(products.map((p) => [p.id, p]));
export const product = (id: string): Product => {
  const p = index.get(id);
  if (!p) throw new Error(`Produto desconhecido: ${id}`);
  return p;
};

export type Line = { id: string; qty: number; note?: string };
export const lineTotal = (l: Line) => product(l.id).price * l.qty;
export const linesTotal = (ls: Line[]) => ls.reduce((s, l) => s + lineTotal(l), 0);

/** Combo demonstrativo: soma dos itens menos o desconto do combo. */
export const combo = {
  name: "Combo da casa",
  items: ["hamburguer", "batata", "refri"],
  price: ["hamburguer", "batata", "refri"].reduce((s, id) => s + product(id).price, 0) - 400,
};

/* ---------- Mesas e comandas abertas ---------- */
export type TableStatus = "livre" | "ocupada" | "pre-conta";
export type Tab = {
  id: string;
  table: number;
  label: string;
  owner: string;
  minutes: number;
  status: "aberta" | "pre-conta";
  lines: Line[];
};

export const seats: Record<number, number> = {
  1: 2,
  2: 4,
  3: 2,
  4: 4,
  5: 6,
  6: 4,
  7: 4,
  8: 2,
  9: 6,
  10: 4,
  11: 4,
  12: 8,
};

export const tabs: Tab[] = [
  {
    id: "2-1",
    table: 2,
    label: "Comanda 1",
    owner: "Mesa",
    minutes: 14,
    status: "aberta",
    lines: [
      { id: "hamburguer", qty: 2 },
      { id: "refri", qty: 2 },
    ],
  },
  {
    id: "4-1",
    table: 4,
    label: "Comanda 1",
    owner: "Carla",
    minutes: 41,
    status: "aberta",
    lines: [
      { id: "parmegiana", qty: 1 },
      { id: "suco", qty: 1 },
    ],
  },
  {
    id: "4-2",
    table: 4,
    label: "Comanda 2",
    owner: "Rafael",
    minutes: 36,
    status: "aberta",
    lines: [
      { id: "hamburguer", qty: 1, note: "Sem cebola · bem passado" },
      { id: "batata", qty: 1 },
      { id: "chopp", qty: 2 },
    ],
  },
  {
    id: "7-1",
    table: 7,
    label: "Comanda 1",
    owner: "Mesa",
    minutes: 23,
    status: "aberta",
    lines: [
      { id: "risoto", qty: 2 },
      { id: "salada", qty: 1 },
      { id: "suco", qty: 2 },
    ],
  },
  {
    id: "9-1",
    table: 9,
    label: "Comanda 1",
    owner: "Mesa",
    minutes: 74,
    status: "pre-conta",
    lines: [
      { id: "parmegiana", qty: 2 },
      { id: "chopp", qty: 3 },
      { id: "tiramisu", qty: 2 },
    ],
  },
  {
    id: "11-1",
    table: 11,
    label: "Comanda 1",
    owner: "Mesa",
    minutes: 9,
    status: "aberta",
    lines: [
      { id: "salada", qty: 1 },
      { id: "risoto", qty: 1 },
    ],
  },
];

export const tabTotal = (t: Tab) => linesTotal(t.lines);
export const tabsOf = (table: number) => tabs.filter((t) => t.table === table);
export const tableTotal = (table: number) => tabsOf(table).reduce((s, t) => s + tabTotal(t), 0);
export const tableStatus = (table: number): TableStatus => {
  const ts = tabsOf(table);
  if (!ts.length) return "livre";
  return ts.every((t) => t.status === "pre-conta") ? "pre-conta" : "ocupada";
};
export const tableNumbers = Array.from({ length: 12 }, (_, i) => i + 1);
export const occupiedTables = tableNumbers.filter((n) => tableStatus(n) !== "livre").length;
export const openTotal = tabs.reduce((s, t) => s + tabTotal(t), 0);

/** Pedidos em produção (derivados das comandas abertas). */
export const production = [
  { table: 4, item: "Hambúrguer da casa", sector: "Chapa" as Sector, status: "Em preparo", minutes: 6 },
  { table: 7, item: "Risoto de cogumelos ×2", sector: "Cozinha" as Sector, status: "Em preparo", minutes: 12 },
  { table: 4, item: "Chopp 300 ml ×2", sector: "Bar" as Sector, status: "Pronto", minutes: 3 },
  { table: 11, item: "Salada Caesar", sector: "Cozinha" as Sector, status: "Em preparo", minutes: 4 },
];

/* ---------- Vendas fechadas do dia ---------- */
export type Sale = { no: number; operator: string; method: Method; time: string; lines: Line[]; discountPct: number };
const sale = (no: number, operator: string, method: Method, time: string, items: string, discountPct = 0): Sale => ({
  no,
  operator,
  method,
  time,
  discountPct,
  lines: items.split(",").map((s) => {
    const [id, q] = s.split(":");
    return { id, qty: Number(q) };
  }),
});

export const sales: Sale[] = [
  sale(1021, "Marina", "Crédito", "11:42", "parmegiana:2,suco:2,tiramisu:1"),
  sale(1022, "Diego", "Dinheiro", "11:58", "hamburguer:2,batata:1,refri:2"),
  sale(1023, "Marina", "Débito", "12:10", "risoto:1,salada:1,suco:1"),
  sale(1024, "Lucas", "Crédito", "12:25", "parmegiana:3,chopp:4,tiramisu:2", 10),
  sale(1025, "Diego", "Dinheiro", "12:37", "hamburguer:1,chopp:2"),
  sale(1026, "Marina", "Crédito", "12:51", "risoto:2,suco:2"),
  sale(1027, "Lucas", "Débito", "13:05", "salada:2,parmegiana:1,refri:3"),
  sale(1028, "Diego", "Crédito", "13:18", "hamburguer:3,batata:2,chopp:3"),
  sale(1029, "Marina", "Dinheiro", "13:30", "risoto:1,tiramisu:1,suco:1"),
  sale(1030, "Lucas", "Crédito", "13:46", "parmegiana:2,salada:1,chopp:2"),
  sale(1031, "Diego", "Débito", "14:02", "hamburguer:2,refri:2"),
  sale(1032, "Marina", "Crédito", "14:20", "risoto:3,salada:2,suco:3,tiramisu:2"),
  sale(1033, "Lucas", "Dinheiro", "14:41", "batata:1,chopp:2,hamburguer:1"),
  sale(1034, "Diego", "Débito", "15:03", "parmegiana:1,suco:1"),
];

export const saleGross = (s: Sale) => linesTotal(s.lines);
export const saleDiscount = (s: Sale) => Math.round((saleGross(s) * s.discountPct) / 100);
export const saleTotal = (s: Sale) => saleGross(s) - saleDiscount(s);

export const revenue = sales.reduce((a, s) => a + saleTotal(s), 0);
export const avgTicket = Math.round(revenue / sales.length);

const group = <K extends string>(key: (s: Sale) => K) => {
  const m = new Map<K, number>();
  sales.forEach((s) => m.set(key(s), (m.get(key(s)) ?? 0) + saleTotal(s)));
  return [...m.entries()].map(([name, total]) => ({ name, total })).sort((a, b) => b.total - a.total);
};
export const byMethod = group<Method>((s) => s.method);
export const byOperator = group((s) => s.operator);
export const methodTotal = (m: Method) => byMethod.find((x) => x.name === m)?.total ?? 0;

export const byProduct = (() => {
  const m = new Map<string, { qty: number; total: number }>();
  sales.forEach((s) =>
    s.lines.forEach((l) => {
      const cur = m.get(l.id) ?? { qty: 0, total: 0 };
      m.set(l.id, { qty: cur.qty + l.qty, total: cur.total + lineTotal(l) });
    }),
  );
  return [...m.entries()].map(([id, v]) => ({ name: product(id).name, ...v })).sort((a, b) => b.total - a.total);
})();

export const discounts = sales
  .filter((s) => s.discountPct > 0)
  .map((s) => ({
    time: s.time,
    pct: s.discountPct,
    value: saleDiscount(s),
    operator: s.operator,
    authorizedBy: "Gerente",
  }));
export const discountsTotal = discounts.reduce((a, d) => a + d.value, 0);

export const cancellations = [
  {
    time: "12:44",
    item: "Batata rústica",
    table: 7,
    operator: "Diego",
    authorizedBy: "Gerente",
    value: product("batata").price,
  },
  {
    time: "14:12",
    item: "Chopp 300 ml",
    table: 9,
    operator: "Lucas",
    authorizedBy: "Gerente",
    value: product("chopp").price,
  },
];
export const cancellationsTotal = cancellations.reduce((a, c) => a + c.value, 0);

/* ---------- Série diária (hoje é o último ponto) ---------- */
const pastFactors = [0.84, 0.77, 0.93, 1.1, 1.24, 0.98];
export const weekLabels = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Hoje"];
export const weekValues = [...pastFactors.map((f) => Math.round((revenue * f) / 100) * 100), revenue];

/* ---------- Caixa ---------- */
const cashSales = methodTotal("Dinheiro");
export const cash = {
  opening: 20000,
  supplies: 10000,
  withdrawals: 30000,
  cashSales,
  expected: 20000 + cashSales + 10000 - 30000,
  movements: [
    { time: "11:00", type: "Abertura de caixa", detail: "Fundo de troco", value: 20000, operator: "Marina" },
    { time: "12:30", type: "Suprimento", detail: "Reforço de troco", value: 10000, operator: "Marina" },
    { time: "13:55", type: "Sangria", detail: "Retirada para cofre", value: -30000, operator: "Marina" },
  ],
};
