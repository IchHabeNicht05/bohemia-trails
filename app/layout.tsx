import type { Metadata } from "next";
// 1. Změníme import z Inter na Poppins
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 2. Nastavíme font Poppins a vybereme řezy (weights), které na webu používáme
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Od normálního textu po extra tučné nadpisy
  variable: '--font-poppins', // Volitelné: vytvoří CSS proměnnou
});

export const metadata = {
  title: "BohemiaPath | Discover Hidden Gems of Czechia",
  description: "Join our expert-led hiking tours through the most beautiful landscapes of Bohemia.",
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
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}