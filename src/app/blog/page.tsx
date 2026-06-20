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
                  {blogPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
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