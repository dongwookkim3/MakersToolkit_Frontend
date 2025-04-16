
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, Video, Download, ExternalLink, Play, ArrowRight, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const GuidesPage = () => {
  const guides = [
    {
      id: 1,
      title: "아두이노 기초 사용 가이드",
      description: "아두이노의 기본 개념과 초기 설정 방법을 배워봅니다.",
      level: "초급",
      type: "문서",
      image: "https://placehold.co/600x400?text=Arduino+Basics"
    },
    {
      id: 2,
      title: "라즈베리파이 OS 설치하기",
      description: "라즈베리파이에 운영체제를 설치하고 기본 설정하는 방법을 안내합니다.",
      level: "초급",
      type: "비디오",
      image: "https://placehold.co/600x400?text=RaspberryPi+OS"
    },
    {
      id: 3,
      title: "센서 데이터 수집 및 분석",
      description: "다양한 센서에서 데이터를 수집하고 분석하는 방법을 배웁니다.",
      level: "중급",
      type: "문서",
      image: "https://placehold.co/600x400?text=Sensor+Data"
    },
    {
      id: 4,
      title: "IoT 디바이스 클라우드 연결하기",
      description: "여러분의 프로젝트를 클라우드에 연결하여 원격으로 모니터링하는 방법",
      level: "중급",
      type: "문서",
      image: "https://placehold.co/600x400?text=IoT+Cloud"
    },
    {
      id: 5,
      title: "마이크로 컨트롤러 프로그래밍 심화",
      description: "인터럽트, 타이머, 고급 I/O 기술에 대해 알아봅니다.",
      level: "고급",
      type: "비디오",
      image: "https://placehold.co/600x400?text=Advanced+MCU"
    },
    {
      id: 6,
      title: "AI 모델 임베딩 기초",
      description: "소형 디바이스에 AI 모델을 통합하는 방법에 대한 가이드",
      level: "고급",
      type: "워크숍",
      image: "https://placehold.co/600x400?text=AI+Embedding"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">교육 가이드</h1>
            <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
              메이커스 툴킷의 모든 제품을 최대한 활용할 수 있는 상세한 가이드와 튜토리얼을 제공합니다.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <TabsList className="mb-6 md:mb-0">
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="beginner">초급</TabsTrigger>
                <TabsTrigger value="intermediate">중급</TabsTrigger>
                <TabsTrigger value="advanced">고급</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  필터
                </Button>
                <Button variant="outline" size="sm">최신순</Button>
                <Button variant="outline" size="sm">인기순</Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.map((guide) => (
                  <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      {guide.type === "비디오" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                            <Play className="w-8 h-8 text-primary ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={
                          guide.level === "초급" ? "default" : 
                          guide.level === "중급" ? "secondary" : "destructive"
                        }>
                          {guide.level}
                        </Badge>
                        <Badge variant="outline">{guide.type}</Badge>
                      </div>
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full flex items-center justify-center gap-2">
                        {guide.type === "비디오" ? (
                          <>
                            <Video className="w-4 h-4" />
                            비디오 시청하기
                          </>
                        ) : guide.type === "워크숍" ? (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            워크숍 참여하기
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            가이드 다운로드
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="beginner" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.filter(g => g.level === "초급").map((guide) => (
                  <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-all">
                    {/* Same card content as above */}
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      {guide.type === "비디오" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                            <Play className="w-8 h-8 text-primary ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge>초급</Badge>
                        <Badge variant="outline">{guide.type}</Badge>
                      </div>
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">가이드 보기</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Similar content for intermediate and advanced tabs */}
          </Tabs>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              더 많은 가이드 보기
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-20 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">교육자료 신청</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              학교, 교육기관을 위한 특별 교육자료를 제공해 드립니다. 
              커리큘럼 통합 가이드, 수업 계획서, 학생 활동지 등을 받아보세요.
            </p>
            <div className="flex justify-center">
              <Button size="lg">교육자료 신청하기</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuidesPage;
