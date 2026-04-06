import { CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';

const recentMissions = [
  {
    title: "EDF Hydro — Rencontres SMB",
    description: "Conception et animation d'un grand séminaire multi-équipes pour co-construire des solutions concrètes face aux enjeux opérationnels. Mobilisation de l'intelligence collective grâce à des méthodes de dialogue profond et d'engagement.",
    year: "2025",
    link: "https://www.linkedin.com/posts/elena-chilova-piron-pcc_engagement-collaboration-leadership-activity-7304876779402354691-i8-L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKCPEABbi4cViMyEgIxB0sl8YLissAc1KY",
    imageUrl: "/image/edf-smb.webp",
    category: "Grand Groupe",
    tags: ["Intelligence Collective", "Séminaire", "Engagement"],
  },
  {
    title: "EDF Hydro — CODIR GEH",
    description: "Accompagnement du Comité de Direction dans l'amélioration de ses modes de fonctionnement collectifs. Travail sur la cohésion, la prise de décision partagée et l'alignement stratégique des membres.",
    year: "2024",
    link: "https://bit.ly/3vlR4hc",
    imageUrl: "/image/codir-geh.webp",
    category: "Direction",
    tags: ["Coaching d'équipe", "CODIR", "Cohésion"],
  },
  {
    title: "Ville de Bezons",
    description: "Programme de développement des compétences managériales destiné aux cadres de la collectivité. Sessions de co-développement et ateliers pratiques pour renforcer le leadership participatif dans le secteur public.",
    year: "2024",
    link: "https://bit.ly/3K79wxS",
    imageUrl: "/image/ville-bezons.webp",
    category: "Secteur Public",
    tags: ["Management", "Co-développement", "Secteur Public"],
  },
  {
    title: "MIEPEEC Maroc",
    description: "Programme « Direction Femmes » pour le développement du leadership de 100 femmes cadres à travers un parcours de coaching collectif et individuel. Un programme transformateur alliant intelligence collective et accompagnement personnalisé.",
    year: "2023",
    link: "https://bit.ly/3HeSXj0",
    imageUrl: "/image/miepeec-maroc.webp",
    category: "Leadership",
    tags: ["Leadership Féminin", "Coaching", "International"],
  },
  {
    title: "EDF Hydro — Business Unit",
    description: "Conception et animation de séminaires stratégiques pour le CODIR et le CODIR Élargi autour de la vision 2030. Facilitation de temps forts de réflexion collective pour aligner les équipes dirigeantes sur les grandes orientations.",
    year: "2023",
    link: "https://bit.ly/46UIgfo",
    imageUrl: "/image/business-unite.webp",
    category: "Stratégie",
    tags: ["Vision", "Stratégie", "Facilitation"],
  },
  {
    title: "Chicanrie",
    description: "Ateliers de découverte et de formation pour appréhender les conflits interpersonnels et collectifs. Outillage des participants pour transformer les tensions en leviers de coopération et de dialogue constructif.",
    year: "2023",
    link: "https://bit.ly/49cRncy",
    imageUrl: "/image/chicanrie.webp",
    category: "Formation",
    tags: ["Gestion des conflits", "Formation", "Médiation"],
  },
  {
    title: "EDF Hydro",
    description: "Conception et déploiement d'un cursus de professionnalisation des encadrants. Programme structuré visant à renforcer les postures managériales et développer les compétences de leadership dans un contexte industriel exigeant.",
    year: "2022",
    link: "http://bit.ly/40mbgKm",
    imageUrl: "/image/edf-hydro.webp",
    category: "Développement",
    tags: ["Professionnalisation", "Management", "Encadrants"],
  },
];

const testimonials = [
  {
    quote: "Elena a su créer les conditions d'un dialogue constructif qui nous a permis de débloquer des situations complexes et de retrouver une dynamique collective.",
    author: "Directeur Général",
    company: "Groupe industriel international",
  },
  {
    quote: "Son approche pragmatique et bienveillante a transformé notre façon de travailler ensemble. Les résultats sont tangibles.",
    author: "Responsable RH",
    company: "PME technologique",
  },
  {
    quote: "Grâce à son expertise en intelligence collective, nous avons pu mobiliser 200+ collaborateurs autour d'un projet commun.",
    author: "Chef de projet",
    company: "Administration publique",
  },
];

const achievements = [
  "Plus de 500 personnes accompagnées en sessions collectives",
  "20 ans d'expérience en coaching professionnel",
  "Coaching Augmenté à l'IA (outils de coaching, agents IA)",
  "Certifications reconnues (ICF PCC, MBA EM Lyon, Master PNL...)",
  "Membre de La Boétie Partners",
  "Accompagnement de transformations majeures",
];

const categoryColors: Record<string, string> = {
  "Grand Groupe": "bg-blue-100 text-blue-700",
  "Direction": "bg-indigo-100 text-indigo-700",
  "Secteur Public": "bg-green-100 text-green-700",
  "Leadership": "bg-purple-100 text-purple-700",
  "Stratégie": "bg-orange-100 text-orange-700",
  "Formation": "bg-red-100 text-red-700",
  "Développement": "bg-teal-100 text-teal-700",
};

export default function References() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO
        title="Références de Eveyens | Coaching et Facilitation"
        description="Découvrez les témoignages et références de nos clients satisfaits par nos services de coaching professionnel et facilitation d'intelligence collective."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Missions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des accompagnements sur-mesure pour des organisations qui font confiance à l'intelligence collective.
          </p>
        </div>

        {/* Chiffres clés */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Personnes accompagnées" },
              { value: "20 ans", label: "d'expérience" },
              { value: "3–500", label: "Participants par session" },
              { value: "ICF PCC", label: "Certifiée" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center bg-orange-50 rounded-2xl py-8 px-4">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Missions — liste illustrée */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">
            Preuves sociales
          </h2>
          <div className="space-y-8">
            {recentMissions.map((mission, index) => (
              <article
                key={index}
                className="group flex flex-col md:flex-row gap-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Image */}
                <div className="md:w-56 md:shrink-0 h-48 md:h-auto overflow-hidden">
                  <img
                    src={mission.imageUrl}
                    loading="lazy"
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Contenu */}
                <div className="flex flex-col justify-between p-6 flex-1">
                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[mission.category] ?? 'bg-gray-100 text-gray-600'}`}>
                        {mission.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{mission.year}</span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {mission.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {mission.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {mission.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lien */}
                  <a
                    href={mission.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-700 transition-colors"
                  >
                    En savoir plus
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-20 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Ce que disent nos clients
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-gray-600 italic text-lg leading-relaxed mb-6">
                    « {testimonial.quote} »
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

        {/* Informations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Quelques repères
          </h2>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-5">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA bas de page */}
        <div className="text-center bg-gray-900 rounded-2xl p-10">
          <p className="text-white text-xl font-semibold mb-2">Vous avez un projet ?</p>
          <p className="text-gray-400 mb-6">Discutons de vos enjeux et construisons quelque chose ensemble.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendly.com/eveyens/rv_avec_elena"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Voir nos services
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
