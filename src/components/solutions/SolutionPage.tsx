import { ArrowRight, Check, CircleHelp, ImageIcon } from "lucide-react";
import type { Solution } from "@/content/solutions";
import { solutions } from "@/content/solutions";
import { ScreenPanel } from "@/components/mockups/DeviceFrames";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

function PhotoSlot({ solution }: { solution: Solution }) {
  return (
    <div className="relative min-h-[310px] overflow-hidden rounded-2xl border border-brand-100 bg-[radial-gradient(circle_at_25%_15%,#dbe8ff,transparent_42%),linear-gradient(135deg,#f5f8fc,#e9f3ff)] p-6 sm:min-h-[380px] sm:p-9">
      <div className="absolute inset-x-6 top-6 rounded-xl border border-dashed border-brand-200 bg-white/65 p-4 text-center text-[13px] text-ink-mute backdrop-blur-sm sm:inset-x-9 sm:top-9">
        <ImageIcon className="mx-auto mb-1 size-4 text-brand-600" />
        Foto a inserir: <code className="font-semibold text-ink">/public/images/solucoes/{solution.imageFile}</code>
      </div>
      <div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-aqua/15 blur-3xl" />
      <div className="absolute bottom-0 left-[8%] w-[82%] translate-y-[24%] rotate-[-5deg]">
        <ScreenPanel screen={solution.screen} />
      </div>
    </div>
  );
}

export function SolutionPage({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <main id="conteudo">
      <section className="overflow-hidden bg-mist py-16 lg:py-24">
        <Container>
          <a href="/#solucoes" className="text-sm font-semibold text-brand-700 hover:underline">← Todas as soluções</a>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-16">
            <div>
              <span className="grid size-12 place-items-center rounded-xl bg-brand-gradient text-white"><Icon className="size-6" /></span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{solution.eyebrow}</p>
              <h1 className="mt-3 max-w-xl font-hero text-4xl leading-[1.04] sm:text-5xl lg:text-[3.55rem]">{solution.title}</h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">{solution.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/#contato" arrow>Solicitar demonstração</ButtonLink>
                <a href="#como-funciona" className="inline-flex h-12 items-center rounded-xl px-4 font-semibold text-brand-700 hover:bg-brand-50">Ver como funciona <ArrowRight className="ml-2 size-4" /></a>
              </div>
            </div>
            <PhotoSlot solution={solution} />
          </div>
        </Container>
      </section>

      <nav aria-label="Nesta página" className="border-y border-line bg-white">
        <Container className="flex gap-6 overflow-x-auto py-4 text-sm font-semibold text-ink-soft">
          <a className="shrink-0 hover:text-brand-700" href="#como-funciona">Como funciona</a>
          <a className="shrink-0 hover:text-brand-700" href="#diferenciais">Diferenciais</a>
          <a className="shrink-0 hover:text-brand-700" href="#resultados">Resultados</a>
          <a className="shrink-0 hover:text-brand-700" href="#integracao">Plataforma conectada</a>
          <a className="shrink-0 hover:text-brand-700" href="#faq">Dúvidas</a>
        </Container>
      </nav>

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
          <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-aqua">Uma plataforma conectada</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Cada frente conversa com a próxima.</h2><p className="mt-5 leading-relaxed text-white/70">A Velozt foi pensada para ligar atendimento, pedidos, pagamentos e gestão no mesmo fluxo operacional.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{solutions.map(({ slug, navLabel, icon: SolutionIcon }) => <a key={slug} href={`/solucoes/${slug}`} className={`flex items-center gap-4 rounded-xl border p-5 transition hover:bg-white/10 ${slug === solution.slug ? "border-aqua bg-white/10" : "border-white/15"}`}><span className="grid size-10 place-items-center rounded-lg bg-white/10 text-aqua"><SolutionIcon className="size-5" /></span><span className="font-semibold">{navLabel}</span></a>)}</div>
        </Container>
      </section>

      <section id="faq" className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700"><CircleHelp className="size-5" /></span><h2 className="mt-5 text-3xl font-semibold">Dúvidas sobre {solution.navLabel.toLowerCase()}?</h2></div><div className="divide-y divide-line border-y border-line">{solution.faqs.map(({ q, a }) => <details key={q} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-display text-[17px] font-medium marker:content-none">{q}<span className="float-right text-brand-600 transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{a}</p></details>)}</div></Container>
      </section>

      <section className="bg-brand-gradient py-20 text-white lg:py-24"><Container className="text-center"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Conheça a Velozt na prática</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Veja como essa solução pode se encaixar na rotina do seu restaurante.</h2><ButtonLink href="/#contato" variant="light" arrow className="mt-8">Solicitar demonstração</ButtonLink></Container></section>
    </main>
  );
}
