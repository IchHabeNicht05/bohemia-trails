"use client";

import { useState } from "react";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/lib/faqData";

export default function FAQPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      {/* Zpětné tlačítko */}
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors mb-10 font-bold uppercase text-xs tracking-[0.2em]"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* Nadpis - mírně zmenšen z 7xl na 6xl */}
      <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
        <div>
          <h1 className="text-5xl md:text-5xl font-black text-white tracking-tighter leading-none">
            Questions & <span className="text-emerald-500">Answers</span>
          </h1>
          <p className="text-emerald-100/30 mt-2 font-medium tracking-wide text-[11px]">
            Everything you need to know before we hit the trail
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className="group rounded-4xl border border-white/5 bg-white/2 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-emerald-500/30"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 md:p-8 text-left transition-colors"
            >
              <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-emerald-400' : 'text-white'}`}>
                {item.question}
              </span>
              <div className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                openIndex === index 
                ? 'bg-emerald-500 text-emerald-950 rotate-90' 
                : 'bg-white/5 text-emerald-500 group-hover:bg-white/10'
              }`}>
                {openIndex === index ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {/* Zmenšeno z text-lg/xl na text-base/lg */}
                  <div className="px-5 md:px-8 pb-8 text-emerald-100/50 leading-relaxed text-base md:text-lg border-t border-white/5 pt-5">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* CTA Box - mírně zmenšené paddingy */}
      <div className="mt-16 relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 text-center border border-white/10 bg-emerald-950/40 backdrop-blur-md">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
        
        <h3 className="relative text-2xl md:text-3xl font-black text-white mb-3">
          Still curious?
        </h3>
        <p className="relative text-emerald-100/60 max-w-md mx-auto mb-8 text-base">
          If you didn&apos;t find what you were looking for, feel free to drop us a message.
        </p>
        <button 
          onClick={() => router.push('/contact')}
          className="relative bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-10 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-xs"
        >
          Contact Us
        </button>
      </div>
    </main>
  );
}