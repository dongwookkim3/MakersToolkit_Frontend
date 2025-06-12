import React from 'react';
import { BookOpen, Cpu, Users, Award, Lightbulb, Compass } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "실습 중심 교육",
      description: "이론보다 직접 만들고 실행하는 체험 중심의 교육 방식으로 깊이 있는 학습을 제공합니다."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "체계적인 커리큘럼",
      description: "기초부터 고급까지 단계별 학습이 가능한 체계적인 교육 과정을 제공합니다."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "팀 프로젝트 지원",
      description: "협업 학습을 위한 그룹 프로젝트 진행이 가능한 구성으로 설계되었습니다."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "교육 인증",
      description: "학습 과정 완료 후 인증서 발급 및 포트폴리오 구성을 지원합니다."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "창의적 문제 해결",
      description: "스스로 생각하고 문제를 해결하는 능력 배양에 초점을 맞춘 교육을 제공합니다."
    },
    {
      icon: <Compass className="w-8 h-8 text-blue-600" />,
      title: "진로 탐색",
      description: "다양한 분야의 임베디드 기술을 경험하며 적성을 발견할 수 있습니다."
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">왜 Maker's Toolkit인가?</h2>
          <p className="text-body max-w-2xl mx-auto">
            실습과 이론을 결합한 최적의 임베디드 교육 솔루션을 제공합니다. 
            미래 기술 인재 양성을 위한 혁신적인 학습 경험을 만나보세요.
          </p>
        </div>
        
        <div className="grid-responsive">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-feature group hover-lift"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            <Award className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">
              1,000+ 학교에서 검증된 교육 솔루션
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;