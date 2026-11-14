import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Política de privacidade" };

/** Substitua o conteúdo abaixo pelo texto jurídico oficial da Velozt. */
export default function Page() {
  return (
    <LegalPage title="Política de privacidade">
      <p>Esta página reúne as informações sobre como a Velozt trata os dados pessoais de quem utiliza este site e solicita uma demonstração.</p>
    </LegalPage>
  );
}
