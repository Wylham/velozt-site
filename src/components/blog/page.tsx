import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogCta } from "@/components/blog/BlogCta";
import { PostMeta } from "@/components/blog/PostCard";
import { PostCover } from "@/components/blog/PostCover";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { blogPosts, getPost } from "@/content/blog";

const dateFmt = new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" });
const formatDate = (iso: string) => dateFmt.format(new Date(`${iso}T12:00:00`));

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function BlogPostRoute({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main id="conteudo">
        <article>
          <section className="bg-mist py-14 lg:py-20">
            <Container>
              <div className="max-w-3xl">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-soft transition hover:text-brand-700"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                  Voltar ao blog
                </Link>
                <PostMeta post={post} className="mt-8" />
                <h1 className="mt-4 font-hero text-4xl leading-[1.06] sm:text-5xl">{post.title}</h1>
                <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-soft">{post.excerpt}</p>
                <p className="mt-6 text-[14px] text-ink-mute">
                  Por {post.author}, em <time dateTime={post.date}>{formatDate(post.date)}</time>. {post.readingTime}.
                </p>
              </div>
            </Container>
          </section>

          <Container className="py-12 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <PostCover
                post={post}
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="aspect-[16/8] rounded-2xl border border-line"
              />
              {post.sections.map((section, i) => (
                <section key={section.heading ?? i}>
                  {section.heading && (
                    <h2 className="mt-12 text-2xl font-semibold sm:text-[1.7rem]">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((text) => (
                    <p key={text} className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
                      {text}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </Container>
        </article>
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
