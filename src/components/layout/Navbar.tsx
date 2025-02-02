import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../ui/NavLink';
import { MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/references", label: "Références/Missions" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <img src="/logo-eveyens.png" alt="Eveyens" className="h-16" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} className="text-secondary-800 hover:text-primary-500 transition">
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <a
              href="/contact"
              className="flex items-center gap-2 px-3 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-secondary-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-secondary-800 hover:text-primary-500"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}