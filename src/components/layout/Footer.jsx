import React from 'react';
import ZaptBadge from '@/components/shared/ZaptBadge';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600 text-sm">
            © {currentYear} David Levine - Competitive Edge Analyzer. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <ZaptBadge />
          </div>
        </div>
      </div>
    </footer>
  );
}