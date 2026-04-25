import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Mail, RotateCcw } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';
import { trackEvent, usePageView } from '../utils/analytics';

type AnswerValue = 'A' | 'B' | 'C';

interface QuizQuestion {
  id: number;
  theme: string;
  question: string;
  answers: { value: AnswerValue; label: string }[];
}

const calendlyUrl = 'https://calendly.com/eveyens/rdv_mieux-vous-comprendre';
const diagnosticWebhookUrl = 'https://n8n.srv849307.hstgr.cloud/webhook/diagnostic-synthese';

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
        "Vos temps collectifs apportent des avancées, mais les effets peinent à s'installer durablement dans le quotidien des équipes.",
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

function getPriorityThemes(answers: Record<number, AnswerValue>) {
  const ranking = questions
    .map((question) => ({
      theme: question.theme,
      answer: answers[question.id],
      points: answers[question.id] ? pointsByAnswer[answers[question.id]] : 2,
    }))
    .sort((a, b) => a.points - b.points);

  const lowPriority = ranking.filter((item) => item.points === 0);
  const mediumPriority = ranking.filter((item) => item.points === 1);

  const priorities = [...lowPriority, ...mediumPriority].slice(0, 2);
  return priorities.map((item) => item.theme);
}

function getPersonalizedQuickAnalysis(
  score: number,
  answers: Record<number, AnswerValue>
) {
  const base = getResult(score);
  const priorities = getPriorityThemes(answers);

  if (priorities.length === 0) {
    return {
      ...base,
      quickFocus:
        'Vos réponses montrent une bonne homogénéité. Priorité: maintenir la régularité d\'exécution entre décisions et actions.',
    };
  }

  if (priorities.length === 1) {
    return {
      ...base,
      quickFocus: `Point de vigilance principal: ${priorities[0]}. C'est le levier prioritaire à renforcer pour augmenter l'impact de vos temps collectifs.`,
    };
  }

  return {
    ...base,
    quickFocus: `Vos 2 priorités immédiates: ${priorities[0]} et ${priorities[1]}. En les traitant en premier, vous augmentez rapidement la qualité d'impact de vos temps collectifs.`,
  };
}

