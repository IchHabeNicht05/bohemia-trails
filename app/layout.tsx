// app/layout.tsx
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-emerald-950">
        <Navbar />
        {/* Přidáme padding-top (pt-20), aby nám Navbar nepřekryl začátek stránky */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}