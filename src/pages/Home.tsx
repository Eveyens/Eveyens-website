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
            src="/group-session.jpeg"
            alt="Session de coaching collectif"
            style={{ objectPosition: 'center 42%' }}
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
              Ensemble mobilisons l'Intelligence Collective pour aligner les équipes sur les enjeux clés et engager chacun dans des actions concrètes. Générons la Performance d'aujourd'hui et créons celle de demain par des transformations durables
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
                bgGradient: "from-blue-400 to-blue-600",
                imageUrl: "/images/resultats.png"
              },
              {
                title: "Innovation au Service de Vos Besoins",
                description: "Une approche innovante et sur-mesure pour accompagner vos transformations.",
                icon: Lightbulb,
                bgGradient: "from-purple-400 to-purple-600",
                imageUrl: "/images/innovation.png"
              },
              {
                title: "Libérer la Capacité d'Agir",
                description: "Une expertise en Intelligence Collective pour révéler le potentiel du collectif.",
                icon: Users,
                bgGradient: "from-green-400 to-green-600",
                imageUrl: "/images/capacite-agir.png"
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