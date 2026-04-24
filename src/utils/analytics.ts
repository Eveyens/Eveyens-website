import { useEffect, useRef } from 'react';

/**
 * Couche tracking unifiée pour le funnel diagnostic.
 *
 * Sorties :
 * 1. window.dataLayer (Google Tag Manager déjà chargé dans index.html).
 * 2. console.debug en développement pour faciliter la mise au point.
 * 3. POST keepalive vers VITE_ANALYTICS_WEBHOOK_URL si renseigné (optionnel,
 *    pratique pour brancher n8n / Slack / sheet sans dépendre de GA4).
 *
 * Important : ce module est tolérant aux erreurs (jamais throw) pour ne jamais
 * casser le parcours utilisateur si GTM est bloqué (adblock) ou le webhook KO.
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/** Évènements typés du funnel diagnostic. */
export type DiagnosticEvent =
  | { event: 'diagnostic_landing_view' }
  | { event: 'diagnostic_landing_cta_click'; cta_position: 'hero' | 'couts' | 'etapes' | 'final' }
  | { event: 'diagnostic_experience_view' }
  | { event: 'diagnostic_question_answered'; question_id: number; answer: 'A' | 'B' | 'C'; theme: string }
  | { event: 'diagnostic_results_shown'; score: number; level: string }
  | { event: 'diagnostic_email_submitted'; status: 'success' | 'error'; score: number; level: string }
  | { event: 'diagnostic_calendly_click'; level?: string; score?: number }
  | { event: 'diagnostic_diagnostic_reset' };

const STORAGE_KEY = 'eveyens_session_id';
const ANALYTICS_WEBHOOK_URL = import.meta.env.VITE_ANALYTICS_WEBHOOK_URL as string | undefined;
const IS_DEV = import.meta.env.DEV;

function getSessionId(): string {
  if (typeof window === 'undefined') {
    return 'ssr';
  }
  try {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    if (existing) return existing;
    const fresh = `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
    window.sessionStorage.setItem(STORAGE_KEY, fresh);
    return fresh;
  } catch {
    return 'no-storage';
  }
}

function pushToDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  try {
    window.dataLayer.push(payload);
  } catch {
    // ignore : dataLayer peut être figé par un consent manager
  }
}

function sendToWebhook(payload: Record<string, unknown>): void {
  if (!ANALYTICS_WEBHOOK_URL || typeof window === 'undefined') return;
  const body = JSON.stringify(payload);
  try {
    if ('sendBeacon' in navigator) {
      const blob = new Blob([body], { type: 'application/json' });
      const ok = navigator.sendBeacon(ANALYTICS_WEBHOOK_URL, blob);
      if (ok) return;
    }
    void fetch(ANALYTICS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // silencieux
  }
}

/** Envoie un évènement vers GTM, console (dev), et webhook (si configuré). */
export function trackEvent(payload: DiagnosticEvent): void {
  const enriched = {
    ...payload,
    session_id: getSessionId(),
    page_path: typeof window !== 'undefined' ? window.location.pathname + window.location.search : undefined,
    page_referrer: typeof document !== 'undefined' ? document.referrer || undefined : undefined,
    ts: new Date().toISOString(),
  };

  if (IS_DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', enriched.event, enriched);
  }

  pushToDataLayer(enriched);
  sendToWebhook(enriched);
}

/** Hook : envoie un page_view une seule fois au montage de la page. */
export function usePageView(event: Extract<DiagnosticEvent, { event: 'diagnostic_landing_view' | 'diagnostic_experience_view' }>['event']): void {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    trackEvent({ event } as DiagnosticEvent);
  }, [event]);
}
