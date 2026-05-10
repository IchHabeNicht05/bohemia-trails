"use client"; // TOTO JE KLÍČOVÉ: Říkáme Next.js, že zde bude interakce (useState, onClick)

import { useState } from 'react';
import Image from 'next/image';
import { Hero } from "@/components/Hero";
import { TourCard } from "@/components/TourCard";

// Naše "databáze" tras
const TOURS = [
  { id: 1, title: "Prachov Rocks Maze", duration: "4h", difficulty: "Medium", distance: "6km", category: "Rock Cities" },
  { id: 2, title: "Trosky Castle Hike", duration: "3h", difficulty: "Easy", distance: "5km", category: "Castles" },
  { id: 3, title: "Mala Skala Canyon", duration: "5h", difficulty: "Hard", distance: "12km", category: "Nature" },
  { id: 4, title: "Hruba Skala Viewpoints", duration: "3.5h", difficulty: "Easy", distance: "7km", category: "Rock Cities" },
  { id: 5, title: "Kost Castle & Valecov", duration: "6h", difficulty: "Medium", distance: "14km", category: "Castles" },
];

// Seznam kategorií pro vygenerování tlačítek
const CATEGORIES = ["All Tours", "Rock Cities", "Castles"];

export default function Home() {
  // STAV: Pamatuje si, jaká kategorie je zrovna zakliknutá
  const [activeCategory, setActiveCategory] = useState("All Tours");

  // LOGIKA: Vyfiltruje trasy podle vybrané kategorie
  const filteredTours = TOURS.filter(tour => {
    if (activeCategory === "All Tours") return true;
    return tour.category === activeCategory;
  });

  // LOGIKA: Plynulý scroll k výsledkům po kliknutí na "Find My Trail"
  const scrollToResults = () => {
    document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* 1. HERO SEKCE */}
      <section className="relative pt-32 pb-40 px-6 text-center flex flex-col justify-center min-h-[60vh]">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/Jizerky.jpg" 
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
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 z-20">
          <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between border border-emerald-100">
            
            {/* Kategorie */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {CATEGORIES.map((category) => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    activeCategory === category 
                      ? "bg-emerald-100 text-emerald-900 font-bold" 
                      : "text-emerald-700 hover:bg-emerald-50 font-medium"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tlačítko akce */}
            <button 
              onClick={scrollToResults}
              className="w-full md:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-colors"
            >
              Find My Trail
            </button>
          </div>
        </div>
      </section>

      {/* 3. VÝPIS TRAS - přidáno id="tours-section" pro fungování scrollování */}
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

          {/* Pokud není nalezena žádná trasa (např. v budoucnu pro prázdnou kategorii) */}
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
            // ZDE JE ZMĚNA: Mapujeme přes filteredTours, ne přes všechny TOURS
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
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}