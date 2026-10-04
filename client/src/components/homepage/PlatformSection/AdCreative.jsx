import React from 'react';
import velocityAd from '../../../assets/velocity-ad.png';

const AdCreative = () => (
  <div className="w-full h-full relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] rounded flex items-center justify-center bg-black">
    <img 
      src={velocityAd} 
      alt="Run Further Velocity X1" 
      className="w-full h-full object-cover" 
    />
  </div>
);

export default AdCreative;
