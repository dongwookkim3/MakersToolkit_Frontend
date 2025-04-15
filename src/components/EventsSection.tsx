
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    id: 1,
    title: 'Meteor Shower',
    date: 'April 22-23, 2025',
    description: 'The Lyrid meteor shower will peak, producing up to 20 meteors per hour at its peak.',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Solar Eclipse',
    date: 'May 15, 2025',
    description: 'A total solar eclipse will be visible from parts of North America and Eastern Asia.',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 3,
    title: 'Supernova Observation',
    date: 'June 3-10, 2025',
    description: 'Astronomers predict a visible supernova in the Andromeda galaxy, visible with telescopes.',
    badgeColor: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Planetary Alignment',
    date: 'July 8, 2025',
    description: 'Mercury, Venus, Mars, Jupiter and Saturn will align in the night sky, visible to the naked eye.',
    badgeColor: 'bg-cosmic-stardust-teal'
  }
];

const EventsSection = () => {
  return (
    <div className="relative py-24 overflow-hidden bg-cosmic-cosmic-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Upcoming Celestial <span className="text-cosmic-nova-orange">Events</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Mark your calendars for these astronomical phenomena occurring in our cosmic neighborhood.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <Badge className={`${event.badgeColor} text-white`}>{event.date}</Badge>
                </div>
                <p className="text-gray-300">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="inline-block bg-gradient-to-r from-cosmic-stardust-teal to-cosmic-galaxy-violet bg-clip-text text-transparent text-lg font-medium">
            Set reminders for these events and never miss a cosmic spectacle
          </p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-cosmic-galaxy-violet/20 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cosmic-nebula-purple/10 blur-3xl"></div>
    </div>
  );
};

export default EventsSection;
