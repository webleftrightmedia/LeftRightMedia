import React from 'react';
import { Container, Button } from './ui';

const footerLinks = {
  Product: [
    { label: 'How It Works', href: '#split-architecture' },
    { label: 'Active Screens', href: '#active-nodes' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '#lead-form' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-concrete-white border-t border-slate-border">
      {/* CTA Banner */}
      <div className="bg-accent-secondary">
        <Container className="py-12 lg:py-16 text-center">
          <h2 className="text-headline-lg-mobile lg:text-headline-lg text-white max-w-2xl mx-auto">
            Your next customer is sitting in a café right now.
          </h2>
          <p className="text-body-lg text-white/70 mt-3 mb-8 max-w-lg mx-auto">
            Put your brand on the screen they're already watching.
            First campaign starts at just ₹500.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="signal"
              size="lg"
              href="#lead-form"
            >
              Launch Your First Ad →
            </Button>
            <a
              href="#lead-form"
              className="inline-flex items-center text-body-lg text-white/80 hover:text-white underline underline-offset-4 py-3 px-4"
            >
              or list your screen — it's free
            </a>
          </div>
        </Container>
      </div>

      {/* Footer links */}
      <Container className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="LeftRight Media Logo" className="w-7 h-7 object-contain" />
              <span className="font-display font-bold text-lg tracking-tight">
                LeftRight Media
              </span>
            </a>
            <p className="text-body-sm text-ink-muted max-w-xs">
              Turning idle screens into local ad networks
              across small-town India.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-label-lg text-ink mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-md text-ink-muted hover:text-ink transition-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-slate-border">
          <p className="text-body-sm text-ink-muted">
            © {new Date().getFullYear()} LeftRight Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://twitter.com" className="text-body-sm text-ink-muted hover:text-ink" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://linkedin.com" className="text-body-sm text-ink-muted hover:text-ink" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com" className="text-body-sm text-ink-muted hover:text-ink" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
