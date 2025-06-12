import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Book, Mail, Phone, MapPin, FileText, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Maker's Toolkit</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              미래의 메이커를 위한 완벽한 교육 솔루션을 제공합니다. 
              혁신적인 학습 경험으로 창의적 인재를 육성합니다.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">제품</h3>
                <ul className="space-y-3">
                  <li><Link to="/products?level=초급" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">초급 키트</Link></li>
                  <li><Link to="/products?level=중급" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">중급 키트</Link></li>
                  <li><Link to="/products?level=고급" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">고급 키트</Link></li>
                  <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">전체 제품</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">고객 서비스</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/support" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      고객 지원
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                      <Book className="w-4 h-4 mr-2" />
                      교육 가이드
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      문의하기
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">회사 정보</h3>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">회사 소개</Link></li>
                  <li>
                    <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                      <FileText className="w-4 h-4 mr-2" />
                      이용약관
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center text-sm">
                      <Shield className="w-4 h-4 mr-2" />
                      개인정보처리방침
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-3">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">전화 문의</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">02-123-4567</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-3">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">이메일</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">contact@makerstoolkit.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-3">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">주소</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">서울시 강남구 테헤란로 123</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Maker's Toolkit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                이용약관
              </Link>
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;