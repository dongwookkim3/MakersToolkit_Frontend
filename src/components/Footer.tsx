
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-cosmic-cosmic-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-stardust-teal to-cosmic-galaxy-violet"></div>
              <span className="text-xl font-bold tracking-wider">AstroSpark</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Exploring the cosmos, one discovery at a time. Join us on our interstellar journey.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-white mb-4">Explore</h3>
                <ul className="space-y-2">
                  <li><Link to="/planets" className="text-gray-400 hover:text-white transition-colors">Planets</Link></li>
                  <li><Link to="/galaxies" className="text-gray-400 hover:text-white transition-colors">Galaxies</Link></li>
                  <li><Link to="/stars" className="text-gray-400 hover:text-white transition-colors">Stars</Link></li>
                  <li><Link to="/phenomena" className="text-gray-400 hover:text-white transition-colors">Phenomena</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-4">About</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Mission</Link></li>
                  <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
                  <li><Link to="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/research" className="text-gray-400 hover:text-white transition-colors">Research</Link></li>
                  <li><Link to="/education" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
                  <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
                  <li><Link to="/media" className="text-gray-400 hover:text-white transition-colors">Media</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AstroSpark. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
