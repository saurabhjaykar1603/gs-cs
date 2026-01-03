import React from 'react';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section className="relative gradient-hero text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600/20 backdrop-blur-sm rounded-2xl mb-6 border border-primary-500/30">
            <Shield className="w-10 h-10 text-primary-400" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-balance leading-tight">
            Premium Security Solutions for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"> Your Peace of Mind</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-balance">
            Professional security systems, smart surveillance, and 24/7 support. 
            Protecting homes and businesses across Maharashtra since 2015.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button variant="primary" size="lg" className="group">
                Explore Products
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-dark-900">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">9+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center border-x border-gray-700">
              <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 63.75C1200 67.5 1320 60 1380 56.25L1440 52.5V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
