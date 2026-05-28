import { Check, Car, User, Droplets, Utensils, Ticket, Waves, Bike, Brush, Info } from "lucide-react";

interface InclusionProps {
  included: string[];
  notIncluded: string;
}

export default function TourInclusion({ included, notIncluded }: InclusionProps) {
  // Pomocná funkce, která vybere správnou ikonu podle klíčového slova v textu
  const getIcon = (item: string) => {
    const text = item.toLowerCase();
    if (text.includes("transport")) return <Car size={20} />;
    if (text.includes("guide")) return <User size={20} />;
    if (text.includes("water")) return <Droplets size={20} />;
    if (text.includes("ticket") || text.includes("audioguide")) return <Ticket size={20} />;
    if (text.includes("workshop") || text.includes("jewelry")) return <Brush size={20} />;
    if (text.includes("raft")) return <Waves size={20} />;
    if (text.includes("scooter")) return <Bike size={20} />;
    return <Check size={20} />;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-stone-100 rounded-[2.5rem] overflow-hidden bg-white shadow-sm mt-12">
      
      {/* LEVÁ STRANA: WHAT IS INCLUDED */}
      <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-stone-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
            <Check size={18} strokeWidth={3} />
          </div>
          <h3 className="text-xl font-black text-emerald-950 uppercase tracking-tight">
            What is included
          </h3>
        </div>
        
        <ul className="space-y-5">
          {included.map((item, index) => (
            <li key={index} className="flex items-center gap-4 group">
              <div className="text-emerald-500 transition-transform group-hover:scale-110 duration-300">
                {getIcon(item)}
              </div>
              <span className="text-stone-600 font-semibold text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* PRAVÁ STRANA: NOT INCLUDED (LUNCH FOCUS) */}
      <div className="p-8 md:p-12 bg-stone-50/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-stone-200 flex items-center justify-center text-stone-500">
            <Info size={18} strokeWidth={3} />
          </div>
          <h3 className="text-xl font-black text-stone-400 uppercase tracking-tight">
            Not included
          </h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
              <Utensils size={24} className="text-orange-500/70" />
            </div>
            <div>
              <p className="text-emerald-950 font-black uppercase text-xs tracking-widest mb-1">Lunch & Food</p>
              <p className="text-stone-600 leading-relaxed font-medium">
                {notIncluded}
              </p>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-sm text-stone-400 font-medium italic">
          * Personal travel insurance is not included
        </p>
      </div>
      
    </div>
  );
}