import React from 'react';

export default function Logo({ className = "w-7 h-7" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LeftRight Media Logo"
    >
      {/* Black rounded square background */}
      <rect width="100" height="100" rx="22" fill="#0A0A0A" />
      
      {/* Left Chevron */}
      <polygon fill="white" points="46,32 32,32 14,50 32,68 46,68 28,50" />
      
      {/* Right Chevron */}
      <polygon fill="white" points="54,32 68,32 86,50 68,68 54,68 72,50" />
    </svg>
  );
}
