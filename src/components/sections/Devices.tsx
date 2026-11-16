import { Laptop, Smartphone, Tablet, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LaptopFrame, PhoneFrame, TabletFrame } from "@/components/mockups/DeviceFrames";

const labels: { icon: LucideIcon; title: string }[] = [
  { icon: Laptop, title: "Computadores" },
  { icon: Tablet, title: "Tablets" },
  { icon: Smartphone, title: "Celulares" },
];

export function Devices() {
  return (
    <section aria-labelledby="dispositivos-titulo" className="overflow-hidden py-24 lg:py-32">
      <Container>
        <SectionHeading id="dispositivos-titulo" title="Liberdade para acompanhar sua operação.">
          Acompanhe e registre pedidos utilizando diferentes dispositivos, com uma experiência pensada para a rotina de atendimento.
        </SectionHeading>

        {/* Composição: desktop sobreposta; mobile empilhada */}
        <div className="mx-auto mt-16 hidden max-w-[1180px] items-end justify-center gap-[2%] md:flex">
          <LaptopFrame className="w-[58%] shrink-0" />
          <TabletFrame className="w-[24%] shrink-0" />
          <PhoneFrame className="w-[11%] shrink-0" />
        </div>
        <div className="mt-12 grid gap-10 md:hidden">
          <LaptopFrame />
          <div className="flex items-end justify-center gap-2">
            <TabletFrame className="w-[64%]" />
            <PhoneFrame className="w-[34%]" />
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {labels.map(({ icon: Icon, title }) => (
            <li key={title} className="flex items-center gap-2.5 text-[15.5px] font-medium text-ink-soft">
              <Icon className="size-5 text-brand-500" aria-hidden />{title}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-[13px] text-ink-mute">Telas ilustrativas com dados demonstrativos.</p>
      </Container>
    </section>
  );
}
