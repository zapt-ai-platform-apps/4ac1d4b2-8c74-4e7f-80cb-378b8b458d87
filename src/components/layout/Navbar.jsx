import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ZaptBadge from '@/components/shared/ZaptBadge';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Narrative Builder', href: '/narrative-builder' },
    { name: 'Response Simulator', href: '/response-simulator' },
    { name: 'Differentiation Scorecard', href: '/differentiation-scorecard' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
                alt="App logo" 
                className="w-8 h-8 rounded"
              />
              <span className="font-bold text-lg">Competitive Edge Analyzer</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors
                  ${isActive(item.href) ? 'bg-blue-700 text-white' : 'text-blue-100'}`}
              >
                {item.name}
              </Link>
            ))}
            <ZaptBadge />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors
                  ${isActive(item.href) ? 'bg-blue-700 text-white' : 'text-blue-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <ZaptBadge />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}