import { Menu, X, HardHat } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-industrial-900/90 backdrop-blur-md border-b-2 border-industrial-700/80 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <HardHat className="text-industrial-orange w-8 h-8" />
            <span className="text-white font-sans font-black tracking-tighter text-2xl md:text-3xl uppercase">
              Rentalex <span className="text-industrial-orange">S.R.L</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-industrial-gray hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">Servicios</a>
            <a href="#flota" className="text-industrial-gray hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">Flota</a>
            <a href="#proyectos" className="text-industrial-gray hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">Proyectos</a>
            <button className="bg-industrial-orange hover:bg-orange-500 text-industrial-900 font-sans font-bold py-2.5 px-6 rounded-none uppercase tracking-wide border-2 border-industrial-orange hover:shadow-[0_0_15px_rgba(251,146,60,0.5)] transition-all">
              Cotización Rápida
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-industrial-gray hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-industrial-800 border-b border-industrial-700">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
            <a href="#servicios" className="block px-3 py-2 text-zinc-300 hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">Servicios</a>
            <a href="#flota" className="block px-3 py-2 text-zinc-300 hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">Flota</a>
            <a href="#proyectos" className="block px-3 py-2 text-zinc-300 hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">Proyectos</a>
            <button className="w-full mt-4 bg-industrial-orange text-industrial-900 font-sans font-bold py-3 px-6 uppercase tracking-wide shadow-md">
              Cotización Rápida
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
