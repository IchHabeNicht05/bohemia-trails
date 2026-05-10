// components/TourCard.tsx
import Link from 'next/link'; // Importujeme Link pro rychlé navigování

interface TourProps {
  id: number | string; // Přidali jsme ID
  title: string;
  duration: string;
  difficulty: string;
  distance: string;
  category?: string;
}

export const TourCard = ({ id, title, duration, difficulty, distance, category }: TourProps) => {
  return (
    <div className="bg-white border border-stone-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
      
      {/* Horní část: Fotka */}
      <div className="relative h-56 overflow-hidden bg-stone-100">
        {category && (
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-black tracking-wide uppercase text-emerald-900 rounded-full shadow-sm">
            {category}
          </div>
        )}
        <div className="absolute inset-0 bg-emerald-100 flex items-center justify-center text-emerald-800/40 font-medium group-hover:scale-105 transition-transform duration-500">
          [ Photo of {title} ]
        </div>
      </div>

      {/* Spodní část: Texty */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-4 text-sm text-stone-600 mb-8 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 text-lg">⏱</span> {duration}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 text-lg">🥾</span> {difficulty}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 text-lg">📏</span> {distance}
          </div>
        </div>

        {/* TADY JE TA ZMĚNA: Tlačítko je teď uvnitř Linku */}
        <Link href={`/tour/${id}`} className="mt-auto">
          <button className="w-full py-3.5 bg-stone-50 text-emerald-800 border border-stone-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 font-bold rounded-xl transition-all">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};