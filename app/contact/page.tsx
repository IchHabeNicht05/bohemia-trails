/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_CONTACT_FORMSPREE_ID}`, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) setStatus("success");
    else setStatus("error");
  }

  if (status === "success") {
    return (
      <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="bg-white p-12 rounded-[3rem] text-center shadow-2xl border border-emerald-100 max-w-lg w-full">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-4xl font-black text-emerald-950 mb-4 uppercase tracking-tighter">Thanks!</h2>
          <p className="text-stone-600 mb-8 font-medium text-lg leading-relaxed">
            Your message has been sent successfully. <br/>We'll get back to you shortly.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="bg-emerald-500 text-emerald-950 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg active:scale-95"
          >
            Send another
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-400 hover:text-white transition-all mb-10 font-bold uppercase text-xs tracking-[0.2em]"
      >
        <ArrowLeft size={14} /> Back
      </button>

      <div className="mb-12">
        <h1 className="text-5xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-none">
          Get in <span className="text-emerald-500">Touch</span>
        </h1>
        <p className="text-emerald-100/40 text-xs font-medium max-w-xl">
          Do you have questions about the tours? Send me a message!
        </p>
      </div>
      
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-left relative overflow-hidden">
        {/* Jemný dekorativní prvek v rohu formuláře */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[5rem] -mr-16 -mt-16 pointer-events-none opacity-50" />

        <form onSubmit={handleSubmit} className="relative space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-black ml-1 tracking-widest">Your Name</label>
              <input 
                type="text" name="name" required placeholder="e.g. John Doe" 
                className="w-full p-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-emerald-950 font-bold placeholder:text-stone-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-black ml-1 tracking-widest">Email Address</label>
              <input 
                type="email" name="email" required placeholder="john@example.com" 
                className="w-full p-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-emerald-950 font-bold placeholder:text-stone-300"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black text-black ml-1 tracking-widest">Your Message</label>
            <textarea 
              name="message" required placeholder="How can I help you?" rows={5}
              className="w-full p-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-emerald-950 font-bold placeholder:text-stone-300 resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-2xl transition-all shadow-md hover:shadow-xl hover:-translate-y-1 text-sm uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
          
          <p className="text-[10px] text-stone-400 text-center mt-6 font-bold uppercase tracking-widest">
            By sending, you agree to our <Link href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</Link>
          </p>

          {status === "error" && (
            <p className="text-red-500 font-bold text-center mt-2 animate-pulse">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}