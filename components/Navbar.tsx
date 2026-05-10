"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Pokud nemáš lucide-react, nainstaluj: npm install lucide-react

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
            ? "bg-emerald-950/95 backdrop-blur-md shadow-lg py-4" 
            : "bg-emerald-900 py-6" 
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tight z-50" onClick={closeMenu}>
          <span className="text-emerald-500">Bohemia</span>
          <span className="text-white">Trails</span>
        </Link>

        {/* DESKTOP ODKAZY */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-emerald-50 hover:text-emerald-400 transition-colors text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-emerald-50 hover:text-emerald-400 transition-colors text-sm font-medium">
            About Me
          </Link>
          <Link href="/contact" className="text-emerald-50 hover:text-emerald-400 transition-colors text-sm font-medium">
            Contact
          </Link>
          <Link href="/custom-tour" className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-full transition-colors text-sm">
            Custom Tour
          </Link>
        </div>

        {/* HAMBURGER TLAČÍTKO (Pouze pro mobil) */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILNÍ MENU OVERLAY */}
        <div 
          className={`fixed top-0 left-0 w-full h-screen bg-emerald-950 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center p-8 z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Odkazy ve sloupci s větším odsazením */}
          <div className="flex flex-col items-center gap-10 w-full">
            <Link href="/" onClick={closeMenu} className="text-3xl text-emerald-50 hover:text-emerald-400 font-semibold transition-colors">
              Home
            </Link>
            <Link href="/about" onClick={closeMenu} className="text-3xl text-emerald-50 hover:text-emerald-400 font-semibold transition-colors">
              About Me
            </Link>
            <Link href="/contact" onClick={closeMenu} className="text-3xl text-emerald-50 hover:text-emerald-400 font-semibold transition-colors">
              Contact
            </Link>
            
            {/* Tlačítko jako samostatná velká položka */}
            <Link 
              href="/custom-tour" 
              onClick={closeMenu}
              className="mt-6 w-full max-w-sm text-center px-8 py-5 bg-emerald-500 text-emerald-950 font-bold rounded-full text-2xl shadow-xl hover:bg-emerald-400 transition-colors"
            >
              Custom Tour
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};