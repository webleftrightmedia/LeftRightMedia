import React from 'react';
import { X } from 'lucide-react';
import frustratedBuyer from '../../../assets/frustrated-buyer.png';

const thoughtBubbles = [
  // Left side
  { text: "Find screen owners", className: "top-[48%] left-[28%] lg:top-[58%] lg:left-[20%]", tailDirection: "right" },
  { text: "Different pricing", className: "top-[62%] left-[22%] lg:top-[72%] lg:left-[30%]", tailDirection: "right" },
  { text: "Track performance", className: "top-[78%] left-[25%] lg:top-[86%] lg:left-[25%]", tailDirection: "right" },
  
  // Right side (kept inward on mobile to avoid overflow)
  { text: "Negotiate separately", className: "top-[54%] left-[72%] lg:top-[45%] lg:left-[75%]", tailDirection: "left" },
  { text: "Manual scheduling", className: "top-[68%] left-[68%] lg:top-[60%] lg:left-[80%]", tailDirection: "left" },
  { text: "Limited reach", className: "top-[85%] left-[65%] lg:top-[75%] lg:left-[75%]", tailDirection: "left" },
];

export default function WithoutNetworkPanel({ inView }) {
  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden flex flex-col pt-8 lg:pt-10 px-6 lg:px-10 bg-[#0a0a0c]">
      
      {/* Central Advertiser Background */}
      <div className={`absolute inset-0 w-full h-full z-0 pointer-events-none transition-opacity duration-1000 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <img src={frustratedBuyer} alt="Frustrated media buyer manually planning" className="w-full h-full object-cover object-center" />
        {/* Gradients to fade edges without hiding the person */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60 z-10"></div>
      </div>

      {/* Header Info - Glassmorphic Container */}
      <div className={`relative z-20 max-w-sm bg-white/20 backdrop-blur-lg p-6 rounded-2xl border border-white/30 shadow-2xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 bg-slate-100/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/50 mb-5 shadow-sm">
          <div className="w-4 h-4 rounded-full bg-slate-500/80 flex items-center justify-center text-white">
            <X size={10} strokeWidth={3} />
          </div>
          <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider drop-shadow-sm">Without a Network</span>
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-3 tracking-tight drop-shadow-md">
          Time consuming.<br/>
          Fragmented.<br/>
          Limited impact.
        </h3>
        
        <p className="text-[15px] text-white/90 leading-relaxed font-medium drop-shadow-sm">
          You have to manage each screen separately — different owners, different locations, different deals.
        </p>
      </div>

      {/* Thought Bubbles */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        {thoughtBubbles.map((bubble, idx) => (
          <div 
            key={idx}
            className={`absolute transition-all duration-700 ease-out ${bubble.className}`}
            style={{ 
              transform: "translate(-50%, -50%)",
              opacity: inView ? 1 : 0, transitionDelay: `${400 + idx * 150}ms`
            }}
          >
            {/* Bubble Container */}
            <div className="relative bg-white/95 backdrop-blur-sm px-4 py-2 lg:px-8 lg:py-4 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.4)] border border-white/80 z-10 scale-90 lg:scale-100 whitespace-nowrap">
                <span className="text-sm lg:text-base font-bold text-slate-800 whitespace-nowrap">{bubble.text}</span>
                {/* Speech Bubble Pointy Tail */}
                <svg 
                  className={`absolute -bottom-[10px] w-5 h-[11px] text-white/95 ${bubble.tailDirection === 'left' ? 'left-6' : 'right-6 transform scale-x-[-1]'}`} 
                  viewBox="0 0 10 10" preserveAspectRatio="none"
                >
                    <path d="M0 0 L10 0 L0 10 Z" fill="currentColor" />
                </svg>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
