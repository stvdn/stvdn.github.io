import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Header } from "@/components/Header";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Footer } from "@/components/Footer";
import { MouseFollower } from "@/components/MouseFollower";
import { StaggerReveal } from "@/components/StaggerReveal";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogPostContent params={params} />;
}

import { use } from "react";

function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header navLink={{ href: "/", label: "About" }} />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[30%_1fr]">
        <BlogSidebar />
        <MouseFollower>
          <main className="space-y-8">
            <StaggerReveal index={0}>
              <div className="flex items-center gap-3 mb-4">
                <time className="text-xs text-gray-500 tracking-wide" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </StaggerReveal>

            <StaggerReveal index={1}>
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wide text-gray-500 border border-gray-700 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </StaggerReveal>

            <StaggerReveal index={2}>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </StaggerReveal>

            <StaggerReveal index={3}>
              <div className="pt-8 pb-16">
                <Link
                  href="/blog"
                  className="group relative inline-block text-link text-lg md:text-xl lg:text-2xl"
                >
                  &larr; Back to Blog
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                </Link>
              </div>
            </StaggerReveal>

            <hr className="border-t border-gray-700" />
          </main>
        </MouseFollower>
      </div>

      <Footer />
    </>
  );
}