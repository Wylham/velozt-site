import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { PostCover } from "./PostCover";

/** Ano e categoria, como nos cards da AbacatePay. */
export function PostMeta({ post, className = "" }: { post: BlogPost; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 text-[12.5px] ${className}`}>
      <span className="tabular-nums text-ink-mute">{post.date.slice(0, 4)}</span>
      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-medium text-brand-700">{post.category}</span>
    </div>
  );
}

function Byline({ post, className = "" }: { post: BlogPost; className?: string }) {
  return <p className={`text-[13.5px] text-ink-mute ${className}`}>Por {post.author}</p>;
}

const shell =
  "group relative";

/** Link esticado: o card inteiro é clicável, mas só o título é o link para leitores de tela. */
const stretched = "transition-colors after:absolute after:inset-0 group-hover:text-brand-700";

export function PostCard({ post, variant }: { post: BlogPost; variant: "featured" | "compact" | "grid" }) {
  const href = `/blog/${post.slug}`;

  if (variant === "featured") {
    return (
      <article className={`${shell} flex h-full flex-col`}>
        <PostCover
          post={post}
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="min-h-[300px] flex-1 rounded-[1.75rem] border border-line sm:min-h-[390px]"
        />
        <div className="px-1 pt-5 sm:pt-6">
          <PostMeta post={post} />
          <h2 className="mt-3 text-xl font-semibold leading-snug sm:text-[1.45rem]">
            <Link href={href} className={stretched}>
              {post.title}
            </Link>
          </h2>
          <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
          <Byline post={post} className="mt-4" />
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className={`${shell} grid h-full gap-4 sm:grid-cols-[minmax(190px,0.95fr)_minmax(0,1fr)] sm:gap-5`}>
        <PostCover
          post={post}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 190px, 100vw"
          className="min-h-[190px] rounded-[1.35rem] border border-line sm:min-h-full"
        />
        <div className="flex flex-col justify-center px-1 pb-1 sm:py-2">
          <PostMeta post={post} />
          <h2 className="mt-3 text-[1.08rem] font-semibold leading-snug">
            <Link href={href} className={stretched}>
              {post.title}
            </Link>
          </h2>
          <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-ink-soft">{post.excerpt}</p>
          <Byline post={post} className="mt-3" />
        </div>
      </article>
    );
  }

  return (
    <article className={`${shell} flex h-full flex-col`}>
      <PostCover
        post={post}
        sizes="(min-width: 640px) 50vw, 100vw"
        className="aspect-video rounded-[1.75rem] border border-line"
      />
      <div className="flex flex-1 flex-col px-1 pt-5">
        <PostMeta post={post} />
        <h2 className="mt-4 text-xl font-semibold leading-snug">
          <Link href={href} className={stretched}>
            {post.title}
          </Link>
        </h2>
        <p className="mt-2.5 line-clamp-3 text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
        <Byline post={post} className="mt-auto pt-5" />
      </div>
    </article>
  );
}
