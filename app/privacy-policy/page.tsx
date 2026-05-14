"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
    const router = useRouter();
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors mb-8 font-bold uppercase text-xs tracking-widest"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">Privacy Policy</h1>
      <div className="bg-white rounded-4xl p-8 md:p-12 text-stone-700 space-y-6 shadow-xl">
        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">1. Data Controller</h2>
          <p>
            The data controller responsible for your personal information is{" "}
            <strong>BohemiaPath</strong>. 
            For legal inquiries, please contact us via our contact form.
        </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">2. Data We Collect</h2>
          <p>We collect information you provide directly via our contact and booking forms, including your name, email address, and any details regarding your travel plans.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">3. How We Use Your Data</h2>
          <p>Your data is used solely to process your inquiries, provide tailor-made tour offers, and manage your bookings. We use <strong>Formspree</strong> as a third-party processor to handle form submissions.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">4. Cookies</h2>
          <p>We use only essential technical cookies necessary for the website to function. We do not use tracking or marketing cookies at this time.</p>
        </section>
      </div>
    </main>
  );
}