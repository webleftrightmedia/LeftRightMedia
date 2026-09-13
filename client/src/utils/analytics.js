/**
 * Google Analytics GA4 integration.
 * Reads the Measurement ID from VITE_GA_MEASUREMENT_ID env var.
 * Falls back to console logging in development.
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Inject the GA4 script tag once
if (GA_ID && typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    send_page_view: true,
  });
}

/**
 * Track a custom event.
 * @param {string} eventName - e.g. 'cta_click', 'form_submit', 'lead_captured'
 * @param {Object} eventData - Additional params like { placement, type, city }
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, eventData);
  }

  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

/**
 * Track a page view (for SPA route changes).
 * @param {string} path - The page path, e.g. '/thank-you'
 */
export const trackPageView = (path) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] page_view`, { page_path: path });
  }

  if (window.gtag && GA_ID) {
    window.gtag('config', GA_ID, { page_path: path });
  }
};
