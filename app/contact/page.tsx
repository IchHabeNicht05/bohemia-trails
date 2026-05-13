/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    // Používáme tvůj ID: xvzldwke
    const response = await fetch("https://formspree.io/f/xvzldwke", {
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
      <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="bg-white p-12 rounded-[3rem] text-center shadow-xl border border-emerald-100 max-w-lg w-full">
          <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-emerald-950 mb-4 uppercase tracking-tighter">Thanks!</h2>
          <p className="text-stone-600 mb-8 font-medium text-lg">
            Your message has been sent successfully. We'll get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="bg-emerald-500 text-emerald-950 px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition-all shadow-md"
          >
            Send another message
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        Get in Touch
      </h1>
      <p className="text-white mb-12 text-lg font-medium">
        Do you have questions about the tours? Send me a message!
      </p>
      
      <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm text-left">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-emerald-950 mb-2">Name</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Name" 
              className="w-full p-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-stone-700"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-emerald-950 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email" 
              className="w-full p-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-stone-700"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-emerald-950 mb-2">Message</label>
            <textarea 
              name="message"
              required
              placeholder="How can I help you?" 
              rows={5}
              className="w-full p-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-stone-700 resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full py-4 mt-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : (
              <>
                Send Message <Send size={20} />
              </>
            )}
          </button>

          {status === "error" && (
            <p className="text-red-600 font-bold text-center mt-2">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}