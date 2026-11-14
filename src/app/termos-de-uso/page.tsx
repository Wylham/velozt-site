import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Termos de uso" };

/** Substitua o conteúdo abaixo pelo texto jurídico oficial da Velozt. */
export default function Page() {
  return (
    <LegalPage title="Termos de uso">
      <p>Esta página reúne os termos que regem o uso deste site.</p>
    </LegalPage>
  );
}
