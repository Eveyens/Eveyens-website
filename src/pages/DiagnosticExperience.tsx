import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, RotateCcw } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';

type AnswerValue = 'A' | 'B' | 'C';

interface QuizQuestion {
  id: number;
  theme: string;
  question: string;
  answers: { value: AnswerValue; label: string }[];
}

const calendlyUrl = 'https://calendly.com/eveyens/rdv_mieux-vous-comprendre';

const questions: QuizQuestion[] = [
  {
    id: 1,
    theme: 'Alignement stratégique',
    question: "Après vos temps collectifs, qu'observez-vous le plus souvent ?",
    answers: [
      { value: 'A', label: 'Une vision claire et partagée' },
      { value: 'B', label: 'Une compréhension globale, mais des interprétations différentes' },
      { value: 'C', label: 'Des priorités floues ou multiples' },
    ],
  },
  {
    id: 2,
    theme: 'Mobilisation',
    question: 'Pendant vos séminaires ou CODIR, vous observez plutôt :',
    answers: [
      { value: 'A', label: 'Une participation active' },
      { value: 'B', label: "Quelques impliqués, d'autres plus passifs" },
      { value: 'C', label: "Une écoute passive et peu d'initiatives" },
    ],
  },
  {
    id: 3,
    theme: 'Cohérence',
    question: 'Entre équipes et sites, vous constatez :',
    answers: [
      { value: 'A', label: 'Une coordination fluide' },
      { value: 'B', label: 'Une coordination variable selon les équipes' },
      { value: 'C', label: 'Des silos forts' },
    ],
  },
  {
    id: 4,
    theme: 'Transformation',
    question: 'Les changements décidés :',
    answers: [
      { value: 'A', label: "S'ancrent durablement" },
      { value: 'B', label: "S'ancrent partiellement" },
      { value: 'C', label: 'Restent souvent théoriques' },
    ],
  },
  {
    id: 5,
    theme: 'Tensions',
    question: 'Les sujets sensibles sont :',
    answers: [
      { value: 'A', label: 'Abordés et traités' },
      { value: 'B', label: 'Partiellement abordés' },
      { value: 'C', label: 'Évités' },
    ],
  },
  {
    id: 6,
    theme: 'Impact réel',
    question: 'Quelques semaines après, que reste-t-il ?',
    answers: [
      { value: 'A', label: 'Des actions concrètes sont mises en oeuvre' },
      { value: 'B', label: 'Quelques avancées visibles' },
      { value: 'C', label: 'Peu de choses ont changé' },
    ],
  },
  {
    id: 7,
    theme: 'Lien humain',
    question: 'Ces temps renforcent :',
    answers: [
      { value: 'A', label: 'La confiance et la cohésion' },
      { value: 'B', label: 'Un peu de lien, de façon inégale' },
      { value: 'C', label: 'Peu la confiance entre les personnes' },
    ],
  },
];

const pointsByAnswer: Record<AnswerValue, number> = { A: 2, B: 1, C: 0 };

function getResult(score: number) {
  if (score >= 11) {
    return {
      level: 'Dynamique solide',
      accent: 'text-green-700',
      card: 'bg-green-50 border-green-200',
      firstLook: "Lecture rapide : votre collectif est structuré. Le levier est d'accélérer ce qui marche.",
      message:
        'Vos temps collectifs créent déjà de la valeur. Vous pouvez maintenant renforcer la diffusion des décisions et la vitesse de transformation.',
      risk: "Risque à surveiller : rester en optimisation locale sans changer d'échelle.",
    };
  }
  if (score >= 6) {
    return {
      level: 'Potentiel instable',
      accent: 'text-orange-700',
      card: 'bg-[#fff5ef] border-[#ffd6c2]',
      firstLook: "Lecture rapide : votre potentiel est réel, mais l'exécution manque de stabilité.",
      message:
        'Vos temps collectifs apportent des avancées, mais les effets peinent à s installer durablement dans le quotidien des équipes.',
      risk: 'Risque à surveiller : dispersion des priorités et fatigue managériale.',
    };
  }
  return {
    level: 'Transformation fragilisée',
    accent: 'text-red-700',
    card: 'bg-red-50 border-red-200',
    firstLook: 'Lecture rapide : votre collectif manque de cadre transformant.',
    message:
      'Les temps collectifs ne produisent pas suffisamment de transformation visible. Les tensions, silos et retours en arrière dominent.',
    risk: "Risque critique : perte de crédibilité des instances collectives et baisse de l'engagement.",
  };
}