export default function DiagnosticExperience() {
  usePageView('diagnostic_experience_view');

  const [activeThemeId, setActiveThemeId] = useState(1);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

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
  const result = useMemo(() => getPersonalizedQuickAnalysis(totalScore, answers), [answers, totalScore]);

  useEffect(() => {
    if (!showResults) return;
    const resultSection = document.getElementById('diagnostic-resultat');
    if (!resultSection) return;
    window.requestAnimationFrame(() => {
      resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [showResults]);

  const handleAnswer = (themeId: number, value: AnswerValue) => {
    const updated = { ...answers, [themeId]: value };
    setAnswers(updated);
    const theme = questions.find((q) => q.id === themeId)?.theme ?? '';
    trackEvent({ event: 'diagnostic_question_answered', question_id: themeId, answer: value, theme });
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
    trackEvent({ event: 'diagnostic_results_shown', score: totalScore, level: result.level });
  };

  const handleReset = () => {
    trackEvent({ event: 'diagnostic_diagnostic_reset' });
    setActiveThemeId(1);
    setAnswers({});
    setFirstName('');
    setLastName('');
    setShowResults(false);
    setEmail('');
    setSubmissionState('idle');
    setSubmissionMessage('');
  };

  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !firstName.trim() || !lastName.trim()) {
      return;
    }

    if (!diagnosticWebhookUrl) {
      setSubmissionState('error');
      setSubmissionMessage("Le webhook n'est pas configuré. Merci de réessayer plus tard.");
      return;
    }

    const webhookAnswers = questions.reduce<Record<string, AnswerValue>>((acc, question) => {
      const value = answers[question.id];
      if (value) {
        acc[`q${question.id}`] = value;
      }
      return acc;
    }, {});

    setSubmissionState('loading');
    setSubmissionMessage('');

    try {
      const response = await fetch(diagnosticWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          answers: webhookAnswers,
          score: totalScore,
          level: result.level,
        }),
      });

      if (!response.ok) {
        throw new Error('Webhook error');
      }

      setSubmissionState('success');
      setSubmissionMessage('Votre demande a bien ete envoyee. Vous recevrez votre synthese par email.');
      trackEvent({ event: 'diagnostic_email_submitted', status: 'success', score: totalScore, level: result.level });
    } catch {
      setSubmissionState('error');
      setSubmissionMessage("Une erreur est survenue lors de l'envoi. Merci de reessayer.");
      trackEvent({ event: 'diagnostic_email_submitted', status: 'error', score: totalScore, level: result.level });
    }
  };

  const segmentAngle = 360 / questions.length;
  const wheelGradient = useMemo(() => {
    const getSegmentColor = (questionId: number) => {
      const answer = answers[questionId];
      if (answer === 'A') {
        return '#22c55e';
      }
      if (answer === 'B') {
        return '#f59e0b';
      }
      if (answer === 'C') {
        return '#ef4444';
      }
      return '#ffd0b3';
    };

    const slices = questions.map((question, index) => {
      const start = index * segmentAngle;
      const end = (index + 1) * segmentAngle;
      return `${getSegmentColor(question.id)} ${start}deg ${end}deg`;
    });

    return `conic-gradient(${slices.join(', ')})`;
  }, [answers, segmentAngle]);

  return (
    <div className="min-h-screen bg-white pt-14">
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
                    const angle = (index + 0.5) * segmentAngle - 90;
                    const radians = (angle * Math.PI) / 180;
                    const radius = 36;
                    const x = 50 + radius * Math.cos(radians);
                    const y = 50 + radius * Math.sin(radians);
                    const active = activeThemeId === question.id;

                    return (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => setActiveThemeId(question.id)}
                        className={`absolute flex w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border-2 px-2 py-1.5 text-center text-[10px] font-semibold leading-tight shadow transition hover:scale-105 sm:w-[104px] lg:w-[112px] ${
                          active
                            ? 'border-[#ff6a33] bg-white text-[#ff6a33]'
                            : 'border-white/70 bg-white/95 text-gray-700'
                        }`}
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <span className="text-[9px] uppercase tracking-wider text-gray-400">Thème {question.id}</span>
                        <span>{question.theme}</span>
                      </button>
                    );
                  })}

                  {questions.map((question, index) => {
                    const angle = index * segmentAngle;
                    return (
                      <span
                        key={`separator-${question.id}`}
                        className="absolute left-1/2 top-1/2 block h-[50%] w-[2px] origin-bottom bg-white/85"
                        style={{ transform: `translate(-50%, -100%) rotate(${angle}deg)` }}
                      />
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
              <p className="mt-3 rounded-lg border border-[#ffd6c2] bg-white p-3 text-gray-700">{result.quickFocus}</p>
              <p className="mt-3 text-gray-700">{result.risk}</p>

              <div className="mt-8 rounded-2xl border border-[#ffd6c2] bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900">Recevoir ma synthèse plus poussée</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Accédez à une lecture structurée de votre diagnostic avec des leviers prioritaires, les avantages
                  attendus et un cadre clair pour passer à l&apos;action.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-gray-700">
                  <li>- Analyse structurée de vos temps collectifs</li>
                  <li>- Leviers prioritaires à activer</li>
                  <li>- Avantages attendus à court et moyen terme</li>
                </ul>
                <form onSubmit={handleEmailSubmit} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="Votre prenom"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-[#ff6a33] focus:outline-none focus:ring-2 focus:ring-[#ff6a33]/20"
                  />
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Votre nom"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-[#ff6a33] focus:outline-none focus:ring-2 focus:ring-[#ff6a33]/20"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="votre@email.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-[#ff6a33] focus:outline-none focus:ring-2 focus:ring-[#ff6a33]/20 sm:col-span-2"
                  />
                  <button
                    type="submit"
                    disabled={submissionState === 'loading'}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                  >
                    <Mail size={16} />
                    {submissionState === 'loading' ? 'Envoi en cours...' : 'Recevoir ma synthèse'}
                  </button>
                </form>
                <p className="mt-2 text-xs text-gray-500">Envoi par email en quelques instants.</p>
                {submissionState !== 'idle' && submissionMessage && (
                  <div className="mt-3 rounded-lg border border-[#ffd6c2] bg-[#fff5ef] p-3 text-sm text-gray-800">
                    {submissionMessage}
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() =>
                    trackEvent({
                      event: 'diagnostic_calendly_click',
                      score: totalScore,
                      level: result.level,
                    })
                  }
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
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
