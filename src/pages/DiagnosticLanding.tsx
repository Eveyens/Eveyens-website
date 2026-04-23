import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  Compass,
  HeartHandshake,
  Layers,
  LineChart,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';

const ctaTarget = '/diagnostic-temps-collectifs/experience';

const enjeux = [
  {
    icon: Target,
    title: "Alignement qui ne tient pas dans la durée",
    description:
      "Des décisions partagées en séance qui se dispersent rapidement sur le terrain, des priorités interprétées différemment selon les équipes.",
  },
  {
    icon: Users,
    title: "Engagement qui s'essouffle",
    description:
      "Des dirigeants impliqués, mais des équipes qui reviennent à l'exécution minimale après chaque séminaire ou CODIR.",
  },
  {
    icon: AlertTriangle,
    title: "Tensions non adressées",
    description:
      "Des sujets sensibles évités, des non-dits qui fragilisent le climat et des conflits latents qui ressurgissent ailleurs.",
  },
  {
    icon: Layers,
    title: "Silos qui freinent la coopération",
    description:
      "Des liens fragiles entre sites, métiers ou BU, une coopération formelle mais peu fluide au quotidien.",
  },
  {
    icon: LineChart,
    title: "Transformation qui reste théorique",
    description:
      "Des changements annoncés, rarement ancrés. Les anciens comportements reviennent une fois la pression retombée.",
  },
  {
    icon: HeartHandshake,
    title: "Lien humain qui s'affaiblit",
    description:
      "Une confiance qui s'érode, un sentiment d'appartenance qui diminue, un collectif qui se désengage silencieusement.",
  },
];

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

function CtaButton({ variant = 'primary' }: { variant?: 'primary' | 'outline' }) {
  const base = 'inline-flex items-center gap-2 rounded-lg px-7 py-3 font-semibold transition-colors';
  const classes =
    variant === 'primary'
      ? `${base} bg-[#ff6a33] text-white hover:opacity-90 shadow-sm`
      : `${base} border-2 border-[#ff6a33] text-[#ff6a33] hover:bg-[#ff6a33] hover:text-white`;

  return (
    <Link to={ctaTarget} className={classes}>
      Commencer votre diagnostic
      <ArrowRight size={18} />
    </Link>
  );
}

export default function DiagnosticLanding() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO
        title="Diagnostic des temps collectifs | Eveyens"
        description="Comprenez pourquoi vos temps collectifs n'impactent pas durablement votre organisation, puis réalisez un diagnostic ludique et interactif avec Eveyens."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5ef] to-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#ff6a33] shadow-sm">
            Diagnostic des temps collectifs
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Vos temps collectifs donnent-ils vraiment de l'impact... ou l'illusion d'en donner ?
          </h1>
          <div className="mx-auto my-6 ml-0 w-28 underline-shine md:w-40" />
          <p className="mt-4 max-w-3xl text-lg text-gray-700 md:text-xl">
            Beaucoup de dirigeants sentent que leurs temps collectifs ne transforment pas assez. En 2 minutes, cette
            expérience ludique permet de mettre des mots sur le vrai problème, avant d'en parler avec Eveyens.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <CtaButton />
            <span className="text-sm text-gray-500">2 min &bull; 7 thèmes &bull; résultat immédiat</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold heading-orange-sheen md:text-4xl">
              Le vrai problème n'est pas le temps collectif...
            </h2>
            <div className="mx-auto mt-3 w-28 underline-shine md:w-32" />
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              Le problème, c'est ce qu'il ne transforme pas en profondeur. Six enjeux reviennent systématiquement
              lorsque l'impact ne suit pas.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enjeux.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-[#ffd6c2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff5ef] text-[#ff6a33] group-hover:bg-[#ff6a33] group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-3">
            <CtaButton />
          </div>
        </div>
      </section>

      <section className="bg-[#fff5ef] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Ce que ça coûte quand rien ne change</h2>
            <div className="mx-auto mt-3 w-28 underline-shine md:w-32" />
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              Un dispositif collectif peu transformant n'est jamais neutre. Il produit trois coûts cachés qui
              s'accumulent.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {couts.map((cout) => (
              <div key={cout.title} className="rounded-2xl border border-[#ffd6c2] bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-[#ff6a33]">{cout.title}</h3>
                <p className="text-gray-700">{cout.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-3">
            <CtaButton variant="outline" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold heading-orange-sheen md:text-4xl">Une approche ludique et actionnable</h2>
            <div className="mx-auto mt-3 w-28 underline-shine md:w-32" />
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              Le diagnostic prend la forme d'un cercle interactif. À chaque thème, une question. Au centre, votre
              résultat. Rapide, visuel, sans jargon.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {etapes.map((etape) => (
              <div key={etape.number} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6a33] text-sm font-bold text-white">
                  {etape.number}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{etape.title}</h3>
                <p className="text-gray-600">{etape.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-3">
            <CtaButton />
            <span className="text-sm text-gray-500">Résultat immédiat &bull; synthèse détaillée par email</span>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#ffd6c2] bg-gradient-to-br from-[#fff5ef] via-white to-white p-10 text-center shadow-sm">
            <div className="flex justify-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6a33] text-white shadow-md">
                <Sparkles size={26} />
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Prêt à nommer ce qui bloque vraiment ?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              Lancez l'expérience interactive. En 2 minutes, vous aurez une lecture claire pour ouvrir la bonne
              conversation dans votre organisation.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton />
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Compass size={14} />
              Accompagné par Eveyens
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
