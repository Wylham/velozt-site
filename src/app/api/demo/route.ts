import { NextResponse } from "next/server";

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Campo isca preenchido: responde como sucesso sem processar.
  if (clean(body.website, 50)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    company: clean(body.company, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    message: clean(body.message, 1000),
  };
  if (!data.name || !data.company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }

  const hook = process.env.DEMO_WEBHOOK_URL;
  if (!hook) {
    // Em desenvolvimento, apenas registra no terminal. Em produção, exige o destino configurado.
    if (process.env.NODE_ENV !== "production") {
      console.info("[demo] solicitação recebida:", data);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "site-velozt", receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
