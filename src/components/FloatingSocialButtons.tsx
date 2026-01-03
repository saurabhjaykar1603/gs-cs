'use client';

import React, { useState } from 'react';
import { MessageCircle, Instagram, Phone, X } from 'lucide-react';

export const FloatingSocialButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918308209470', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/gs_enterprises_security?igsh=MTNjajBwM2FxbzQ0ZQ==', '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-6 z-50 flex flex-col gap-3">
      {/* Toggle Button - Only visible on mobile */}
      <button
        onClick={toggleExpanded}
        className="md:hidden w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label={isExpanded ? "Close menu" : "Open menu"}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white transition-transform duration-200 rotate-0" />
        ) : (
          <Phone className="w-6 h-6 text-white transition-transform duration-200 rotate-0" />
        )}
      </button>

      {/* Social Buttons - Hidden on mobile unless expanded, always visible on desktop */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ease-in-out ${
        isExpanded 
          ? 'opacity-100 scale-100 max-h-96' 
          : 'opacity-0 scale-75 max-h-0 pointer-events-none'
      } md:opacity-100 md:scale-100 md:max-h-none md:pointer-events-auto`}>
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </button>

      {/* Instagram Floating Button */}
      <button
        onClick={handleInstagramClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </button>

      {/* Contact Floating Button */}
      <a
        href="#contact"
        className="w-12 h-12 md:w-14 md:h-14 bg-primary-600 hover:bg-primary-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us"
      >
        <span className="text-white font-bold text-lg md:text-xl">✉️</span>
      </a>
      </div>
    </div>
  );
};
