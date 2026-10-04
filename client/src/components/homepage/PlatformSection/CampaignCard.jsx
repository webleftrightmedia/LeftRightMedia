import React from 'react';
import { Image as ImageIcon, Video, Type, ArrowRight } from 'lucide-react';
import AdCreative from './AdCreative';

const CampaignCard = ({ isActive, showConnection, className = "absolute top-[20%] left-[-15%] xl:left-[-10%]" }) => (
  <div 
    className={`${className} z-40 bg-white rounded-xl shadow-2xl border border-slate-border p-2 w-[160px] flex flex-col items-center transition-all duration-700
      ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
    `}
  >
    <div className="bg-green-50 text-[#34C759] text-[9px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest absolute -top-3 shadow-sm border border-green-100">
      Your Campaign
    </div>
    
    <div className="w-full aspect-video rounded-lg overflow-hidden mt-2">
      <AdCreative />
    </div>
    
    <div className="flex gap-3 mt-3 w-full justify-center text-ink-muted pb-1">
      <ImageIcon size={12} />
      <Video size={12} />
      <Type size={12} />
    </div>
    
    {/* Pointing to dashboard */}
    <div className={`absolute top-1/2 -right-[50px] text-[#34C759] flex items-center transition-opacity duration-500 delay-300 ${showConnection ? 'opacity-100' : 'opacity-0'} hidden lg:flex`}>
      <ArrowRight size={24} strokeWidth={1.5} className="animate-pulse" />
      <div className="w-6 border-b border-[#34C759] border-dashed ml-1"></div>
    </div>
  </div>
);

export default CampaignCard;
