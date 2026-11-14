import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectorChip } from "@/components/mockups/mock-ui";

/* Elementos visuais pequenos e ilustrativos, um para cada diferencial. */
const Pill = ({ children, on = false }: { children: ReactNode; on?: boolean }) => (
  <span className={`rounded-full px-3 py-1.5 text-[12.5px] font-medium ${on ? "bg-brand-gradient text-white" : "border border-line bg-white text-ink-soft"}`}>{children}</span>
);

const visuals: Record<string, ReactNode> = {
  centralizada: (
    <div className="flex flex-wrap items-center gap-2"><Pill>Mesas</Pill><Pill>Pedidos</Pill><Pill>Produção</Pill><Pill>Caixa</Pill><Pill on>Velozt</Pill></div>
  ),
  intuitiva: (
    <div className="grid grid-cols-4 gap-2" aria-hidden>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <span key={n} className={`grid h-11 place-items-center rounded-lg border font-display text-[14px] font-semibold ${n === 3 ? "border-brand-500 bg-brand-50 text-brand-700" : "border-line bg-white text-ink-mute"}`}>{n}</span>
      ))}
    </div>
  ),
  acesso: (
    <div className="space-y-2" aria-hidden>
      {[["Garçom", true], ["Caixa", true], ["Gerente", false]].map(([r, off]) => (
        <div key={String(r)} className="flex items-center justify-between rounded-lg border border-line bg-white px-3 py-2 text-[13px]">
          {r}
          <span className={`flex h-5 w-9 items-center rounded-full p-0.5 ${off ? "bg-line" : "bg-brand-gradient justify-end"}`}><i className="size-4 rounded-full bg-white shadow" /></span>
        </div>
      ))}
    </div>
  ),
  rastreabilidade: (
    <ol className="space-y-2.5 border-l-2 border-brand-100 pl-4 text-[13px] text-ink-soft" aria-hidden>
      {["Item lançado", "Desconto autorizado", "Conta fechada"].map((t) => (
        <li key={t} className="relative"><i className="absolute -left-[22px] top-1 size-2.5 rounded-full bg-brand-500 ring-4 ring-white" />{t}</li>
      ))}
    </ol>
  ),
  producao: (
    <div className="flex flex-wrap gap-2" aria-hidden><SectorChip sector="Cozinha" /><SectorChip sector="Bar" /><SectorChip sector="Chapa" /></div>
  ),
  flexibilidade: (
    <div aria-hidden>
      <div className="flex h-3 overflow-hidden rounded-full"><i className="w-[34%] bg-brand-700" /><i className="w-[33%] bg-brand-500" /><i className="w-[33%] bg-aqua" /></div>
      <div className="mt-2 flex justify-between text-[12px] text-ink-mute"><span>Crédito</span><span>Dinheiro</span><span>Débito</span></div>
    </div>
  ),
  informacoes: (
    <div className="flex h-16 items-end gap-1.5" aria-hidden>
      {[38, 52, 44, 66, 58, 80, 100].map((h, i) => (
        <i key={i} className={`flex-1 rounded-t-md ${i === 6 ? "bg-gradient-to-t from-brand-700 to-aqua" : "bg-brand-100"}`} style={{ height: `${h}%` }} />
      ))}
    </div>
  ),
};

const items: { key: string; title: string; text: string; span: string }[] = [
  { key: "centralizada", title: "Operação centralizada", text: "Atendimento, pedidos, produção, pagamentos e caixa conectados na mesma plataforma.", span: "lg:col-span-4" },
  { key: "intuitiva", title: "Interface intuitiva", text: "Telas claras para a equipe lançar e acompanhar pedidos no ritmo do salão.", span: "lg:col-span-2" },
  { key: "acesso", title: "Controle de acesso e permissões", text: "Cada usuário acessa o que cabe à sua função.", span: "lg:col-span-2" },
  { key: "rastreabilidade", title: "Rastreabilidade de operações", text: "Ações importantes ficam registradas e identificadas.", span: "lg:col-span-2" },
  { key: "producao", title: "Organização do atendimento e produção", text: "Pedidos seguem para o setor certo, sem ruído.", span: "lg:col-span-2" },
  { key: "flexibilidade", title: "Flexibilidade na gestão de comandas e pagamentos", text: "Divida contas, fracione pagamentos e gerencie várias comandas por mesa.", span: "lg:col-span-3" },
  { key: "informacoes", title: "Informações operacionais para apoiar decisões", text: "Relatórios de vendas, formas de pagamento, cancelamentos e caixa.", span: "lg:col-span-3" },
];

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-titulo" className="py-24 lg:py-32">
      <Container>
        <SectionHeading id="diferenciais-titulo" title="Uma gestão mais organizada faz diferença em cada detalhe." />
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {items.map((d) => (
            <li key={d.key} className={`flex flex-col justify-between gap-8 rounded-2xl border border-line bg-white p-7 shadow-soft ${d.span}`}>
              <div>
                <h3 className="text-xl font-semibold leading-snug">{d.title}</h3>
                <p className="mt-2 max-w-md text-[15.5px] leading-relaxed text-ink-soft">{d.text}</p>
              </div>
              {visuals[d.key]}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
