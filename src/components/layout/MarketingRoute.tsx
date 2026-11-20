import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MarketingRoute({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}
