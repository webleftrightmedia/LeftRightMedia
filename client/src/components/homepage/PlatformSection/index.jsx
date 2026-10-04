import React, { useState, useEffect, useRef } from 'react';
import { CloudUpload, Layers, Activity, ArrowRight } from 'lucide-react';
import { Container, Button, SectionLabel, Logo } from '../../ui';
import CampaignCard from './CampaignCard';
import PlatformDashboard from './PlatformDashboard';
import NetworkMap from './NetworkMap';
import LocationScreen from './LocationScreen';
import MobileLocationRow from './MobileLocationRow';
import { locations } from './SharedData';

import heroCafe from '../../../assets/hero-cafe.png';
import panelRetail from '../../../assets/panel-retail.png';
import panelCommercial from '../../../assets/panel-commercial.png';
import panelEvent from '../../../assets/panel-event.png';
import panelTaxi from '../../../assets/panel-taxi.png';
import panelPublicSpace from '../../../assets/panel-public-space.png';

const imageMap = {
  cafe: heroCafe,
  retail: panelRetail,
  commercial: panelCommercial,
  events: panelEvent,
  taxis: panelTaxi,
  "public-spaces": panelPublicSpace,
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-green-50 p-2.5 rounded-lg text-[#34C759] mt-0.5 shadow-sm border border-green-100">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-ink text-sm uppercase tracking-wider">{title}</h4>
      <p className="text-sm text-ink-muted mt-1">{desc}</p>
    </div>
  </div>
);

const DesktopLocationScreen = ({ loc, phase }) => {
  const [isScreenActive, setIsScreenActive] = useState(false);
  
  useEffect(() => {
    if (phase === 5) {
      const t = setTimeout(() => setIsScreenActive(true), loc.animationDelay);
      return () => clearTimeout(t);
    }
    if (phase > 5) {
       setIsScreenActive(true);
    }
  }, [phase, loc.animationDelay]);

  return (
    <LocationScreen 
      loc={loc} 
      bgImage={imageMap[loc.type]} 
      isActive={isScreenActive} 
    />
  );
};

const MobileLocationScreen = ({ loc, phase }) => {
  const [isScreenActive, setIsScreenActive] = useState(false);

  useEffect(() => {
    if (phase === 5) {
      const t = setTimeout(() => setIsScreenActive(true), loc.animationDelay);
      return () => clearTimeout(t);
    }
    if (phase > 5) {
       setIsScreenActive(true);
    }
  }, [phase, loc.animationDelay]);

  return (
    <MobileLocationRow 
      loc={loc} 
      bgImage={imageMap[loc.type]} 
      isActive={isScreenActive} 
    />
  );
};

export default function PlatformSection() {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && phase === 0) {
          setPhase(1);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === 1) {
      const t1 = setTimeout(() => setPhase(2), 400);
      return () => clearTimeout(t1);
    }
    if (phase === 2) {
      const t2 = setTimeout(() => setPhase(3), 400);
      return () => clearTimeout(t2);
    }
    if (phase === 3) {
      const t3 = setTimeout(() => setPhase(4), 400);
      return () => clearTimeout(t3);
    }
    if (phase === 4) {
      const t4 = setTimeout(() => setPhase(5), 300);
      return () => clearTimeout(t4);
    }
    if (phase === 5) {
      const t5 = setTimeout(() => setPhase(6), 800);
      return () => clearTimeout(t5);
    }
    if (phase === 6) {
      const t6 = setTimeout(() => setPhase(7), 500);
      return () => clearTimeout(t6);
    }
  }, [phase]);

  return (
    <section ref={sectionRef} className="relative bg-concrete-white py-12 lg:py-16 border-b border-slate-border overflow-x-hidden">
      <style>{`
        @keyframes flow {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        .signal-line {
          animation: flow 1s linear infinite;
        }
      `}</style>
      
      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* LEFT CONTENT */}
          <div className="col-span-1 lg:col-span-4 flex flex-col justify-center relative z-40">
            <SectionLabel>THE PLATFORM</SectionLabel>
            
            <h2 className="text-display-mobile lg:text-display leading-tight mt-6">
              One Campaign.<br />
              <span className="text-[#34C759]">Infinite</span><br/>
              Possibilities.
            </h2>
            
            <p className="text-body-lg text-ink-muted mt-6 max-w-md">
              Create your campaign once and deploy it across our connected network of screens — reaching the right people in the places that matter.
            </p>

            {/* Capability Statements */}
            <div className="mt-10 flex flex-col gap-8">
              <Feature 
                icon={<CloudUpload size={20} />} 
                title="Upload Your Campaign" 
                desc="Images, videos or custom creatives." 
              />
              <Feature 
                icon={<Layers size={20} />} 
                title="We Optimize & Schedule" 
                desc="Right places. Right times. Maximum reach." 
              />
              <Feature 
                icon={<Activity size={20} />} 
                title="Go Live Across the City" 
                desc="Your campaign on multiple screens." 
              />
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <Button variant="solid" size="lg" className="w-full sm:w-auto">Run an Ad Campaign →</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">List Your Screen — Free</Button>
            </div>
          </div>

          {/* RIGHT VISUAL STAGE (DESKTOP) */}
          <div className="hidden lg:block col-span-8 relative min-h-[600px]">
            
            <NetworkMap showLines={phase >= 4} />
            
            <CampaignCard isActive={phase >= 1} showConnection={phase >= 2} className="absolute top-[48%] -translate-y-1/2 left-[0%] xl:left-[2%] z-40" />
            
            <div className="absolute top-[48%] left-[20%] xl:left-[23%] -translate-y-1/2 z-30 scale-[0.80] xl:scale-[0.85] origin-left">
              <PlatformDashboard isLive={phase >= 3} />
            </div>

            {/* Distributed Screens in the City */}
            {locations.map((loc) => (
              <DesktopLocationScreen key={loc.id} loc={loc} phase={phase} />
            ))}
          </div>

          {/* MOBILE VISUAL STAGE */}
          <div className="block lg:hidden col-span-1 mt-12 flex flex-col items-center">
            
            {/* Campaign Card */}
            <div className="relative mb-12 w-full flex justify-center">
               <CampaignCard isActive={phase >= 1} showConnection={false} className="relative mx-auto" />
               <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-[#34C759] flex flex-col items-center transition-opacity duration-500 delay-300 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="h-6 border-l border-[#34C759] border-dashed mb-1"></div>
                 <ArrowRight size={24} strokeWidth={1.5} className="animate-pulse transform rotate-90" />
               </div>
            </div>
            
            {/* Platform Dashboard */}
            <div className="w-full mb-12 relative z-20">
               <PlatformDashboard isLive={phase >= 3} />
            </div>
            
            {/* City Network & Location Screens */}
            <div className="w-full bg-slate-50/50 rounded-2xl p-4 border border-slate-border">
              <div className="text-center mb-6">
                <h3 className="text-sm font-bold text-ink uppercase tracking-widest">Network Live Stream</h3>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide -mx-4 px-4">
                {locations.map(loc => (
                  <div className="snap-center shrink-0 w-64" key={loc.id}>
                    <MobileLocationScreen loc={loc} phase={phase} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
        
        {/* SECTION BOTTOM CLOSING */}
        <div className="mt-12 lg:mt-16 text-center relative z-20 max-w-xl mx-auto pb-8">
          <p className="text-xl lg:text-2xl font-light text-ink tracking-wide leading-relaxed">
            Don't think screen by screen.<br/>
            <span className="font-bold text-ink">Think network.</span>
          </p>
        </div>
        
      </Container>
    </section>
  );
}
