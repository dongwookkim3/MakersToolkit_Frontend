
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">TechEdu Lab 소개</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-white/90 mb-6">
            TechEdu Lab은 혁신적인 임베디드 교육 솔루션을 개발하는 에듀테크 기업입니다. 우리는 학생들이 미래 기술을 쉽고 재미있게 배울 수 있도록 실습 중심의 교육 키트를 설계하고 제작합니다.
          </p>
          
          <p className="text-lg text-white/90 mb-6">
            아두이노와 같은 오픈 하드웨어 플랫폼을 기반으로, 프로그래밍, 전자공학, 로보틱스, 사물인터넷(IoT) 등 다양한 분야의 기술을 쉽게 배울 수 있는 교육 솔루션을 제공합니다.
          </p>
          
          <p className="text-lg text-white/90">
            우리의 목표는 모든 학생들이 미래 기술을 이해하고 활용할 수 있는 역량을 키우는 것입니다. 이론보다는 실습을, 암기보다는 창의성을 중시하는 교육 방식을 통해 미래 인재를 양성합니다.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">우리의 비전</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '기술 민주화',
                description: '최신 기술을 누구나 쉽게 배우고 활용할 수 있는 환경을 만들어 기술 격차를 해소합니다.'
              },
              {
                title: '실습 중심 교육',
                description: '직접 만들고 실행하며 배우는 경험 중심의 교육으로 깊은 이해와 응용력을 키웁니다.'
              },
              {
                title: '창의적 문제 해결',
                description: '단순 지식 전달이 아닌, 스스로 문제를 정의하고 해결하는 과정을 통해 창의력을 향상시킵니다.'
              }
            ].map((vision, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/5 border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 text-white">{vision.title}</h3>
                  <p className="text-white/80">
                    {vision.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">창업팀</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['CEO & 하드웨어 엔지니어', '교육 콘텐츠 디렉터', '소프트웨어 개발자'].map((role, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/5 border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-1 text-white">팀원 {index + 1}</h3>
                  <p className="text-blue-300 mb-3">{role}</p>
                  <p className="text-white/80 text-sm">
                    임베디드 시스템 및 교육 분야의 전문가로 구성된 팀이 최고의 교육 솔루션을 제공합니다.
                  </p>
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

export default AboutPage;
