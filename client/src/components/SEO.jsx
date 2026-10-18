import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'LeftRightMedia — Digital Advertising, Connected to the Physical World';
const DEFAULT_DESC = 'LeftRightMedia connects brands with audiences through digital advertising networks across physical locations and events in Gujarat and India.';
const BASE_URL = 'https://leftrightmedia.in';

export default function SEO({
  title,
  description = DEFAULT_DESC,
  canonical,
  schema,
  ogType = 'website',
  ogImage = 'https://leftrightmedia.in/og-image.jpg',
}) {
  const location = useLocation();
  const currentUrl = canonical || `${BASE_URL}${location.pathname === '/' ? '' : location.pathname}`;
  const fullTitle = title ? `${title} | LeftRightMedia` : DEFAULT_TITLE;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set/create meta tag
    const setMeta = (nameAttr, nameValue, content) => {
      let el = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, nameValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'twitter:title', fullTitle);
    setMeta('property', 'twitter:description', description);
    setMeta('property', 'twitter:image', ogImage);

    // 3. Update Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 4. Inject or update JSON-LD Schema
    const scriptId = 'page-structured-data';
    let scriptEl = document.getElementById(scriptId);
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [fullTitle, description, currentUrl, ogType, ogImage, schema]);

  return null;
}
