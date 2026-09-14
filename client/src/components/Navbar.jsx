import React, { useState, useEffect, useRef } from 'react';
import { Container, Button } from './ui';
import { Menu, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const navLinks = [
  { label: 'How It Works', href: '#split-architecture' },
  { label: 'Locations', href: '#active-nodes' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const [dotStyle, setDotStyle] = useState({ left: 0, width: 5, opacity: 0 });
  const navRefs = useRef({});
  const prevLeft = useRef(null);
  const animTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY < 100) setActiveSection('logo');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (window.scrollY < 100) setActiveSection('logo');
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 100) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-10% 0px -40% 0px', threshold: 0.1 }
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScrollEnd = () => {
      const atBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 100);
      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].href);
      }
    };
    window.addEventListener('scroll', onScrollEnd, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollEnd);
    };
  }, []);

  // Two-phase fluid animation: stretch → compress
  useEffect(() => {
    const activeEl = navRefs.current[activeSection];
    if (!activeEl) return;

    const DOT = 5;
    const center = activeEl.offsetLeft + (activeEl.offsetWidth / 2);
    const newLeft = center - (DOT / 2);

    if (animTimer.current) clearTimeout(animTimer.current);

    // First render — just place it, no animation
    if (prevLeft.current === null) {
      prevLeft.current = newLeft;
      setDotStyle({ left: newLeft, width: DOT, opacity: 1 });
      return;
    }

    const oldLeft = prevLeft.current;
    prevLeft.current = newLeft;

    // Phase 1: Stretch from old position to new position
    const stretchLeft = Math.min(oldLeft, newLeft);
    const stretchWidth = Math.abs(newLeft - oldLeft) + DOT;
    setDotStyle({ left: stretchLeft, width: stretchWidth, opacity: 1 });

    // Phase 2: After stretch completes, compress to dot at new position
    animTimer.current = setTimeout(() => {
      setDotStyle({ left: newLeft, width: DOT, opacity: 1 });
    }, 280);

    return () => { if (animTimer.current) clearTimeout(animTimer.current); };
  }, [activeSection]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={[
        'sticky top-0 z-50 bg-concrete-white border-b border-slate-border',
        scrolled ? 'bg-concrete-white/95 backdrop-blur-sm' : '',
      ].join(' ')}
    >
      <Container className="flex items-center justify-between h-16 relative">
        
        {/* Desktop nav container for alignment */}
        <div className="flex items-center gap-8 relative h-full">
          {/* Fluid Elastic Dot Indicator */}
          <div 
            className="hidden lg:block absolute bottom-3 h-[5px] bg-ink rounded-full"
            style={{
              ...dotStyle,
              transition: 'left 0.28s cubic-bezier(0.4, 0, 0.2, 1), width 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />

          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 cursor-pointer z-10"
            ref={el => navRefs.current['logo'] = el}
            onClick={() => setActiveSection('logo')}
          >
            <img src="/logo.png" alt="LeftRight Media Logo" className="w-7 h-7 object-contain" />
            <span className="font-display font-bold text-lg tracking-tight">
              LeftRight Media
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                ref={el => navRefs.current[link.href] = el}
                className={[
                  'text-body-md transition-colors duration-200 z-10 flex items-center h-full',
                  activeSection === link.href ? 'text-ink font-semibold' : 'text-ink-muted hover:text-ink'
                ].join(' ')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" href="#lead-form" onClick={() => trackEvent('cta_click', { placement: 'navbar', type: 'host' })}>
            List Your Screen
          </Button>
          <Button variant="solid" size="sm" href="#lead-form" onClick={() => trackEvent('cta_click', { placement: 'navbar', type: 'advertiser' })}>
            Run an Ad
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 text-ink-muted hover:text-ink transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-concrete-white animate-in fade-in slide-in-from-top-2 duration-300">
          <Container className="py-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-headline-sm py-3 border-b border-slate-border"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4">
              <Button 
                variant="solid" 
                size="lg" 
                href="#lead-form" 
                onClick={() => {
                  setMobileOpen(false);
                  trackEvent('cta_click', { placement: 'mobile_nav', type: 'advertiser' });
                }}
              >
                Explore Ad Inventory
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="#lead-form" 
                onClick={() => {
                  setMobileOpen(false);
                  trackEvent('cta_click', { placement: 'mobile_nav', type: 'host' });
                }}
              >
                Monetize Your Screen
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
