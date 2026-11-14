const brlFmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
/** Formata centavos como moeda brasileira. */
export const brl = (cents: number) => brlFmt.format(cents / 100);
