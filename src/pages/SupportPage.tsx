
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HelpCircle, Headphones, MessageCircle, Clock, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SupportPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">고객 지원 센터</h1>
            <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
              메이커스 툴킷은 여러분의 창작 여정을 지원합니다. 필요한 도움을 받으세요.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-primary transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>전화 상담</CardTitle>
                <CardDescription>실시간 전화 상담으로 신속하게 문제를 해결해 드립니다.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-bold text-xl">02-123-4567</p>
                <p className="text-gray-500 mt-2">평일 9:00 - 18:00</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">전화 상담 예약</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>이메일 문의</CardTitle>
                <CardDescription>상세한 문의사항을 이메일로 보내주시면 24시간 내에 답변해 드립니다.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-bold text-xl">support@makerstoolkit.com</p>
                <p className="text-gray-500 mt-2">24시간 접수 가능</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">이메일 문의하기</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>자주 묻는 질문</CardTitle>
                <CardDescription>가장 많이 문의하시는 질문들에 대한 답변을 확인하세요.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-bold text-xl">FAQ</p>
                <p className="text-gray-500 mt-2">쉽고 빠른 문제 해결</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">FAQ 보기</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "배송은 얼마나 걸리나요?",
                  answer: "주문 후 영업일 기준 1-3일 내에 출고되며, 택배사 사정에 따라 1-2일 내에 배송됩니다."
                },
                {
                  question: "제품에 문제가 있을 경우 어떻게 해야 하나요?",
                  answer: "제품 수령 후 7일 이내에 고객센터로 연락주시면 교환 및 환불 절차를 안내해 드립니다."
                },
                {
                  question: "교육 키트 사용 중 기술적 문제가 발생했어요.",
                  answer: "온라인 가이드를 먼저 확인해 보시고, 해결이 안될 경우 기술지원팀(tech@makerstoolkit.com)으로 문의해 주세요."
                },
                {
                  question: "교육 키트는 어떤 연령대에 적합한가요?",
                  answer: "초급 키트는 초등학생(8세 이상), 중급 키트는 중학생 이상, 고급 키트는 고등학생 이상을 대상으로 설계되었습니다."
                },
                {
                  question: "대량 구매 시 할인이 가능한가요?",
                  answer: "10개 이상 구매 시 수량에 따른 할인이 적용됩니다. 자세한 사항은 영업팀에 문의해 주세요."
                }
              ].map((faq, index) => (
                <div key={index} className="border rounded-lg p-6 hover:border-primary transition-all">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </span>
                    {faq.question}
                  </h3>
                  <p className="mt-4 ml-11 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">더 많은 도움이 필요하신가요?</h3>
              <p className="text-gray-600">전문 상담원이 친절하게 도와드립니다.</p>
            </div>
            <Button size="lg" className="mt-4 md:mt-0">
              1:1 문의하기
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
