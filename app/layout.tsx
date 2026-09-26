import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Fraunces } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YOUnique — An Innovative Education & Psychology Academy",
    template: "%s | YOUnique",
  },
  description:
    "Career counselling & aptitude testing, DMIT, memory and learning techniques, NLP, EFT, psychological counselling, and Garbh Sanskar prenatal training — delivered by a counseling psychologist with 15+ years of practice.",
  openGraph: {
    title: "YOUnique — An Innovative Education & Psychology Academy",
    description:
      "Career counselling & aptitude testing, DMIT, memory and learning techniques, NLP, EFT, psychological counselling, and Garbh Sanskar prenatal training.",
    url: siteUrl,
    siteName: "YOUnique",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${display.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-canvas text-stone-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
