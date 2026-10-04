import React from 'react';
import AdCreative from './AdCreative';

const LocationScreen = ({ loc, bgImage, isActive }) => (
  <div 
    className={`absolute z-30 shadow-2xl rounded-xl overflow-visible transition-all duration-700 hover:scale-105 hover:z-50 group hidden lg:block
      ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
    `} 
    style={loc.cardPosition}
  >
    {/* Attached Header Tag */}
    <div className="absolute -top-3 left-3 bg-white shadow-md rounded-full px-2.5 py-1 flex items-center gap-1.5 z-40 border border-slate-border">
      <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_4px_rgba(52,199,89,0.8)] ${isActive ? 'bg-[#34C759] animate-pulse' : 'bg-slate-300'}`}></div>
      <span className="text-[9px] font-bold tracking-widest text-ink uppercase leading-none">{loc.name}</span>
    </div>
    
    <div className="relative w-[150px] h-[95px] xl:w-[180px] xl:h-[110px] rounded-xl overflow-hidden border-[3px] border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] perspective-1000">
      {/* Environment Background */}
      <img src={bgImage} alt={loc.name} className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      

    </div>
  </div>
);

export default LocationScreen;
