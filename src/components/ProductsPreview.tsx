
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const ProductsPreview = () => {
  const products = [
    {
      id: 1,
      name: "아두이노 스타터 키트",
      description: "입문자를 위한 기본 아두이노 키트로, LED, 센서, 모터 등 다양한 부품 포함",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      fallbackImage: "bg-gradient-to-br from-blue-500 to-blue-600",
      orderCount: 458
    },
    {
      id: 2,
      name: "IoT 학습 패키지",
      description: "사물인터넷 기술을 배울 수 있는 WiFi 모듈, 센서, 클라우드 연동 키트",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      fallbackImage: "bg-gradient-to-br from-blue-400 to-blue-500",
      orderCount: 372
    },
    {
      id: 3,
      name: "로보틱스 프로젝트 키트",
      description: "로봇 제작을 위한 모터, 서보, 구조물 및 프로그래밍 가이드 포함",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      fallbackImage: "bg-gradient-to-br from-blue-600 to-blue-700",
      orderCount: 289
    },
    {
      id: 5,
      name: "라즈베리 파이 센서 키트",
      description: "라즈베리 파이와 함께 사용할 수 있는 센서 모음 키트, 환경 및 모션 감지 센서 포함",
      image: "https://images.unsplash.com/photo-1601900554744-8d3be1fc2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      fallbackImage: "bg-gradient-to-br from-blue-500 to-blue-600",
      orderCount: 312
    },
    {
      id: 7,
      name: "AIoT 개발자 키트",
      description: "인공지능과 사물인터넷을 결합한 고급 개발 프로젝트 키트",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      fallbackImage: "bg-gradient-to-br from-blue-400 to-blue-500",
      orderCount: 198
    }
  ];

  // Sort products by order count (highest first) and get top 3
  const topProducts = [...products].sort((a, b) => b.orderCount - a.orderCount).slice(0, 3);

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">인기 교육 키트</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            가장 많이 찾는 임베디드 교육 키트를 소개합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topProducts.map((product) => (
            <Card key={product.id} className="product-card overflow-hidden border">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className={`h-full w-full ${product.fallbackImage} opacity-0`} 
                  onError={(e) => {
                    e.currentTarget.classList.remove('opacity-0');
                  }}
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>{product.orderCount}개 판매</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/products/${product.id}`}>자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/products">모든 제품 보기</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPreview;
