import React from 'react';
import AdCreative from './AdCreative';

const MobileLocationRow = ({ loc, bgImage, isActive }) => (
  <div className={`flex items-center gap-3 bg-white rounded-xl p-2 shadow-sm border border-slate-border transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'}`}>
    <div className="w-20 h-14 rounded-lg overflow-hidden relative shrink-0 perspective-1000">
      <img src={bgImage} alt={loc.name} className="absolute inset-0 w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-black/40"></div>

    </div>
    <div className="flex items-center gap-2">
      <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_4px_rgba(52,199,89,0.8)] ${isActive ? 'bg-[#34C759] animate-pulse' : 'bg-slate-300'}`}></div>
      <span className="text-[10px] font-bold tracking-widest text-ink uppercase">{loc.name}</span>
    </div>
  </div>
);

export default MobileLocationRow;
