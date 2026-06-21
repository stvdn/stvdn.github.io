import { blogPosts } from "@/data/blog";
import { getDictionary } from "@/i18n/dictionaries";
import { getPortfolioData } from "@/data/portfolio";
import { isLocale, type Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { BlogSidebar } from "@/components/BlogSidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MouseFollower } from "@/components/MouseFollower";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return null;
  }
  const typedLocale: Locale = locale;
  const dictionary = getDictionary(typedLocale);
  const portfolio = getPortfolioData(typedLocale);

  return (
    <>
      <Header
        name={portfolio.name}
        role={portfolio.role}
        locale={typedLocale}
        dictionary={dictionary}
        navLink={{ href: `/${typedLocale}`, label: dictionary.nav.about }}
      />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[30%_1fr]">
        <BlogSidebar portfolio={portfolio} />
        <MouseFollower>
          <main className="space-y-16">
            <ScrollReveal>
              <section>
                <SectionHeading>{dictionary.blog.title}</SectionHeading>
                <div>
                  {blogPosts.length > 0 ? (
                    blogPosts.map((post) => (
                      <BlogCard
                        key={post.slug}
                        post={post}
                        locale={typedLocale}
                      />
                    ))
                  ) : (
                    <div className="py-12">
                      <p className="text-sm text-gray-400 mb-2">
                        {dictionary.blog.emptyTitle}
                      </p>
                      <p className="text-xs text-gray-500">
                        {dictionary.blog.emptyBody}
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

      <Footer label={dictionary.footer.contact} />
    </>
  );
}