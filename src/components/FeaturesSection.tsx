
import React from 'react';
import { BookOpen, Cpu, Users, Award, Lightbulb, Compass } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Cpu className="w-12 h-12 text-cosmic-stardust-teal" />,
      title: "실습 중심 교육",
      description: "이론보다 직접 만들고 실행하는 체험 중심의 교육 방식"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-cosmic-stardust-teal" />,
      title: "체계적인 커리큘럼",
      description: "기초부터 고급까지 단계별 학습이 가능한 체계적인 교육 과정"
    },
    {
      icon: <Users className="w-12 h-12 text-cosmic-stardust-teal" />,
      title: "팀 프로젝트 지원",
      description: "협업 학습을 위한 그룹 프로젝트 진행 가능한 구성"
    },
    {
      icon: <Award className="w-12 h-12 text-cosmic-stardust-teal" />,
      title: "교육 인증",
      description: "학습 과정 완료 후 인증서 발급 및 포트폴리오 구성 지원"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-cosmic-stardust-teal" />,
      title: "창의적 문제 해결",
      description: "스스로 생각하고 문제를 해결하는 능력 배양에 초점"
    },
    {
      icon: <Compass className="w-12 h-12 text-cosmic-stardust-teal" />,
      title: "진로 탐색",
      description: "다양한 분야의 임베디드 기술을 경험하며 적성 발견"
    }
  ];

  return (
    <div className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 TechEdu Lab인가?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            실습과 이론을 결합한 최적의 임베디드 교육 솔루션을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
