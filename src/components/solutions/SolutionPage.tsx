import Image from "next/image";
import { Check, CircleHelp, FileCheck2, Package, WalletCards } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Solution } from "@/content/solutions";
import { solutions } from "@/content/solutions";
import { ScreenPanel } from "@/components/mockups/DeviceFrames";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

function PhotoSlot({ solution }: { solution: Solution }) {
  return (
    <div className="relative min-h-[310px] overflow-hidden rounded-2xl border border-brand-100 bg-brand-950 sm:min-h-[380px]">
      <Image
        src={`/images/solucoes/${solution.imageFile}`}
        alt={solution.imageAlt}
        fill
        priority
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-brand-950/10" aria-hidden />
    </div>
  );
}

export function SolutionPage({ solution }: { solution: Solution }) {
  const connectedAreas: { slug?: string; label: string; icon: LucideIcon }[] = [
    ...solutions.map(({ slug, navLabel, icon }) => ({ slug, label: navLabel, icon })),
    { label: "Estoque", icon: Package },
    { label: "Financeiro", icon: WalletCards },
    { label: "Fiscal", icon: FileCheck2 },
  ];
  return (
    <main id="conteudo">
      <section className="overflow-hidden bg-mist py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-16">
            <div>
              <h1 className="max-w-xl font-hero text-4xl leading-[1.04] sm:text-5xl lg:text-[3.55rem]">{solution.title}</h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">{solution.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contato" arrow>Solicitar demonstração</ButtonLink>
              </div>
            </div>
            <PhotoSlot solution={solution} />
          </div>
        </Container>
      </section>

      <section id="como-funciona" className="py-24 lg:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">A solução na prática</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Uma rotina mais simples de acompanhar.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">{solution.intro}</p>
            <ul className="mt-8 space-y-4">
              {solution.howItHelps.map((item) => <li key={item} className="flex gap-3 text-[15.5px] text-ink-soft"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white"><Check className="size-3" strokeWidth={3} /></span>{item}</li>)}
            </ul>
          </div>
          <div><ScreenPanel screen={solution.screen} /><p className="mt-3 text-[13px] text-ink-mute">Tela ilustrativa com dados demonstrativos.</p></div>
        </Container>
      </section>

      <section id="diferenciais" className="bg-mist py-24 lg:py-32">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Diferenciais</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Mais organização para a equipe. Mais contexto para a gestão.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {solution.differentiators.map(({ title, text }, index) => <article key={title} className="rounded-2xl border border-line bg-white p-7 shadow-soft"><span className="font-display text-sm text-brand-700">0{index + 1}</span><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-ink-soft">{text}</p></article>)}
          </div>
        </Container>
      </section>

      <section id="resultados" className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">O que muda no dia a dia</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Processos que acompanham o ritmo do seu restaurante.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">{solution.outcomes.map((outcome, index) => <div key={outcome} className="rounded-2xl border border-line p-6"><span className="font-display text-2xl text-brand-600">0{index + 1}</span><p className="mt-8 font-semibold leading-snug">{outcome}</p></div>)}</div>
        </Container>
      </section>

      <section id="integracao" className="bg-ink py-24 text-white lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-aqua">Uma plataforma conectada</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A operação inteira, vista como um só negócio.</h2><p className="mt-5 leading-relaxed text-white/70">Atendimento, produção e caixa alimentam a gestão. E a mesma base ajuda a acompanhar estoque, financeiro e obrigações fiscais, sem depender de controles desconectados.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{connectedAreas.map(({ slug, label, icon: AreaIcon }) => slug ? <a key={slug} href={`/solucoes/${slug}`} className={`flex items-center gap-4 rounded-xl border p-5 transition hover:bg-white/10 ${slug === solution.slug ? "border-aqua bg-white/10" : "border-white/15"}`}><span className="grid size-10 place-items-center rounded-lg bg-white/10 text-aqua"><AreaIcon className="size-5" /></span><span className="font-semibold">{label}</span></a> : <div key={label} className="flex items-center gap-4 rounded-xl border border-white/15 p-5"><span className="grid size-10 place-items-center rounded-lg bg-white/10 text-aqua"><AreaIcon className="size-5" /></span><span className="font-semibold">{label}</span></div>)}</div>
        </Container>
      </section>

      <section id="faq" className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700"><CircleHelp className="size-5" /></span><h2 className="mt-5 text-3xl font-semibold">Dúvidas sobre {solution.navLabel.toLowerCase()}?</h2></div><div className="divide-y divide-line border-y border-line">{solution.faqs.map(({ q, a }) => <details key={q} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-display text-[17px] font-medium marker:content-none">{q}<span className="float-right text-brand-600 transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{a}</p></details>)}</div></Container>
      </section>

      <section className="bg-brand-gradient py-20 text-white lg:py-24"><Container className="text-center"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Conheça a Velozt na prática</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Veja como essa solução pode se encaixar na rotina do seu restaurante.</h2><ButtonLink href="/contato" variant="light" arrow className="mt-8">Solicitar demonstração</ButtonLink></Container></section>
    </main>
  );
}
