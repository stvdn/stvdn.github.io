import { blogPosts } from "@/data/blog";
import { Header } from "@/components/Header";
import { BlogSidebar } from "@/components/BlogSidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MouseFollower } from "@/components/MouseFollower";

export default function BlogPage() {
  return (
    <>
      <Header navLink={{ href: "/", label: "About" }} />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[30%_1fr]">
        <BlogSidebar />
        <MouseFollower>
          <main className="space-y-16">
            <ScrollReveal>
              <section>
                <SectionHeading>Blog</SectionHeading>
                <div>
                  {blogPosts.length > 0 ? (
                    blogPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))
                  ) : (
                    <div className="py-12">
                      <p className="text-sm text-gray-400 mb-2">No posts yet.</p>
                      <p className="text-xs text-gray-500">
                        I'm working on some pieces about automation, AI agents,
                        and building for production. Check back soon.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </ScrollReveal>

            <hr className="border-t border-gray-700" />
          </main>
        </MouseFollower>
      </div>

      <Footer />
    </>
  );
}