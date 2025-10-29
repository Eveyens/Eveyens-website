import React from 'react';
import { CheckCircle, Target, Lightbulb, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-white">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/image/group-session.webp"
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
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Créer les conditions du dialogue profond et de la performance collective.
            </p>
            <div className="space-x-4">
              <a
                href="/services"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Découvrir nos services
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="https://evyia.fr"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block bg-[#FF6F61] text-white px-8 py-3 rounded-lg font-semibold "
              >
                Découvrir EVYIA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Section */}
      <section className="relative py-16 bg-gradient-to-b from-[#fff5ef] to-white overflow-hidden">
        {/* Courbe diagonale décorative en écho au logo */}
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
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold heading-orange-sheen">
              Chez Eveyens, nous transformons la coopération en performance durable.
            </h2>
            <div className="mx-auto mt-3 w-28 md:w-32 underline-shine" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Texte à gauche */}
            <div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Ensemble, mobilisons l’Intelligence Collective pour aligner les équipes sur les enjeux clés et transformer les intentions en actions concrètes.
                </p>
                <p>
                  Générons la performance d’aujourd’hui et construisons celle de demain à travers des transformations humaines, durables et porteuses de sens.
                </p>
              </div>
            </div>
            {/* Image/Logo à droite */}
            <div className="relative flex md:justify-end">
              {/* Halo doux */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#ff6a33] opacity-20 blur-3xl" />
              <img
                src="/image/logo-eveyens.webp"
                alt="Eveyens"
                className="relative w-56 md:w-72 lg:w-80 h-auto opacity-95"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EVYIA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF6F61] via-[#ff816f] to-[#ffa095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              EVYIA, le coach digital qui prolonge l’accompagnement humain.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div>
              <div className="space-y-6 text-lg leading-relaxed text-white/95">
                <p>
                  Développé par Eveyens, EVYIA est un coach digital conçu pour accompagner les leaders et les managers dans leurs réflexions du quotidien.
                </p>
                <p>
                  Il prolonge les accompagnements humains en offrant un espace de dialogue disponible à tout moment pour clarifier, se recentrer et avancer avec lucidité.
                </p>
                <p>
                  À travers ses échanges, EVYIA invite à prendre du recul, à reformuler l’essentiel et à transformer la réflexion en action alignée.
                </p>
              </div>
            </div>
            {/* Image à droite */}
            <div className="flex md:justify-end">
              <img
                src="/image/evyia-conv.webp"
                alt="Conversation EVYIA"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto drop-shadow-xl rounded-lg"
              />
            </div>
          </div>
          {/* Footer du bloc: logo + CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <img
              src="/image/logo-evyia.webp"
              alt="EVYIA"
              className="h-14 w-auto md:h-16"
            />
            <a
              href="https://evyia.fr"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block bg-white text-[#FF6F61] font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
            >
              Découvrir EVYIA
            </a>
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
                bgGradient: "from-blue-400 to-blue-600",
                imageUrl: "/image/resultats.webp"
              },
              {
                title: "Innovation au Service de Vos Besoins",
                description: "Une approche innovante et sur-mesure pour accompagner vos transformations.",
                icon: Lightbulb,
                bgGradient: "from-purple-400 to-purple-600",
                imageUrl: "/image/innovation.webp"
              },
              {
                title: "Libérer la Capacité d'Agir",
                description: "Une expertise en Intelligence Collective pour révéler le potentiel du collectif.",
                icon: Users,
                bgGradient: "from-green-400 to-green-600",
                imageUrl: "/image/capacite-agir.webp"
              },
            ].map((value, index) => (
              <div key={index} className="group perspective-1000 h-64">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Recto - Image */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="w-full h-full rounded-xl shadow-lg relative overflow-hidden">
                      <img 
                        src={value.imageUrl} 
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <value.icon className="w-20 h-20 text-white mb-4" />
                        <div className="text-center px-4">
                          <h3 className="text-xl font-bold">{value.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Verso - Texte */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                        <CheckCircle className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}