
import React from 'react';

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl pulsing" style={{ animationDelay: '-1s' }} />
      
      {/* Wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-30">
        <div className="absolute inset-0 wave cosmic-gradient" />
        <div className="absolute inset-0 wave cosmic-gradient" style={{ animationDelay: '-2s', opacity: 0.7 }} />
        <div className="absolute inset-0 wave cosmic-gradient" style={{ animationDelay: '-4s', opacity: 0.4 }} />
      </div>
    </div>
  );
};

export default DynamicBackground;
