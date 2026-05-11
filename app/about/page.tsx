import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
        About Me
      </h1>
      
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Fotka průvodce */}
        <div className="relative aspect-[3/4] bg-stone-100 rounded-2xl overflow-hidden shadow-sm">
          <Image 
            src="/Jizerky.jpg" 
            alt="Guide Profile" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Texty */}
        <div className="prose prose-lg text-stone-600">
          <p className="leading-relaxed mb-6 font-medium">
            Hi, I'm your local guide for Bohemia. I've spent my whole life exploring the sandstone rocks and deep forests of this beautiful region.
          </p>
          <p className="leading-relaxed">
            My mission is to show you places that are hidden from the common tourists. Experience nature in its purest form.
          </p>
        </div>
        
      </div>
    </main>
  );
}