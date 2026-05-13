import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
        About Me
      </h1>
      
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="relative aspect-3/4 bg-stone-100 rounded-2xl overflow-hidden shadow-sm">
          <Image 
            src="/aboutme.webp" 
            alt="Guide Profile" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4 tracking-tight">
            Your Guide to Jizera
          </h3>
          
          <div className="text-stone-700 space-y-4">
            <p className="text-lg leading-relaxed font-medium">
              My name is <span className="text-emerald-700 font-bold">Vojta</span>. 
              I was born in the Jizera Mountains, and after seven years in Prague, 
              I returned back home. 
            </p>
            
            <p className="text-base leading-loose text-stone-600 opacity-90">
              The surrounding mountains have always fascinated me, and I would love to show them to you — 
              not just the famous places, but also the <span className="italic">hidden corners</span>, 
              forgotten stories, and the unique atmosphere that make this region so special.
            </p>
            
            <p className="text-base leading-loose text-stone-600 opacity-90">
              Together, we’ll explore beautiful landscapes, mountain trails, local history, 
              and places most tourists never get to see.
            </p>
          </div>
        </div>
        
      </div>
    </main>
  );
}