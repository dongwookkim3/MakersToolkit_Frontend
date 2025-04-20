
import React from 'react';

interface AnimatedPlanetProps {
  size?: string;
  colorClass: string;
  animationDelay?: string;
}

const AnimatedPlanet: React.FC<AnimatedPlanetProps> = ({
  size = 'w-32 h-32',
  colorClass,
  animationDelay = '0s'
}) => {
  return (
    <div 
      className={`rounded-full bg-gradient-to-br ${colorClass} ${size} spinning`}
      style={{ animationDelay }}
    >
      <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-sm" />
    </div>
  );
};

export default AnimatedPlanet;
