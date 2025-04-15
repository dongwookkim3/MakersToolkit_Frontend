
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cosmic-stardust-teal via-white to-cosmic-galaxy-violet">
          TechEdu Lab
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          혁신적인 임베디드 교육 키트로 미래 기술 인재를 양성합니다. 아두이노와 다양한 전자부품을 활용한 실습 중심 학습 솔루션.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild className="bg-gradient-to-r from-cosmic-stardust-teal to-cosmic-galaxy-violet text-white px-8 py-6 rounded-md hover:opacity-90 transition-opacity w-full sm:w-auto text-lg">
            <Link to="/products">제품 둘러보기</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-md transition-colors w-full sm:w-auto text-lg">
            <Link to="/about">회사 소개</Link>
          </Button>
        </div>
      </div>
      
      {/* Main product image */}
      <div className="absolute z-0 w-64 h-64 rounded-full bg-gradient-to-br from-cosmic-nebula-purple to-cosmic-galaxy-violet opacity-70 blur-2xl animate-float" style={{ top: '15%', right: '10%' }} />
      
      {/* Circuit board styling element */}
      <div className="absolute z-0 w-32 h-32 rounded-full bg-gradient-to-r from-cosmic-stardust-teal to-cyan-500 opacity-60 blur-xl animate-float" style={{ bottom: '20%', left: '15%', animationDelay: '2s' }} />
    </div>
  );
};

export default HeroSection;
