import type { Metadata } from "next";
import { BlogCta } from "@/components/blog/BlogCta";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Atualizações, dicas e conteúdos para organizar a rotina do seu Food Service.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <section className="bg-mist pb-10 pt-14 lg:pb-12 lg:pt-20">
          <Container>
            <h1 className="font-hero text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-[3.55rem]">Blog Posts</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              Atualizações, dicas e conteúdos para organizar a rotina do seu Food Service.
            </p>
          </Container>
        </section>
        <BlogIndex />
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
