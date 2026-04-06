import { Target, Lightbulb, Brain, Users, MessageCircle, Palette, BarChart, Eye, FileSearch } from 'lucide-react';
import { SEO } from '../components/SEO';
import { FlipCard } from '../components/FlipCard';
import { EvyiaSection } from '../components/EvyiaSection';
import { Footer } from '../components/Footer';

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
      <SEO
        title="Services de Eveyens | Coaching et Facilitation"
        description="Découvrez nos services de coaching professionnel et facilitation d'intelligence collective pour développer l'autonomie et la coopération en entreprise."
      />
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
              <FlipCard
                key={index}
                height="h-80"
                front={{ imageUrl: service.imageUrl, title: service.title, icon: service.icon }}
                back={{ title: service.title, description: service.description, details: service.details, variant: 'service' }}
              />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-secondary-900 sm:text-3xl text-center mb-12">
            Domaines d'expertise
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expertises.map((item, index) => (
              <FlipCard
                key={index}
                height="h-64"
                front={{ imageUrl: item.imageUrl, title: item.title, icon: item.icon }}
                back={{ title: item.title, description: item.description, variant: 'expertise' }}
              />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-secondary-900 sm:text-3xl text-center mb-12">
            Quelques-uns de nos Outils
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outils.map((outil, index) => (
              <FlipCard
                key={index}
                height="h-64"
                front={{ imageUrl: outil.imageUrl, title: outil.title, icon: outil.icon }}
                back={{ title: outil.title, description: outil.description, variant: 'expertise' }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Section Evyia - écosystème digital */}
      <EvyiaSection variant="services" />

      <Footer />
    </div>
  );
}