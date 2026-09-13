import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

/**
 * Captures Core Web Vitals and sends them to Google Analytics.
 * Call this once in main.jsx after the app mounts.
 */
export function reportWebVitals() {
  const sendToGA = ({ name, delta, id }) => {
    if (window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        non_interaction: true,
      });
    }

    if (import.meta.env.DEV) {
      console.log(`[WebVitals] ${name}:`, Math.round(name === 'CLS' ? delta * 1000 : delta));
    }
  };

  onCLS(sendToGA);
  onFCP(sendToGA);
  onLCP(sendToGA);
  onTTFB(sendToGA);
  onINP(sendToGA);
}
