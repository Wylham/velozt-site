import { ArrowRight, ChefHat, ClipboardList, CreditCard, LayoutGrid, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: LayoutGrid,
    title: "Atendimento",
    text: "Mesas e comandas organizadas no salão.",
  },
  {
    icon: ClipboardList,
    title: "Pedidos",
    text: "Lançamento com observações e modificadores.",
  },
  {
    icon: ChefHat,
    title: "Produção",
    text: "Envio por setor: cozinha, bar e chapa.",
  },
  {
    icon: CreditCard,
    title: "Pagamentos",
    text: "Divisão de contas e diferentes formas de pagamento.",
  },
];

export function Platform() {
  return (
    <section id="plataforma" aria-labelledby="plataforma-titulo" className="bg-mist py-24 lg:py-32">
      <Container>
        <SectionHeading id="plataforma-titulo" title="Operação conectada, gestão organizada.">
          A Velozt reúne a operação e a gestão do Food Service em uma única plataforma. Do atendimento ao fechamento
          do caixa, do estoque ao financeiro, tenha mais visibilidade e controle sobre o seu estabelecimento.
        </SectionHeading>

        <ol className="mt-16 border-y border-line md:grid md:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className={`relative min-h-[285px] px-7 py-9 sm:px-9 md:min-h-[355px] md:px-7 lg:px-9 lg:py-11 ${index < steps.length - 1 ? "border-b border-line md:border-r md:border-b-0" : ""}`}
            >
              <span className="block text-brand-700">
                <Icon className="size-8" strokeWidth={1.65} />
              </span>

              <div className="mt-8 max-w-[13rem]">
                <h3 className="text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              </div>

              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -bottom-5 left-1/2 z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-line bg-mist text-brand-700 md:-right-5 md:bottom-auto md:top-1/2 md:left-auto md:-translate-y-1/2 md:translate-x-0"
                >
                  <ArrowRight className="size-[18px] rotate-90 md:rotate-0" strokeWidth={1.7} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
