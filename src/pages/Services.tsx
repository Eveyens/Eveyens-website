import React from 'react';
import { Target, Lightbulb, Brain, Users, MessageCircle } from 'lucide-react';

const mainServices = [
  {
    title: 'Accompagnement stratégique',
    description: 'Accompagnement des Organisations, des Business Units dans leurs transformations.',
    icon: Target,
    details: [
      'Bâtir la vision',
      'Développer la confiance',
      'Aligner les différents collectifs managériaux'
    ]
  },
  {
    title: 'Accompagnement opérationnel',
    description: 'Accompagnement des dirigeants, des managers et des équipes pour gagner en performance.',
    icon: Lightbulb,
    details: [
      'Coaching individuel',
      'Coaching d\'équipe',
      'Gestion des situations complexes et des crises'
    ]
  },
  {
    title: 'Professionnalisation et Leadership Participatif',
    description: 'Développement dans des collectifs et des groupes de pairs.',
    icon: Brain,
    details: [
      'Co-Développement',
      'Professionnalisation des leaders, des managers et des encadrants',
      'Fresque du Management'
    ]
  }
];

const expertises = [
  {
    icon: Users,
    title: "Conception et animation de dispositifs",
    description: "Conception et animation de temps collectifs de 3 à 500+ personnes en présentiel, distanciel ou hybride : grands groupes industriels, PME, secteur public."
  },
  {
    icon: Brain,
    title: "Facilitation en Intelligence Collective",
    description: "Mobiliser l'Intelligence Collective et faire émerger des solutions innovantes et engageantes."
  },
  {
    icon: Target,
    title: "Coaching Professionnel",
    description: "Accompagnement personnalisé des dirigeants, des managers et des équipes pour développer leur potentiel et atteindre leurs objectifs."
  },
  {
    icon: MessageCircle,
    title: "Régulation / Médiation",
    description: "Régulation interpersonnelle et collective pour résoudre les tensions et crises."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h1 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Nos Services
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Nous créons des dispositifs de coaching professionnel et de facilitation qui mobilisent l'Intelligence Collective, alignent les équipes sur des enjeux clés et engagent chacun dans des actions concrètes.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="rounded-lg inline-flex p-3 bg-primary-50 text-primary-700">
                        <service.icon className="h-6 w-6" />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-secondary-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <h3 className="text-2xl font-bold text-secondary-900 sm:text-3xl text-center mb-12">
            Domaines d'expertise
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expertises.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-500 mx-auto">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-medium text-secondary-900 text-center">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-base text-gray-500">
          Pour en savoir plus sur notre approche, visitez notre page <a href="/about">À propos</a> ou <a href="/contact">Contactez-nous</a>.
        </p>
      </div>
    </div>
  );
}