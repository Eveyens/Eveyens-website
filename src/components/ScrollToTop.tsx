import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Réinitialise le scroll à chaque navigation.
 *
 * - useLayoutEffect : reset synchrone avant le paint (évite le flash visuel).
 * - useEffect + requestAnimationFrame : second reset après le paint, au cas où le
 *   navigateur restaurerait une position quand la nouvelle page atteint sa
 *   hauteur cible (cause classique du "scroll qui colle" en SPA).
 *
 * scrollRestoration = 'manual' : empêche le navigateur de réappliquer sa propre
 * position de scroll par-dessus la nôtre.
 *
 * On scrolle window + documentElement + body + #root pour couvrir tous les
 * cas selon le scrolling element du document.
 *
 * Les ancres internes (#section) sont respectées.
 */
function resetScroll(): void {
  if (typeof window === 'undefined') return;
  window.scrollTo(0, 0);
  if (document.scrollingElement) {
    document.scrollingElement.scrollTop = 0;
    document.scrollingElement.scrollLeft = 0;
  }
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const root = document.getElementById('root');
  if (root) {
    root.scrollTop = 0;
  }
}

export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) return;
    resetScroll();
  }, [pathname, search, hash]);

  useEffect(() => {
    if (typeof window === 'undefined' || hash) return;
    const id = window.requestAnimationFrame(resetScroll);
    return () => window.cancelAnimationFrame(id);
  }, [pathname, search, hash]);

  return null;
}
