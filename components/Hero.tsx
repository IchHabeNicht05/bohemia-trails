export const Hero = () => {
  return (
    <div className="text-center">
      {/* Malý badge nad nadpisem
      {<span className="inline-block px-4 py-1.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
        Discover Czechia with a Local
      </span>*/}
      
      <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
        Bohemia<span className="text-emerald-400">Path</span>
      </h1>
      
      <p className="text-lg md:text-xl text-emerald-50/80 max-w-xl mx-auto font-medium leading-relaxed">
        Explore the hidden gems of Czechia
      </p>
    </div>
  );
};