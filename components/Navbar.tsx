"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Přidáno pro zjištění aktuální stránky
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Získáme aktuální URL adresu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pomocná funkce pro zavření menu při kliknutí na odkaz
  const closeMenu = () => setIsOpen(false);

  // Pomocná funkce pro zjištění, zda je odkaz aktivní
  const isActive = (path: string) => pathname === path;

  // Seznam odkazů pro snadnější mapování
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
            ? "bg-emerald-950/90 backdrop-blur-lg border-b border-emerald-900/50 shadow-sm py-4" 
            : "bg-emerald-800 py-6" 
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tight z-50 flex items-center" onClick={closeMenu}>
          Bohemia<span className="text-emerald-500">Path</span>
        </Link>

        {/* DESKTOP ODKAZY */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path} 
              className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                isActive(link.path) ? "text-emerald-400" : "text-emerald-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/custom-tour" 
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-full transition-all hover:scale-105 hover:shadow-md text-sm"
          >
            Custom Tour
          </Link>
        </div>

        {/* HAMBURGER TLAČÍTKO (Pouze pro mobil) */}
        <button 
          className="md:hidden text-emerald-50 hover:text-emerald-400 transition-colors z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILNÍ MENU OVERLAY */}
        <div 
          className={`fixed inset-0 min-h-screen bg-emerald-950/98 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden flex flex-col items-center justify-center p-8 z-40 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className={`flex flex-col items-center gap-8 w-full transition-transform duration-500 delay-100 ${
            isOpen ? "translate-y-0" : "translate-y-10"
          }`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path} 
                onClick={closeMenu} 
                className={`text-3xl font-semibold transition-colors ${
                  isActive(link.path) ? "text-emerald-400" : "text-emerald-50 hover:text-emerald-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Tlačítko jako samostatná velká položka */}
            <Link 
              href="/custom-tour" 
              onClick={closeMenu}
              className="mt-6 w-full max-w-sm text-center px-8 py-5 bg-emerald-500 text-emerald-950 font-bold rounded-full text-xl shadow-xl hover:bg-emerald-400 hover:scale-105 transition-all"
            >
              Custom Tour
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}