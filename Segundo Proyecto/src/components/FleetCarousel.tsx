import { HardHat, Weight, Gauge, Zap } from 'lucide-react';

const fleet = [
  {
    id: 1,
    name: "Scania 113",
    type: "Volcador Pesado",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      power: "320 HP",
      weight: "16,000 Kg",
      capacity: "14 m3"
    },
    colSpan: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    name: "Scania 114",
    type: "Tractor / Batea",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      power: "380 HP",
      weight: "18,500 Kg",
      capacity: "25 m3"
    },
    colSpan: "col-span-1"
  },
  {
    id: 3,
    name: "Hyundai HD 65",
    type: "Vehículo de Apoyo Logístico",
    image: "https://images.unsplash.com/photo-1596767746197-6a4a15995bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      power: "150 HP",
      weight: "6,500 Kg",
      capacity: "3.5 Ton"
    },
    colSpan: "col-span-1"
  }
];

export default function FleetCarousel() {
  return (
    <section id="flota" className="py-24 bg-industrial-900 border-b-2 border-industrial-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter text-shadow-heavy flex items-center gap-4">
            <HardHat className="text-industrial-orange w-12 h-12" />
            Flota <span className="text-industrial-gray font-light">&amp;</span> Equipos
          </h2>
          <p className="mt-4 text-industrial-darkGray font-mono text-sm tracking-widest uppercase">
            &gt;&gt; Especificaciones de maquinaria lista para operar
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {fleet.map((machine) => (
            <div 
              key={machine.id} 
              className={`relative group overflow-hidden border border-industrial-700 bg-industrial-800 ${machine.colSpan} min-h-[300px]`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40">
                <img 
                  src={machine.image} 
                  alt={machine.name} 
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/40 to-transparent"></div>
              </div>
              
              {/* Always visible info */}
              <div className="absolute bottom-0 left-0 p-6 z-10 w-full transition-all duration-500 group-hover:bottom-24">
                <p className="text-industrial-orange font-mono text-xs tracking-[0.2em] uppercase mb-2">
                  MOD.{machine.id} / {machine.type}
                </p>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                  {machine.name}
                </h3>
              </div>
              
              {/* Telemetry data revealed on hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-industrial-900/80 backdrop-blur-md border-t border-industrial-orange/50">
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <Zap className="w-5 h-5 text-industrial-orange mx-auto mb-2" />
                    <p className="text-xs text-industrial-darkGray uppercase tracking-wider mb-1">Potencia</p>
                    <p className="text-white font-mono font-bold text-sm tracking-widest">{machine.specs.power}</p>
                  </div>
                  <div className="text-center border-l border-r border-industrial-700">
                    <Weight className="w-5 h-5 text-industrial-orange mx-auto mb-2" />
                    <p className="text-xs text-industrial-darkGray uppercase tracking-wider mb-1">Peso</p>
                    <p className="text-white font-mono font-bold text-sm tracking-widest">{machine.specs.weight}</p>
                  </div>
                  <div className="text-center">
                    <Gauge className="w-5 h-5 text-industrial-orange mx-auto mb-2" />
                    <p className="text-xs text-industrial-darkGray uppercase tracking-wider mb-1">Capacidad</p>
                    <p className="text-white font-mono font-bold text-sm tracking-widest">{machine.specs.capacity}</p>
                  </div>
                </div>
              </div>

              {/* Technical overlay lines */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-industrial-orange/0 group-hover:border-industrial-orange/100 transition-colors duration-500 hidden md:block"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-industrial-orange/0 group-hover:border-industrial-orange/100 transition-colors duration-500 hidden md:block"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
