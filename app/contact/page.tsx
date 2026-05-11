export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        Get in Touch
      </h1>
      <p className="text-white mb-12 text-lg font-medium">
        Do you have questions about the tours? Send me a message!
      </p>
      
      <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm text-left">
        
        {/* ZDE PŘIDÁŠ SVŮJ FORMSPREE ODKAZ DO ACTION */}
        <form action="https://formspree.io/f/TVŮJ_UNIKÁTNÍ_KÓD" method="POST" className="space-y-6">
          
          <div>
            <label className="block text-sm font-bold text-emerald-950 mb-2">Name</label>
            {/* Přidáno name="name" a required */}
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Name" 
              className="w-full p-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-stone-700"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-emerald-950 mb-2">Email</label>
            {/* Přidáno name="email" a required */}
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email" 
              className="w-full p-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-stone-700"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-emerald-950 mb-2">Message</label>
            {/* Přidáno name="message" a required */}
            <textarea 
              name="message"
              required
              placeholder="How can I help you?" 
              rows={5}
              className="w-full p-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-stone-700 resize-none"
            ></textarea>
          </div>
          
          {/* Typ tlačítka musí být submit */}
          <button type="submit" className="w-full py-4 mt-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-lg">
            Send Message
          </button>
          
        </form>
      </div>
    </main>
  );
}