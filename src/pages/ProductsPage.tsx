import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Cpu, Wifi, Bot, ChevronDown, ChevronUp, Server, Layers } from 'lucide-react';
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
  const location = useLocation();

  // URL에서 필터 파라미터를 가져옵니다
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const levelParam = params.get('level');
    if (levelParam) {
      setActiveFilter(levelParam);
    }
  }, [location]);

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
    },
    {
      id: 4,
      name: "마이크로컨트롤러 심화 학습 키트",
      category: "고급자용",
      level: "고급",
      price: "169,000원",
      description: "다양한 마이크로컨트롤러 플랫폼을 비교하고 심층적으로 학습할 수 있는 키트입니다. ARM, AVR, PIC 등 다양한 아키텍처를 다루며 실제 임베디드 시스템 개발 역량을 키울 수 있습니다.",
      features: [
        "ARM Cortex-M3 개발 보드",
        "AVR ATmega 개발 보드",
        "PIC 마이크로컨트롤러",
        "JTAG 디버거",
        "다양한 통신 모듈",
        "고급 펌웨어 개발 가이드"
      ],
      icon: <Cpu className="w-8 h-8" />
    },
    {
      id: 5,
      name: "라즈베리 파이 센서 키트",
      category: "중급자용",
      level: "중급",
      price: "149,000원",
      description: "라즈베리 파이를 활용한 다양한 센서 응용 프로젝트를 구현할 수 있는 키트입니다. 환경, 모션, 위치 등 다양한 센서와 함께 Python 기반의 프로그래밍 학습이 가능합니다.",
      features: [
        "Raspberry Pi 4B",
        "온도, 습도, 기압 센서",
        "가속도계 및 자이로스코프",
        "GPS 모듈",
        "카메라 모듈",
        "Python 기반 데이터 수집 및 분석 가이드"
      ],
      icon: <Server className="w-8 h-8" />
    },
    {
      id: 6,
      name: "스마트홈 IoT 키트",
      category: "중급자용",
      level: "중급",
      price: "179,000원",
      description: "스마트홈 시스템을 직접 구현해볼 수 있는 종합 키트입니다. 조명, 온도, 보안 등의 요소를 IoT 기술로 제어하는 방법을 학습할 수 있습니다.",
      features: [
        "ESP32 개발 보드",
        "릴레이 모듈",
        "스마트 조명 컨트롤러",
        "모션 감지 센서",
        "원격 제어 앱 개발 가이드",
        "MQTT 프로토콜 실습"
      ],
      icon: <Wifi className="w-8 h-8" />
    },
    {
      id: 7,
      name: "AIoT 개발자 키트",
      category: "고급자용",
      level: "고급",
      price: "229,000원",
      description: "인공지능과 사물인터넷을 결합한 고급 개발 프로젝트를 수행할 수 있는 키트입니다. 에지 컴퓨팅, 머신러닝 모델 구현, 데이터 분석 등 최신 기술을 실습할 수 있습니다.",
      features: [
        "NVIDIA Jetson Nano",
        "카메라 및 이미지 처리 모듈",
        "다양한 IoT 센서",
        "TensorFlow 및 PyTorch 튜토리얼",
        "클라우드 연동 가이드",
        "AI 응용 프로젝트 예제"
      ],
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 8,
      name: "웨어러블 디바이스 키트",
      category: "중급자용",
      level: "중급",
      price: "139,000원",
      description: "착용 가능한 임베디드 시스템을 직접 제작할 수 있는 키트입니다. 생체 신호 측정, 모션 트래킹, 저전력 무선 통신 등 웨어러블 기술의 핵심 원리를 학습할 수 있습니다.",
      features: [
        "Arduino Nano 33 BLE Sense",
        "심박 및 산소 측정 센서",
        "9축 IMU 센서",
        "플렉시블 디스플레이",
        "저전력 블루투스 통신",
        "배터리 관리 시스템"
      ],
      icon: <Layers className="w-8 h-8" />
    }
  ];

  const filteredProducts = activeFilter
    ? products.filter(product => product.level === activeFilter)
    : products;

  return (
    <div className="min-h-screen">
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

        <h1 className="text-4xl font-bold mb-8 text-center">교육용 임베디드 키트</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
          다양한 수준과 목적에 맞춘 임베디드 교육 키트를 제공합니다.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="bg-white shadow-sm rounded-full flex p-1">
            <Button 
              variant={activeFilter === null ? "default" : "ghost"}
              className={`rounded-full ${activeFilter === null ? "bg-primary" : ""}`}
              onClick={() => setActiveFilter(null)}
            >
              전체
            </Button>
            <Button 
              variant={activeFilter === "초급" ? "default" : "ghost"}
              className={`rounded-full ${activeFilter === "초급" ? "bg-primary" : ""}`}
              onClick={() => setActiveFilter("초급")}
            >
              초급
            </Button>
            <Button 
              variant={activeFilter === "중급" ? "default" : "ghost"}
              className={`rounded-full ${activeFilter === "중급" ? "bg-primary" : ""}`}
              onClick={() => setActiveFilter("중급")}
            >
              중급
            </Button>
            <Button 
              variant={activeFilter === "고급" ? "default" : "ghost"}
              className={`rounded-full ${activeFilter === "고급" ? "bg-primary" : ""}`}
              onClick={() => setActiveFilter("고급")}
            >
              고급
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              id={`product-${product.id}`}
              className="border rounded-lg bg-white shadow-sm overflow-hidden transition-transform hover:shadow-md"
            >
              <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {product.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-primary">{product.category}</span>
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
                <div className="p-6 pt-0 border-t">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <h3 className="font-semibold mb-2">포함 구성품:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
