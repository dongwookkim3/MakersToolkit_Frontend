
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, AlertCircle, Lock, FileText, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const PrivacyPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const privacyCollapsibles = [
    {
      title: "개인정보 수집 항목",
      content: "당사는 회원 가입, 서비스 이용, 상담 및 문의 등을 위해 다음과 같은 개인정보를 수집합니다: 이름, 이메일 주소, 휴대폰 번호, 주소, 결제 정보 등. 필수 정보와 선택 정보를 구분하여 수집하며, 필수 정보만으로도 서비스 이용이 가능합니다."
    },
    {
      title: "개인정보 이용 목적",
      content: "수집한 개인정보는 서비스 제공 및 개선, 신규 서비스 개발, 회원 관리, 마케팅 및 광고, 법령 준수 등의 목적으로 이용됩니다. 이용자의 동의 없이 개인정보를 제3자에게 제공하거나 목적 외로 이용하지 않습니다."
    },
    {
      title: "개인정보 보관 기간",
      content: "개인정보는 서비스 제공을 위해 필요한 기간 동안만 보관하며, 목적 달성 후에는 지체 없이 파기합니다. 다만, 관련 법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 보관할 수 있습니다(예: 전자상거래법에 따른 거래기록 보관 등)."
    },
    {
      title: "개인정보 보호 조치",
      content: "당사는 개인정보의 안전한 관리를 위해 암호화, 접근 제한, 보안 프로그램 설치 등 기술적·관리적 보호 조치를 취하고 있습니다. 또한 개인정보 취급자를 최소한으로 제한하고 정기적인 교육을 실시하고 있습니다."
    },
    {
      title: "이용자의 권리와 행사 방법",
      content: "이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제할 수 있습니다. 개인정보 처리 동의를 철회하거나 개인정보의 오류 수정을 요청할 수 있으며, 이러한 권리는 서비스 내 '마이페이지' 또는 고객센터를 통해 행사할 수 있습니다."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* 스크롤 진행 표시줄 */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">개인정보처리방침</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Maker's Toolkit은 고객의 개인정보를 소중히 여기며 개인정보보호법을 준수합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/80 to-primary p-6 text-white">
              <h2 className="text-2xl font-bold flex items-center">
                <Lock className="mr-2" /> 개인정보 보호 약속
              </h2>
            </div>
            <CardContent className="p-6">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700"
              >
                Maker's Toolkit은 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
              </motion.p>
            </CardContent>
          </Card>

          <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-white">일반 정보</TabsTrigger>
              <TabsTrigger value="collection" className="data-[state=active]:bg-primary data-[state=active]:text-white">정보 수집 및 이용</TabsTrigger>
              <TabsTrigger value="protection" className="data-[state=active]:bg-primary data-[state=active]:text-white">보호 조치</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-4">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  { icon: <FileText className="w-6 h-6 text-primary" />, title: "방침 시행일", content: "이 개인정보처리방침은 2025년 4월 16일부터 시행됩니다." },
                  { icon: <Eye className="w-6 h-6 text-primary" />, title: "방침 변경 고지", content: "개인정보처리방침이 변경되는 경우 변경 사항을 웹사이트에 공지합니다." }
                ].map((item, index) => (
                  <motion.div key={index} variants={item} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="collection">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {privacyCollapsibles.map((item, index) => (
                      <Collapsible key={index} className="border rounded-lg overflow-hidden">
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="flex w-full justify-between p-4 font-medium">
                            <span>{item.title}</span>
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 ui-open:rotate-180" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 pt-0 border-t bg-gray-50">
                          <p className="text-gray-700">{item.content}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="protection">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-6"
              >
                {[
                  { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "기술적 보호 조치", content: "개인정보를 안전하게 처리하기 위한 내부 관리계획 수립, 접근 통제 시스템 설치, 고유식별정보 등의 암호화, 보안 프로그램 설치 등의 기술적 조치를 하고 있습니다." },
                  { icon: <AlertCircle className="w-6 h-6 text-yellow-500" />, title: "관리적 보호 조치", content: "개인정보를 취급하는 직원을 최소한으로 제한하고, 정기적인 교육을 실시하고 있습니다. 또한 개인정보처리시스템의 접속 기록 보관 및 위조, 변조 방지를 위한 조치를 취하고 있습니다." },
                  { icon: <Lock className="w-6 h-6 text-blue-500" />, title: "제3자 제공 및 위탁", content: "원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 이용자의 동의가 있거나 법령에 근거가 있는 경우에 한하여 제3자에게 제공할 수 있습니다." }
                ].map((item, index) => (
                  <motion.div key={index} variants={item} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-full bg-gray-100">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-12 p-8 bg-gray-50 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">개인정보 관련 문의</h3>
            <p className="text-gray-600 mb-4">
              개인정보 처리방침에 대한 문의나 개인정보 관련 고충 처리는 아래 연락처로 문의해 주시기 바랍니다.
            </p>
            <div className="inline-flex items-center justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                <a href="mailto:privacy@makerstoolkit.com">privacy@makerstoolkit.com</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
