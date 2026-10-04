import React, { useState, useEffect } from 'react';
import { Container, Button, SectionLabel } from '../ui';
import heroCafe from '../../assets/hero-cafe.png';
import panelRetail from '../../assets/panel-retail.png';
import panelCommercial from '../../assets/panel-commercial.png';
import panelEvent from '../../assets/panel-event.png';
import panelTaxi from '../../assets/panel-taxi.png';
import panelPublicSpace from '../../assets/panel-public-space.png';
import cityBase from '../../assets/city-base.png';

const TICKER_WORDS = [
  "accessible.",
  "visible.",
  "affordable.",
  "unignorable.",
  "frictionless.",
  "precise."
];

const stats = [
  { value: '42+', label: 'Screens Live' },
  { value: '28 Min', label: 'To Go Live' },
  { value: '11,500+', label: 'Daily Eyeballs' },
  { value: '100%', label: 'Uptime' },
];

const MobilePanel = ({ title, src }) => (
  <div className="bg-white rounded-xl shadow-md border border-slate-border overflow-hidden flex flex-col relative group">
    <div className="h-28 overflow-hidden relative">
      <img src={src} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
    <div className="absolute bottom-2.5 left-3 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_6px_rgba(52,199,89,0.8)] animate-pulse"></div>
      <span className="text-xs font-bold text-white uppercase tracking-wider drop-shadow-md">{title}</span>
    </div>
  </div>
);

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % TICKER_WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-concrete-white border-b border-slate-border overflow-hidden relative">
      <Container className="pt-4 pb-8 lg:pt-6 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left — copy */}
          <div className={`space-y-6 lg:col-span-5 z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <SectionLabel>Left Right Media</SectionLabel>

            <h1 className="text-display-mobile lg:text-display leading-tight">
              <span className="font-normal text-ink">Making advertising</span>
              <br />
              <div className="inline-grid overflow-hidden h-[1.2em] text-accent font-black uppercase">
                <div
                  className="flex flex-col"
                  style={{
                    transform: `translateY(calc(-${wordIndex} * 1.2em))`,
                    transition: 'transform 70ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  }}
                >
                  {TICKER_WORDS.map((word) => (
                    <span key={word} className="h-[1.2em] flex items-center">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </h1>

            <p className="text-body-lg text-ink-muted max-w-lg pt-2">
              Turn the entire city into your canvas — reaching people where they live, work, shop, eat, travel and gather, through a connected network of digital screens.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <Button variant="solid" size="lg" href="/advertise" className="w-full sm:w-auto">
                Run an Ad Campaign →
              </Button>
              <Button variant="outline" size="lg" href="/screen-partners" className="w-full sm:w-auto">
                List Your Screen — Free
              </Button>
              <Button variant="outline" size="lg" href="/lrm-events" className="w-full sm:w-auto">
                Explore LRM Events
              </Button>
            </div>
          </div>

          {/* Right — CITY CANVAS */}
          <div className={`relative w-full lg:col-span-7 mt-6 lg:mt-0 flex flex-col gap-8 lg:block transition-all duration-1000 translate-x-0 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Mobile Re-composition */}
            <div className="block lg:hidden relative rounded-2xl overflow-hidden mt-6 border border-slate-border shadow-sm">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-concrete-white/60 backdrop-blur-[2px] z-10"></div>
                <img src={cityBase} alt="City Canvas" className="w-full h-full object-cover grayscale-[15%] opacity-70" />
              </div>
              
              <div className="relative z-20 py-8 px-4">
                <div className="text-center mb-8 bg-white/90 backdrop-blur-md rounded-xl py-6 px-4 shadow-sm border border-slate-border/50">
                  <SectionLabel className="mb-2 mx-auto justify-center">THE NETWORK</SectionLabel>
                  <h2 className="text-2xl font-light text-ink tracking-widest uppercase leading-tight">
                    The Entire City<br/>
                    Is Your<br/>
                    <span className="font-black text-accent text-4xl mt-1 block">CANVAS.</span>
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3 relative z-20">
                  <MobilePanel title="Café" src={heroCafe} />
                  <MobilePanel title="Retail" src={panelRetail} />
                  <MobilePanel title="Commercial" src={panelCommercial} />
                  <MobilePanel title="Event" src={panelEvent} />
                  <MobilePanel title="Taxi" src={panelTaxi} />
                  <MobilePanel title="Public Space" src={panelPublicSpace} />
                </div>
              </div>
            </div>

            {/* Desktop Composition */}
            <div className="hidden lg:flex relative w-full h-[500px] xl:h-[550px] items-center justify-center">
              
              {/* Background Base Image */}
              <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-r from-concrete-white via-transparent to-transparent z-10 w-1/3"></div>
                <div className="absolute inset-0 bg-concrete-white/30 z-10 backdrop-blur-[1px]"></div>
                <img src={cityBase} alt="City Canvas" className="w-full h-full object-cover grayscale-[15%] opacity-80" />
              </div>

              {/* Connections SVG */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-50" preserveAspectRatio="none">
                <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="#ea580c" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="#ea580c" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="18%" y2="50%" stroke="#ea580c" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="82%" y2="50%" stroke="#ea580c" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="25%" y2="82%" stroke="#ea580c" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#ea580c" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="animate-pulse" />
                
                {/* Node Points */}
                <circle cx="15%" cy="20%" r="5" fill="#ea580c" opacity="0.9" />
                <circle cx="85%" cy="25%" r="5" fill="#ea580c" opacity="0.9" />
                <circle cx="18%" cy="50%" r="5" fill="#ea580c" opacity="0.9" />
                <circle cx="82%" cy="50%" r="5" fill="#ea580c" opacity="0.9" />
                <circle cx="25%" cy="82%" r="5" fill="#ea580c" opacity="0.9" />
                <circle cx="75%" cy="80%" r="5" fill="#ea580c" opacity="0.9" />
              </svg>

              {/* Central Text Box */}
              <div className="relative z-20 text-center">
                <div className="bg-white/95 backdrop-blur-md px-10 py-8 rounded-xl shadow-xl border border-slate-border">
                  <SectionLabel className="mb-4 mx-auto justify-center text-xs">THE NETWORK</SectionLabel>
                  <h2 className="text-3xl font-light text-ink tracking-widest uppercase leading-tight mb-5">
                    The Entire City<br/>
                    Is Your<br/>
                    <span className="font-black text-accent text-5xl mt-3 block">CANVAS.</span>
                  </h2>
                  <p className="mt-4 text-sm font-medium text-ink-muted leading-relaxed">
                    Every place has an audience.<br/>
                    Every screen has an opportunity.<br/>
                    We connect them.
                  </p>
                </div>
              </div>

              <div className="absolute top-[8%] left-[2%] xl:left-[5%] z-30 w-40 xl:w-44 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:z-40 shadow-lg">
                <div className="bg-white rounded-lg border border-slate-border overflow-hidden">
                  <img src={heroCafe} alt="Café" className="w-full h-20 xl:h-24 object-cover" />
                  <div className="py-2 px-3 flex items-center gap-2 bg-white border-t border-slate-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_4px_rgba(52,199,89,0.6)] animate-pulse"></div>
                    <span className="text-[10px] xl:text-xs font-bold text-ink uppercase tracking-wider">Café</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[12%] right-[2%] xl:right-[5%] z-30 w-40 xl:w-44 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:z-40 shadow-lg">
                <div className="bg-white rounded-lg border border-slate-border overflow-hidden">
                  <img src={panelEvent} alt="Event" className="w-full h-20 xl:h-24 object-cover" />
                  <div className="py-2 px-3 flex items-center gap-2 bg-white border-t border-slate-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_4px_rgba(52,199,89,0.6)] animate-pulse"></div>
                    <span className="text-[10px] xl:text-xs font-bold text-ink uppercase tracking-wider">Event</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[42%] left-[4%] xl:left-[6%] z-30 w-40 xl:w-44 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:z-40 shadow-lg">
                <div className="bg-white rounded-lg border border-slate-border overflow-hidden">
                  <img src={panelRetail} alt="Retail" className="w-full h-20 xl:h-24 object-cover" />
                  <div className="py-2 px-3 flex items-center gap-2 bg-white border-t border-slate-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_4px_rgba(52,199,89,0.6)] animate-pulse"></div>
                    <span className="text-[10px] xl:text-xs font-bold text-ink uppercase tracking-wider">Retail</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[38%] right-[4%] xl:right-[6%] z-30 w-40 xl:w-44 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:z-40 shadow-lg">
                <div className="bg-white rounded-lg border border-slate-border overflow-hidden">
                  <img src={panelTaxi} alt="Taxi" className="w-full h-20 xl:h-24 object-cover" />
                  <div className="py-2 px-3 flex items-center gap-2 bg-white border-t border-slate-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_4px_rgba(52,199,89,0.6)] animate-pulse"></div>
                    <span className="text-[10px] xl:text-xs font-bold text-ink uppercase tracking-wider">Taxi</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[6%] left-[10%] xl:left-[14%] z-30 w-40 xl:w-44 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:z-40 shadow-lg">
                <div className="bg-white rounded-lg border border-slate-border overflow-hidden">
                  <img src={panelCommercial} alt="Commercial" className="w-full h-20 xl:h-24 object-cover" />
                  <div className="py-2 px-3 flex items-center gap-2 bg-white border-t border-slate-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_4px_rgba(52,199,89,0.6)] animate-pulse"></div>
                    <span className="text-[10px] xl:text-xs font-bold text-ink uppercase tracking-wider">Commercial</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[10%] right-[10%] xl:right-[14%] z-30 w-40 xl:w-44 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:z-40 shadow-lg">
                <div className="bg-white rounded-lg border border-slate-border overflow-hidden">
                  <img src={panelPublicSpace} alt="Public Space" className="w-full h-20 xl:h-24 object-cover" />
                  <div className="py-2 px-3 flex items-center gap-2 bg-white border-t border-slate-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_4px_rgba(52,199,89,0.6)] animate-pulse"></div>
                    <span className="text-[10px] xl:text-xs font-bold text-ink uppercase tracking-wider">Public Space</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 lg:mt-12 pt-6 border-t border-slate-border">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`transition-opacity duration-1000 delay-${i * 100} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-headline-lg tabular-nums text-accent" data-numeric>
                {stat.value}
              </p>
              <p className="text-label-md text-ink-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
