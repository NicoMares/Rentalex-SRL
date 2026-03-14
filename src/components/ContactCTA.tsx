import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative py-32 bg-industrial-900 border-b-8 border-industrial-orange overflow-hidden">
      {/* Background Concrete Texture & Overlay */}
      <div className="absolute inset-0 bg-concrete z-0 mix-blend-overlay opacity-50"></div>
      <div className="absolute inset-0 bg-grid z-0 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block border border-industrial-orange/30 bg-industrial-orange/10 px-4 py-2 font-mono text-industrial-orange tracking-widest text-sm uppercase shadow-[0_0_15px_rgba(251,146,60,0.2)] mb-8">
              &gt;&gt; Iniciar Operación
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter text-shadow-heavy leading-none mb-6">
              Solicitar <br className="hidden md:block" />
              <span className="text-industrial-orange">Cotización</span>
            </h2>
            <p className="text-industrial-gray font-mono text-lg max-w-md mb-12">
              Envíanos los detalles de tu obra o necesidad de cobertura y un ingeniero estructural se pondrá en contacto a la brevedad.
            </p>
            
            <div className="space-y-6 font-mono text-sm tracking-wider">
              <div className="flex items-center gap-4 text-industrial-gray hover:text-white transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-industrial-800 border border-industrial-700 text-industrial-orange">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-4 text-industrial-gray hover:text-white transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-industrial-800 border border-industrial-700 text-industrial-orange">
                  <Mail className="w-5 h-5" />
                </div>
                <span>operaciones@rentalex.com.ar</span>
              </div>
              <div className="flex items-center gap-4 text-industrial-gray hover:text-white transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-industrial-800 border border-industrial-700 text-industrial-orange">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          
          {/* Industrial Terminal Form */}
          <div className="bg-industrial-800 border-2 border-industrial-700 p-8 md:p-10 shadow-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-industrial-orange to-industrial-800"></div>
            
            <form className="space-y-6 font-mono" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-industrial-darkGray uppercase tracking-widest block">&gt; ID_Solicitante</label>
                  <input 
                    type="text" 
                    placeholder="Nombre Completo" 
                    className="w-full bg-industrial-900 border border-industrial-700 text-white px-4 py-3 outline-none focus:border-industrial-orange transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-industrial-darkGray uppercase tracking-widest block">&gt; Contacto</label>
                  <input 
                    type="tel" 
                    placeholder="WhatsApp / Teléfono" 
                    className="w-full bg-industrial-900 border border-industrial-700 text-white px-4 py-3 outline-none focus:border-industrial-orange transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-industrial-darkGray uppercase tracking-widest block">&gt; Especificación_Obra</label>
                <textarea 
                  rows={4} 
                  placeholder="Detalles técnicos, m3 a mover, equipos requeridos..." 
                  className="w-full bg-industrial-900 border border-industrial-700 text-white px-4 py-3 outline-none focus:border-industrial-orange transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                className="w-full bg-industrial-orange hover:bg-orange-500 text-industrial-900 font-sans font-black text-xl py-5 border-2 border-industrial-orange hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] transition-all uppercase tracking-widest"
              >
                Transmitir Datos
              </button>
            </form>
            
            {/* HUD Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-industrial-700 z-[-1]"></div>
            <div className="absolute top-4 right-4 text-[10px] text-industrial-orange/50 font-mono text-right pointer-events-none">
              SEC. C<br/>
              RC-2041
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
