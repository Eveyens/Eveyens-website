import React from 'react';
import { Menu, X, Brain } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-2xl font-bold text-secondary-900">Eveyens</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-secondary-800 hover:text-primary-500 transition">Services</a>
            <a href="#team" className="text-secondary-800 hover:text-primary-500 transition">Notre Équipe</a>
            <a href="#approach" className="text-secondary-800 hover:text-primary-500 transition">Approche</a>
            <a href="#testimonials" className="text-secondary-800 hover:text-primary-500 transition">Témoignages</a>
            <a href="#contact" className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-secondary-800 hover:text-primary-500">Services</a>
            <a href="#team" className="block px-3 py-2 text-secondary-800 hover:text-primary-500">Notre Équipe</a>
            <a href="#approach" className="block px-3 py-2 text-secondary-800 hover:text-primary-500">Approche</a>
            <a href="#testimonials" className="block px-3 py-2 text-secondary-800 hover:text-primary-500">Témoignages</a>
            <a href="#contact" className="block px-3 py-2 text-secondary-800 hover:text-primary-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}