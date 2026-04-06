import { Target, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FlipCard } from '../components/FlipCard';
import { EvyiaSection } from '../components/EvyiaSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-white">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/image/group-session.webp"
            loading="lazy"
            alt="Session de coaching collectif"
            style={{ objectPosition: 'center 37%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/80 to-orange-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Facilitation en Intelligence Collective et <br />
              <span className="text-yellow-200">Coaching Professionnel</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Créer les conditions du dialogue profond et de la performance collective.
            </p>
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
              <Link
                to="/services"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full md:w-auto text-center"
              >
                Découvrir nos services
              </Link>
              <a
                href="https://calendly.com/eveyens/rv_avec_elena"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors w-full md:w-auto text-center"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#fff5ef] to-white overflow-hidden">
        <svg
          className="pointer-events-none absolute -top-10 -left-10 w-[140%] h-[140%] opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M -10,90 C 20,60 50,40 110,10"
            fill="none"
            stroke="#ff6a33"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold heading-orange-sheen">
              Chez Eveyens, nous transformons la coopération en performance durable.
            </h2>
            <div className="mx-auto mt-3 w-28 md:w-32 underline-shine" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div>
              <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                <p>
                  Ensemble, mobilisons l'Intelligence Collective pour aligner les équipes sur les enjeux clés et transformer les intentions en actions concrètes.
                </p>
                <p>
                  Générons la performance d'aujourd'hui et construisons celle de demain à travers des transformations humaines, durables et porteuses de sens.
                </p>
              </div>
            </div>
            {/* Logo à droite */}
            <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#ff6a33] opacity-20 blur-3xl" />
              <img
                src="/image/logo-eveyens.webp"
                loading="lazy"
                alt="Eveyens"
                className="relative w-56 md:w-72 lg:w-80 h-auto opacity-95"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche centrée sur l'intelligence collective au service de la performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Des Résultats qui Comptent",
                description: "Des résultats concrets pour vos équipes et vos organisations.",
                icon: Target,
                imageUrl: "/image/resultats.webp"
              },
              {
                title: "Innovation au Service de Vos Besoins",
                description: "Une approche innovante et sur-mesure pour accompagner vos transformations.",
                icon: Lightbulb,
                imageUrl: "/image/innovation.webp"
              },
              {
                title: "Libérer la Capacité d'Agir",
                description: "Une expertise en Intelligence Collective pour révéler le potentiel du collectif.",
                icon: Users,
                imageUrl: "/image/capacite-agir.webp"
              },
            ].map((value, index) => (
              <FlipCard
                key={index}
                height="h-64"
                front={{ imageUrl: value.imageUrl, title: value.title, icon: value.icon }}
                back={{ title: value.title, description: value.description, variant: 'default', gradient: '#ffffff' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Evyia Section */}
      <EvyiaSection variant="home" />

      <Footer />
    </div>
  );
}
