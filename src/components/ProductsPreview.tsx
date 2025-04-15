
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductsPreview = () => {
  const products = [
    {
      id: 1,
      name: "아두이노 스타터 키트",
      description: "입문자를 위한 기본 아두이노 키트로, LED, 센서, 모터 등 다양한 부품 포함",
      image: "/products/arduino-kit.jpg",
      fallbackImage: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "IoT 학습 패키지",
      description: "사물인터넷 기술을 배울 수 있는 WiFi 모듈, 센서, 클라우드 연동 키트",
      image: "/products/iot-kit.jpg",
      fallbackImage: "bg-gradient-to-br from-teal-500 to-green-600"
    },
    {
      id: 3,
      name: "로보틱스 프로젝트 키트",
      description: "로봇 제작을 위한 모터, 서보, 구조물 및 프로그래밍 가이드 포함",
      image: "/products/robotics-kit.jpg",
      fallbackImage: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="relative py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">인기 교육 키트</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            다양한 연령대와 수준에 맞춘 임베디드 교육 키트를 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-transform hover:scale-105">
              <div className={`h-48 bg-cover bg-center`} 
                style={{ 
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center'
                }}
              >
                {/* 이미지가 로드되지 않을 경우 대체 그라데이션 표시 */}
                <div className={`h-full w-full ${product.fallbackImage} opacity-0 transition-opacity`} 
                  onError={(e) => {
                    e.currentTarget.classList.remove('opacity-0');
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/products/${product.id}`}>자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-gradient-to-r from-cosmic-stardust-teal to-cosmic-galaxy-violet">
            <Link to="/products">모든 제품 보기</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPreview;
