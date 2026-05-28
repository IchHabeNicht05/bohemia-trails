/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { TOURS } from "@/lib/data";
import { ArrowLeft, Clock, Mountain, Map, CalendarCheck } from "lucide-react";
import { notFound } from "next/navigation";
import TourGallery from "@/components/TourGallery";
import TourInclusion from "@/components/TourInclusion";

export default async function TourDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const tourId = parseInt(resolvedParams.id);
  const tour = TOURS.find((t) => t.id === tourId);

  if (!tour) return notFound();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold mb-8 transition-colors group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to all tours
      </Link>

      <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-stone-200">
        <div className="uppercase text-emerald-600 font-bold tracking-wider mb-3 text-sm">
          {tour.category}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-emerald-950 mb-8 tracking-tighter leading-none">
          {tour.title}
        </h1>

        {/* --- GALERIE NAHRAZUJE PŮVODNÍ OBRÁZEK --- */}
        <div className="mb-12">
          <TourGallery images={tour.images || ["/Jizerky.jpg"]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex items-center gap-3">
            <Clock className="text-emerald-500" size={20} />
            <span className="font-bold text-emerald-950">{tour.duration}</span>
          </div>
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex items-center gap-3">
            <Mountain className="text-emerald-500" size={20} />
            <span className="font-bold text-emerald-950">
              {tour.difficulty}
            </span>
          </div>
          {tour.distance && (
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex items-center gap-3">
              <Map className="text-emerald-500" size={20} />
              <span className="font-bold text-emerald-950">{tour.distance}</span>
            </div>
          )}
        </div>

        <div className="prose prose-lg text-stone-600 mb-14 max-w-none">
          <p className="leading-relaxed text-xl font-medium text-stone-800">
            {tour.description}
          </p>
          <div className="h-px bg-stone-100 my-8" />
          <TourInclusion 
            included={tour.included || []} 
            notIncluded={tour.notIncluded || ""} 
          />
        </div>

        {/* --- VYLEPŠENÁ PŘIPRAVENÁ BOOKING ZÓNA --- */}
        <div className="mt-12 bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-100 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
          
          {/* Watermark na pozadí */}
          <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none">
            <Map size={300} strokeWidth={0.5} className="absolute -right-20 -bottom-20" />
            <Mountain size={200} strokeWidth={0.5} className="absolute -left-10 top-10" />
          </div>

          <div className="bg-white p-4 rounded-full shadow-sm mb-6 border border-stone-100 relative">
            <CalendarCheck className="text-emerald-500" size={32} />
          </div>

          <h3 className="text-emerald-950 font-extrabold text-2xl mb-2 relative">
            Instant Booking
          </h3>

          <p className="text-stone-500 max-w-sm mb-8 leading-relaxed text-sm relative">
            Secure your spot in seconds. Real-time availability and instant confirmation via FareHarbor.
          </p>
          
          {/* ======================================================================
            TADY JE TO FUNKČNÍ TLAČÍTKO (AŽ BUDE ÚČET HOTOVÝ):
            1. Odkomentuj tento blok (od <a> po </a>)
            2. Smaž ten spodní "disabled" button
            3. Ujisti se, že v objektu TOURS (v data.ts) má každá túra své "fhId" (FareHarbor ID)
            ======================================================================
            
            <a 
              href={`https://fareharbor.com/embeds/book/bohemiapath/items/${tour.fhId}/?full-items=yes`}
              className="fareharbor-lightframe relative w-full max-w-xs bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-10 py-5 rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/20 uppercase tracking-widest text-lg text-center"
            >
              Book My Spot
            </a>
          */}

          {/* DOČASNÉ DEAKTIVOVANÉ TLAČÍTKO (Smaž ho, až zprovozníš to horní) */}
          <div className="relative group mb-10 w-full max-w-xs">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-300 to-emerald-200 rounded-2xl blur opacity-20"></div>
            <button 
              disabled
              className="relative w-full bg-emerald-200/50 text-emerald-600 font-black px-10 py-5 rounded-2xl cursor-not-allowed uppercase tracking-widest text-lg shadow-sm"
            >
              Coming Soon
            </button>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold uppercase tracking-wider">
              Integration in progress
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 relative">
            <div className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
              Secure payments powered by
            </div>
            <div className="flex items-center gap-4 grayscale opacity-60">
              <span className="text-stone-600 font-black text-sm italic">FareHarbor</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
