/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
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
          Privacy <span className="text-emerald-500">Policy</span>
        </h1>
        <p className="text-emerald-100/40 text-xs font-medium max-w-xl mt-2">
          Your trust is our priority. Here is how we handle your data with care and respect.
        </p>
      </div>

      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">1. Data Controller</h2>
          <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
            The data controller responsible for your personal information is <strong className="text-emerald-950">BohemiaPath</strong>. 
            We take your privacy seriously and process your data in accordance with GDPR regulations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">2. Data We Collect</h2>
          <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
            We collect information you provide directly via our contact and booking forms, including your <span className="text-emerald-600 font-bold">name, email address</span>, and any details regarding your travel plans or fitness level.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">3. Third-Party Processors</h2>
          <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
            Your data is used solely to provide tailor-made tour offers. We use <strong className="text-emerald-950">Formspree</strong> as a secure third-party processor to handle form submissions. We never sell your data to third parties.
          </p>
        </section>

        <section className="space-y-4 pt-8 border-t border-stone-100">
          <p className="text-stone-400 text-sm uppercase font-bold tracking-widest">
            Your rights: You can request access, correction or deletion of your data at any time.
          </p>
        </section>
      </div>
    </main>
  );
}