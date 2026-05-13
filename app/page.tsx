"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Hero } from "@/components/Hero";
import { TourCard } from "@/components/TourCard";
import { TOURS } from "@/lib/data";

const CATEGORIES = ["All Tours", "Rock Cities", "Nature"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Tours");

  const filteredTours = TOURS.filter(tour => {
    if (activeCategory === "All Tours") return true;
    return tour.category === activeCategory;
  });

  const scrollToResults = () => {
    document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* 1. HERO SEKCE */}
      <section className="relative pt-32 pb-40 px-6 text-center flex flex-col justify-center min-h-[90vh]">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/tours/prettview4.webp" 
            alt="Bohemian Paradise Landscape"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-emerald-950/70" />
        </div>

        <div className="relative z-10">
          <Hero />
        </div>
        
        {/* 2. FILTROVACÍ LIŠTA */}
        <div className="absolute -bottom-16 md:-bottom-10 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 md:px-6 z-20">
          <div className={`
            bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white
            /* MOBIL: Vertikální stack, víc zaoblené rohy */
            flex flex-col p-4 gap-4 rounded-[2.5rem]
            /* DESKTOP: Horizontální řada, pilulka */
            md:flex-row md:items-center md:justify-between md:p-2 md:rounded-full
          `}>
            
            {/* Kategorie: Na mobilu se můžou scrollovat do boku, aby nezabíraly místo */}
            <div className="flex gap-1 overflow-x-auto no-scrollbar pb-1 md:pb-0 md:ml-2">
              {CATEGORIES.map((category) => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeCategory === category 
                      ? "bg-emerald-100 text-emerald-900" 
                      : "text-stone-500 hover:text-emerald-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Hlavní tlačítko: Na mobilu na celou šířku */}
            <button 
              onClick={scrollToResults}
              className="w-full md:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-full text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95"
            >
              Find My Path
            </button>
          </div>
        </div>
      </section>

      {/* 3. VÝPIS TRAS */}
      <section id="tours-section" className="bg-stone-50 pt-24 pb-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">
              Top Experiences in Bohemian Paradise
            </h2>
            <p className="text-emerald-700 text-lg">
              Hand-picked trails combining sandstone rocks, deep pine forests, and local history.
            </p>
          </div>

          {filteredTours.length === 0 ? (
            <div className="text-center py-20 text-emerald-600">
              <p className="text-xl font-medium">No tours found in this category.</p>
              <button 
                onClick={() => setActiveCategory("All Tours")} 
                className="mt-4 underline hover:text-emerald-800"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard 
                  key={tour.id} 
                  id={tour.id}
                  title={tour.title}
                  duration={tour.duration}
                  difficulty={tour.difficulty}
                  distance={tour.distance}
                  category={tour.category}
                  images={tour.images} 
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}