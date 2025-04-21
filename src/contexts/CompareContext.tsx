
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { CompareItem } from '@/types/product';

interface CompareContextType {
  items: CompareItem[];
  addItem: (item: CompareItem) => void;
  removeItem: (id: number) => void;
  clearItems: () => void;
  isItemInCompare: (id: number) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CompareItem[]>(() => {
    // 로컬 스토리지에서 비교 목록 불러오기
    const savedItems = localStorage.getItem('compareItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // 비교 목록이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('compareItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item: CompareItem) => {
    // 최대 4개까지만 비교 가능하도록 제한
    if (items.length >= 4) {
      toast({
        title: "비교 목록이 가득 찼습니다",
        description: "최대 4개의 상품만 비교할 수 있습니다. 다른 상품을 제거한 후 다시 시도해주세요.",
        variant: "destructive"
      });
      return;
    }

    // 이미 목록에 있는지 확인
    if (items.some(i => i.id === item.id)) {
      toast({
        title: "이미 비교 목록에 있습니다",
        description: `${item.name}은(는) 이미 비교 목록에 추가되어 있습니다.`,
        variant: "destructive"
      });
      return;
    }

    setItems(prev => [...prev, item]);
    toast({
      title: "비교 목록에 추가되었습니다",
      description: `${item.name}이(가) 비교 목록에 추가되었습니다.`
    });
  };

  const removeItem = (id: number) => {
    setItems(prev => {
      const filtered = prev.filter(item => item.id !== id);
      if (filtered.length !== prev.length) {
        toast({
          title: "비교 목록에서 제거되었습니다",
          description: "상품이 비교 목록에서 제거되었습니다."
        });
      }
      return filtered;
    });
  };

  const clearItems = () => {
    setItems([]);
    toast({
      title: "비교 목록이 초기화되었습니다",
      description: "모든 상품이 비교 목록에서 제거되었습니다."
    });
  };

  const isItemInCompare = (id: number) => {
    return items.some(item => item.id === id);
  };

  return (
    <CompareContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      clearItems,
      isItemInCompare
    }}>
      {children}
    </CompareContext.Provider>
  );
};
