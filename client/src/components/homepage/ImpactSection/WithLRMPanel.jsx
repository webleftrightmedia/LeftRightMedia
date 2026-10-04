import React from 'react';
import { Check, Layers, Map, Users, Clock, TrendingUp } from 'lucide-react';
import { Logo } from '../../ui';
import connectedCityNetwork from '../../../assets/connected-city-network.png';
import velocityAd from '../../../assets/velocity-ad.png';

const networkNodes = [
  { top: "15%", left: "70%", delay: 600, width: "60px", className: "hidden sm:flex" },
  { top: "40%", left: "85%", delay: 800, width: "70px", className: "flex" },
  { top: "65%", left: "30%", delay: 1000, width: "65px", className: "flex" },
  { top: "75%", left: "75%", delay: 1200, width: "65px", className: "hidden sm:flex" },
  { top: "25%", left: "90%", delay: 1400, width: "55px", className: "flex" },
];

const metrics = [
  { icon: <Layers size={16} />, label: "One campaign" },
  { icon: <Map size={16} />, label: "City-wide access" },
  { icon: <Users size={16} />, label: "Relevant audiences" },
  { icon: <Clock size={16} />, label: "Right times" },
  { icon: <TrendingUp size={16} />, label: "Bigger impact" },
];

export default function WithLRMPanel({ inView }) {
  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden flex flex-col pt-8 lg:pt-10 px-6 lg:px-10 bg-white">
      
      {/* Background Map */}
      <div className={`absolute inset-0 w-full h-full z-0 pointer-events-none transition-all duration-1000 ease-out ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
        <img src={connectedCityNetwork} alt="Connected City" className="w-full h-full object-cover object-center" />
        {/* Very subtle gradient to ensure text readability top-left */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent z-10"></div>
      </div>

      {/* Header Info - Glassmorphic Container */}
      <div className={`relative z-20 max-w-sm bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/80 shadow-lg transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-green-100 mb-5 shadow-sm">
          <div className="w-4 h-4 rounded-full bg-[#34C759] flex items-center justify-center text-white">
            <Check size={10} strokeWidth={3} />
          </div>
          <span className="text-[11px] font-bold text-[#34C759] uppercase tracking-wider">With LeftRightMedia</span>
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-black text-ink leading-[1.1] mb-3 tracking-tight drop-shadow-sm">
          One campaign. A<br/>
          connected city network.
        </h3>
        
        <p className="text-[15px] text-ink-muted leading-relaxed font-medium">
          Access multiple screen types across the city, all from one platform. Target the right audience, at the right places and times.
        </p>
      </div>

      {/* Network Hub & Nodes */}
      <div className="absolute inset-0 z-30 pointer-events-none mt-10 lg:mt-0">
        
        {/* Hub */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-[0_15px_50px_rgba(52,199,89,0.25)] border border-slate-100 p-5 flex flex-col items-center justify-center z-40 transition-all duration-700 delay-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <Logo className="w-14 h-14 text-[#ea580c] mb-2" />
          <span className="text-[11px] font-black uppercase tracking-widest text-ink mt-1">LRM Network</span>
        </div>

        {/* Connections SVG */}
        <svg className={`absolute inset-0 w-full h-full z-20 transition-opacity duration-1000 delay-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <g stroke="#34C759" strokeWidth="2" fill="none" opacity="0.7">
            {networkNodes.map((node, idx) => (
              <line 
                key={idx} 
                x1="50%" 
                y1="50%" 
                x2={node.left} 
                y2={node.top} 
                className={node.className === 'hidden sm:flex' ? 'hidden sm:block signal-line' : 'block signal-line'} 
              />
            ))}
          </g>
        </svg>

        {/* Nodes (Map Pins + Sleek Digital Screens) */}
        {networkNodes.map((node, idx) => (
          <div 
            key={idx}
            className={`absolute flex-col items-center transition-all duration-700 ease-out z-30 ${node.className}`}
            style={{ 
              top: node.top, 
              left: node.left, 
              transform: inView ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
              opacity: inView ? 1 : 0,
              transitionDelay: `${node.delay}ms`
            }}
          >
            {/* Sleek Screen Tooltip */}
            <div className="bg-white p-0.5 rounded shadow-xl border border-slate-200 relative mb-1.5" style={{ width: node.width }}>
              <img src={velocityAd} alt="Velocity Ad" className="w-full h-auto rounded-sm object-cover" />
              {/* Tooltip triangle pointing down */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-slate-200 transform rotate-45"></div>
            </div>
            
            {/* Green pin dot on the map */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#34C759] border-[2px] border-white shadow-[0_0_12px_rgba(52,199,89,0.8)] relative z-10"></div>
          </div>
        ))}
      </div>

      {/* Bottom Impact Strip */}
      <div className={`absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-slate-100 p-5 lg:p-6 flex justify-between items-center z-40 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2.5 flex-1 text-center px-1">
            <div className="text-[#34C759]">
              {metric.icon}
            </div>
            <span className="text-[9px] lg:text-[10px] font-bold text-ink uppercase tracking-wider leading-tight">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
