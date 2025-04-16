
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
          Maker's Toolkit
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          혁신적인 임베디드 교육 키트로 미래 기술 인재를 양성합니다. 아두이노와 다양한 전자부품을 활용한 실습 중심 학습 솔루션.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild className="bg-primary text-white px-8 py-6 rounded-md hover:bg-primary/90 transition-opacity w-full sm:w-auto text-lg">
            <Link to="/products">제품 둘러보기</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-md transition-colors w-full sm:w-auto text-lg">
            <Link to="/about">회사 소개</Link>
          </Button>
        </div>
      </div>
      
      {/* Simple decoration elements */}
      <div className="absolute hidden md:block w-20 h-20 rounded-full bg-blue-100 opacity-50 top-1/4 right-1/4" />
      <div className="absolute hidden md:block w-12 h-12 rounded-full bg-primary/20 bottom-1/3 left-1/4" />
    </div>
  );
};

export default HeroSection;
