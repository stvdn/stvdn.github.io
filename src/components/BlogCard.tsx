import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import type { Locale } from "@/i18n/config";

interface BlogCardProps {
  post: BlogPost;
  locale: Locale;
}

const dateLocale: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
};

export function BlogCard({ post, locale }: BlogCardProps) {
  return (
    <Link href={`/${locale}/blog/${post.slug}`} className="group block">
      <article className="border-t border-divider pt-6 pb-8">
        <div className="flex items-center gap-3 mb-3">
          <time className="text-xs text-gray-500 tracking-wide" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(dateLocale[locale], {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h3 className="group relative inline-block text-lg font-bold text-white mb-2">
          {post.title}
          <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs tracking-wide text-gray-500 border border-gray-700 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}