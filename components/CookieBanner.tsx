/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  // Začneme s false, aby se na serveru nic nevykreslilo
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kontrolu uděláme až v prohlížeči
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  // Pokud není vidět, nevracíme nic
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-100 md:left-auto md:max-w-sm">
      <div className="bg-emerald-950 border border-emerald-800 p-6 rounded-4xl shadow-2xl">
        <p className="text-emerald-50 text-sm mb-4 leading-relaxed">
          We use cookies to ensure you get the best experience on our website. 
          Read our <Link href="/cookie-policy" className="text-emerald-400 underline underline-offset-4">Cookie Policy</Link>.
        </p>
        <button
          onClick={acceptCookies}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-3 rounded-xl transition-all uppercase text-xs tracking-widest"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}