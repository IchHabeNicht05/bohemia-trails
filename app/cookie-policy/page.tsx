"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CookiePolicy() {
    const router = useRouter();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors mb-8 font-bold uppercase text-xs tracking-widest"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">Cookie Policy</h1>
      <div className="bg-white rounded-4xl p-8 md:p-12 text-stone-700 space-y-6 shadow-xl">
        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">What are Cookies?</h2>
          <p>Cookies are small text files that are stored on your device when you visit a website. They help the website function properly and provide a better user experience.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">How We Use Cookies</h2>
          <p>Currently, BohemiaPath uses only <strong>essential technical cookies</strong>. These are necessary for the website to load correctly and for security purposes (such as processing our forms via Formspree).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">Third-Party Cookies</h2>
          <p>We do not use any marketing or analytical cookies (like Google Analytics or Facebook Pixel) at this moment. If we decide to add these in the future, we will update this policy and ask for your consent.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-3">Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. However, disabling essential cookies may affect the functionality of this website.</p>
        </section>
      </div>
    </main>
  );
}