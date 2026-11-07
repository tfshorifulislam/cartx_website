import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_CONFIG } from "@/lib/seo/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "CartX | Modern E-Commerce Platform",
    template: "%s | CartX",
  },
  description:
    "Next-generation e-commerce platform built for scale, performance, and seamless shopping experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        inter.variable,
        notoSansBengali.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScrollProvider>
          <LanguageProvider>
            <AnnouncementBar />
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </LanguageProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
