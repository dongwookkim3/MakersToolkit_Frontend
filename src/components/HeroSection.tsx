
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
            <span className="block">미래를 위한</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">교육 솔루션</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            혁신적인 임베디드 교육 키트로 미래 기술 인재를 양성합니다. 아두이노와 다양한 전자부품을 활용한 실습 중심 학습 솔루션으로 창의적인 메이커를 육성합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="px-8 py-6 rounded-md w-full sm:w-auto text-lg group">
              <Link to="/products" className="flex items-center gap-2">
                <Rocket size={20} />
                <span>제품 둘러보기</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 rounded-md w-full sm:w-auto text-lg">
              <Link to="/about" className="flex items-center gap-2">
                <Search size={20} />
                <span>회사 소개</span>
              </Link>
            </Button>
          </div>
          
          {/* 간략한 통계 정보 */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { value: '1,000+', label: '학교 도입' },
              { value: '10,000+', label: '학생 사용' },
              { value: '98%', label: '만족도' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 우측 이미지/애니메이션 영역 */}
        <div className="relative w-full max-w-md">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-xl border border-blue-100">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center p-4">
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 animate-float">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: '센서', count: '20+' },
                { label: '모듈', count: '15+' },
                { label: '프로젝트', count: '50+' },
                { label: '튜토리얼', count: '100+' }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-blue-700">{item.count}</div>
                  <div className="text-sm text-blue-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-300 rounded-full opacity-80"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
