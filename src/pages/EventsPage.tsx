
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import EventsSection from '@/components/EventsSection';

const EventsPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Celestial Events</h1>
          <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with upcoming astronomical events and phenomena happening in our solar system and beyond.
          </p>
        </div>
        
        <EventsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
