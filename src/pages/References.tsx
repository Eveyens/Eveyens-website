import React from 'react';
import { Building2, Users, Target, CheckCircle, Calendar, ExternalLink } from 'lucide-react';

export default function References() {
  const recentMissions = [
    {
      title: "EDF Hydro Rencontres SMB",
      description: "Co-construire des solutions concrètes grâce au dialogue et à l'engagement.",
      year: "2025",
      link: "https://www.linkedin.com/posts/elena-chilova-piron-pcc_engagement-collaboration-leadership-activity-7304876779402354691-i8-L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKCPEABbi4cViMyEgIxB0sl8YLissAc1KY",
      bgGradient: "from-blue-500 to-blue-700",
      imageUrl: "/image/edf-smb.webp",
      category: "Grand Groupe"
    },
    {
      title: "EDF Hydro CODIR GEH",
      description: "Accompagnement du CODIR sur ses modes de fonctionnement",
      year: "2024",
      link: "https://bit.ly/3vlR4hc",
      bgGradient: "from-indigo-500 to-indigo-700",
      imageUrl: "/image/codir-geh.webp",
      category: "Direction"
    },
    {
      title: "Ville de Bezons",
      description: "Accompagnement pour le développement des compétences managériales des cadres de la ville",
      year: "2024",
      link: "https://bit.ly/3K79wxS",
      bgGradient: "from-green-500 to-green-700",
      imageUrl: "/image/ville-bezons.webp",
      category: "Secteur Public"
    },
    {
      title: "MIEPEEC Maroc",
      description: "Programme « Direction Femmes » pour le développement du leadership de 100 femmes cadres",
      year: "2023",
      link: "https://bit.ly/3HeSXj0",
      bgGradient: "from-purple-500 to-purple-700",
      imageUrl: "/image/miepeec-maroc.webp",
      category: "Leadership"
    },
    {
      title: "EDF Hydro Business Unite",
      description: "Conception et animation de séminaires pour EDF CODIR et CODIR Élargi sur la vision 2030",
      year: "2023",
      link: "https://bit.ly/46UIgfo",
      bgGradient: "from-orange-500 to-orange-700",
      imageUrl: "/image/business-unite.webp",
      category: "Stratégie"
    },
    {
      title: "Chicanrie",
      description: "Ateliers découvertes pour appréhender les conflits",
      year: "2023",
      link: "https://bit.ly/49cRncy",
      bgGradient: "from-red-500 to-red-700",
      imageUrl: "/image/chicanrie.webp",
      category: "Formation"
    },
    {
      title: "EDF Hydro",
      description: "Cursus de professionnalisation des Encadrants",
      year: "2022",
      link: "http://bit.ly/40mbgKm",
      bgGradient: "from-teal-500 to-teal-700",
      imageUrl: "/image/edf-hydro.webp",
      category: "Développement"
    }
  ];

  const testimonials = [
    {
      quote: "Elena a su créer les conditions d'un dialogue constructif qui nous a permis de débloquer des situations complexes et de retrouver une dynamique collective.",
      author: "Directeur Général",
      company: "Groupe industriel international"
    },
    {
      quote: "Son approche pragmatique et bienveillante a transformé notre façon de travailler ensemble. Les résultats sont tangibles.",
      author: "Responsable RH", 
      company: "PME technologique"
    },
    {
      quote: "Grâce à son expertise en intelligence collective, nous avons pu mobiliser 200+ collaborateurs autour d'un projet commun.",
      author: "Chef de projet",
      company: "Administration publique"
    }
  ];

  const achievements = [
    "Plus de 500 personnes accompagnées en sessions collectives",
    "20 ans d'expérience en coaching professionnel",
    "Coaching Augmenté à l'IA (outils de coaching, agents IA)",
    "Certifications reconnues (ICF PCC, MBA EM Lyon, Master PNL...)",
    "Membre de La Boétie Partners",
    "Accompagnement de transformations majeures"
    ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <head>
        <title>Références de Eveyens | Coaching et Facilitation</title>
        <meta name="description" content="Découvrez les témoignages et références de nos clients satisfaits par nos services de coaching professionnel et facilitation d'intelligence collective." />
      </head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Missions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez nos missions récentes et leurs impacts en matière de coaching professionnel et de facilitation d'intelligence collective.
          </p>
        </div>

        {/* Missions récentes */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Missions récentes
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {recentMissions.map((mission, index) => (
                <div key={index} className="group perspective-1000 h-72">
                  <div
                    className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d md:group-hover:rotate-y-180"
                    onClick={(e) => {
                      if (window.innerWidth < 768) {
                        e.currentTarget.classList.toggle('rotate-y-180');
                      }
                    }}
                  >
                    {/* Recto - Image */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <div className="w-full h-full rounded-xl shadow-lg relative overflow-hidden">
                        <img 
                          src={mission.imageUrl} 
                          loading="lazy"
                          alt={mission.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <Building2 className="w-16 h-16 text-white mb-4" />
                          <div className="text-center px-4">
                            <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
                            <div className="flex items-center justify-center mb-2">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="text-sm">{mission.year}</span>
                            </div>
                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
                              {mission.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Verso - Texte */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                      <div 
                        className="w-full h-full rounded-xl shadow-lg p-6 flex flex-col"
                        style={{ background: 'linear-gradient(135deg, rgba(255, 174, 58, 0.1), rgba(255, 254, 159, 0.1), rgba(255, 174, 58, 0.1))' }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Building2 className="h-6 w-6 text-primary-500" />
                            <span className="ml-2 font-medium text-secondary-900 text-base">{mission.title}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-gray-400" />
                            <span className="ml-1 text-base text-gray-500">{mission.year}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">{mission.description}</p>
                        
                        <a 
                          href={mission.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary-500 hover:text-primary-600 text-base font-medium flex items-center"
                        >
                          En savoir plus 
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-20 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Ce que disent nos clients
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quelques chiffres */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Quelques Informations
          </h2>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center">
          <p className="text-base text-gray-500">
            Pour en savoir plus, visitez notre page <a href="/services" className="text-orange-500 hover:text-orange-600 underline">services</a> ou <a href="/contact" className="text-orange-500 hover:text-orange-600 underline">contactez-nous</a>.
          </p>
        </div>
      </div>
    </div>
  );
}