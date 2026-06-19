import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-schibsted',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Steven Peñafiel — Software Architect",
  description:
    "Software architect with years of experience designing scalable systems and leading engineering teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${schibstedGrotesk.variable} h-full`}>
      <body className="min-h-full bg-black font-sans text-white antialiased">
        <div className="mx-auto max-w-7xl px-8 py-8 md:pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}