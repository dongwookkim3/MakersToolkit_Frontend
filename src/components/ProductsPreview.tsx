import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Star } from 'lucide-react';

const ProductsPreview = () => {
  const products = [
    {
      id: 1,
      name: "아두이노 스타터 키트",
      description: "입문자를 위한 기본 아두이노 키트로, LED, 센서, 모터 등 다양한 부품 포함",
      price: "89,000원",
      rating: 4.8,
      orderCount: 458,
      level: "초급",
      features: ["Arduino UNO R3", "15개 프로젝트", "한글 매뉴얼"]
    },
    {
      id: 2,
      name: "IoT 학습 패키지",
      description: "사물인터넷 기술을 배울 수 있는 WiFi 모듈, 센서, 클라우드 연동 키트",
      price: "129,000원",
      rating: 4.9,
      orderCount: 372,
      level: "중급",
      features: ["ESP8266 WiFi", "클라우드 연동", "모바일 앱"]
    },
    {
      id: 3,
      name: "로보틱스 프로젝트 키트",
      description: "로봇 제작을 위한 모터, 서보, 구조물 및 프로그래밍 가이드 포함",
      price: "159,000원",
      rating: 4.7,
      orderCount: 289,
      level: "고급",
      features: ["DC/서보 모터", "센서 통합", "자율주행"]
    }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            인기 제품
          </div>
          <h2 className="heading-lg mb-4">인기 교육 키트</h2>
          <p className="text-body max-w-2xl mx-auto">
            가장 많이 찾는 임베디드 교육 키트를 소개합니다. 
            검증된 품질과 체계적인 학습 과정으로 만족도가 높은 제품들입니다.
          </p>
        </div>
        
        <div className="grid-responsive mb-12">
          {products.map((product) => (
            <Card key={product.id} className="card-modern hover-lift group">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg"></div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.level === '초급' ? 'bg-green-100 text-green-700' :
                    product.level === '중급' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {product.level}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-sm text-amber-600">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>{product.orderCount}개 판매</span>
                  </div>
                </div>
                
                <Button asChild variant="outline" className="w-full group">
                  <Link to={`/products/${product.id}`} className="flex items-center justify-center">
                    자세히 보기
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="btn-primary group">
            <Link to="/products" className="flex items-center">
              모든 제품 보기
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;