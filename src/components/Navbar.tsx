import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useCompare } from '@/contexts/CompareContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { user, signOut, isAdmin } = useAuth();
  const { itemCount } = useCart();
  const { items: compareItems } = useCompare();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '제품', path: '/products' },
    { name: '회사 소개', path: '/about' },
    { name: '문의하기', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-md"></div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Maker's Toolkit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path 
                    ? "text-primary font-semibold" 
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cart and Compare Icons */}
            <div className="flex items-center space-x-3">
              <Link 
                to="/compare" 
                className={cn(
                  "relative p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  compareItems.length > 0 ? "text-primary" : "text-gray-600 dark:text-gray-400"
                )}
              >
                <Scale className="w-5 h-5" />
                {compareItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-medium">
                    {compareItems.length}
                  </span>
                )}
              </Link>
              
              <Link 
                to="/cart" 
                className={cn(
                  "relative p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  itemCount > 0 ? "text-primary" : "text-gray-600 dark:text-gray-400"
                )}
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-medium">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </Link>
            </div>
            
            {user ? (
              <div className="flex items-center gap-4">
                {isAdmin && (
                  <span className="text-sm text-primary font-medium bg-blue-50 px-3 py-1 rounded-full">
                    관리자
                  </span>
                )}
                <Button onClick={signOut} variant="outline" size="sm">
                  로그아웃
                </Button>
              </div>
            ) : (
              <Button asChild size="sm" className="btn-primary">
                <Link to="/auth">로그인</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Cart and Compare Icons */}
            <Link 
              to="/compare" 
              className={cn(
                "relative p-2 rounded-lg transition-colors",
                compareItems.length > 0 ? "text-primary" : "text-gray-600"
              )}
            >
              <Scale className="w-5 h-5" />
              {compareItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  {compareItems.length}
                </span>
              )}
            </Link>
            
            <Link 
              to="/cart" 
              className={cn(
                "relative p-2 rounded-lg transition-colors",
                itemCount > 0 ? "text-primary" : "text-gray-600"
              )}
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Link>
            
            <button 
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  location.pathname === item.path 
                    ? "text-primary font-semibold" 
                    : "text-gray-700 dark:text-gray-300"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <div className="flex flex-col gap-3 pt-2">
                {isAdmin && (
                  <span className="text-sm text-primary font-medium">관리자</span>
                )}
                <Button onClick={signOut} variant="outline" className="w-full">
                  로그아웃
                </Button>
              </div>
            ) : (
              <Button asChild className="w-full btn-primary">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>로그인</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;