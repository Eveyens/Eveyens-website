import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img
            src="/image/logo-eveyens.webp"
            loading="lazy"
            alt="Eveyens"
            className="h-16 w-auto brightness-0 invert opacity-90"
          />
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { to: '/about', label: 'À propos' },
              { to: '/services', label: 'Services' },
              { to: '/references', label: 'Références' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href="https://calendly.com/eveyens/rv_avec_elena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Prendre rendez-vous
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Eveyens. Tous droits réservés.</p>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
