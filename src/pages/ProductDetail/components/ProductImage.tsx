
import React from 'react';
import { FileText } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductImageProps {
  product: Product;
}

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-md z-0"></div>
      <div className="relative z-10 p-6">
        {product.icon ? (
          <div className="w-full h-64 flex items-center justify-center">
            {product.icon}
          </div>
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-md">
            <FileText className="w-16 h-16 text-gray-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
