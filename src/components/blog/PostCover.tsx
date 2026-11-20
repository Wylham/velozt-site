import type { BlogPost } from "@/content/blog";

/**
 * Capa editorial do blog. Ela é propositalmente tipográfica: não usamos marca,
 * selo ou ilustração para que o assunto seja o elemento principal do card.
 */
export function PostCover({
  post,
  className = "",
  sizes,
  priority = false,
}: {
  post: BlogPost;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`blog-cover relative isolate overflow-hidden ${className}`}>
      <div aria-hidden className="blog-cover-glow" />
      <div aria-hidden className="blog-cover-glow blog-cover-glow-secondary" />
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
        <time dateTime={post.date} className="text-sm font-semibold tracking-[-0.03em] text-brand-900">
          {post.date.slice(0, 4)}
        </time>
        <p className="mt-auto max-w-[18ch] pt-16 font-display text-[clamp(1.5rem,2.15vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-brand-900 sm:pb-1">
          {post.title}
        </p>
      </div>
    </div>
  );
}
