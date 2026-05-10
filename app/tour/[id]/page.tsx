export default function TourDetail({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
        
        {/* Štítek a nadpis */}
        <div className="uppercase text-emerald-600 font-bold tracking-wider mb-2">
          Tour ID: {params.id}
        </div>
        <h1 className="text-4xl font-extrabold text-emerald-950 mb-8">
          Name of the Tour
        </h1>

        {/* Velká fotka místo mapy */}
        <div className="aspect-video bg-stone-100 rounded-2xl flex items-center justify-center text-stone-400 mb-8 border border-stone-200">
          [ Large Beautiful Photo of the Trail ]
        </div>

        {/* Popis trasy */}
        <p className="text-stone-600 text-lg mb-10 leading-relaxed">
          Here will be the engaging description of the tour. Since we are not using the map, we can focus entirely on the story of the trail, the sandstone rocks, and the deep pine forests.
        </p>

        {/* Výzva k akci (Rezervace) */}
        <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-emerald-900 font-bold text-2xl mb-1">Ready for an adventure?</h3>
            <p className="text-emerald-700">Check availability and book your spot.</p>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-lg rounded-xl transition-all whitespace-nowrap shadow-sm">
            Book This Tour
          </button>
        </div>

      </div>
    </main>
  );
}