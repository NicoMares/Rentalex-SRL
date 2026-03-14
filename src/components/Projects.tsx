import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
  {
    id: 1,
    title: "Minera San Juan",
    desc: "Movimiento de 50.000 m3",
    img: "https://images.unsplash.com/photo-1578332717912-1925244d2b27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Autopista Norte",
    desc: "Terraplenado y nivelación",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Planta Industrial Delta",
    desc: "Excavación de fundaciones",
    img: "https://images.unsplash.com/photo-1621360841013-c76831f1628c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Puerto Logístico",
    desc: "Relleno y compactación",
    img: "https://images.unsplash.com/photo-1541888081622-dec8c3b70823?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current || !containerRef.current) return;
    
    // Auto horizontal marquee using GSAP
    const ctx = gsap.context(() => {
      // Create infinite loop
      gsap.to(sliderRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 30, // Faster scroll
        repeat: -1
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="proyectos" ref={containerRef} className="py-24 bg-industrial-800 border-y-2 border-industrial-700 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
          Obras <span className="text-industrial-orange">Ejecutadas</span>
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradient fades for edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-industrial-800 to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-industrial-800 to-transparent z-10 pointer-events-none hidden md:block"></div>

        <div className="flex w-[200vw] md:w-[150vw]" ref={sliderRef}>
          {/* Double the array for infinite scroll illusion */}
          {[...projects, ...projects].map((project, idx) => (
            <div 
              key={`${project.id}-${idx}`} 
              className="w-[85vw] md:w-[35vw] flex-shrink-0 px-4 group cursor-pointer"
            >
              <div className="relative h-[400px] border border-industrial-700 overflow-hidden bg-industrial-900">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-6 left-6 right-6 font-mono">
                  <span className="text-industrial-orange text-xs tracking-[0.2em] uppercase bg-black/50 px-2 py-1 border-l-2 border-industrial-orange">
                    {project.desc}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-2 uppercase tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
