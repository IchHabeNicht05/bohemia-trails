/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { ArrowLeft, Mountain, Map } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors mb-10 font-bold uppercase text-xs tracking-[0.2em]"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="/aboutme.webp" 
              alt="Vojta - Your Guide" 
              fill 
              className="object-cover transition-all duration-700"
              priority
            />
          </div>
        </div>

        <div className="space-y-10">
          <header>
            <h1 className="text-6xl font-black text-white tracking-tighter leading-none mb-4">
              About <span className="text-emerald-500 text-outline">Me</span>
            </h1>
            <div className="h-1 w-20 bg-emerald-500 rounded-full" />
          </header>

          <div className="space-y-6">
            <p className="text-2xl font-bold text-white leading-tight">
              My name is <span className="text-emerald-500">Vojta</span>. I was born in the Jizera Mountains, and after seven years in Prague, I returned back home.
            </p>
            
            <p className="text-stone-400 text-lg leading-relaxed">
              The surrounding mountains have always fascinated me, and I would love to show them to you — not just the famous places, but also the hidden corners, forgotten stories, and the unique atmosphere that make this region so special.
            </p>

            <p className="text-stone-400 text-lg leading-relaxed">
              Together, we’ll explore beautiful landscapes, mountain trails, local history, and places most tourists never get to see
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="flex items-start gap-4">
              <Mountain className="text-emerald-500 shrink-0" size={24} />
              <div>
                <p className="text-white font-bold uppercase text-xs tracking-widest">Expertise</p>
                <p className="text-stone-500 text-sm">Local Peaks & Trails</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Map className="text-emerald-500 shrink-0" size={24} />
              <div>
                <p className="text-white font-bold uppercase text-xs tracking-widest">Focus</p>
                <p className="text-stone-500 text-sm">Forgotten History</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
}