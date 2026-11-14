import { Fingerprint, History, KeyRound, Lock, ShieldCheck, UserCog, Check, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cancellations, discounts } from "@/lib/demo-data";

const items: { icon: LucideIcon; text: string }[] = [
  { icon: KeyRound, text: "Controle de acesso por usuário" },
  { icon: UserCog, text: "Permissões por função" },
  { icon: ShieldCheck, text: "Autorizações para operações sensíveis" },
  { icon: Lock, text: "Registro de cancelamentos e descontos" },
  { icon: History, text: "Histórico de alterações importantes" },
  { icon: Fingerprint, text: "Identificação dos operadores e terminais" },
];

const roles = ["Garçom", "Caixa", "Gerente"];
const actions: { label: string; allowed: boolean[] }[] = [
  { label: "Lançar pedidos", allowed: [true, true, true] },
  { label: "Receber pagamentos", allowed: [false, true, true] },
  { label: "Aplicar desconto", allowed: [false, false, true] },
  { label: "Cancelar item", allowed: [false, false, true] },
  { label: "Fechar turno", allowed: [false, true, true] },
];

export function Security() {
  const log = [
    { what: `Cancelamento · ${cancellations[1].item}`, meta: `Mesa ${cancellations[1].table} · ${cancellations[1].operator} · autorizado por ${cancellations[1].authorizedBy}`, time: cancellations[1].time, term: "PDV 02" },
    { what: `Desconto de ${discounts[0].pct}%`, meta: `${discounts[0].operator} · autorizado por ${discounts[0].authorizedBy}`, time: discounts[0].time, term: "PDV 01" },
  ];
  return (
    <section aria-labelledby="seguranca-titulo" className="cut-top relative overflow-hidden bg-ink pb-24 pt-[calc(6rem_+_5vw)] text-white lg:pb-32" style={{ "--cut": "5vw" } as React.CSSProperties}>
      <Container className="relative grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
        <div>
          <SectionHeading id="seguranca-titulo" title="Mais controle sobre cada operação." invert>
            Uma boa gestão também depende de transparência e responsabilidade. A Velozt considera a segurança e a rastreabilidade como partes fundamentais da operação.
          </SectionHeading>
          <ul className="mt-10 grid gap-3.5 sm:grid-cols-2">
            {items.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-[15.5px] text-white/85">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10"><Icon className="size-[18px] text-aqua" aria-hidden /></span>
                <span className="pt-1.5">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4" aria-label="Exemplo ilustrativo de permissões e registro de atividades">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-[15px] font-semibold">Permissões por função</h3>
              <span className="text-[12px] text-white/50">Exemplo ilustrativo</span>
            </div>
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="text-[12.5px] text-white/55">
                  <th scope="col" className="pb-2 font-medium"><span className="sr-only">Ação</span></th>
                  {roles.map((r) => <th key={r} scope="col" className="pb-2 text-center font-medium">{r}</th>)}
                </tr>
              </thead>
              <tbody>
                {actions.map((a) => (
                  <tr key={a.label} className="border-t border-white/10">
                    <th scope="row" className="py-2.5 pr-3 font-normal text-white/85">{a.label}</th>
                    {a.allowed.map((ok, i) => (
                      <td key={roles[i]} className="py-2.5 text-center">
                        <span className={`mx-auto grid size-6 place-items-center rounded-full ${ok ? "bg-aqua/20 text-aqua" : "bg-white/5 text-white/30"}`}>
                          {ok ? <Check className="size-3.5" strokeWidth={3} aria-label="Permitido" /> : <Lock className="size-3" aria-label="Requer autorização" />}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
            <h3 className="mb-3 font-display text-[15px] font-semibold">Registro de atividades</h3>
            <ul>
              {log.map((l) => (
                <li key={l.what} className="flex items-start justify-between gap-4 border-t border-white/10 py-3 first:border-0 first:pt-0">
                  <div>
                    <div className="text-[14.5px]">{l.what}</div>
                    <div className="mt-0.5 text-[12.5px] text-white/55">{l.meta}</div>
                  </div>
                  <div className="shrink-0 text-right text-[12.5px] tabular-nums text-white/55">{l.time}<br />{l.term}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
