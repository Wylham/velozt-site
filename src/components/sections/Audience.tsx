import { Beef, Beer, Flame, Pizza, Utensils, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Utensils,
    title: "Restaurantes, bistrôs e self-service",
    text: "Mesas, comandas, pedidos e pagamentos organizados do salão ao caixa.",
  },
  {
    icon: Beer,
    title: "Bares, pubs e gastrobares",
    text: "Comandas ágeis, divisão de contas e atendimento fluido até o fechamento.",
  },
  {
    icon: Beef,
    title: "Hamburguerias, lanchonetes, padarias e cafeterias",
    text: "Pedidos personalizados, adicionais e agilidade da produção à retirada.",
  },
  {
    icon: Pizza,
    title: "Pizzarias",
    text: "Sabores, tamanhos, meios a meios e pedidos organizados em cada turno.",
  },
  {
    icon: Flame,
    title: "Churrascarias, praças de alimentação e alto volume",
    text: "Mais controle do salão e dos pedidos, mesmo nos horários de maior movimento.",
  },
];

export function Audience() {
  return (
    <section aria-labelledby="publico-titulo" className="bg-ink py-24 text-white lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <SectionHeading id="publico-titulo" title="Tecnologia para quem vive a rotina do Food Service." invert />
        <ul className="divide-y divide-white/15 border-y border-white/15">
          {audiences.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-5 py-7">
              <Icon className="mt-1 size-[22px] shrink-0 text-aqua" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold leading-snug">{title}</h3>
                <p className="mt-1.5 max-w-lg text-[15.5px] leading-relaxed text-white/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
