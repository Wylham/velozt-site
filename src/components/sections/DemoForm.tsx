"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

type State = "idle" | "sending" | "done" | "error";

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-white px-4 text-[15.5px] text-ink placeholder:text-ink-mute/70 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15";

export function DemoForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-ink shadow-lift">
        <CheckCircle2 className="size-9 text-ok" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold">Solicitação enviada</h3>
        <p className="mt-2 text-[16px] leading-relaxed text-ink-soft">Recebemos seus dados e nossa equipe entrará em contato para combinar a demonstração.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 text-ink shadow-lift sm:p-8" aria-label="Solicitar demonstração">
      <div className="grid gap-4">
        <label className="block text-[14px] font-medium">Nome
          <input name="name" required autoComplete="name" maxLength={120} className={`${field} h-12`} />
        </label>
        <label className="block text-[14px] font-medium">Restaurante
          <input name="company" required autoComplete="organization" maxLength={120} className={`${field} h-12`} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-[14px] font-medium">E-mail
            <input name="email" type="email" required autoComplete="email" maxLength={160} className={`${field} h-12`} />
          </label>
          <label className="block text-[14px] font-medium">Telefone <span className="font-normal text-ink-mute">(opcional)</span>
            <input name="phone" type="tel" autoComplete="tel" maxLength={40} className={`${field} h-12`} />
          </label>
        </div>
        <label className="block text-[14px] font-medium">Mensagem <span className="font-normal text-ink-mute">(opcional)</span>
          <textarea name="message" rows={3} maxLength={1000} className={`${field} py-3`} />
        </label>
        {/* Campo isca contra robôs: deve permanecer vazio. */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      </div>
      {state === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[14.5px] text-red-700">Não foi possível enviar sua solicitação agora. Confira os dados e tente novamente.</p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient text-[15.5px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(8,121,232,0.7)] transition hover:brightness-110 disabled:opacity-70"
      >
        {state === "sending" && <Loader2 className="size-4 animate-spin" aria-hidden />}
        Solicitar demonstração
      </button>
    </form>
  );
}
