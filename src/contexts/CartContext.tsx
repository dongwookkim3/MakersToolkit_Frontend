
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { CartItem } from '@/types/product';

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // 로컬 스토리지에서 카트 정보 불러오기
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 카트 정보가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems(prevItems => {
      // 이미 카트에 있는 상품인지 확인
      const existingItem = prevItems.find(i => i.id === item.id);
      
      if (existingItem) {
        // 이미 있으면 수량만 증가
        const updatedItems = prevItems.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
        toast({
          title: "수량이 업데이트되었습니다",
          description: `${item.name}의 수량이 증가했습니다.`,
        });
        return updatedItems;
      } else {
        // 새 상품 추가
        toast({
          title: "상품이 장바구니에 추가되었습니다",
          description: `${item.name}가 장바구니에 추가되었습니다.`,
        });
        return [...prevItems, item];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(i => i.id === id);
      if (itemToRemove) {
        toast({
          title: "상품이 장바구니에서 제거되었습니다",
          description: `${itemToRemove.name}이(가) 장바구니에서 제거되었습니다.`,
        });
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "장바구니가 비워졌습니다",
      description: "모든 상품이 장바구니에서 제거되었습니다.",
    });
  };

  // 총 상품 개수 계산
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  // 총 가격 계산 (예: "89,000원" 형식의 가격을 파싱하여 계산)
  const totalPrice = items.reduce((total, item) => {
    const priceValue = parseInt(item.price.replace(/[^0-9]/g, ''));
    return total + (priceValue * item.quantity);
  }, 0).toLocaleString() + '원';

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart,
      itemCount,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
