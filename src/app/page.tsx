import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContentScroll } from "@/components/ui/ContentScroll";
import { Audience } from "@/components/sections/Audience";
import { Devices } from "@/components/sections/Devices";
import { Differentials } from "@/components/sections/Differentials";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Platform } from "@/components/sections/Platform";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { Security } from "@/components/sections/Security";
import { faqs } from "@/content";
import { site } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: site.name, url: site.url, logo: `${site.url}/brand/icongradient-velozt.webp` },
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "BusinessApplication",
      description: site.description,
      url: site.url,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <ContentScroll />
        <Hero />
        <Platform />
        <Features />
        <Security />
        <Devices />
        <Audience />
        <Differentials />
        <ProductDemo />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
