// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-emerald-400 mb-8">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[3/4] bg-emerald-800 rounded-3xl overflow-hidden flex items-center justify-center text-emerald-600">
          Photo of the Guide
        </div>
        <div>
          <p className="text-emerald-100 text-lg leading-relaxed mb-6">
            Hi, I'm your local guide for Bohemia. I've spent my whole life exploring the sandstone rocks and deep forests of this beautiful region.
          </p>
          <p className="text-emerald-100 text-lg leading-relaxed">
            My mission is to show you places that are hidden from the common tourists. Experience nature in its purest form.
          </p>
        </div>
      </div>
    </main>
  );
}