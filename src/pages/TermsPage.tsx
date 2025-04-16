
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const TermsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">이용약관</h1>
            <p className="text-gray-500 mb-8">최종 업데이트: 2024년 4월 16일</p>
            
            <Separator className="my-8" />
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">제 1 조 (목적)</h2>
                <p className="text-gray-700 leading-relaxed">
                  이 약관은 메이커스 툴킷(이하 "회사")이 제공하는 제품 및 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">제 2 조 (정의)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>"서비스"라 함은 회사가 제공하는 모든 제품, 컨텐츠, 교육자료 및 기타 관련 서비스를 의미합니다.</li>
                  <li>"이용자"라 함은 회사의 웹사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
                  <li>"콘텐츠"라 함은 회사가 제공하는 교육 가이드, 매뉴얼, 비디오 등 모든 형태의 정보 또는 자료를 의미합니다.</li>
                  <li>"계정"이라 함은 이용자가 서비스를 이용하기 위하여 필요한 이메일, 비밀번호 등의 정보입니다.</li>
                </ol>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">제 3 조 (약관의 효력 및 변경)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  1. 이 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  2. 회사는 필요한 경우 관련법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있습니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  3. 회사가 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여 현행약관과 함께 서비스 내에 그 적용일자 7일 전부터 공지합니다. 다만, 이용자에게 불리한 약관 변경의 경우에는 30일 전부터 공지하며, 이메일 등 전자적 수단을 통해 이용자에게 개별 통지합니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">제 4 조 (서비스의 제공 및 변경)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  1. 회사는 다음과 같은 서비스를 제공합니다.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>교육용 하드웨어 키트 판매</li>
                  <li>교육용 소프트웨어 및 콘텐츠 제공</li>
                  <li>교육 가이드 및 매뉴얼 제공</li>
                  <li>기술 지원 및 고객 서비스</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  2. 회사는 서비스의 내용, 운영 방식, 기술적 사양 등을 변경할 수 있으며, 이에 대해 사전에 공지합니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">제 5 조 (이용계약의 성립)</h2>
                <p className="text-gray-700 leading-relaxed">
                  1. 이용계약은 이용자가 약관의 내용에 대하여 동의를 하고 회사가 정한 절차에 따라 서비스 이용 신청을 하면, 회사가 이를 승낙함으로써 체결됩니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">제 6 조 (회원가입 및 계정 관리)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  1. 이용자는 회사가 정한 양식에 따라 정확한 정보를 기입하여 회원가입을 신청합니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  2. 이용자는 자신의 계정 정보를 안전하게 관리할 책임이 있으며, 제3자에게 자신의 계정을 이용하게 해서는 안 됩니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  3. 이용자는 자신의 계정 정보가 도용되거나 제3자가 무단으로 사용하고 있음을 인지한 경우, 즉시 회사에 통보하고 회사의 안내에 따라야 합니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">제 7 조 (개인정보보호)</h2>
                <p className="text-gray-700 leading-relaxed">
                  회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다. 개인정보처리방침에 관한 자세한 내용은 서비스 내 개인정보처리방침 페이지를 참고하시기 바랍니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">제 8 조 (이용자의 의무)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  이용자는 다음 행위를 하여서는 안 됩니다.
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>회원가입 신청 또는 정보 변경 시 허위 내용의 등록</li>
                  <li>타인의 정보 도용</li>
                  <li>회사가 게시한 정보의 변경</li>
                  <li>회사가 제공하는 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 상업적으로 이용하거나 제3자에게 제공하는 행위</li>
                  <li>회사 및 기타 제3자의 저작권, 상표권 등 지적재산권 침해</li>
                  <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                  <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                </ol>
              </section>
              
              {/* Additional sections would continue here */}
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                이 이용약관에 대해 질문이 있으시면 <a href="mailto:legal@makerstoolkit.com" className="text-primary hover:underline">legal@makerstoolkit.com</a>으로 문의해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
