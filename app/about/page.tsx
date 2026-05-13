import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
        About Me
      </h1>
      
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Fotka průvodce */}
        <div className="relative aspect-3/4 bg-stone-100 rounded-2xl overflow-hidden shadow-sm">
          <Image 
            src="/aboutme.webp" 
            alt="Guide Profile" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Texty */}
        <div className="prose prose-lg text-stone-600">
          <p className="leading-relaxed mb-6 font-medium">
            My name is Vojta. I was born in the Jizera Mountains, and after seven years in Prague, I returned back home. The surrounding mountains have always fascinated me, and I would love to show them to you — not just the famous places, but also the hidden corners, forgotten stories, and the unique atmosphere that make this region so special. Together, we’ll explore beautiful landscapes, mountain trails, local history, and places most tourists never get to see
          </p>
        </div>
        
      </div>
    </main>
  );
}