import Link from 'next/link';
import Image from 'next/image';
import { Clock, Mountain, Map, ArrowRight } from 'lucide-react';

interface TourProps {
  id: number | string;
  title: string;
  duration: string;
  difficulty: string;
  distance: string;
  category?: string;
  images: { url: string; portrait: boolean }[];
}

export const TourCard = ({ id, title, duration, difficulty, distance, category, images }: TourProps) => {
  // Definujeme hlavní obrázek: vezmeme první z pole, pokud pole neexistuje nebo je prázdné, použijeme fallback
  const mainImage = (images && images.length > 0 && images[0].url) 
    ? images[0].url 
    : "/Jizerky.jpg";

  return (
    <div className="bg-white border border-stone-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
      
      {/* Horní část: Fotka */}
      <div className="relative h-56 overflow-hidden bg-emerald-100">
        {category && (
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-black tracking-wide uppercase text-emerald-900 rounded-full shadow-sm">
            {category}
          </div>
        )}
        
        <Image
          src={mainImage} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Spodní část: Texty */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-2xl font-extrabold text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-5 text-sm text-stone-600 mb-8 font-medium">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-emerald-500" /> 
            <span className='font-bold'>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain size={18} className="text-emerald-500" /> 
            <span className='font-bold'>{difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <Map size={18} className="text-emerald-500" /> 
            <span className='font-bold'>{distance}</span>
          </div>
        </div>

        <Link 
          href={`/tour/${id}`} 
          className="mt-auto w-full py-3.5 bg-stone-50 text-emerald-800 border border-stone-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
        >
          View Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};