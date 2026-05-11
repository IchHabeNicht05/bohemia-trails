import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-black tracking-tighter mb-2 text-white">
            Bohemia<span className="text-emerald-400">Path</span>
          </h3>
          <p className="text-emerald-200/80 text-sm">
            Explore the hidden gems of the Czech Republic.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Tours</Link>
          <Link href="/custom-tour" className="hover:text-emerald-400 transition-colors">Custom Tour</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
        </div>

        <div className="text-emerald-200/60 text-sm">
            &copy; {new Date().getFullYear()} BohemiaPath. All rights reserved.
        </div>

      </div>
    </footer>
  );
}