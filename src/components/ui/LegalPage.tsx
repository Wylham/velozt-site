import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <Container className="py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="font-hero text-4xl font-semibold">{title}</h1>
            <div className="mt-8 space-y-5 text-[16.5px] leading-relaxed text-ink-soft">{children}</div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
