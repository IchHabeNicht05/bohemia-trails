/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowLeft, Cookie } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CookiePolicy() {
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
          Cookie <span className="text-emerald-500">Policy</span>
        </h1>
        <p className="text-emerald-100/40 text-xs font-medium max-w-xl mt-2">
          Transparent information about how we use digital footprints to improve your experience.
        </p>
      </div>

      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">What are Cookies?</h2>
          <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
            Cookies are small text files that are stored on your device when you visit a website. They help the website function properly and provide a better user experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">How We Use Cookies</h2>
          <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
            Currently, BohemiaPath uses only <strong className="text-emerald-600">essential technical cookies</strong>. These are necessary for the website to load correctly and for security purposes, such as processing our contact forms via Formspree.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Third-Party Cookies</h2>
          <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
            We do not use any marketing or analytical cookies (like Google Analytics or Facebook Pixel) at this moment. If we decide to add these in the future, we will update this policy and ask for your explicit consent.
          </p>
        </section>

        <section className="space-y-4 pt-8 border-t border-stone-100">
          <p className="text-stone-400 text-sm uppercase font-bold tracking-widest">
            Last updated: May 2024
          </p>
        </section>
      </div>
    </main>
  );
}