
import React from 'react';

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950" />
      
      {/* Animated circles with smoother transitions */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl smooth-floating" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl smooth-floating" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl smooth-pulsing" style={{ animationDelay: '-2s' }} />
      
      {/* Additional circles for more continuous movement */}
      <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-indigo-500/15 rounded-full blur-2xl smooth-floating" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl smooth-floating" style={{ animationDelay: '-1s' }} />
      
      {/* Improved wave effect with smoother transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-30">
        <div className="absolute inset-0 smooth-wave cosmic-gradient" />
        <div className="absolute inset-0 smooth-wave cosmic-gradient" style={{ animationDelay: '-2.5s', opacity: 0.7 }} />
        <div className="absolute inset-0 smooth-wave cosmic-gradient" style={{ animationDelay: '-5s', opacity: 0.4 }} />
        <div className="absolute inset-0 smooth-wave cosmic-gradient" style={{ animationDelay: '-7.5s', opacity: 0.6 }} />
      </div>
      
      {/* StarField overlay for additional visual interest */}
      <div className="absolute inset-0 opacity-70">
        <StarField />
      </div>
    </div>
  );
};

// Add StarField component inline
const StarField = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white animate-twinkle-smooth"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.7 + 0.3,
            animationDelay: `-${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 4 + 6}s`
          }}
        />
      ))}
    </div>
  );
};

export default DynamicBackground;
