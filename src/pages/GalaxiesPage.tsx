
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const GalaxiesPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Discover Galaxies</h1>
        <div className="text-center text-xl text-white/90 mb-16">
          This page is under construction. Soon you'll be able to explore various galaxies across the universe.
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalaxiesPage;
