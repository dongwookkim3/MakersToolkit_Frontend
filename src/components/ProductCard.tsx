
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Scale } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useCompare, CompareItem } from '@/contexts/CompareContext';

interface Product {
  id: number;
  name: string;
  category: string;
  level: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  expanded?: boolean;
  toggleExpand?: (id: number) => void;
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  const { addItem } = useCart();
  const { addItem: addToCompare, isItemInCompare, removeItem: removeFromCompare } = useCompare();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  };

  const handleCompareToggle = () => {
    if (isItemInCompare(product.id)) {
      removeFromCompare(product.id);
    } else {
      const compareItem: CompareItem = {
        id: product.id,
        name: product.name,
        category: product.category,
        level: product.level,
        price: product.price,
        features: product.features
      };
      addToCompare(compareItem);
    }
  };

  if (variant === 'compact') {
    return (
      <Card className="card-cosmic overflow-hidden">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.price}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 ${isItemInCompare(product.id) ? 'text-primary' : ''}`}
                onClick={handleCompareToggle}
              >
                <Scale className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-cosmic overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="p-4 bg-black/30 rounded-full">
          {product.icon}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gradient">{product.name}</h3>
          <span className="px-2 py-1 bg-white/10 rounded-full text-xs">{product.level}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400">{product.category}</span>
          <span className="font-semibold text-cosmic-primary">{product.price}</span>
        </div>
        <p className="text-gray-300 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex gap-2">
          <Button
            variant={isItemInCompare(product.id) ? "default" : "outline"}
            size="sm"
            className={isItemInCompare(product.id) ? "bg-cosmic-primary hover:bg-cosmic-primary/90" : ""}
            onClick={handleCompareToggle}
          >
            <Scale className="h-4 w-4 mr-1" />
            {isItemInCompare(product.id) ? "비교 중" : "비교하기"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            장바구니
          </Button>
          <Button asChild variant="outline" size="sm" className="ml-auto">
            <Link to={`/products/${product.id}`}>상세 보기</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
