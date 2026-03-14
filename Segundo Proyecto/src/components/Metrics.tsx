import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { id: 1, label: 'M3 Movidos', value: 154000, suffix: '+' },
  { id: 2, label: 'Horas de Servicio', value: 45000, suffix: 'h' },
  { id: 3, label: 'Máquinas en Flota', value: 30, suffix: '' },
];

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;
        const targetValue = metrics[i].value;
        gsap.to(counter, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          innerText: targetValue,
          duration: 2.5,
          snap: { innerText: 1 },
          ease: 'power3.out',
          onUpdate: function() {
            counter.innerText = Math.ceil(Number(counter.innerText)).toLocaleString('es-AR') + metrics[i].suffix;
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-industrial-800 border-y-2 border-industrial-700 bg-grid relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Technical decoration */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-industrial-orange hidden md:block"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-industrial-orange hidden md:block"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-industrial-orange hidden md:block"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-industrial-orange hidden md:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x-2 divide-industrial-700 border-2 border-industrial-700 bg-industrial-900/80 backdrop-blur-md p-1 shadow-2xl">
          {metrics.map((metric, i) => (
            <div key={metric.id} className="flex flex-col items-center justify-center p-12 text-center group hover:bg-industrial-800/50 transition-colors">
              <div className="font-mono text-industrial-orange text-xs tracking-[0.3em] uppercase mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                &gt;&gt; SYS.DATA_{metric.id}
              </div>
              <h3 
                ref={el => { countersRef.current[i] = el; }}
                className="text-5xl lg:text-7xl font-black text-industrial-gray font-sans tracking-tighter"
              >
                0
              </h3>
              <p className="mt-6 text-industrial-darkGray font-mono uppercase tracking-widest text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
