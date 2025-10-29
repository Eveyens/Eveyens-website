import React from 'react';
import { Target, Lightbulb, Brain, Users, MessageCircle, Palette, BarChart, Eye, FileSearch } from 'lucide-react';

const mainServices = [
  {
    title: 'Accompagnement stratégique',
    description: 'Accompagnement des Organisations, des Business Units dans leurs transformations.',
    icon: Target,
    bgGradient: "from-blue-500 to-blue-700",
    imageUrl: "/image/accompagnement-strategique.webp",
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
    bgGradient: "from-amber-500 to-amber-700",
    imageUrl: "/image/accompagnement-operationnel.webp",
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
    bgGradient: "from-purple-500 to-purple-700",
    imageUrl: "/image/leadership-participatif.webp",
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
    description: "Conception et animation de temps collectifs de 3 à 500+ personnes en présentiel, distanciel ou hybride : grands groupes industriels, PME, secteur public.",
    bgGradient: "from-green-500 to-green-700",
    imageUrl: "/image/conception-animation.webp"
  },
  {
    icon: Brain,
    title: "Facilitation en Intelligence Collective",
    description: "Mobiliser l'Intelligence Collective et faire émerger des solutions innovantes et engageantes.",
    bgGradient: "from-indigo-500 to-indigo-700",
    imageUrl: "/image/facilitation-intelligence.webp"
  },
  {
    icon: Target,
    title: "Coaching Professionnel",
    description: "Accompagnement personnalisé des dirigeants, des managers et des équipes pour développer leur potentiel et atteindre leurs objectifs.",
    bgGradient: "from-red-500 to-red-700",
    imageUrl: "/image/coaching-professionnel.webp"
  },
  {
    icon: MessageCircle,
    title: "Régulation / Médiation",
    description: "Régulation interpersonnelle et collective pour résoudre les tensions et crises.",
    bgGradient: "from-teal-500 to-teal-700",
    imageUrl: "/image/regulation-mediation.webp"
  }
];

const outils = [
  {
    icon: Palette,
    title: "Fresque de Management by Samé",
    description: "Atelier collaboratif pour repenser les pratiques managériales et aligner les comportements des managers sur les défis actuels et futurs grâce à une méthodologie ludique et immersive.",
    bgGradient: "from-pink-500 to-pink-700",
    imageUrl: "/image/fresque-management.webp"
  },
  {
    icon: BarChart,
    title: "DISC Force Motrice",
    description: "Modèle d’analyse comportementale et motivationnelle  pour mieux se connaitre et mieux travailler ensemble, renforcer la coopération, améliorer la communication, éviter des situations conflictuelles.",
    bgGradient: "from-cyan-500 to-cyan-700",
    imageUrl: "/image/disc-force-motrice.webp"
  },
  {
    icon: Eye,
    title: "Vision Visioning Visionnaire",
    description: "Processus immersif qui permet d’explorer et de formuler les trois éléments de la vision : la Raison d’Etre, les Valeurs et l’Ambition et projette l’organisation dans son futur désirable.",
    bgGradient: "from-violet-500 to-violet-700",
    imageUrl: "/image/vision-visioning.webp"
  },
  {
    icon: FileSearch,
    title: "Diagnostic Partagé",
    description: "Analyse flash conduite avec l'ensemble des parties prenantes pour un état des lieux objectif. Fait ressortir priorités et actions rapides à fort impact collectif.",
    bgGradient: "from-emerald-500 to-emerald-700",
    imageUrl: "/image/diagnostic-partage.webp"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <head>
        <title>Services de Eveyens | Coaching et Facilitation</title>
        <meta name="description" content="Découvrez nos services de coaching professionnel et facilitation d'intelligence collective pour développer l'autonomie et la coopération en entreprise." />
      </head>
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
              <div key={index} className="group perspective-1000 h-80">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Recto - Image */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="w-full h-full rounded-xl shadow-lg relative overflow-hidden">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <service.icon className="w-20 h-20 text-white mb-4" />
                        <div className="text-center px-6">
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Verso - Texte */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div 
                      className="w-full h-full rounded-xl shadow-lg p-6 flex flex-col"
                      style={{ background: 'linear-gradient(135deg, #ffae3a1a, #fffe9f1a, #ffae3a1a)' }}
                    >
                      <div className="flex items-center mb-4">
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
                      <div className="mb-4">
                        <p className="text-base text-gray-500">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex-1">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section EVYIA - coach digital */}
        <section className="mt-20 py-16 bg-gradient-to-b from-[#fff5ef] to-white rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-red-500">
                Nouveau : EVYIA notre coach digital.
              </h1>
            </div>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Une solution IA pour un coaching personnalisé à tout instant.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Texte à gauche */}
              <div>
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
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
                className="inline-block bg-[#FF6F61] text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:opacity-95 transition-opacity"
              >
                Découvrir EVYIA
              </a>
            </div>
          </div>
        </section>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-secondary-900 sm:text-3xl text-center mb-12">
            Domaines d'expertise
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expertises.map((item, index) => (
              <div key={index} className="group perspective-1000 h-64">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Recto - Image */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="w-full h-full rounded-xl shadow-lg relative overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <item.icon className="w-16 h-16 text-white mb-4" />
                        <div className="text-center px-4">
                          <h4 className="text-lg font-bold">{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Verso - Texte */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div 
                      className="w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center"
                      style={{ background: 'linear-gradient(135deg, #ffae3a1a, #fffe9f1a, #ffae3a1a)' }}
                    >
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-500 mb-4" style={{ background: '#fff' }}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-medium text-secondary-900 mb-4">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-secondary-900 sm:text-3xl text-center mb-12">
            Quelques-uns de nos Outils
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outils.map((outil, index) => (
              <div key={index} className="group perspective-1000 h-64">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Recto - Image */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="w-full h-full rounded-xl shadow-lg relative overflow-hidden">
                      <img 
                        src={outil.imageUrl} 
                        alt={outil.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <outil.icon className="w-16 h-16 text-white mb-4" />
                        <div className="text-center px-4">
                          <h4 className="text-lg font-bold">{outil.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Verso - Texte */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div 
                      className="w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center"
                      style={{ background: 'linear-gradient(135deg, #ffae3a1a, #fffe9f1a, #ffae3a1a)' }}
                    >
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-500 mb-4" style={{ background: '#fff' }}>
                        <outil.icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-medium text-secondary-900 mb-4">
                        {outil.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {outil.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            Pour en savoir plus sur notre approche, visitez notre page <a href="/about" className="text-primary-500 hover:text-primary-600 underline">À propos</a> ou <a href="/contact" className="text-primary-500 hover:text-primary-600 underline">Contactez-nous</a>.
          </p>
        </div>
      </div>
    </div>
  );
}