/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TermsConditions() {
    const router = useRouter();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors mb-8 font-bold uppercase text-xs tracking-widest"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">Terms & Conditions</h1>
      <div className="bg-white rounded-4xl p-8 md:p-12 text-stone-700 space-y-6 shadow-xl">
        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">1. Services</h2>
          <p>BohemiaPath provides guided tours and travel experiences in the Czech Republic. By booking a tour, you agree to these terms and conditions.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">2. Cancellation Policy</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Full Refund:</strong> Cancellations made at least 48 hours before the scheduled tour start.</li>
            <li><strong>No Refund:</strong> Cancellations made less than 48 hours before the tour or in case of a "no-show".</li>
            <li>In case of extreme weather or safety concerns, we reserve the right to cancel a tour and offer a full refund or alternative date.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">3. Liability</h2>
          <p>Participants are responsible for their own health and travel insurance. BohemiaPath is not liable for personal injuries or loss of personal property during the tours.</p>
        </section>
      </div>
    </main>
  );
}