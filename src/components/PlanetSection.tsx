
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const planetData = [
  {
    id: 1,
    name: 'Terra Nova',
    description: 'An Earth-like exoplanet with vast oceans and flourishing ecosystems.',
    color: 'from-blue-500 to-green-500',
    size: 'w-24 h-24 md:w-32 md:h-32'
  },
  {
    id: 2,
    name: 'Pyronis',
    description: 'A volcanic world with rivers of molten lava and sulfuric atmosphere.',
    color: 'from-red-600 to-orange-500',
    size: 'w-20 h-20 md:w-28 md:h-28'
  },
  {
    id: 3,
    name: 'Glacius',
    description: 'An ice giant with frozen methane clouds and diamond rainfall.',
    color: 'from-cyan-300 to-blue-300',
    size: 'w-28 h-28 md:w-36 md:h-36'
  },
  {
    id: 4,
    name: 'Aureus',
    description: 'A gas giant with striking golden clouds of ammonia crystals.',
    color: 'from-yellow-400 to-amber-600',
    size: 'w-32 h-32 md:w-40 md:h-40'
  }
];

const PlanetSection = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Discover Distant <span className="text-cosmic-stardust-teal">Worlds</span>
        </h2>
        
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl h-[300px] md:h-[400px]">
            {/* Central star */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 z-10 shadow-[0_0_30px_10px_rgba(255,200,0,0.4)]"></div>
            
            {/* Planets with orbits */}
            {planetData.map((planet, index) => (
              <React.Fragment key={planet.id}>
                {/* Orbit path */}
                <div 
                  className="planet-orbit absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                  style={{ 
                    width: `${(index + 1) * 80 + 80}px`, 
                    height: `${(index + 1) * 80 + 80}px`,
                  }}
                ></div>
                
                {/* Planet */}
                <div 
                  className={`planet bg-gradient-to-br ${planet.color} ${planet.size} absolute left-1/2 animate-orbit`}
                  style={{ 
                    animationDelay: `-${index * 3}s`,
                    animationDuration: `${20 + index * 5}s`
                  }}
                ></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planetData.map((planet) => (
            <Card key={planet.id} className="backdrop-blur-md bg-white/5 border-white/10 overflow-hidden">
              <CardContent className="p-6">
                <div className={`planet bg-gradient-to-br ${planet.color} w-16 h-16 rounded-full mx-auto mb-4`}></div>
                <h3 className="text-xl font-bold mb-2 text-center">{planet.name}</h3>
                <p className="text-gray-300 text-center">{planet.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetSection;
