
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Shield, Lock, Eye, FileCheck, Clock, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">개인정보처리방침</h1>
            <p className="text-gray-500 mb-8">최종 업데이트: 2024년 4월 16일</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-medium text-lg mb-2">개인정보 보호</h3>
                    <p className="text-gray-600 text-sm">최고 수준의 보안 조치로 고객 정보를 안전하게 보호합니다</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-medium text-lg mb-2">안전한 결제</h3>
                    <p className="text-gray-600 text-sm">모든 결제 정보는 암호화되어 처리됩니다</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Eye className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-medium text-lg mb-2">투명한 정책</h3>
                    <p className="text-gray-600 text-sm">개인정보 수집 및 이용에 대해 명확하게 안내합니다</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Separator className="my-8" />
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. 개인정보 수집 항목</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  메이커스 툴킷(이하 "회사")은 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">필수 수집 항목</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>이름, 이메일 주소, 비밀번호</li>
                    <li>휴대전화 번호</li>
                    <li>배송 주소 (제품 구매 시)</li>
                    <li>결제 정보 (신용카드 정보, 계좌번호 등)</li>
                  </ul>
                  
                  <h3 className="font-medium mb-3">선택 수집 항목</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>직업, 소속 기관</li>
                    <li>관심 분야, 보유 기술</li>
                    <li>서비스 이용 기록, 접속 로그, 쿠키, IP 주소</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">2. 개인정보 수집 및 이용 목적</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>회원 관리: 회원제 서비스 이용, 개인식별, 불량회원의 부정 이용 방지, 가입 의사 확인, 불만 처리 등 민원처리, 공지사항 전달</li>
                  <li>서비스 제공: 제품 주문, 배송, 설치, 기술 지원, 콘텐츠 제공, 맞춤 서비스 제공</li>
                  <li>마케팅 및 광고: 이벤트 정보 및 참여 기회 제공, 서비스 안내, 신규 서비스 개발 및 특화, 인구통계학적 특성에 따른 서비스 제공</li>
                  <li>통계 및 서비스 개선: 접속 빈도 파악, 서비스 이용에 대한 통계, 서비스 개선을 위한 연구</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">3. 개인정보의 보유 및 이용 기간</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  회사는 이용자의 개인정보를 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 지체 없이 파기합니다. 단, 관련 법령에 의해 보존해야 하는 경우는 다음과 같습니다.
                </p>
                <table className="w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">보존 항목</th>
                      <th className="border p-3 text-left">보존 기간</th>
                      <th className="border p-3 text-left">보존 근거</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">계약 또는 청약철회 등에 관한 기록</td>
                      <td className="border p-3">5년</td>
                      <td className="border p-3">전자상거래 등에서의 소비자 보호에 관한 법률</td>
                    </tr>
                    <tr>
                      <td className="border p-3">대금결제 및 재화 등의 공급에 관한 기록</td>
                      <td className="border p-3">5년</td>
                      <td className="border p-3">전자상거래 등에서의 소비자 보호에 관한 법률</td>
                    </tr>
                    <tr>
                      <td className="border p-3">소비자의 불만 또는 분쟁처리에 관한 기록</td>
                      <td className="border p-3">3년</td>
                      <td className="border p-3">전자상거래 등에서의 소비자 보호에 관한 법률</td>
                    </tr>
                    <tr>
                      <td className="border p-3">웹사이트 방문기록</td>
                      <td className="border p-3">3개월</td>
                      <td className="border p-3">통신비밀보호법</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">4. 개인정보 제3자 제공</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>이용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">5. 이용자의 권리와 행사 방법</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  이용자는 개인정보 보호법 제4조에 따라 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  권리 행사는 회사에 대해 서면, 전화, 이메일, 팩스 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통해서도 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">6. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  회사는 이용자의 서비스 이용 편의를 위해 쿠키(cookie)를 사용합니다. 쿠키는 웹사이트가 이용자의 컴퓨터 브라우저에 전송하는 소량의 정보입니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">7. 개인정보 보호책임자</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <h3 className="font-medium mb-3">개인정보 보호책임자</h3>
                  <ul className="list-none space-y-2 text-gray-700">
                    <li>성명: 홍길동</li>
                    <li>직위: 개인정보보호 책임자</li>
                    <li>연락처: privacy@makerstoolkit.com</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  이용자는 회사의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                </p>
              </section>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                이 개인정보처리방침에 대해 질문이 있으시면 <a href="mailto:privacy@makerstoolkit.com" className="text-primary hover:underline">privacy@makerstoolkit.com</a>으로 문의해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
