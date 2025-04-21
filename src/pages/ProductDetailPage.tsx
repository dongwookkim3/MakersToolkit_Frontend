import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useCompare } from '@/contexts/CompareContext';
import { 
  Cpu, 
  Wifi, 
  Bot, 
  ArrowLeft, 
  Check, 
  ShoppingCart, 
  FileText, 
  Lock, 
  Scale, 
  Plus, 
  Minus, 
  LogIn, 
  Server as ServerIcon, 
  Layers as LayersIcon, 
  Box,
  Codesandbox as CodesandboxIcon
} from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface Product {
  id: number;
  name: string;
  category: string;
  level: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

interface CompareItem {
  id: string;
  name: string;
  image: string;
  // ... other properties
}

const products: Product[] = [
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
    icon: <ServerIcon className="w-8 h-8" />
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
    icon: <CodesandboxIcon className="w-8 h-8" />
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
    icon: <LayersIcon className="w-8 h-8" />
  }
];

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [hasPurchased, setHasPurchased] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const { addItem } = useCart();
  const { addItem: addToCompare, isItemInCompare, removeItem: removeFromCompare } = useCompare();

  const product = products.find(p => p.id === productId);

  useEffect(() => {
    if (!product) {
      toast({
        title: "Error",
        description: "Product not found.",
        variant: "destructive",
      });
      navigate("/products");
    }
  }, [product, navigate, toast]);

  if (!product) {
    return null;
  }

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: null,
    });
  };

  const handleCompare = () => {
    if (isItemInCompare(product.id)) {
      removeFromCompare(product.id);
      toast({
        title: "비교 목록에서 제거",
        description: `${product.name}이(가) 비교 목록에서 제거되었습니다.`,
      });
    } else {
      addToCompare({
        id: product.id,
        name: product.name,
        price: product.price,
      });
      toast({
        title: "비교 목록에 추가",
        description: `${product.name}이(가) 비교 목록에 추가되었습니다.`,
      });
    }
  };

  // 구매 핸들러
  const handlePurchase = () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    
    setHasPurchased(true);
    toast({
      title: "구매 완료",
      description: "상세 설명서가 제공됩니다.",
    });
  };

  const handleGoToLogin = () => {
    setShowLoginDialog(false);
    // Navigate to auth page with return URL
    navigate('/auth', { state: { returnUrl: `/products/${id}` } });
  };

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
              <BreadcrumbLink href="/products">제품</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-md z-0"></div>
            <div className="relative z-10 p-6">
              {product.icon ? (
                <div className="w-full h-64 flex items-center justify-center">
                  {product.icon}
                </div>
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-md">
                  <FileText className="w-16 h-16 text-gray-500" />
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="text-gray-600 mb-6">{product.description}</div>

            <div className="flex items-center justify-between mb-4">
              <div className="text-xl font-semibold">{product.price}</div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full"
                  onClick={handleIncrement}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-cosmic-primary hover:bg-cosmic-primary/90" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                장바구니에 담기
              </Button>
              {hasPurchased ? (
                <Button variant="secondary" className="w-full" disabled>
                  <Check className="h-4 w-4 mr-2" />
                  구매 완료됨
                </Button>
              ) : (
                <Button className="w-full bg-green-500 hover:bg-green-700 text-white" onClick={handlePurchase}>
                  <Lock className="h-4 w-4 mr-2" />
                  구매하기
                </Button>
              )}
              <Button 
                variant={isItemInCompare(product.id) ? "destructive" : "outline"} 
                className="w-full"
                onClick={handleCompare}
              >
                {isItemInCompare(product.id) ? (
                  <>
                    <Minus className="h-4 w-4 mr-2" />
                    비교 취소
                  </>
                ) : (
                  <>
                    <Scale className="h-4 w-4 mr-2" />
                    비교하기
                  </>
                )}
              </Button>
              <Button asChild variant="ghost" className="w-full">
                <Link to="/products">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  목록으로 돌아가기
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">주요 특징</h2>
          <ul className="list-disc list-inside text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </main>
      
      {/* Add login dialog for purchase */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>로그인이 필요합니다</DialogTitle>
            <DialogDescription>
              제품 구매를 위해서는 로그인이 필요합니다.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>로그인 페이지로 이동하시겠습니까?</p>
          </div>
          <DialogFooter className="sm:justify-end">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setShowLoginDialog(false)}
            >
              취소
            </Button>
            <Button
              type="button"
              onClick={handleGoToLogin}
              className="bg-cosmic-primary hover:bg-cosmic-primary/90"
            >
              <LogIn className="h-4 w-4 mr-2" />
              로그인 페이지로 이동
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
