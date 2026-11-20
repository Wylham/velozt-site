"use client";

import React from "react";
import { CheckCircleIcon, StarIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type Frequency = "monthly" | "yearly";

const frequencies: { value: Frequency; label: string }[] = [
  { value: "monthly", label: "Mensal" },
  { value: "yearly", label: "Anual" },
];

type Plan = {
  name: string;
  info: string;
  price: Record<Frequency, string>;
  features: { text: string; tooltip?: string }[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Essencial",
    info: "Para começar a organizar sua operação.",
    price: { monthly: "Em breve", yearly: "Em breve" },
    features: [
      { text: "PDV e controle de caixa" }, { text: "Pedidos e comandas" },
      { text: "Gestão de produtos" }, { text: "Relatórios operacionais" },
    ],
  },
  {
    name: "Profissional",
    info: "Mais controle para operações em crescimento.",
    price: { monthly: "Em breve", yearly: "Em breve" },
    highlighted: true,
    features: [
      { text: "Tudo do plano Essencial" }, { text: "Produção integrada" },
      { text: "Controle de estoque" }, { text: "Gestão financeira" }, { text: "Controle de acessos" },
    ],
  },
  {
    name: "Sob medida",
    info: "Para operações com necessidades específicas.",
    price: { monthly: "Em breve", yearly: "Em breve" },
    features: [
      { text: "Tudo do plano Profissional" }, { text: "Configuração conforme sua operação" },
      { text: "Acompanhamento personalizado" }, { text: "Soluções para múltiplas unidades" },
    ],
  },
];

export function Plans() {
  const [frequency, setFrequency] = React.useState<Frequency>("monthly");

  return (
    <section id="planos" aria-labelledby="planos-titulo" className="bg-white py-24 lg:py-32">
      <Container>
        <div className="flex w-full flex-col items-center justify-center space-y-5">
          <div className="mx-auto max-w-xl space-y-2">
            <h2 id="planos-titulo" className="text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]">
              Planos para cada momento do seu negócio.
            </h2>
            <p className="text-center text-[16px] leading-relaxed text-ink-soft">
              Escolha a estrutura que faz sentido para sua operação. Os valores serão divulgados em breve.
            </p>
          </div>
          <PricingFrequencyToggle frequency={frequency} setFrequency={setFrequency} />
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {plans.map((plan) => <PricingCard plan={plan} key={plan.name} frequency={frequency} />)}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingFrequencyToggle({ frequency, setFrequency }: { frequency: Frequency; setFrequency: React.Dispatch<React.SetStateAction<Frequency>> }) {
  return (
    <div className="mx-auto flex w-fit rounded-full border border-line bg-mist p-1">
      {frequencies.map((freq) => (
        <button key={freq.value} type="button" onClick={() => setFrequency(freq.value)} className="relative rounded-full px-4 py-1.5 text-sm font-medium text-ink transition">
          <span className={`relative z-10 transition-colors ${frequency === freq.value ? "text-white" : ""}`}>{freq.label}</span>
          {frequency === freq.value && <span className="plan-frequency-pill absolute inset-0 rounded-full bg-ink" />}
        </button>
      ))}
    </div>
  );
}

function PricingCard({ plan, frequency }: { plan: Plan; frequency: Frequency }) {
  return (
    <article className={`relative flex w-full flex-col overflow-hidden rounded-lg border bg-white ${plan.highlighted ? "plan-highlighted border-brand-500" : "border-line"}`}>
      <div className={`relative rounded-t-lg border-b border-line p-5 ${plan.highlighted ? "bg-brand-50/60" : "bg-mist/50"}`}>
        {plan.highlighted && <p className="absolute right-4 top-4 flex items-center gap-1 rounded-md border border-line bg-white px-2 py-0.5 text-xs font-medium"><StarIcon className="size-3 fill-current" aria-hidden /> Popular</p>}
        <div className="text-lg font-medium">{plan.name}</div>
        <p className="mt-1 min-h-10 pr-20 text-sm font-normal text-ink-soft">{plan.info}</p>
        <h3 className="mt-3 flex items-end gap-1"><span className="text-3xl font-bold">{plan.price[frequency]}</span><span className="mb-0.5 text-sm text-ink-mute">valores em definição</span></h3>
      </div>
      <div className={`space-y-4 px-5 py-7 text-sm text-ink-soft ${plan.highlighted ? "bg-brand-50/30" : ""}`}>
        {plan.features.map((feature) => <div key={feature.text} className="flex items-center gap-2"><CheckCircleIcon className="size-4 shrink-0 text-ink" aria-hidden /><p title={feature.tooltip} className={feature.tooltip ? "cursor-help border-b border-dashed border-ink-mute" : ""}>{feature.text}</p></div>)}
      </div>
      <div className={`mt-auto w-full border-t border-line p-3 ${plan.highlighted ? "bg-brand-50/60" : ""}`}>
        <ButtonLink href="/contato" variant={plan.highlighted ? "primary" : "secondary"} size="sm" className="w-full">Solicitar demonstração</ButtonLink>
      </div>
    </article>
  );
}

