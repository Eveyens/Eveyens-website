import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';
import { trackEvent, usePageView } from '../utils/analytics';

const ctaTarget = '/diagnostic-temps-collectifs/experience';

type CtaPosition = 'hero' | 'couts' | 'etapes' | 'final';

const couts = [
  {
    title: 'Coût humain',
    description: 'Fatigue managériale, perte de sens, démotivation progressive des équipes.',
  },
  {
    title: 'Coût de crédibilité',
    description: "Le collectif doute de l'utilité des temps partagés et de la capacité à décider.",
  },
  {
    title: 'Coût business',
    description: "Lenteur d'exécution, décisions répétées, opportunités manquées faute d'alignement.",
  },
];

const etapes = [
  {
    number: '1',
    title: 'Explorer le cercle',
    description: 'Cliquez sur chaque thème pour répondre à une question simple. 2 minutes suffisent.',
  },
  {
    number: '2',
    title: 'Visualiser votre niveau',
    description: "Recevez une lecture immédiate de votre maturité collective, en un coup d'oeil.",
  },
  {
    number: '3',
    title: "Passer à l'action",
    description: 'Identifiez vos leviers prioritaires et échangez avec Eveyens pour les activer.',
  },
];

function CtaButton({
  position,
  variant = 'primary',
}: {
  position: CtaPosition;
  variant?: 'primary' | 'outline';
}) {
  const base = 'inline-flex items-center gap-2 rounded-lg px-7 py-3 font-semibold transition-colors';
  const classes =
    variant === 'primary'
      ? `${base} bg-[#ff6a33] text-white hover:opacity-90 shadow-sm`
      : `${base} border-2 border-[#ff6a33] text-[#ff6a33] hover:bg-[#ff6a33] hover:text-white`;

  return (
    <Link
      to={ctaTarget}
      className={classes}
      onClick={() => trackEvent({ event: 'diagnostic_landing_cta_click', cta_position: position })}
    >
      Commencer votre diagnostic
      <ArrowRight size={18} />
    </Link>
  );
}

function SectionShell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`flex min-h-screen flex-col justify-center py-16 md:py-20 ${className}`.trim()}>
      {children}
    </section>
  );
}

export default function DiagnosticLanding() {
  usePageView('diagnostic_landing_view');

  return (
    <div className="min-h-screen bg-white pt-14">
      <SEO
        title="Diagnostic des temps collectifs | Eveyens"
        description="Comprenez si vos temps collectifs créent un impact durable, puis réalisez un diagnostic ludique et interactif avec Eveyens."
      />

      <SectionShell className="relative overflow-hidden bg-gradient-to-b from-[#fff5ef] to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#ff6a33] shadow-sm">
              Diagnostic des temps collectifs
            </p>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Vos temps collectifs créent-ils vraiment de l&apos;impact… ou l&apos;illusion d&apos;en créer ?
            </h1>
            <div className="mx-auto my-6 ml-0 w-28 underline-shine md:w-40" />
            <p className="mt-4 max-w-xl text-lg text-gray-700 md:text-xl">
              Beaucoup de dirigeants sentent que leurs temps collectifs ne transforment pas assez. En 2 minutes, cette
              expérience ludique permet de mettre des mots sur le vrai problème, avant d&apos;en parler avec Eveyens.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaButton position="hero" />
              <span className="text-sm text-gray-500">2 min &bull; 7 thèmes &bull; résultat immédiat</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/image/logo-eveyens.webp"
              alt="Eveyens"
              className="h-auto w-full max-w-[280px] object-contain drop-shadow-sm sm:max-w-[340px] lg:max-w-[420px]"
              width={420}
              height={420}
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#fff5ef]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Ce que ça coûte quand rien ne change</h2>
            <div className="mx-auto mt-3 w-28 underline-shine md:w-32" />
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              Un dispositif collectif peu transformant n&apos;est jamais neutre. Il produit trois coûts cachés qui
              s&apos;accumulent.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
            {couts.map((cout) => (
              <div key={cout.title} className="rounded-2xl border border-[#ffd6c2] bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-[#ff6a33]">{cout.title}</h3>
                <p className="text-gray-700">{cout.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 md:mt-14">
            <CtaButton position="couts" variant="outline" />
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold heading-orange-sheen md:text-4xl">Une expérience ludique et actionnable</h2>
              <div className="mx-auto my-4 ml-0 w-28 underline-shine md:w-32" />
              <p className="text-lg text-gray-700">
                Le diagnostic prend la forme d&apos;un cercle interactif : les 7 thèmes clés des temps collectifs qui
                transforment. À chaque thème, une question. Au centre, votre résultat. Rapide, visuel, sans jargon.
              </p>

              <div className="mt-10 space-y-5">
                {etapes.map((etape) => (
                  <div key={etape.number} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6a33] text-sm font-bold text-white">
                      {etape.number}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">{etape.title}</h3>
                      <p className="text-gray-600">{etape.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaButton position="etapes" />
                <span className="text-sm text-gray-500">Résultat immédiat &bull; synthèse détaillée par email</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <figure className="w-full max-w-md lg:max-w-lg">
                <img
                  src="/image/diagnostic-cercle-7-themes.png"
                  alt="Les 7 thèmes clés pour des temps collectifs qui transforment"
                  className="h-auto w-full rounded-2xl object-contain shadow-lg ring-1 ring-black/5"
                  width={800}
                  height={800}
                />
                <figcaption className="mt-3 text-center text-sm text-gray-500">
                  Les 7 thèmes — repris dans l&apos;expérience interactive
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#ffd6c2] bg-gradient-to-br from-[#fff5ef] via-white to-white p-10 text-center shadow-sm md:p-12">
            <div className="flex justify-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6a33] text-white shadow-md">
                <Sparkles size={26} />
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Prêt à nommer ce qui bloque vraiment ?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              Lancez l&apos;expérience interactive. En 2 minutes, vous aurez une lecture claire pour ouvrir la bonne
              conversation dans votre organisation.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton position="final" />
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Compass size={14} aria-hidden />
              Accompagné par Eveyens
            </p>
          </div>
        </div>
      </SectionShell>

      <Footer />
    </div>
  );
}
