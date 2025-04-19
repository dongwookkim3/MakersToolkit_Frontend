import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PlanetStats {
  diameter: string;
  orbit: string;
  gravity: string;
}

interface Planet {
  id: string;
  name: string;
  description: string;
  category: 'inner' | 'outer';
  stats: PlanetStats;
}

const planets: Planet[] = [
  {
    id: 'mercury',
    name: '수성',
    description: '태양계에서 가장 작고 태양에 가장 가까운 행성으로, 표면은 크레이터로 덮여 있습니다.',
    category: 'inner',
    stats: { diameter: '4,879km', orbit: '88일', gravity: '3.7m/s²' }
  },
  {
    id: 'venus',
    name: '금성',
    description: '두꺼운 이산화탄소 대기와 극단적인 온실 효과로 인해 태양계에서 가장 뜨거운 행성입니다.',
    category: 'inner',
    stats: { diameter: '12,104km', orbit: '225일', gravity: '8.87m/s²' }
  },
  {
    id: 'earth',
    name: '지구',
    description: '생명체가 알려진 유일한 행성으로, 액체 상태의 물과 산소가 풍부한 대기를 가지고 있습니다.',
    category: 'inner',
    stats: { diameter: '12,742km', orbit: '365일', gravity: '9.8m/s²' }
  },
  {
    id: 'mars',
    name: '화성',
    description: '붉은 행성으로 알려진 화성은 과거에 물이 흘렀던 흔적이 있으며, 인간 탐사의 주요 대상입니다.',
    category: 'inner',
    stats: { diameter: '6,779km', orbit: '687일', gravity: '3.72m/s²' }
  },
  {
    id: 'jupiter',
    name: '목성',
    description: '태양계에서 가장 큰 행성으로, 거대한 가스 행성이며 대표적인 특징은 대적점입니다.',
    category: 'outer',
    stats: { diameter: '139,820km', orbit: '12년', gravity: '23.1m/s²' }
  },
  {
    id: 'saturn',
    name: '토성',
    description: '아름다운 고리로 유명한 가스 행성으로, 태양계에서 두 번째로 큰 행성입니다.',
    category: 'outer',
    stats: { diameter: '116,460km', orbit: '29년', gravity: '9.0m/s²' }
  },
  {
    id: 'uranus',
    name: '천왕성',
    description: '옆으로 누워 회전하는 독특한 특징을 가진 얼음 거인 행성입니다.',
    category: 'outer',
    stats: { diameter: '50,724km', orbit: '84년', gravity: '8.69m/s²' }
  },
  {
    id: 'neptune',
    name: '해왕성',
    description: '태양계의 가장 바깥쪽 행성으로, 강한 바람과 짙은 파란색 대기를 가지고 있습니다.',
    category: 'outer',
    stats: { diameter: '49,244km', orbit: '165년', gravity: '11.15m/s²' }
  },
];

const PlanetsPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 responsive-container">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-gradient-cosmic">
          태양계 행성 탐험
        </h1>
        <p className="text-center text-cosmic-light mb-10 max-w-3xl mx-auto text-lg">
          태양계의 8개 행성들을 탐험하고 각 행성의 특징과 정보를 알아보세요.
          각 행성은 독특한 특성과 아름다움을 가지고 있습니다.
        </p>
        
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center mb-8">
            <TabsList className="neo-blur">
              <TabsTrigger value="all" className="text-cosmic-light">모든 행성</TabsTrigger>
              <TabsTrigger value="inner" className="text-cosmic-light">내행성</TabsTrigger>
              <TabsTrigger value="outer" className="text-cosmic-light">외행성</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="responsive-grid">
              {planets.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="inner" className="mt-0">
            <div className="responsive-grid">
              {planets.filter(p => p.category === 'inner').map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="outer" className="mt-0">
            <div className="responsive-grid">
              {planets.filter(p => p.category === 'outer').map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  const getPlanetColorClass = (planetId: string): string => {
    switch (planetId) {
      case 'mercury': return 'from-gray-400 to-gray-500';
      case 'venus': return 'from-yellow-400 to-yellow-600';
      case 'earth': return 'from-blue-500 to-blue-400';
      case 'mars': return 'from-red-600 to-red-400';
      case 'jupiter': return 'from-amber-500 to-amber-400';
      case 'saturn': return 'from-yellow-500 to-yellow-300';
      case 'uranus': return 'from-cyan-500 to-cyan-300';
      case 'neptune': return 'from-blue-600 to-blue-400';
      default: return 'from-indigo-500 to-indigo-400';
    }
  };
  
  return (
    <Card className="card-cosmic overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${getPlanetColorClass(planet.id)} spinning`}>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gradient">{planet.name}</h3>
        <p className="text-cosmic-light mb-4 text-sm">{planet.description}</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          {Object.entries(planet.stats).map(([key, value]) => (
            <div key={key} className="neo-blur p-2 rounded">
              <div className="text-xs text-cosmic-light/80 uppercase">{key}</div>
              <div className="text-sm font-semibold text-cosmic-light">{value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanetsPage;
