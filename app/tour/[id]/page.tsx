/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { TOURS } from "@/lib/data";
import { ArrowLeft, Clock, Mountain, Map, CalendarCheck } from "lucide-react";
import { notFound } from "next/navigation";
import TourGallery from "@/components/TourGallery"; // Importujeme galerii

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
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex items-center gap-3">
            <Map className="text-emerald-500" size={20} />
            <span className="font-bold text-emerald-950">{tour.distance}</span>
          </div>
        </div>

        <div className="prose prose-lg text-stone-600 mb-14 max-w-none">
          <p className="leading-relaxed text-xl font-medium text-stone-800">
            {tour.description}
          </p>
          <div className="h-px bg-stone-100 my-8" />
          <p className="leading-relaxed">
            Led by our local expert guides, this tour ensures you won't miss any
            hidden gems along the way. We provide all necessary safety
            instructions and keep the pace comfortable for the whole group.
            Ensure you bring comfortable hiking shoes and a bottle of water.
          </p>
        </div>

        {/* --- PŘIPRAVENÁ FAREHARBOR BOOKING ZÓNA --- */}

        <div className="mt-12 bg-stone-50 p-8 md:p-12 rounded-3xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center min-h-87.5 text-center">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4 border border-stone-100">
            <CalendarCheck className="text-emerald-500" size={32} />
          </div>

          <h3 className="text-emerald-950 font-extrabold text-2xl mb-3">
            Online Booking Coming Soon
          </h3>

          <p className="text-stone-500 max-w-md mb-8 leading-relaxed">
            We are currently setting up our secure reservation system. Soon you
            will be able to book your spot instantly via{" "}
            <strong>FareHarbor</strong>.
          </p>

          <div className="flex flex-col items-center gap-3">
            <div className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
              Secure payments powered by
            </div>

            <div className="flex items-center gap-4 grayscale opacity-70">
              {/* Zde můžeš později přidat malá loga FareHarbor /*/}

              <span className="text-stone-600 font-black text-sm italic">
                FareHarbor
              </span>
            </div>
          </div>
        </div>

        {/* ------------------------------------- */}
      </div>
    </main>
  );
}
