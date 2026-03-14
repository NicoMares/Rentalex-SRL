import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2
      });
      gsap.from('.hero-subtitle', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 1
      });
      gsap.from('.hero-cta', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-industrial-900 pt-20">
      {/* Background Graphic / Video Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity grayscale">
        <img 
          src="https://images.unsplash.com/photo-1541888081622-dec8c3b70823?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Heavy Machinery Background" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-800 via-industrial-800/80 to-transparent"></div>
        <div className="absolute inset-0 bg-concrete mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="hero-subtitle mb-6 inline-block border border-industrial-orange/30 bg-industrial-orange/10 px-4 py-2 font-mono text-industrial-orange tracking-widest text-sm uppercase shadow-[0_0_15px_rgba(251,146,60,0.2)]">
          &gt;&gt; Sistema Operativo Activado
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none text-shadow-heavy flex flex-col text-center">
          <span className="hero-title block">Movimientos</span>
          <span className="hero-title block text-industrial-gray">de <span className="text-industrial-orange">Suelo</span></span>
        </h1>
        
        <p className="hero-title mt-8 text-lg md:text-2xl text-industrial-darkGray font-mono max-w-3xl leading-relaxed text-center">
          Logística de maquinaria y flotas modernas. Precisión técnica y potencia industrial para grandes obras civiles.
        </p>
        
        <div className="hero-cta mt-12">
          <button className="bg-industrial-orange hover:bg-orange-500 text-industrial-900 font-sans font-black text-lg py-4 px-10 border-2 border-industrial-orange hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] transition-all uppercase tracking-widest flex items-center gap-4 group">
            <span>Solicitar Cotización de la Obra</span>
            <div className="w-8 h-[2px] bg-industrial-900 group-hover:w-16 transition-all duration-300 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 border-t-[3px] border-r-[3px] border-industrial-900 transform rotate-45"></div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hero-cta">
        <span className="font-mono text-xs text-industrial-darkGray tracking-widest uppercase">Escanear</span>
        <div className="w-[2px] h-20 bg-industrial-700 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-industrial-orange animate-slide-up origin-top"></div>
        </div>
      </div>
    </section>
  );
}
