// app/custom-tour/page.tsx
export default function CustomTourPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-emerald-500 text-emerald-950 p-12 rounded-[3rem] text-center">
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">
          Tailor-made Experience
        </h1>
        <p className="text-xl font-medium mb-8">
          Not found what you're looking for? Let's design your perfect trip together.
        </p>
        <button className="bg-emerald-950 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
          Contact for Custom Plan
        </button>
      </div>
    </main>
  );
}