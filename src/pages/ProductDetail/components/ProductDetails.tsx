
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Lock, Scale, Plus, Minus, ArrowLeft, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useCompare } from '@/contexts/CompareContext';
import { Product } from '@/types/product';
import { toast } from '@/components/ui/use-toast';

interface ProductDetailsProps {
  product: Product;
  quantity: number;
  hasPurchased: boolean;
  onQuantityChange: (quantity: number) => void;
  onPurchase: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  quantity, 
  hasPurchased, 
  onQuantityChange, 
  onPurchase 
}) => {
  const { addItem } = useCart();
  const { addItem: addToCompare, isItemInCompare, removeItem: removeFromCompare } = useCompare();

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    });
  };

  const handleCompare = () => {
    if (isItemInCompare(product.id)) {
      removeFromCompare(product.id);
      toast({
        title: "비교 목록에서 제거",
        description: `${product.name}이(가) 비교 목록에서 제거되었습니다.`,
      });
    } else {
      addToCompare({
        id: product.id,
        name: product.name,
        category: product.category,
        level: product.level,
        price: product.price,
        features: product.features
      });
      toast({
        title: "비교 목록에 추가",
        description: `${product.name}이(가) 비교 목록에 추가되었습니다.`,
      });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="text-gray-600 mb-6">{product.description}</div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-xl font-semibold">{product.price}</div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            onClick={handleIncrement}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <Button className="w-full bg-cosmic-primary hover:bg-cosmic-primary/90" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          장바구니에 담기
        </Button>
        {hasPurchased ? (
          <Button variant="secondary" className="w-full" disabled>
            <Check className="h-4 w-4 mr-2" />
            구매 완료됨
          </Button>
        ) : (
          <Button className="w-full bg-green-500 hover:bg-green-700 text-white" onClick={onPurchase}>
            <Lock className="h-4 w-4 mr-2" />
            구매하기
          </Button>
        )}
        <Button 
          variant={isItemInCompare(product.id) ? "destructive" : "outline"} 
          className="w-full"
          onClick={handleCompare}
        >
          {isItemInCompare(product.id) ? (
            <>
              <Minus className="h-4 w-4 mr-2" />
              비교 취소
            </>
          ) : (
            <>
              <Scale className="h-4 w-4 mr-2" />
              비교하기
            </>
          )}
        </Button>
        <Button asChild variant="ghost" className="w-full">
          <Link to="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            목록으로 돌아가기
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
