/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowLeft, FileText, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TermsConditions() {
  const router = useRouter();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-400 hover:text-white transition-all mb-10 font-bold uppercase text-xs tracking-[0.2em]"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="mb-12">
        <h1 className="text-5xl md:text-5xl font-black text-white tracking-tighter leading-none">
          Terms & <span className="text-emerald-500">Conditions</span>
        </h1>
        <p className="text-emerald-100/40 text-xs font-medium max-w-xl mt-2">
          The clear and simple rules for our shared adventures in the Jizera Mountains.
        </p>
      </div>

      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">1. Services</h2>
          <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
            BohemiaPath provides professional guided tours and custom travel experiences in the Jizera Mountains. By booking a tour, you agree to these terms.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">2. Cancellation Policy</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
              <Check className="text-emerald-600 shrink-0" />
              <p className="text-emerald-900 font-bold leading-tight">
                Full Refund: <span className="font-normal">Cancellations made at least 48 hours before the scheduled tour.</span>
              </p>
            </div>
            <div className="flex gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-100">
              <div className="w-6 h-6 rounded-full border-2 border-stone-300 shrink-0" />
              <p className="text-stone-600 leading-tight">
                No Refund: <span className="font-normal">Cancellations made less than 48 hours before the tour or "no-shows".</span>
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">3. Liability</h2>
          <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
            Participants are responsible for their own health and travel insurance. BohemiaPath is not liable for personal injuries or loss of personal property during the tours. We reserve the right to cancel tours due to extreme weather.
          </p>
        </section>
      </div>
    </main>
  );
}