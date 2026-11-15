import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { DemoForm } from "./DemoForm";

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="relative overflow-hidden bg-brand-gradient py-24 text-white lg:py-28">
      <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
        <div>
          <Logo variant="white" height={28} />
          <h2 id="contato-titulo" className="mt-10 max-w-xl font-display text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
            Leve mais organização à rotina do seu restaurante.
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/85">
            Conheça a Velozt e descubra uma maneira mais inteligente de conduzir sua operação.
          </p>
        </div>
        <DemoForm />
      </Container>
    </section>
  );
}