export default function DiagnosticExperience() {
  const [activeThemeId, setActiveThemeId] = useState(1);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const allAnswered = answeredCount === questions.length;

  const activeQuestion = useMemo(
    () => questions.find((question) => question.id === activeThemeId) ?? questions[0],
    [activeThemeId]
  );
  const activeAnswer = answers[activeQuestion.id];

  const totalScore = useMemo(
    () =>
      questions.reduce((sum, question) => {
        const value = answers[question.id];
        return value ? sum + pointsByAnswer[value] : sum;
      }, 0),
    [answers]
  );
  const result = useMemo(() => getResult(totalScore), [totalScore]);

  const handleAnswer = (themeId: number, value: AnswerValue) => {
    const updated = { ...answers, [themeId]: value };
    setAnswers(updated);
    const nextUnanswered = questions.find((question) => !updated[question.id]);
    if (nextUnanswered) {
      setActiveThemeId(nextUnanswered.id);
    }
  };

  const handleShowResults = () => {
    if (!allAnswered) {
      return;
    }
    setShowResults(true);
    const el = document.getElementById('diagnostic-resultat');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleReset = () => {
    setActiveThemeId(1);
    setAnswers({});
    setShowResults(false);
    setEmail('');
    setEmailSubmitted(false);
  };

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setEmailSubmitted(true);
  };

  const mailtoSummary = useMemo(() => {
    const lines = questions.map((question) => `${question.theme}: ${answers[question.id] ?? '-'}`);
    const body = `Bonjour,%0D%0AJe souhaite recevoir ma synthese detaillee.%0D%0A%0D%0AScore: ${totalScore}/14%0D%0A${lines.join(
      '%0D%0A'
    )}%0D%0A%0D%0AEmail: ${email}`;
    return `mailto:contact@eveyens.com?subject=Synthese%20diagnostic%20temps%20collectifs&body=${body}`;
  }, [answers, email, totalScore]);

  const wheelGradient =
    'conic-gradient(#ff6a33 0deg 51deg, #ff8f5e 51deg 102deg, #ffb08a 102deg 153deg, #ffd0b3 153deg 204deg, #ffb08a 204deg 255deg, #ff8f5e 255deg 306deg, #ff6a33 306deg 360deg)';

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO
        title="Votre diagnostic interactif | Eveyens"
        description="Réalisez votre diagnostic interactif des temps collectifs en 7 thèmes, puis obtenez un résultat immédiat et une synthèse par email."
      />

      <section className="bg-gradient-to-b from-[#fff5ef] to-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/diagnostic-temps-collectifs"
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#ff6a33]"
          >
            <ArrowLeft size={16} />
            Retour à la présentation
          </Link>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#ff6a33]">Expérience interactive</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold text-gray-900 md:text-4xl">
            Le cercle des 7 thèmes de vos temps collectifs
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-700">
            Cliquez sur chaque segment du cercle, répondez en quelques secondes, puis déverrouillez le bouton central
            pour obtenir vos résultats.
          </p>
          <div className="mt-6 max-w-xl">
            <div className="h-2 w-full rounded-full bg-white shadow-inner">
              <div
                className="h-2 rounded-full bg-[#ff6a33] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">{answeredCount}/7 thèmes complétés</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#ffd6c2] bg-white p-6 shadow-sm">
              <div className="mx-auto flex items-center justify-center">
                <div
                  className="relative h-[320px] w-[320px] rounded-full sm:h-[420px] sm:w-[420px] lg:h-[460px] lg:w-[460px]"
                  style={{ background: wheelGradient }}
                >
                  {questions.map((question, index) => {
                    const angle = (index * 360) / questions.length - 90;
                    const radians = (angle * Math.PI) / 180;
                    const radius = 40;
                    const x = 50 + radius * Math.cos(radians);
                    const y = 50 + radius * Math.sin(radians);
                    const answered = Boolean(answers[question.id]);
                    const active = activeThemeId === question.id;

                    return (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => setActiveThemeId(question.id)}
                        className={`absolute flex max-w-[130px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full border-2 px-3 py-2 text-center text-xs font-semibold shadow transition hover:scale-105 ${
                          answered
                            ? 'border-green-400 bg-white text-green-700'
                            : active
                              ? 'border-[#ff6a33] bg-white text-[#ff6a33]'
                              : 'border-white/70 bg-white/95 text-gray-700'
                        }`}
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <span className="text-[10px] uppercase tracking-wider text-gray-400">Thème {question.id}</span>
                        <span>{answered ? 'Complété' : question.theme}</span>
                      </button>
                    );
                  })}

                  <div className="absolute left-1/2 top-1/2 flex h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-5 text-center shadow-lg">
                    <button
                      type="button"
                      onClick={handleShowResults}
                      disabled={!allAnswered}
                      className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                        allAnswered
                          ? 'bg-[#ff6a33] text-white hover:opacity-90'
                          : 'cursor-not-allowed bg-gray-100 text-gray-400'
                      }`}
                    >
                      Obtenir les résultats
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-gray-500">
                Cliquez sur chaque segment pour accéder à la question correspondante.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#ff6a33]">
                Thème {activeQuestion.id}/7 · {activeQuestion.theme}
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                {activeQuestion.question}
              </h2>

              <div className="mt-6 space-y-3">
                {activeQuestion.answers.map((answer) => (
                  <button
                    key={answer.value}
                    type="button"
                    onClick={() => handleAnswer(activeQuestion.id, answer.value)}
                    className={`flex w-full items-start gap-3 rounded-xl border px-4 py-4 text-left text-gray-700 transition ${
                      activeAnswer === answer.value
                        ? 'border-[#ff6a33] bg-[#fff5ef] ring-2 ring-[#ff6a33]/20'
                        : 'border-gray-200 bg-white hover:border-[#ff6a33] hover:bg-[#fff5ef]'
                    }`}
                  >
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                        activeAnswer === answer.value ? 'bg-[#ff6a33]' : 'bg-gray-400'
                      }`}
                    >
                      {answer.value}
                    </span>
                    <span>{answer.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500">
                <div className="flex flex-wrap gap-2">
                  {questions.map((question) => (
                    <button
                      key={question.id}
                      type="button"
                      onClick={() => setActiveThemeId(question.id)}
                      className={`h-8 w-8 rounded-full text-xs font-bold transition ${
                        answers[question.id]
                          ? 'bg-green-100 text-green-700'
                          : activeThemeId === question.id
                            ? 'bg-[#ff6a33] text-white'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {question.id}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 font-semibold text-gray-500 hover:text-[#ff6a33]"
                >
                  <RotateCcw size={14} />
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>

          {showResults && (
            <div
              id="diagnostic-resultat"
              className={`mt-10 rounded-3xl border p-8 shadow-sm ${result.card}`}
            >
              <p className={`text-sm font-semibold uppercase tracking-wider ${result.accent}`}>Votre résultat</p>
              <h2 className={`mt-2 text-3xl font-bold ${result.accent}`}>{result.level}</h2>
              <p className="mt-2 text-gray-700">Score global : {totalScore}/14</p>
              <p className="mt-4 text-lg font-semibold text-gray-900">{result.firstLook}</p>
              <p className="mt-3 text-gray-700">{result.message}</p>
              <p className="mt-3 text-gray-700">{result.risk}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff6a33] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  <CheckCircle2 size={18} />
                  Parler de mon diagnostic avec Eveyens
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <RotateCcw size={16} />
                  Refaire le diagnostic
                </button>
              </div>

              <div className="mt-8 rounded-2xl border border-[#ffd6c2] bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900">Recevoir une synthèse plus poussée</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Entrez votre email pour obtenir une lecture approfondie de vos forces, vos zones de risque et vos
                  priorités d'action.
                </p>
                <form onSubmit={handleEmailSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="votre@email.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-[#ff6a33] focus:outline-none focus:ring-2 focus:ring-[#ff6a33]/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:opacity-90"
                  >
                    <Mail size={16} />
                    Recevoir ma synthèse
                  </button>
                </form>
                {emailSubmitted && (
                  <div className="mt-3 rounded-lg border border-[#ffd6c2] bg-[#fff5ef] p-3 text-sm text-gray-800">
                    Votre synthèse est prête. Cliquez ici pour finaliser l'envoi :{' '}
                    <a href={mailtoSummary} className="font-semibold text-[#ff6a33] underline">
                      envoyer ma demande
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <p className="text-gray-600">Vous préférez échanger directement ?</p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#ff6a33] px-6 py-3 font-semibold text-[#ff6a33] transition hover:bg-[#ff6a33] hover:text-white"
            >
              Prendre rendez-vous avec Eveyens
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
