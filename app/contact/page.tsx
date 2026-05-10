// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-emerald-400 mb-6">Get in Touch</h1>
      <p className="text-emerald-100 mb-12 text-lg">
        Do you have questions about the tours? Send me a message!
      </p>
      
      <div className="bg-emerald-900/30 p-8 rounded-3xl border border-emerald-800">
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-4 rounded-xl bg-emerald-950 border border-emerald-800 focus:border-emerald-500 outline-none transition-all"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-4 rounded-xl bg-emerald-950 border border-emerald-800 focus:border-emerald-500 outline-none transition-all"
          />
          <textarea 
            placeholder="Your Message" 
            rows={4}
            className="w-full p-4 rounded-xl bg-emerald-950 border border-emerald-800 focus:border-emerald-500 outline-none transition-all"
          ></textarea>
          <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-all">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}