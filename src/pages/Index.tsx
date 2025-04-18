
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsPreview from '@/components/ProductsPreview';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import DynamicBackground from '@/components/DynamicBackground';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <DynamicBackground />
      <Navbar />
      
      <main className="relative">
        <HeroSection />
        <ProductsPreview />
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
