import Link from "next/link";
import Image from "next/image";
import { Map, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-emerald-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tours/prettview4.webp"
          alt="Lost in nature"
          fill
          className="object-cover opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-950/80 via-emerald-950/40 to-emerald-950" />
      </div>

      {/* Obsah - Kapsle/Karta */}
      <div className="relative top-5 z-10 max-w-2xl w-full px-6 text-center">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl">
          
          {/* Ikona nebo grafický prvek */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full mb-8 text-emerald-950 shadow-lg shadow-emerald-500/20">
            <Map size={40} strokeWidth={2.5} />
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6 tracking-tight">
            You’ve stepped off the path.
          </h2>
          
          <p className="text-emerald-50/70 text-lg mb-10 leading-relaxed max-w-md mx-auto font-medium">
            Even the best explorers get lost sometimes. Let’s get you back to the trails of Bohemian Paradise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-full text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Logo v rohu jako vodoznak */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
        <span className="text-2xl font-black tracking-tighter text-white">
          Bohemia<span className="text-emerald-400">Path</span>
        </span>
      </div>
    </main>
  );
}