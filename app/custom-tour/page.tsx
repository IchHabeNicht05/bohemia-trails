"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function CustomTourPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    // Zde nahradíš "YOUR_FORMSPREE_ID" kódem, který dostaneš po registraci na formspree.io
    const response = await fetch("https://formspree.io/f/mojryker", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <main className="min-h-screen pt-32 max-w-4xl mx-auto px-6 py-20 flex items-center justify-center">
        <div className="bg-white p-12 rounded-[3rem] text-center shadow-xl border border-emerald-100 max-w-lg">
          <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-emerald-950 mb-4 uppercase tracking-tighter">Message Sent!</h2>
          <p className="text-stone-600 mb-8 font-medium">
            Thank you for reaching out. We will get back to you with a tailor-made plan for your BohemiaPath adventure within 24 hours.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="text-emerald-600 font-bold hover:underline"
          >
            Send another request
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 max-w-4xl mx-auto px-6 py-20">
      <div className="bg-emerald-500 text-emerald-950 p-8 md:p-16 rounded-[3rem] shadow-xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-none">
            Tailor-made <br />Experience
          </h1>
          <p className="text-xl font-medium text-emerald-900 max-w-xl mx-auto">
            Not found what you're looking for? Let's design your perfect trip together.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-white/90 border-none placeholder:text-emerald-800 focus:ring-2 focus:ring-emerald-950 transition-all outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-white/90 border-none placeholder:text-emerald-800 focus:ring-2 focus:ring-emerald-950 transition-all outline-none"
            />
          </div>
          
          <input
            type="text"
            name="preferred_date"
            placeholder="Preferred Date / Season"
            className="w-full p-4 rounded-2xl bg-white/90 border-none placeholder:text-emerald-800 focus:ring-2 focus:ring-emerald-950 transition-all outline-none"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your dream tour (group size, interests, fitness level...)"
            className="w-full p-4 rounded-2xl bg-white/90 border-none placeholder:text-emerald-800 focus:ring-2 focus:ring-emerald-950 transition-all outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-emerald-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : (
              <>
                Send Inquiry <Send size={20} />
              </>
            )}
          </button>
          
          {status === "error" && (
            <p className="text-red-900 font-bold text-center mt-2">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}