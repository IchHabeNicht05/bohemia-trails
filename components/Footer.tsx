import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 py-12 mt-auto border-t border-emerald-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Horní část: Logo, Navigace a Právní odkazy */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          
          {/* Brand a Slogan */}
          <div className="max-w-xs">
            <h3 className="text-2xl font-black tracking-tighter mb-2 text-white">
              Bohemia<span className="text-emerald-400">Path</span>
            </h3>
            <p className="text-emerald-200/60 text-sm leading-relaxed">
              Explore the hidden gems of Czechia with local experts. Tailor-made adventures for curious travelers.
            </p>
          </div>

          {/* Menu Navigace */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2 opacity-50">Menu</h4>
              <Link href="/" className="text-sm hover:text-emerald-400 transition-colors">Tours</Link>
              <Link href="/custom-tour" className="text-sm hover:text-emerald-400 transition-colors">Custom Tour</Link>
              <Link href="/about" className="text-sm hover:text-emerald-400 transition-colors">About</Link>
              <Link href="/contact" className="text-sm hover:text-emerald-400 transition-colors">Contact</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2 opacity-50">Legal</h4>
              <Link href="/privacy-policy" className="text-sm hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-sm hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
              <Link href="/cookie-policy" className="text-sm hover:text-emerald-400">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-emerald-200/40 text-[11px] uppercase tracking-wider leading-relaxed">
            {/* Pokud jméno/IČO není k dispozici, zobrazíme jen brand, aby to nevypadalo rozbitě */}
            <p>BohemiaPath</p>
            <p>Czechia</p>
          </div>

          <div className="text-emerald-200/60 text-xs font-medium">
            &copy; {new Date().getFullYear()} BohemiaPath. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}