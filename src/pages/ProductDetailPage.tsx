
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Cpu, Wifi, Bot, ArrowLeft, Check, ShoppingCart, FileText, Lock, Scale, Plus, Minus } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from '@/contexts/CartContext';
import { useCompare, CompareItem } from '@/contexts/CompareContext';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0");
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { addItem: addToCompare, isItemInCompare, removeItem: removeFromCompare } = useCompare();
  
  // 로그인 폼 유효성 검사 스키마
  const loginFormSchema = z.object({
    email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
    password: z.string().min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
  });

  // 회원가입 폼 유효성 검사 스키마
  const signupFormSchema = z.object({
    name: z.string().min(2, { message: "이름은 최소 2자 이상이어야 합니다." }),
    email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
    password: z.string().min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
    confirmPassword: z.string().min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

  // 로그인 폼
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 회원가입 폼
  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 로그인 폼 제출 핸들러
  const onLoginSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
    // 실제로는 백엔드 API 호출이 필요하지만, 이 예제에서는 간단히 성공으로 처리
    setIsLoggedIn(true);
    toast({
      title: "로그인 성공",
      description: "환영합니다!",
    });
  };

  // 회원가입 폼 제출 핸들러
  const onSignupSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.log(values);
    // 실제로는 백엔드 API 호출이 필요하지만, 이 예제에서는 간단히 성공으로 처리
    setIsLoggedIn(true);
    toast({
      title: "회원가입 성공",
      description: "환영합니다!",
    });
  };

  // 구매 핸들러
  const handlePurchase = () => {
    if (!isLoggedIn) {
      toast({
        title: "로그인이 필요합니다",
        description: "구매하기 전에 로그인 해주세요.",
        variant: "destructive",
      });
      return;
    }
    
    setHasPurchased(true);
    toast({
      title: "구매 완료",
      description: "상세 설명서가 제공됩니다.",
    });
  };

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);
    setHasPurchased(false);
    toast({
      title: "로그아웃 되었습니다",
    });
  };
  
  // 제품 데이터 - 실제 앱에서는 API나 데이터베이스에서 가져옴
  const products = [
    {
      id: 1,
      name: "아두이노 스타터 키트",
      category: "입문자용",
      level: "초급",
      price: "89,000원",
      description: "임베디드 시스템의 기초를 배우기 위한 완벽한 키트입니다. 아두이노 보드, 브레드보드, 다양한 센서와 액츄에이터, 그리고 상세한 학습 가이드가 포함되어 있습니다.",
      longDescription: "아두이노 스타터 키트는 전자 공학과 프로그래밍에 처음 입문하는 학생과, 취미로 전자 공학을 시작하려는 사람들을 위해 설계되었습니다. 이 키트에는 여러 프로젝트를 구축하고 실험할 수 있는 모든 구성 요소와 상세한 안내서가 포함되어 있습니다. LED 깜빡이기부터 서보 모터 제어, 온도 센서를 이용한 환경 모니터링까지 15개의 단계별 프로젝트를 통해 아두이노 프로그래밍과 전자 회로에 대한 기초 지식을 습득할 수 있습니다. 누구나 쉽게 따라할 수 있는 한글 매뉴얼과 초보자를 위한 온라인 커뮤니티 지원으로 혼자서도 충분히 학습할 수 있습니다.",
      basicManual: "아두이노 스타터 키트 사용 설명서\n\n1. 키트 구성품 확인\n   - Arduino UNO R3 보드 1개\n   - 브레드보드 1개\n   - LED (빨강, 녹색, 파랑) 각 5개\n   - 저항 (220Ω, 1kΩ, 10kΩ) 각 10개\n   - 점퍼 와이어 세트\n   - 온도 센서 1개\n   - 습도 센서 1개\n   - 초음파 센서 1개\n   - 서보 모터 1개\n   - USB 케이블 1개\n\n2. 아두이노 IDE 설치하기\n   - Arduino.cc에서 최신 버전의 IDE 다운로드\n   - 컴퓨터에 설치 및 USB 드라이버 설정\n\n3. 첫 번째 프로젝트: LED 깜빡이기\n   - 브레드보드에 LED 연결하기\n   - 기본 코드 작성 및 업로드\n   - 회로 이해하기",
      detailedManual: "## 아두이노 스타터 키트 상세 설명서\n\n### 1. 아두이노 기초 이론\n- 마이크로컨트롤러의 작동 원리\n- 디지털 신호와 아날로그 신호의 차이\n- 전압, 전류, 저항의 이해 (옴의 법칙)\n- PWM 신호의 이해와 활용\n\n### 2. 프로젝트 1: 신호등 만들기\n- 회로도 및 준비물 목록\n- 단계별 조립 가이드\n- 전체 소스코드 및 주석 설명\n- 작동 원리 해설\n- 응용 아이디어 및 개선 방안\n\n### 3. 프로젝트 2: 온도 측정 시스템\n- 온도 센서 이해하기\n- 아날로그 입력 처리 방법\n- LCD 디스플레이 연결 및 제어\n- 실시간 온도 모니터링 시스템 구현\n- 데이터 로깅 및 분석 방법\n\n### 4. 프로젝트 3: 서보 모터 제어\n- 서보 모터의 작동 원리\n- 서보 라이브러리 사용법\n- 포텐셔미터로 서보 제어하기\n- 자동 회전 시스템 구현\n\n### 5. 프로젝트 4: 초음파 센서로 거리 측정\n- 초음파 원리 이해하기\n- 거리 계산 알고리즘\n- LED 및 부저와 연동시키기\n- 주차 센서 시스템 구현\n\n### 6. 프로젝트 5: 블루투스 통신\n- HC-05 모듈 설정 방법\n- 시리얼 통신의 이해\n- 모바일 앱과 연동하기\n- 원격 LED 제어 시스템 구현\n\n### 7. 고급 프로그래밍 기법\n- 인터럽트 활용하기\n- 상태 머신 구현\n- 메모리 최적화 기법\n- 디버깅 방법 및 도구\n\n### 8. 문제 해결 가이드\n- 일반적인 오류 및 해결책\n- 하드웨어 문제 진단 방법\n- 회로 문제 해결 체크리스트\n- 커뮤니티 지원 및 추가 학습 자료",
      features: [
        "Arduino UNO R3 보드",
        "다양한 LED, 버튼, 저항",
        "온도, 습도, 초음파 센서",
        "모터 및 서보 모터",
        "상세한 한글 매뉴얼",
        "단계별 15개 프로젝트 가이드"
      ],
      specifications: [
        "교육 대상: 중학생 이상",
        "난이도: 초급",
        "소요 시간: 프로젝트당 1-3시간",
        "언어: C/C++",
        "패키지 크기: 30 x 20 x 5 cm",
        "무게: 600g"
      ],
      icon: <Cpu className="w-8 h-8" />,
      imageBg: "bg-gradient-to-br from-blue-500 to-purple-600",
      image: "/products/arduino-kit.jpg"
    },
    {
      id: 2,
      name: "IoT 학습 패키지",
      category: "중급자용",
      level: "중급",
      price: "129,000원",
      description: "사물인터넷의 원리와 응용을 배울 수 있는 종합 패키지입니다. WiFi 모듈, 다양한 센서, 클라우드 연동 기능을 포함하고 있으며 실제 IoT 프로젝트를 구현할 수 있습니다.",
      longDescription: "IoT 학습 패키지는 인터넷 연결 장치를 설계하고 개발하는 실질적인 경험을 제공합니다. 이 패키지를 통해 센서 데이터를 수집하고, 클라우드에 전송하며, 모바일 앱에서 원격으로 장치를 제어하는 방법을 배울 수 있습니다. ESP8266 WiFi 모듈, OLED 디스플레이, 다양한 환경 센서를 활용하여 실내 환경 모니터링 시스템, 스마트 홈 제어 장치, 웨어러블 건강 추적기 등 실용적인 IoT 프로젝트를 구현할 수 있습니다. 입문용 아두이노 경험을 이미 가진 학생들이나 IoT 기술을 심도 있게 배우고 싶은 중급자에게 적합합니다.",
      basicManual: "IoT 학습 패키지 사용 설명서\n\n1. 키트 구성품 확인\n   - ESP8266 WiFi 모듈 1개\n   - NodeMCU 개발 보드 1개\n   - OLED 디스플레이 1개\n   - 다양한 환경 센서 (온도, 습도, 기압, 가스 등)\n   - 릴레이 모듈 2개\n   - 점퍼 와이어 세트\n   - USB 케이블 1개\n\n2. 개발 환경 설정하기\n   - Arduino IDE에 ESP8266 보드 추가하기\n   - 필요한 라이브러리 설치\n   - MQTT 브로커 이해하기\n\n3. 첫 번째 프로젝트: WiFi 연결하기\n   - ESP8266 기본 설정\n   - WiFi 네트워크 스캔 및 연결\n   - 웹서버 만들기",
      detailedManual: "## IoT 학습 패키지 상세 설명서\n\n### 1. IoT 이론 및 기술 개요\n- 사물인터넷의 정의와 역사\n- IoT 아키텍처 및 구성 요소\n- 프로토콜 개요 (MQTT, HTTP, CoAP)\n- 클라우드 서비스 비교 (AWS IoT, Google Cloud IoT, Azure IoT)\n\n### 2. ESP8266 심화 학습\n- NodeMCU 아키텍처 이해하기\n- 저전력 모드 활용법\n- 인터럽트 처리 및 타이머 활용\n- OTA 업데이트 구현 방법\n\n### 3. 프로젝트 1: 스마트 온습도계\n- 센서 데이터 수집 및 처리\n- OLED 디스플레이 인터페이싱\n- 클라우드 데이터베이스 연동 (Firebase)\n- 데이터 시각화 웹 대시보드 구축\n\n### 4. 프로젝트 2: 스마트 홈 시스템\n- 릴레이를 이용한 전원 제어\n- MQTT 브로커 설정 및 활용\n- 모바일 앱 연동 (Blynk 플랫폼)\n- 음성 비서 연동 (Alexa/Google Assistant)\n\n### 5. 프로젝트 3: 환경 모니터링 시스템\n- 다중 센서 데이터 처리\n- 데이터 로깅 및 분석\n- 알림 시스템 구현 (이메일, 푸시 알림)\n- 배터리 전원 관리 최적화\n\n### 6. 프로젝트 4: 웨어러블 건강 모니터\n- 맥박 센서 인터페이싱\n- BLE 통신 구현\n- 실시간 데이터 처리 알고리즘\n- 모바일 앱 개발 가이드\n\n### 7. 보안 및 개인정보 보호\n- IoT 보안 위협 및 취약점\n- 안전한 통신 프로토콜 (TLS/SSL)\n- 인증 및 권한 부여 구현\n- 보안 모범 사례\n\n### 8. 상용 제품 개발 고려사항\n- 하드웨어 설계 최적화\n- 대량 생산 준비\n- 인증 및 규제 준수\n- 비즈니스 모델 및 수익화 전략",
      features: [
        "ESP8266 WiFi 모듈",
        "다양한 환경 센서",
        "OLED 디스플레이",
        "클라우드 서비스 연동 가이드",
        "모바일 앱 연동 튜토리얼",
        "10개의 IoT 프로젝트 예제"
      ],
      specifications: [
        "교육 대상: 고등학생 이상",
        "난이도: 중급",
        "소요 시간: 프로젝트당 2-5시간",
        "언어: C++, JavaScript",
        "패키지 크기: 35 x 25 x 8 cm",
        "무게: 850g"
      ],
      icon: <Wifi className="w-8 h-8" />,
      imageBg: "bg-gradient-to-br from-teal-500 to-green-600",
      image: "/products/iot-kit.jpg"
    },
    {
      id: 3,
      name: "로보틱스 프로젝트 키트",
      category: "고급자용",
      level: "고급",
      price: "159,000원",
      description: "움직이는 로봇을 직접 설계하고 제작할 수 있는 종합 키트입니다. 모터 제어, 센서 통합, 자율 주행 알고리즘 등 로보틱스의 핵심 개념을 학습할 수 있습니다.",
      longDescription: "로보틱스 프로젝트 키트는 실제 로봇 공학 원리를 적용하여 자율 주행 로봇을 설계하고 구축할 수 있는 고급 학습 패키지입니다. 이 키트는 DC 모터, 스텝 모터, 서보 모터, 각종 센서, 로봇 프레임 및 바퀴 등 완전한 로봇 시스템을 구축하는 데 필요한 모든 하드웨어 구성 요소를 포함하고 있습니다. 장애물 감지 및 회피, 라인 트레이싱, 맵핑, 자율 주행 등의 알고리즘을 구현하며 실제 로봇 공학의 핵심 개념을 배울 수 있습니다. 기본적인 프로그래밍과 전자 회로에 대한 이해가 있는 고급 학습자에게 적합하며, 로봇 공학 분야로 진출하고자 하는 학생들에게 실질적인 경험을 제공합니다.",
      basicManual: "로보틱스 프로젝트 키트 사용 설명서\n\n1. 키트 구성품 확인\n   - 아두이노 메가 2560 1개\n   - DC 모터 4개\n   - 모터 드라이버 쉴드 1개\n   - 서보 모터 2개\n   - 스텝 모터 1개\n   - 초음파 센서 3개\n   - 적외선 센서 3개\n   - 자이로스코프/가속도 센서 1개\n   - 로봇 프레임 및 바퀴 세트\n   - 배터리 홀더 및 케이블\n\n2. 로봇 조립하기\n   - 섀시 조립 가이드\n   - 모터 및 바퀴 장착\n   - 센서 배치 및 고정\n   - 배선 가이드\n\n3. 첫 번째 프로젝트: 기본 주행 로봇\n   - 모터 드라이버 연결 및 제어\n   - 기본 전후좌우 이동 프로그래밍\n   - 간단한 리모컨 제어 구현",
      detailedManual: "## 로보틱스 프로젝트 키트 상세 설명서\n\n### 1. 로봇 공학 기초 이론\n- 로봇 분류 및 유형\n- 구동계 설계 원리\n- 센서 융합 및 데이터 처리\n- 로봇 운동학 및 동역학 기초\n- 제어 시스템 이론 개요\n\n### 2. 고급 하드웨어 구성\n- 모터 유형별 특성 및 선택 기준\n- 모터 드라이버 회로의 이해\n- 센서 인터페이싱 최적화\n- 파워 시스템 설계 (배터리 관리, 전압 조정)\n- PCB 설계 기초 및 하네스 최적화\n\n### 3. 프로젝트 1: 라인 트레이서 로봇\n- 적외선 센서 배열 설계\n- PID 제어 알고리즘 구현\n- 속도 프로파일 최적화\n- 교차로 인식 및 결정 로직\n- 고급 트랙 탐색 전략\n\n### 4. 프로젝트 2: 장애물 회피 로봇\n- 다중 초음파 센서 배치 및 구성\n- 센서 데이터 필터링 기법\n- 벡터 필드 기반 회피 알고리즘\n- 포텐셜 필드 방법론\n- SLAM 기초 구현\n\n### 5. 프로젝트 3: 균형 로봇\n- 자이로스코프/가속도 센서 캘리브레이션\n- 상보 필터 및 칼만 필터 구현\n- PID 제어 튜닝 방법론\n- 동적 안정화 알고리즘\n- 원격 제어 시스템 구현\n\n### 6. 프로젝트 4: 로봇 팔 제어\n- 역운동학 알고리즘\n- 다중 서보 모터 조정\n- 그리퍼 설계 및 제어\n- 물체 감지 및 추적\n- 픽앤플레이스 자동화 구현\n\n### 7. 프로젝트 5: 자율 주행 로봇\n- 맵핑 및 경로 계획\n- A* 알고리즘 구현\n- 위치 추정 기법\n- 고급 SLAM 구현\n- 행동 결정 트리 구성\n\n### 8. 로봇 소프트웨어 아키텍처\n- 상태 기계 설계\n- 멀티태스킹 구현 방법\n- ROS(로봇 운영 체제) 기초\n- 분산 제어 시스템 설계\n- 테스트 및 디버깅 전략\n\n### 9. 실제 로봇 대회 준비 가이드\n- 로봇 대회 유형 및 규칙 이해\n- 하드웨어 최적화 전략\n- 경기 전략 수립\n- 문제 해결 체크리스트\n- 팀 협업 방법론",
      features: [
        "DC 모터 및 스텝 모터",
        "모터 드라이버",
        "다축 서보 모터",
        "적외선 및 초음파 센서",
        "로봇 프레임 및 바퀴",
        "자율주행 알고리즘 튜토리얼"
      ],
      specifications: [
        "교육 대상: 대학생 이상",
        "난이도: 고급",
        "소요 시간: 프로젝트당 5-10시간",
        "언어: C++, Python",
        "패키지 크기: 40 x 30 x 15 cm",
        "무게: 1200g"
      ],
      icon: <Bot className="w-8 h-8" />,
      imageBg: "bg-gradient-to-br from-orange-500 to-red-600",
      image: "/products/robotics-kit.jpg"
    }
  ];
  
  const product = products.find(p => p.id === productId);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image
      });
    }
  };

  const handleCompareToggle = () => {
    if (!product) return;
    
    if (isItemInCompare(product.id)) {
      removeFromCompare(product.id);
    } else {
      const compareItem: CompareItem = {
        id: product.id,
        name: product.name,
        category: product.category || '',
        level: product.level || '',
        price: product.price,
        features: product.features
      };
      addToCompare(compareItem);
    }
  };

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };
  
  if (!product) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <StarField />
        <Navbar />
        <main className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">제품을 찾을 수 없습니다</h1>
          <Button asChild>
            <Link to="/products">제품 목록으로 돌아가기</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
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
      
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className={`h-64 md:h-96 rounded-lg mb-8 relative flex items-center justify-center bg-cover bg-center`} 
              style={{ 
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center z-10">
                {React.cloneElement(product.icon, { className: "w-10 h-10" })}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">{product.level}</span>
              <span className="text-cosmic-stardust-teal">{product.category}</span>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="overview">제품 개요</TabsTrigger>
                  <TabsTrigger value="manual">기본 설명서</TabsTrigger>
                  <TabsTrigger value="premium" disabled={!hasPurchased}>
                    <div className="flex items-center gap-1">
                      {!hasPurchased && <Lock size={14} />}
                      상세 설명서
                    </div>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <h2 className="text-xl font-bold mb-4">제품 설명</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{product.longDescription}</p>
                  
                  <h3 className="font-semibold mb-3">구성품:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-cosmic-stardust-teal shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold mb-3">사양:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cosmic-stardust-teal" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="manual">
                  <div className="relative">
                    <h2 className="text-xl font-bold mb-4">기본 설명서</h2>
                    <div className="bg-black/20 p-4 rounded-lg whitespace-pre-line">
                      {product.basicManual}
                    </div>
                    
                    <div className="mt-6 p-6 border border-white/10 rounded-lg bg-gradient-to-br from-purple-950/50 to-blue-900/50">
                      <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        상세 설명서 이용 안내
                      </h3>
                      <p className="mb-4">제품 구매 후 로그인하시면 더 자세한 프로젝트 설명서, 회로도, 코드 예제 등 고급 자료를 이용하실 수 있습니다.</p>
                      {!isLoggedIn ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>로그인하기</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <Tabs defaultValue="login" className="w-full">
                              <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">로그인</TabsTrigger>
                                <TabsTrigger value="signup">회원가입</TabsTrigger>
                              </TabsList>
                              
                              <TabsContent value="login" className="p-4">
                                <Form {...loginForm}>
                                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                                    <FormField
                                      control={loginForm.control}
                                      name="email"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>이메일</FormLabel>
                                          <FormControl>
                                            <Input placeholder="이메일을 입력하세요" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={loginForm.control}
                                      name="password"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>비밀번호</FormLabel>
                                          <FormControl>
                                            <Input type="password" placeholder="비밀번호를 입력하세요" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <Button type="submit" className="w-full">로그인</Button>
                                  </form>
                                </Form>
                              </TabsContent>
                              
                              <TabsContent value="signup" className="p-4">
                                <Form {...signupForm}>
                                  <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
                                    <FormField
                                      control={signupForm.control}
                                      name="name"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>이름</FormLabel>
                                          <FormControl>
                                            <Input placeholder="이름을 입력하세요" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={signupForm.control}
                                      name="email"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>이메일</FormLabel>
                                          <FormControl>
                                            <Input placeholder="이메일을 입력하세요" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={signupForm.control}
                                      name="password"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>비밀번호</FormLabel>
                                          <FormControl>
                                            <Input type="password" placeholder="비밀번호를 입력하세요" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={signupForm.control}
                                      name="confirmPassword"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>비밀번호 확인</FormLabel>
                                          <FormControl>
                                            <Input type="password" placeholder="비밀번호를 한번 더 입력하세요" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <Button type="submit" className="w-full">회원가입</Button>
                                  </form>
                                </Form>
                              </TabsContent>
                            </Tabs>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <div className="flex flex-col items-start gap-4">
                          <p className="text-green-300">
                            로그인 완료! {hasPurchased ? '구매한 제품의 상세 설명서에 접근할 수 있습니다.' : '제품 구매 후 상세 설명서를 이용할 수 있습니다.'}
                          </p>
                          <Button variant="outline" onClick={handleLogout}>로그아웃</Button>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="premium">
                  <div className="relative">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-cosmic-stardust-teal" />
                      상세 설명서 (구매자 전용)
                    </h2>
                    <div className="bg-black/20 p-4 rounded-lg markdown whitespace-pre-line prose prose-invert max-w-none">
                      {product.detailedManual}
                    </div>
                    
                    <div className="mt-6 p-6 border border-cosmic-stardust-teal/30 rounded-lg bg-gradient-to-br from-teal-950/50 to-blue-900/50">
                      <h3 className="text-lg font-bold mb-2">추가 자료 다운로드</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Button variant="outline" className="flex items-center gap-2">
                          <FileText size={16} />
                          회로도 (PDF)
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <FileText size={16} />
                          예제 코드 (ZIP)
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <FileText size={16} />
                          부품 데이터시트 (PDF)
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <FileText size={16} />
                          문제해결 가이드 (PDF)
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-2">{product.price}</h2>
              <p className="text-gray-400 mb-6">{product.description}</p>
              
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="quantity" className="text-sm font-medium">수량</label>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <Button onClick={handleAddToCart} className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    장바구니에 추가
                  </Button>
                  
                  <Button onClick={handlePurchase} className="w-full" variant="secondary">
                    지금 구매하기
                  </Button>
                  
                  <Button 
                    onClick={handleCompareToggle} 
                    variant="outline" 
                    className="w-full"
                  >
                    <Scale className="mr-2 h-4 w-4" />
                    {isItemInCompare(product.id) ? '비교 목록에서 제거' : '비교 목록에 추가'}
                  </Button>
                </div>
                
                <div className="border-t border-white/10 pt-4">
                  <h3 className="font-medium mb-2">제품 정보</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">카테고리</span>
                      <span>{product.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">난이도</span>
                      <span>{product.level}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">배송</span>
                      <span>무료배송 (2-3일 소요)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">연관 제품</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== productId)
              .map(relatedProduct => (
                <Card key={relatedProduct.id} className="glass-card overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${relatedProduct.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 text-xs bg-black/50 backdrop-blur-sm rounded-full text-white">
                        {relatedProduct.level}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{relatedProduct.price}</span>
                      <Button asChild size="sm">
                        <Link to={`/products/${relatedProduct.id}`}>자세히 보기</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
