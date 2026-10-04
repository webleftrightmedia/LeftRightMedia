import React from 'react';
import { LayoutGrid, Monitor, MapPin, LineChart, Calendar, FileText, Map, Coffee, ShoppingBag, Building2, Ticket, Car, TreePine } from 'lucide-react';
import { Logo, Button } from '../../ui';
import AdCreative from './AdCreative';

const FilterIcon = ({ icon, label, active }) => (
  <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
    <div className={`p-2 rounded-lg transition-colors ${active ? 'bg-[#ea580c] text-white shadow-md' : 'bg-slate-50 text-ink-muted hover:bg-slate-100 border border-slate-border/50'}`}>
      {icon}
    </div>
    <span className={`text-[8px] uppercase tracking-wider font-bold ${active ? 'text-ink' : 'text-ink-muted group-hover:text-ink'}`}>
      {label}
    </span>
  </div>
);

const PlatformDashboard = ({ isLive = true }) => {
  return (
    <div className="relative z-30 w-full max-w-[540px] mx-auto bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-border p-4 sm:p-5 flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-border/50 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Logo className="h-4 w-auto text-ink" />
          <span className="text-xs font-bold tracking-tight text-ink">LeftRight Media</span>
        </div>
        <div className="text-[10px] text-ink-muted font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-200">⌘K</div>
      </div>

      {/* Main Body */}
      <div className="flex gap-4 sm:gap-5">
        {/* Left Nav */}
        <div className="hidden sm:flex w-24 flex-col gap-1.5 text-[10px] font-bold text-ink-muted uppercase tracking-wider">
          <div className="bg-ink text-white px-2 py-2 rounded-lg flex items-center gap-2 shadow-sm"><LayoutGrid size={14}/> Campaigns</div>
          <div className="px-2 py-2 hover:bg-slate-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"><Monitor size={14}/> Screens</div>
          <div className="px-2 py-2 hover:bg-slate-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"><MapPin size={14}/> Locations</div>
          <div className="px-2 py-2 hover:bg-slate-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"><LineChart size={14}/> Analytics</div>
          <div className="px-2 py-2 hover:bg-slate-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"><Calendar size={14}/> Schedule</div>
          <div className="px-2 py-2 hover:bg-slate-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"><FileText size={14}/> Reports</div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-ink text-lg">Your Campaign</h3>
              {isLive ? (
                <div className="flex items-center gap-1.5 bg-green-50 text-[#34C759] text-[10px] px-2 py-0.5 rounded-full border border-green-100 font-bold uppercase tracking-wider transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse"></div>
                  Live
                </div>
              ) : (
                <div className="flex items-center gap-1.5 bg-slate-50 text-ink-muted text-[10px] px-2 py-0.5 rounded-full border border-slate-200 font-bold uppercase tracking-wider transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  Draft
                </div>
              )}
            </div>
            <Button variant="solid" size="sm" className="h-7 text-[10px] px-3 py-0 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-md">Deploy to Network →</Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
            {/* Campaign Preview */}
            <div className="w-full sm:w-[180px] aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-border p-0.5 bg-white shrink-0">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                 <AdCreative />
              </div>
            </div>
            
            {/* Metrics */}
            <div className="flex sm:flex-col justify-between py-1 gap-2 sm:gap-0">
              <div className="flex-1">
                <div className="font-black text-xl sm:text-2xl leading-none text-ink">42</div>
                <div className="text-[8px] sm:text-[9px] text-ink-muted uppercase tracking-widest mt-1">Screens Live</div>
              </div>
              <div className="flex-1">
                <div className="font-black text-xl sm:text-2xl leading-none text-ink">12</div>
                <div className="text-[8px] sm:text-[9px] text-ink-muted uppercase tracking-widest mt-1">Locations</div>
              </div>
              <div className="flex-1">
                <div className="font-black text-xl sm:text-2xl leading-none text-ink">125K+</div>
                <div className="text-[8px] sm:text-[9px] text-ink-muted uppercase tracking-widest mt-1">Est. Daily Reach</div>
              </div>
            </div>
          </div>

          {/* Location Filters */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-border/50">
            <div className="text-[10px] font-bold text-ink mb-3 uppercase tracking-widest">Select Locations</div>
            <div className="flex items-center gap-3 sm:justify-between overflow-x-auto pb-2 scrollbar-hide snap-x">
              <div className="snap-start shrink-0"><FilterIcon icon={<Map size={16}/>} label="All" active /></div>
              <div className="snap-start shrink-0"><FilterIcon icon={<Coffee size={16}/>} label="Cafés" /></div>
              <div className="snap-start shrink-0"><FilterIcon icon={<ShoppingBag size={16}/>} label="Retail" /></div>
              <div className="snap-start shrink-0"><FilterIcon icon={<Building2 size={16}/>} label="Commercial" /></div>
              <div className="snap-start shrink-0"><FilterIcon icon={<Ticket size={16}/>} label="Events" /></div>
              <div className="snap-start shrink-0"><FilterIcon icon={<Car size={16}/>} label="Taxis" /></div>
              <div className="snap-start shrink-0"><FilterIcon icon={<TreePine size={16}/>} label="Public Spaces" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDashboard;
