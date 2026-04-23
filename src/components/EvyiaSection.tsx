import { Link } from 'react-router-dom';

interface EvyiaSectionProps {
  variant: 'home' | 'services';
}

export function EvyiaSection({ variant }: EvyiaSectionProps) {
  const isHome = variant === 'home';

  const modules = [
    {
      name: 'Gate',
      description: "Le point d'entrée de l'écosystème. Evyia Gate permet de démarrer une session d'accompagnement en posant le cadre et en identifiant les enjeux clés.",
    },
    {
      name: 'Coach',
      description: "Le cœur de l'accompagnement. Evyia Coach engage un dialogue structuré pour clarifier, reformuler et transformer la réflexion en action.",
    },
    {
      name: 'Perspectives',
      description: "La prise de hauteur. Evyia Perspectives offre un espace d'analyse pour identifier les patterns et ouvrir de nouveaux horizons stratégiques.",
    },
  ];

  return (
    <section
      className={
        isHome
          ? 'py-20 bg-gradient-to-br from-[#FF6F61] via-[#ff816f] to-[#ffa095]'
          : 'mt-20 py-16 bg-gradient-to-b from-[#fff5ef] to-white rounded-2xl'
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
            <img
              src="/image/logo-evyia.webp"
              loading="lazy"
              alt="Evyia"
              className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white/40 shadow-lg"
            />
          </div>
          {!isHome && (
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-2">
              Nouveau
            </p>
          )}
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isHome ? 'text-white' : 'text-gray-900'}`}>
            Evyia : un bonus offert pour prolonger vos accompagnements Eveyens.
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isHome ? 'text-white/85' : 'text-gray-600'}`}>
            Inclus sans surcoût dans les accompagnements Eveyens, Evyia permet aux leaders et aux managers de continuer à avancer entre les sessions, avec un cadre structuré et immédiatement actionnable.
          </p>
        </div>

        {/* 3 modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className={`rounded-2xl p-6 ${
                isHome
                  ? 'bg-white/20 backdrop-blur-sm border border-white/30'
                  : 'bg-white border border-orange-100 shadow-sm'
              }`}
            >
              <div className={`text-lg font-bold mb-2 ${isHome ? 'text-white' : 'text-gray-900'}`}>
                Evyia <span className={isHome ? 'text-yellow-200' : 'text-orange-500'}>{mod.name}</span>
              </div>
              <p className={`text-sm leading-relaxed ${isHome ? 'text-white' : 'text-gray-600'}`}>
                {mod.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex md:justify-start">
            <img
              src="/image/evyia-conv.webp"
              loading="lazy"
              alt="Interface Evyia"
              className="w-full max-w-md h-auto drop-shadow-xl rounded-xl"
            />
          </div>
          <div className={`space-y-6 text-lg leading-relaxed ${isHome ? 'text-white/90' : 'text-gray-700'}`}>
            <p>
              Avec ses trois modules, Evyia aide vos équipes à prendre du recul, reformuler l'essentiel et transformer la réflexion en décisions concrètes.
            </p>
            <p>
              Cet environnement digital est offert dans le cadre des accompagnements Eveyens : un vrai bonus pour maintenir l'élan, la clarté et la mise en action.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://evyia.fr"
                target="_blank"
                rel="noreferrer noopener"
                className={`inline-block font-semibold px-7 py-3 rounded-lg shadow-sm transition-colors text-center ${
                  isHome
                    ? 'bg-white text-[#FF6F61] hover:bg-gray-100'
                    : 'bg-[#FF6F61] text-white hover:opacity-90'
                }`}
              >
                Découvrir Evyia →
              </a>
              <Link
                to="/contact"
                className={`inline-block font-semibold px-7 py-3 rounded-lg shadow-sm transition-colors text-center ${
                  isHome
                    ? 'border border-white text-white hover:bg-white hover:text-[#FF6F61]'
                    : 'border border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61] hover:text-white'
                }`}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
