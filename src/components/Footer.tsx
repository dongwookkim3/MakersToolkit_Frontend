
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Book, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold tracking-wider">Maker's Toolkit</span>
            </Link>
            <p className="text-gray-600 text-sm">
              미래의 메이커를 위한 완벽한 교육 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-4">제품</h3>
                <ul className="space-y-2">
                  <li><Link to="/products?level=초급" className="text-gray-600 hover:text-primary transition-colors">초급 키트</Link></li>
                  <li><Link to="/products?level=중급" className="text-gray-600 hover:text-primary transition-colors">중급 키트</Link></li>
                  <li><Link to="/products?level=고급" className="text-gray-600 hover:text-primary transition-colors">고급 키트</Link></li>
                  <li><Link to="/products" className="text-gray-600 hover:text-primary transition-colors">전체 제품</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">회사 소개</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">회사 소개</Link></li>
                  <li><Link to="/about#mission" className="text-gray-600 hover:text-primary transition-colors">미션 & 비전</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">고객 서비스</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/support" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      고객 지원
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                      <Book className="w-4 h-4 mr-2" />
                      교육 가이드
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      문의하기
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <span className="text-gray-600">02-123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-primary mr-2" />
              <span className="text-gray-600">contact@makerstoolkit.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              <span className="text-gray-600">서울시 강남구 테헤란로 123 테크빌딩 8층</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Maker's Toolkit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                개인정보처리방침
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
