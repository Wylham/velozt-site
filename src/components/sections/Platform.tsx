import { ChefHat, ClipboardList, CreditCard, LayoutGrid, ShieldCheck, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: LayoutGrid, title: "Atendimento", text: "Mesas e comandas organizadas no salão." },
  { icon: ClipboardList, title: "Pedidos", text: "Lançamento com observações e modificadores." },
  { icon: ChefHat, title: "Produção", text: "Envio por setor: cozinha, bar e chapa." },
  { icon: CreditCard, title: "Pagamentos", text: "Divisão de contas e diferentes formas de pagamento." },
];

export function Platform() {
  return (
    <section id="plataforma" aria-labelledby="plataforma-titulo" className="bg-mist py-24 lg:py-32">
      <Container>
        <SectionHeading id="plataforma-titulo" title="Operação conectada, gestão organizada.">
          A Velozt reúne as principais etapas da operação do restaurante em uma única plataforma. Do atendimento ao fechamento do caixa, tenha mais organização, visibilidade e controle sobre a rotina do estabelecimento.
        </SectionHeading>

        <div className="mt-16">
          <ol className="grid gap-4 md:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative flex flex-col">
                <div className="flex-1 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700"><Icon className="size-5" /></span>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
                {i < steps.length - 1 && (
                  <span aria-hidden className="absolute -right-4 top-1/2 z-10 hidden h-0.5 w-4 bg-gradient-to-r from-brand-500 to-aqua md:block" />
                )}
                <span aria-hidden className="mx-auto block h-8 w-0.5 bg-gradient-to-b from-brand-500 to-brand-700 md:h-10" />
              </li>
            ))}
          </ol>
          <div className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white shadow-lift sm:p-8">
            <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-brand-gradient" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10"><ShieldCheck className="size-6 text-aqua" /></span>
                <div>
                  <h3 className="font-display text-xl font-semibold">Controle operacional</h3>
                  <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-white/70">
                    Caixa, permissões, histórico e relatórios acompanham cada etapa, do salão ao fechamento do turno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
