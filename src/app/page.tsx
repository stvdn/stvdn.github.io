"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router]);
  return (
    <html lang={defaultLocale}>
      <body
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p style={{ padding: "2rem" }}>
          Redirecting to <code>/{defaultLocale}</code>&hellip;
        </p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace('/${defaultLocale}');`,
          }}
        />
      </body>
    </html>
  );
}