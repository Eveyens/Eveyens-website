import { Link } from 'react-router-dom';

/**
 * En-tête minimal pour le parcours diagnostic (style campagne) : retour vers l'accueil du site, sans menu complet.
 */
export default function DiagnosticCampaignHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/90 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-md py-1 text-gray-800 outline-none transition-colors hover:text-[#ff6a33] focus-visible:ring-2 focus-visible:ring-[#ff6a33] focus-visible:ring-offset-2"
          aria-label="Retour à l'accueil du site Eveyens"
        >
          <img src="/image/logo-eveyens.webp" alt="" className="h-9 w-auto" width={120} height={36} />
          <span className="text-sm font-semibold tracking-tight">Accueil du site</span>
        </Link>
      </div>
    </header>
  );
}
