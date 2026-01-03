import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from './ui/Card';

export const About = () => {
  const highlights = [
    'Maharashtra\'s trusted security solutions provider',
    '500+ successful installations',
    'Certified and trained technicians',
    'Extended warranty on all products',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden shadow-premium">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-4xl font-bold text-primary-600">GS</span>
                  </div>
                  <p className="text-lg font-semibold text-dark-700">Professional Security Solutions</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-500 rounded-2xl -z-10 opacity-20" />
          </div>

          {/* Right: Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-dark-900 mb-6">
              About GS Enterprises Security
            </h2>
            <p className="text-lg text-dark-600 mb-6 leading-relaxed">
              Since 2015, GS Enterprises Security has been at the forefront of providing 
              cutting-edge security solutions across Maharashtra. Based in Sangamner, we serve 
              residential and commercial clients with premium CCTV systems, alarm solutions, 
              access control, and smart security devices.
            </p>
            <p className="text-lg text-dark-600 mb-8 leading-relaxed">
              Our mission is to make advanced security accessible to everyone. We combine 
              the latest technology with professional installation and ongoing support to 
              ensure your complete peace of mind.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
