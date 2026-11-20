"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { blogCategories, blogPosts } from "@/content/blog";
import { PostCard } from "./PostCard";

const ALL = "Todos";

const chip = (on: boolean) =>
  `rounded-full px-4 py-2 text-[14px] font-medium transition ${
    on
      ? "bg-brand-gradient text-white shadow-[0_8px_18px_-12px_rgba(8,121,232,0.7)]"
      : "border border-line bg-white text-ink-soft hover:border-brand-200 hover:bg-brand-50"
  }`;

export function BlogIndex() {
  const [category, setCategory] = useState<string>(ALL);
  const visible = category === ALL ? blogPosts : blogPosts.filter((post) => post.category === category);

  return (
    <section aria-label="Artigos" className="py-10 lg:py-12">
      <Container>
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
          {[ALL, ...blogCategories].map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={chip(category === item)}
            >
              {item}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {visible.map((post) => (
              <PostCard key={post.slug} post={post} variant="grid" />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-ink-soft">Nenhum artigo encontrado nesta categoria.</p>
        )}
      </Container>
    </section>
  );
}
