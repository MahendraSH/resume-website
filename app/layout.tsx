import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/site-config";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mahendra S H",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Mahendra S H", "Frontend Developer", "React", "Next.js"],
  creator: "Mahendra S H",

  authors: [
    {
      name: "Mahendra S H",
      url: siteConfig.url,
    },
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
  other: {
    "og:image": "https://mahendrash.vercel.app/og-dark.png",
    "twitter:image": "https://mahendrash.vercel.app/og-dark.png",

    "og:title": siteConfig.name,
    "og:description": siteConfig.description,
    "og:url": siteConfig.url,
    "twitter:card": "summary_large_image",
    "twitter:title": siteConfig.name,
    "twitter:description": siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
