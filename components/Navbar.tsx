"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Sníženo na 10 pro citlivější reakci plovoucího efektu
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    // VNĚJŠÍ WRAPPER: Drží pozici nahoře a centruje obsah, pointer-events-none propouští kliky "mimo" pilulku
    <div className="fixed top-0 w-full z-50 flex justify-center px-4 py-4 sm:py-6 pointer-events-none">
      
      <nav 
        className={`
          pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between
          bg-emerald-900/50 backdrop-blur-xl border border-white/10 shadow-2xl
          ${isScrolled 
            ? "w-full max-w-5xl py-3 px-6 rounded-full" 
            : "w-full max-w-6xl py-4 px-8 rounded-full sm:rounded-4xl"
          }
        `}
      >
        <div className="w-full flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight z-50 flex items-center shrink-0" onClick={closeMenu}>
            <span className="text-white">Bohemia</span><span className="text-emerald-500">Path</span>
          </Link>

          {/* DESKTOP ODKAZY */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path} 
                className={`text-sm font-semibold transition-colors hover:text-emerald-400 ${
                  isActive(link.path) ? "text-emerald-400" : "text-emerald-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/custom-tour" 
              className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-full transition-all hover:scale-105 shadow-lg text-xs uppercase tracking-widest"
            >
              Custom Tour
            </Link>
          </div>

          {/* HAMBURGER TLAČÍTKO */}
          <button 
            className="md:hidden text-emerald-50 hover:text-emerald-400 transition-colors z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILNÍ MENU OVERLAY (Ponecháno beze změn v logice a stylu) */}
        <div 
          className={`fixed inset-0 bg-emerald-900 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden flex flex-col items-center justify-center p-8 z-40 rounded-4xl h-[92vh] ${
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
            
            <Link 
              href="/custom-tour" 
              onClick={closeMenu}
              className="mt-6 w-full max-w-sm text-center px-8 py-5 bg-emerald-500 text-emerald-950 font-bold rounded-full text-xl shadow-xl hover:bg-emerald-400 hover:scale-105 transition-all"
            >
              Custom Tour
            </Link>
          </div>
        </div>

      </nav>
    </div>
  );
}