import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { email, phone } = site.contact;
  const hasContact = Boolean(email || phone);
  return (
    <footer className="border-t border-line bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo height={20} />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Plataforma de PDV e gestão operacional para Food Service, que conecta atendimento, pedidos, produção, pagamentos e controle de caixa.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <h2 className="font-display text-[14px] font-semibold">Navegação</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-ink-soft">
            {site.nav.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-brand-700">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-[14px] font-semibold">{hasContact || site.social.length ? "Contato" : "Informações"}</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-ink-soft">
            {email && <li><a href={`mailto:${email}`} className="hover:text-brand-700">{email}</a></li>}
            {phone && <li><a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-brand-700">{phone}</a></li>}
            {site.social.map((s) => (
              <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700">{s.label}</a></li>
            ))}
            <li><a href="/politica-de-privacidade" className="hover:text-brand-700">Política de privacidade</a></li>
            <li><a href="/termos-de-uso" className="hover:text-brand-700">Termos de uso</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="py-5 text-[13px] text-ink-mute">© {new Date().getFullYear()} Velozt. Todos os direitos reservados.</Container>
      </div>
    </footer>
  );
}
