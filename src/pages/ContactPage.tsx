
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    toast({
      title: "메시지가 전송되었습니다",
      description: "빠른 시일 내에 답변 드리겠습니다.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">문의하기</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm flex flex-col items-center text-center">
              <Mail className="w-10 h-10 text-cosmic-stardust-teal mb-4" />
              <h2 className="text-xl font-bold mb-2">이메일</h2>
              <p className="text-gray-300">contact@techedulab.com</p>
            </div>
            
            <div className="p-6 border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm flex flex-col items-center text-center">
              <Phone className="w-10 h-10 text-cosmic-stardust-teal mb-4" />
              <h2 className="text-xl font-bold mb-2">전화</h2>
              <p className="text-gray-300">02-123-4567</p>
            </div>
            
            <div className="p-6 border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm flex flex-col items-center text-center">
              <MapPin className="w-10 h-10 text-cosmic-stardust-teal mb-4" />
              <h2 className="text-xl font-bold mb-2">주소</h2>
              <p className="text-gray-300">서울시 강남구 테헤란로 123 테크빌딩 8층</p>
            </div>
          </div>
          
          <div className="border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">메시지 보내기</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    이름
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/30 border-white/20"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    이메일
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/30 border-white/20"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  제목
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-black/30 border-white/20"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  메시지
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black/30 border-white/20"
                  required
                />
              </div>
              
              <Button type="submit" className="bg-gradient-to-r from-cosmic-stardust-teal to-cosmic-galaxy-violet w-full">
                <Send className="mr-2 h-4 w-4" /> 메시지 보내기
              </Button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
