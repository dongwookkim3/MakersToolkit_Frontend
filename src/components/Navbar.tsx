
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '제품', path: '/products' },
    { name: '회사 소개', path: '/about' },
    { name: '문의하기', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary"></div>
          <span className="text-xl font-bold tracking-wider">Maker's Toolkit</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={cn(
                "text-sm font-medium transition",
                location.pathname === item.path ? "text-primary font-semibold" : "text-gray-600 hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 transition-opacity">
            <Link to="/contact">제품 문의</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-x-0 top-16 bg-white shadow-md md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={cn(
                "text-lg font-medium py-2",
                location.pathname === item.path ? "text-primary font-semibold" : "text-gray-600"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 transition-opacity w-full">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>제품 문의</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
