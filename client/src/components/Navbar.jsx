import React, { useState, useEffect, useRef } from 'react';
import { Container, Button, Logo } from './ui';
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

  // Scroll-spy: find whichever section top is nearest above the viewport center
  useEffect(() => {
    const NAVBAR_H = 64;
    const TRIGGER = NAVBAR_H + Math.round(window.innerHeight * 0.15); // 15% below navbar

    const getActive = () => {
      if (window.scrollY < 80) {
        return 'logo';
      }

      let current = navLinks[0].href;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= TRIGGER) {
          current = link.href;
        }
      }
      return current;
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setActiveSection(getActive());
    };

    // Set on mount
    setActiveSection(getActive());
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
    <>
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
              <img src="/arrow2-removebg.png" alt="LeftRight Media Logo" className="w-7 h-7 object-contain" />
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
      </header>

      {/* Mobile overlay — outside <header> to escape backdrop-filter stacking context */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 overflow-y-auto"
          style={{
            top: '64px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255,255,255,0.96)',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
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
    </>
  );
}
