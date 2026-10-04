import React from 'react';
import { MapPin } from 'lucide-react';
import cityBase from '../../../assets/city-base.png';
import { locations } from './SharedData';

const NetworkMap = ({ showLines }) => (
  <>
    {/* The City Map Background (overflows right) */}
    <div className="absolute top-0 -right-[20vw] w-[120%] h-[110%] -mt-[5%] z-0 rounded-3xl overflow-hidden opacity-100">
      <div className="absolute inset-y-0 left-0 bg-concrete-white z-10 w-[40%]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-concrete-white via-concrete-white/90 to-transparent z-10 w-[60%]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-concrete-white via-transparent to-concrete-white z-10 h-full"></div>
      <img src={cityBase} alt="City Network Map" className="w-full h-full object-cover opacity-80" />
    </div>

    {/* Scattered Map Pins */}
    <div className="absolute inset-0 z-10 pointer-events-none">
      {locations.map(loc => (
        <MapPin
          key={loc.id}
          size={24}
          fill="#34C759"
          className="absolute text-white transform -translate-x-1/2 -translate-y-full drop-shadow-md"
          style={loc.pinPosition}
        />
      ))}
    </div>


    <svg
      className={`absolute inset-0 w-full h-full z-10 pointer-events-none transition-opacity duration-700 ${showLines ? 'opacity-100' : 'opacity-0'}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ overflow: 'visible' }}
    >
      <g>
        {locations.map(loc => {
          const pinX = parseInt(loc.pinPosition.left);
          const pinY = parseInt(loc.pinPosition.top);
          const cardX = parseInt(loc.cardPosition.left) + 8;
          const cardY = parseInt(loc.cardPosition.top) + 6;

          return (
            <g key={loc.id}>
              {/* Solid line: hub → map pin */}
              <line
                x1="55" y1="50"
                x2={pinX} y2={pinY}
                stroke="#34C759"
                strokeWidth="0.35"
              />
              {/* Solid line: pin → card */}
              <line
                x1={pinX} y1={pinY}
                x2={cardX} y2={cardY}
                stroke="#34C759"
                strokeWidth="0.22"
                opacity="0.75"
              />
              {/* Endpoint dot */}
              <circle cx={cardX} cy={cardY} r="0.6" fill="#34C759" />
              <circle cx={cardX} cy={cardY} r="0.25" fill="white" opacity="0.9" />
            </g>
          );
        })}
      </g>
    </svg>
  </>
);

export default NetworkMap;
