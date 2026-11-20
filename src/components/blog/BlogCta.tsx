import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function BlogCta() {
  return (
    <section aria-labelledby="blog-cta-titulo" className="bg-brand-gradient py-20 text-white lg:py-24">
      <Container className="text-center">
        <h2 id="blog-cta-titulo" className="mx-auto max-w-2xl font-hero text-3xl font-semibold sm:text-4xl">
          Quer saber mais? Fale com a gente.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/85">
          Conte como funciona a rotina do seu Food Service e nossa equipe mostra como a Velozt pode se encaixar nela.
        </p>
        <ButtonLink href="/contato" variant="light" arrow className="mt-8">
          Solicitar demonstração
        </ButtonLink>
      </Container>
    </section>
  );
}
