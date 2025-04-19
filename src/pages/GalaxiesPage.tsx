
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Card, CardContent } from '@/components/ui/card';

const galaxies = [
  {
    id: 'milky-way',
    name: '은하수 (Milky Way)',
    type: '나선 은하',
    distance: '우리가 있는 곳',
    diameter: '10만 광년',
    description: '우리가 살고 있는 나선 은하로, 태양계는 오리온 팔에 위치해 있습니다. 약 1,000억-4,000억 개의 별을 포함하고 있습니다.'
  },
  {
    id: 'andromeda',
    name: '안드로메다 (Andromeda)',
    type: '나선 은하',
    distance: '250만 광년',
    diameter: '22만 광년',
    description: '안드로메다 은하는 우리 은하와 가장 가까운 대형 은하이며, 약 1조 개의 별을 포함하고 있습니다. 미래에는 우리 은하와 충돌할 예정입니다.'
  },
  {
    id: 'triangulum',
    name: '삼각형 은하 (Triangulum)',
    type: '나선 은하',
    distance: '300만 광년',
    diameter: '6만 광년',
    description: '국부 은하군에서 세 번째로 큰 은하로, 매우 밝은 HII 영역이 있습니다. 약 400억 개의 별을 포함하고 있습니다.'
  },
  {
    id: 'large-magellanic',
    name: '대마젤란 은하',
    type: '위성 은하/불규칙 은하',
    distance: '16만 광년',
    diameter: '1.4만 광년',
    description: '우리 은하의 위성 은하 중 하나로, 남반구에서 맨눈으로도 볼 수 있습니다. 별들이 활발하게 생성되고 있는 지역을 포함하고 있습니다.'
  },
  {
    id: 'small-magellanic',
    name: '소마젤란 은하',
    type: '위성 은하/불규칙 은하',
    distance: '20만 광년',
    diameter: '7,000 광년',
    description: '우리 은하의 위성 은하로, 대마젤란 은하와 같이 남반구에서 관측 가능합니다.'
  },
  {
    id: 'sombrero',
    name: '솜브레로 은하',
    type: '렌즈형 은하',
    distance: '2,900만 광년',
    diameter: '5만 광년',
    description: '솜브레로 모양으로 유명한 이 은하는 밝은 중심핵과 먼지 띠가 특징입니다. 약 1,000억 개의 별을 포함하고 있습니다.'
  },
  {
    id: 'whirlpool',
    name: '소용돌이 은하',
    type: '나선 은하',
    distance: '2,300만 광년',
    diameter: '6만 광년',
    description: '아름다운 나선 구조로 유명하며, 작은 은하와 상호작용하고 있어 천문학적 연구에 중요한 대상입니다.'
  },
  {
    id: 'pinwheel',
    name: '바람개비 은하',
    type: '나선 은하',
    distance: '2,100만 광년',
    diameter: '17만 광년',
    description: '밝고 넓게 퍼진 나선 팔이 특징인 이 은하는 활발한 별 형성 지역을 많이 포함하고 있습니다.'
  }
];

const GalaxiesPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-cosmic-light">
          우주의 은하 탐험
        </h1>
        <p className="text-center text-blue-100 mb-10 max-w-3xl mx-auto">
          우주에는 수천억 개의 은하가 존재합니다. 각 은하는 수십억에서 수조 개의 별들로 이루어져 있으며, 다양한 형태와 크기를 가지고 있습니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galaxies.map((galaxy) => (
            <Card key={galaxy.id} className="backdrop-blur-md bg-blue-900/30 border-blue-500/20 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-900 to-blue-800 flex items-center justify-center">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br from-${
                  galaxy.id === 'milky-way' ? 'blue-600 to-purple-400' : 
                  galaxy.id === 'andromeda' ? 'indigo-600 to-blue-400' : 
                  galaxy.id === 'triangulum' ? 'violet-600 to-indigo-400' : 
                  galaxy.id === 'large-magellanic' ? 'blue-600 to-teal-400' : 
                  galaxy.id === 'small-magellanic' ? 'cyan-600 to-blue-400' : 
                  galaxy.id === 'sombrero' ? 'yellow-600 to-amber-400' : 
                  galaxy.id === 'whirlpool' ? 'green-600 to-teal-400' : 
                  'pink-600 to-purple-400'
                } animate-spin`} style={{ animationDuration: '20s' }}>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-100">{galaxy.name}</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-blue-800/30 p-2 rounded">
                    <div className="text-xs text-blue-300 uppercase">유형</div>
                    <div className="text-sm font-semibold text-blue-100">{galaxy.type}</div>
                  </div>
                  <div className="bg-blue-800/30 p-2 rounded">
                    <div className="text-xs text-blue-300 uppercase">거리</div>
                    <div className="text-sm font-semibold text-blue-100">{galaxy.distance}</div>
                  </div>
                  <div className="bg-blue-800/30 p-2 rounded">
                    <div className="text-xs text-blue-300 uppercase">크기</div>
                    <div className="text-sm font-semibold text-blue-100">{galaxy.diameter}</div>
                  </div>
                </div>
                <p className="text-blue-200 text-sm">{galaxy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-cosmic-light">은하의 분류</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: '나선 은하',
                description: '팔 모양의 구조가 중심에서 바깥쪽으로 뻗어 있는 형태입니다. 우리 은하와 안드로메다 은하가 이에 속합니다.'
              },
              {
                type: '타원 은하',
                description: '둥근 또는 타원형 모양으로, 뚜렷한 나선 구조가 없습니다. 주로 오래된 별들로 구성되어 있습니다.'
              },
              {
                type: '불규칙 은하',
                description: '특정한 형태 없이 불규칙한 모양을 가집니다. 종종 다른 은하와의 충돌이나 상호작용으로 형성됩니다.'
              }
            ].map((item, index) => (
              <Card key={index} className="backdrop-blur-md bg-blue-900/20 border-blue-500/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-blue-100">{item.type}</h3>
                  <p className="text-blue-200 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalaxiesPage;
