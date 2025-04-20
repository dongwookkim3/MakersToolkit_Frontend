
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, ShoppingCart, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';
import StarField from '@/components/StarField';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>장바구니</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-8 h-8" />
          <h1 className="text-3xl font-bold">장바구니</h1>
        </div>
        
        {items.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <div className="mb-6">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-xl font-medium mb-2">장바구니가 비어있습니다</h2>
              <p className="text-gray-400 mb-6">상품을 추가하고 학습을 시작해보세요!</p>
            </div>
            <Button asChild className="bg-cosmic-primary hover:bg-cosmic-primary/90">
              <Link to="/products">제품 보러가기</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <Card key={item.id} className="glass-card overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md bg-cosmic-light flex items-center justify-center">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-12 h-12 object-contain" 
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-primary to-cosmic-secondary" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <Link to={`/products/${item.id}`} className="text-lg font-medium hover:text-cosmic-primary transition-colors">
                          {item.name}
                        </Link>
                        <div className="text-sm text-gray-400">단가: {item.price}</div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right min-w-24">
                        <div className="font-medium">
                          {(parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity).toLocaleString()}원
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 px-2 text-red-400 hover:text-red-500 hover:bg-red-500/10"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          삭제
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  className="text-red-400 hover:text-red-500 hover:bg-red-500/10"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  장바구니 비우기
                </Button>
                <Button asChild variant="outline">
                  <Link to="/products">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    계속 쇼핑하기
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="glass-card sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">주문 요약</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">상품 금액</span>
                      <span>{totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">배송비</span>
                      <span>무료</span>
                    </div>
                    <div className="h-px bg-white/10 my-3"></div>
                    <div className="flex justify-between font-bold">
                      <span>총 결제 금액</span>
                      <span className="text-cosmic-primary">{totalPrice}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-cosmic-primary hover:bg-cosmic-primary/90">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    결제하기
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
