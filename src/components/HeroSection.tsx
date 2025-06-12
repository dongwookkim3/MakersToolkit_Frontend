import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Search, Star, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              교육 혁신을 선도하는 브랜드
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="block text-gray-900">미래를 위한</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                교육 솔루션
              </span>
            </h1>
            
            <p className="text-body mb-8 max-w-xl mx-auto lg:mx-0">
              혁신적인 임베디드 교육 키트로 미래 기술 인재를 양성합니다. 
              아두이노와 다양한 전자부품을 활용한 실습 중심 학습 솔루션으로 
              창의적인 메이커를 육성합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button asChild size="lg" className="btn-primary group">
                <Link to="/products" className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>제품 둘러보기</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <Link to="/about" className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  <span>회사 소개</span>
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { icon: Users, value: '1,000+', label: '학교 도입' },
                { icon: Award, value: '10,000+', label: '학생 사용' },
                { icon: Star, value: '98%', label: '만족도' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Product showcase */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              {/* Main product card */}
              <div className="card-modern p-8 hover-lift">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative w-32 h-32 bg-white rounded-2xl flex items-center justify-center animate-float">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl shadow-lg"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">아두이노 스타터 키트</h3>
                <p className="text-gray-600 mb-4">임베디드 시스템 학습의 첫 걸음</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: '센서', count: '20+' },
                    { label: '모듈', count: '15+' },
                    { label: '프로젝트', count: '50+' },
                    { label: '튜토리얼', count: '100+' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">{item.count}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;