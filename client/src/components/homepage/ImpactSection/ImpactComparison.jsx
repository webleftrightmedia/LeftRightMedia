import React, { useEffect, useRef, useState } from 'react';
import WithoutNetworkPanel from './WithoutNetworkPanel';
import WithLRMPanel from './WithLRMPanel';

export default function ImpactComparison() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full flex flex-col lg:flex-row rounded-3xl border border-slate-border shadow-2xl bg-white isolate" style={{overflow: 'visible'}}>
      
      {/* VS Badge — at panel join on mobile, center on desktop */}
      <div className="absolute bottom-[calc(50%-24px)] lg:top-1/2 left-1/2 lg:left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-ink shadow-[0_0_20px_rgba(0,0,0,0.15)] border border-slate-100 lg:w-16 lg:h-16 lg:text-xl transition-all duration-700 delay-500">
        VS
      </div>
      
      <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-border rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden">
        <WithoutNetworkPanel inView={inView} />
      </div>
      
      <div className="w-full lg:w-1/2 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none overflow-hidden">
        <WithLRMPanel inView={inView} />
      </div>

    </div>
  );
}
