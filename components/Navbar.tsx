"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokud odscrollujeme více než 20 pixelů, Navbar změní styl
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Zkontroluje pozici hned po načtení stránky
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
            ? "bg-emerald-950/90 backdrop-blur-md shadow-lg py-4" 
            : "bg-emerald-900 py-6" 
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-emerald-500">Bohemia</span>
          <span className="text-white">Trails</span>
        </Link>

        {/* ODKAZY - zobrazené na větších obrazovkách (od md nahoru) */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-emerald-50 hover:text-emerald-400 transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-emerald-50 hover:text-emerald-400 transition-colors text-sm font-medium"
          >
            About Me
          </Link>
          <Link 
            href="/contact" 
            className="text-emerald-50 hover:text-emerald-400 transition-colors text-sm font-medium"
          >
            Contact
          </Link>
          
          {/* TLAČÍTKO CUSTOM TOUR */}
          <Link 
            href="/custom-tour" 
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-full transition-colors text-sm"
          >
            Custom Tour
          </Link>
        </div>

      </div>
    </nav>
  );
};