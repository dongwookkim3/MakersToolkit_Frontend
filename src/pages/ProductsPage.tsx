
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Cpu, Wifi, Bot, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductsPage = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const products = [
    {
      id: 1,
      name: "아두이노 스타터 키트",
      category: "입문자용",
      level: "초급",
      price: "89,000원",
      description: "임베디드 시스템의 기초를 배우기 위한 완벽한 키트입니다. 아두이노 보드, 브레드보드, 다양한 센서와 액츄에이터, 그리고 상세한 학습 가이드가 포함되어 있습니다.",
      features: [
        "Arduino UNO R3 보드",
        "다양한 LED, 버튼, 저항",
        "온도, 습도, 초음파 센서",
        "모터 및 서보 모터",
        "상세한 한글 매뉴얼",
        "단계별 15개 프로젝트 가이드"
      ],
      icon: <Cpu className="w-8 h-8" />
    },
    {
      id: 2,
      name: "IoT 학습 패키지",
      category: "중급자용",
      level: "중급",
      price: "129,000원",
      description: "사물인터넷의 원리와 응용을 배울 수 있는 종합 패키지입니다. WiFi 모듈, 다양한 센서, 클라우드 연동 기능을 포함하고 있으며 실제 IoT 프로젝트를 구현할 수 있습니다.",
      features: [
        "ESP8266 WiFi 모듈",
        "다양한 환경 센서",
        "OLED 디스플레이",
        "클라우드 서비스 연동 가이드",
        "모바일 앱 연동 튜토리얼",
        "10개의 IoT 프로젝트 예제"
      ],
      icon: <Wifi className="w-8 h-8" />
    },
    {
      id: 3,
      name: "로보틱스 프로젝트 키트",
      category: "고급자용",
      level: "고급",
      price: "159,000원",
      description: "움직이는 로봇을 직접 설계하고 제작할 수 있는 종합 키트입니다. 모터 제어, 센서 통합, 자율 주행 알고리즘 등 로보틱스의 핵심 개념을 학습할 수 있습니다.",
      features: [
        "DC 모터 및 스텝 모터",
        "모터 드라이버",
        "다축 서보 모터",
        "적외선 및 초음파 센서",
        "로봇 프레임 및 바퀴",
        "자율주행 알고리즘 튜토리얼"
      ],
      icon: <Bot className="w-8 h-8" />
    }
  ];

  const filteredProducts = activeFilter
    ? products.filter(product => product.level === activeFilter)
    : products;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>제품</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">교육용 임베디드 키트</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
          다양한 수준과 목적에 맞춘 임베디드 교육 키트를 제공합니다. 모든 키트는 상세한 학습 가이드와 실습 자료를 포함하고 있습니다.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-full flex p-1">
            <Button 
              variant={activeFilter === null ? "default" : "ghost"}
              className={`rounded-full ${activeFilter === null ? "bg-cosmic-stardust-teal" : ""}`}
              onClick={() => setActiveFilter(null)}
            >
              전체
            </Button>
            <Button 
              variant={activeFilter === "초급" ? "default" : "ghost"}
              className={`rounded-full ${activeFilter === "초급" ? "bg-cosmic-stardust-teal" : ""}`}
              onClick={() => setActiveFilter("초급")}
            >
              초급
            </Button>
            <Button 
              variant={activeFilter === "중급" ? "default" : "ghost"}
              className={`rounded-full ${activeFilter === "중급" ? "bg-cosmic-stardust-teal" : ""}`}
              onClick={() => setActiveFilter("중급")}
            >
              중급
            </Button>
            <Button 
              variant={activeFilter === "고급" ? "default" : "ghost"}
              className={`rounded-full ${activeFilter === "고급" ? "bg-cosmic-stardust-teal" : ""}`}
              onClick={() => setActiveFilter("고급")}
            >
              고급
            </Button>
          </div>
        </div>
        
        <div className="space-y-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              id={`product-${product.id}`}
              className="border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm overflow-hidden transition-transform hover:translate-y-[-4px]"
            >
              <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    {product.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-cosmic-stardust-teal">{product.category}</span>
                      <span className="text-lg font-semibold">{product.price}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <Button asChild variant="outline" className="w-full md:w-auto">
                    <Link to={`/products/${product.id}`}>
                      상세 정보
                    </Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => toggleExpand(product.id)}
                    aria-label={expandedId === product.id ? "접기" : "펼치기"}
                  >
                    {expandedId === product.id ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </div>
              </div>
              
              {expandedId === product.id && (
                <div className="p-6 pt-0 border-t border-white/10">
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <h3 className="font-semibold mb-2">포함 구성품:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cosmic-stardust-teal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
