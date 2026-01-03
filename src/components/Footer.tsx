import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Shield } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/gs_enterprises_security?igsh=MTNjajBwM2FxbzQ0ZQ==' },
  ];

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GS Enterprises</h3>
                <p className="text-sm text-gray-400">Security Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for premium security systems and solutions across Maharashtra. 
              Protecting what matters most since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Phone:</span>{' '}
                <a href="tel:8308209470" className="hover:text-primary-400 transition-colors">
                  8308209470
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:guptasagar46201@gmail.com" className="hover:text-primary-400 transition-colors break-all">
                  guptasagar46201@gmail.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} GS Enterprises Security. All rights reserved. | Designed with care for your safety.
          </p>
        </div>
      </div>
    </footer>
  );
};
