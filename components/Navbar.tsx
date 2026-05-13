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
      setIsScrolled(window.scrollY > 20);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* MOBILNÍ MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-60 md:hidden transition-opacity duration-100 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* POZADÍ - Bleskový blur */}
        <div 
          className="absolute inset-0 bg-emerald-950/80 backdrop-blur-xl transform-gpu" 
          onClick={closeMenu} 
        />
        
        {/* OBSAH - Bez pohybu (translate), jen čisté zobrazení pro maximální rychlost */}
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
            <span className="text-2xl font-black tracking-tighter text-white">
              Bohemia<span className="text-emerald-500">Path</span>
            </span>
            <button onClick={closeMenu} className="text-white p-2">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-10 w-full">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path} 
                onClick={closeMenu} 
                className={`text-4xl font-black tracking-tight ${
                  isActive(link.path) ? "text-emerald-400" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/custom-tour" 
              onClick={closeMenu}
              className="mt-8 w-full max-w-xs text-center px-8 py-5 bg-emerald-500 text-emerald-950 font-black rounded-full text-xl shadow-2xl active:scale-95 transition-transform uppercase tracking-widest"
            >
              Custom Tour
            </Link>
          </div>
        </div>
      </div>

      {/* 3. HLAVNÍ PLOVOUCÍ LIŠTA (Navbar Pill) */}
      <div className="fixed top-0 w-full z-50 flex justify-center px-4 py-6 pointer-events-none">
        <nav 
          className={`
            pointer-events-auto transition-all duration-700 ease-in-out flex items-center justify-between
            bg-emerald-900/50 backdrop-blur-xl border border-white/10 shadow-2xl
            ${isScrolled 
              ? "w-full max-w-4xl py-3 px-6 rounded-full translate-y-0" 
              : "w-full max-w-6xl py-4 px-8 rounded-full sm:rounded-[2.5rem] translate-y-2"
            }
          `}
        >
          <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter shrink-0">
            <span className="text-white">Bohemia</span><span className="text-emerald-500">Path</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path} 
                className={`text-sm font-bold tracking-widest transition-colors hover:text-emerald-400 ${
                  isActive(link.path) ? "text-emerald-400" : "text-emerald-50/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/custom-tour" 
              className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-full transition-all hover:scale-105 shadow-lg text-xs uppercase tracking-widest"
            >
              Custom Tour
            </Link>
          </div>

          {/* Hamburger button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>
    </>
  );
}