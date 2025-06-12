import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsPreview from '@/components/ProductsPreview';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProductsPreview />
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;