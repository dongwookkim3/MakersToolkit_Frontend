
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Product } from '@/types/product';
import { useAuth } from '@/contexts/AuthContext';
import ProductHeader from './components/ProductHeader';
import ProductImage from './components/ProductImage';
import ProductDetails from './components/ProductDetails';
import ProductFeatures from './components/ProductFeatures';
import LoginDialog from './components/LoginDialog';
import { useToast } from "@/components/ui/use-toast";
import { 
  Cpu, 
  Wifi, 
  Bot, 
  Server as ServerIcon, 
  Layers as LayersIcon, 
  Codesandbox as CodesandboxIcon
} from 'lucide-react';
import { productsData } from './data';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [hasPurchased, setHasPurchased] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const product = productsData.find(p => p.id === productId);

  useEffect(() => {
    if (!product) {
      toast({
        title: "Error",
        description: "Product not found.",
        variant: "destructive",
      });
      navigate("/products");
    }
  }, [product, navigate, toast]);

  if (!product) {
    return null;
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handlePurchase = () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    
    setHasPurchased(true);
    toast({
      title: "구매 완료",
      description: "상세 설명서가 제공됩니다.",
    });
  };

  const handleGoToLogin = () => {
    setShowLoginDialog(false);
    navigate('/auth', { state: { returnUrl: `/products/${id}` } });
  };

  const closeLoginDialog = () => {
    setShowLoginDialog(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <ProductHeader product={product} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImage product={product} />
          <ProductDetails 
            product={product}
            quantity={quantity}
            hasPurchased={hasPurchased}
            onQuantityChange={handleQuantityChange}
            onPurchase={handlePurchase}
          />
        </div>

        <ProductFeatures features={product.features} />
      </main>
      
      <LoginDialog 
        isOpen={showLoginDialog} 
        onClose={closeLoginDialog}
        onLogin={handleGoToLogin} 
      />
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
