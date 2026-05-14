import type { Metadata } from "next";
// 1. Změníme import z Inter na Poppins
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

// 2. Nastavíme font Poppins a vybereme řezy (weights), které na webu používáme
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Od normálního textu po extra tučné nadpisy
  variable: '--font-poppins', // Volitelné: vytvoří CSS proměnnou
});

export const metadata: Metadata = {
  title: {
    default: "BohemiaPath | Discover Hidden Gems of Czechia",
    template: "%s | BohemiaPath"
  },
  description: "Experience authentic hiking tours through the most beautiful landscapes of Bohemia. Expert-led tours, hidden trails, and unforgettable memories in Czechia.",
  keywords: ["hiking tours Czechia", "Bohemia hiking", "Czech Republic guide", "BohemiaPath", "active holidays Czechia", "hiking in Bohemia"],
  authors: [{ name: "BohemiaPath" }],
  metadataBase: new URL("https://bohemia-path.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BohemiaPath | Discover Hidden Gems of Czechia",
    description: "Join our expert-led hiking tours through the most beautiful landscapes of Bohemia.",
    url: "https://bohemia-path.com",
    siteName: "BohemiaPath",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Jizerky.jpg", // Do složky /public dej obrázek og-image.jpg (1200x630px)
        width: 1200,
        height: 630,
        alt: "BohemiaPath Hiking Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BohemiaPath | Discover Hidden Gems of Czechia",
    description: "Discover hidden trails of Bohemia with our expert guides.",
    images: ["/Jizerky.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Změníme inter.className na poppins.className */}
      <body className={`${poppins.className} flex flex-col min-h-screen bg-stone-50`}>
        <Navbar />
        <div className="grow">
          {children}
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}