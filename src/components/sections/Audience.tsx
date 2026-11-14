import { LayoutGrid, Receipt, Store, Utensils, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Utensils, title: "Restaurantes", text: "Atendimento, pedidos, produção e caixa organizados em uma única plataforma." },
  { icon: LayoutGrid, title: "Restaurantes com atendimento em mesas", text: "Mapa de mesas, múltiplas comandas e acompanhamento do status de cada mesa." },
  { icon: Receipt, title: "Estabelecimentos com comandas", text: "Comandas individuais, transferência de itens e fechamento com pagamentos fracionados." },
  { icon: Store, title: "Operações de alimentação com atendimento presencial", text: "Pedidos enviados por setor e informações operacionais para acompanhar a rotina." },
];

export function Audience() {
  return (
    <section aria-labelledby="publico-titulo" className="bg-mist py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <SectionHeading id="publico-titulo" title="Tecnologia para quem vive a rotina do Food Service." />
        <ul className="divide-y divide-line border-y border-line">
          {audiences.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-5 py-7">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-700 shadow-soft ring-1 ring-line"><Icon className="size-[22px]" aria-hidden /></span>
              <div>
                <h3 className="text-xl font-semibold leading-snug">{title}</h3>
                <p className="mt-1.5 max-w-lg text-[15.5px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
