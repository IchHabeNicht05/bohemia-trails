import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/lib/data";
import { ArrowLeft, Clock, Mountain, Map, CalendarCheck } from "lucide-react";
import { notFound } from "next/navigation";

export default async function TourDetail({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const tourId = parseInt(resolvedParams.id);
  
  const tour = TOURS.find((t) => t.id === tourId);

  if (!tour) {
    return notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back to all tours
      </Link>

      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200">
        
        <div className="uppercase text-emerald-600 font-bold tracking-wider mb-3 text-sm">
          {tour.category}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-6 tracking-tight">
          {tour.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-stone-700 font-medium mb-10 bg-stone-50 p-5 rounded-2xl border border-stone-100">
          <div className="flex items-center gap-2.5">
            <Clock className="text-emerald-500" size={22} />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mountain className="text-emerald-500" size={22} />
            <span>{tour.difficulty}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Map className="text-emerald-500" size={22} />
            <span>{tour.distance}</span>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-sm">
          <Image
            src="/Jizerky.jpg" 
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg text-stone-600 mb-14">
          <p className="leading-relaxed">
            {tour.description}
          </p>
          <p className="leading-relaxed mt-4">
            Led by our local expert guides, this tour ensures you won't miss any hidden gems along the way. We provide all necessary safety instructions and keep the pace comfortable for the whole group. Ensure you bring comfortable hiking shoes and a bottle of water.
          </p>
        </div>

        {/* --- PŘIPRAVENÁ FAREHARBOR BOOKING ZÓNA --- */}
        <div className="mt-12 bg-stone-50 p-8 md:p-12 rounded-3xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center min-h-[350px] text-center">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4 border border-stone-100">
             <CalendarCheck className="text-emerald-500" size={32} />
          </div>
          <h3 className="text-emerald-950 font-extrabold text-2xl mb-3">
            Online Booking Coming Soon
          </h3>
          <p className="text-stone-500 max-w-md mb-8 leading-relaxed">
            We are currently setting up our secure reservation system. Soon you will be able to book your spot instantly via <strong>FareHarbor</strong>.
          </p>
          
          <div className="flex flex-col items-center gap-3">
            <div className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
              Secure payments powered by
            </div>
            <div className="flex items-center gap-4 grayscale opacity-70">
              {/* Zde můžeš později přidat malá loga FareHarbor /*/}
              <span className="text-stone-600 font-black text-sm italic">FareHarbor</span>
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}

      </div>
    </main>
  );
}