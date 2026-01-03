
"use client";
import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const { name, email, phone, message } = formData;
    
    // Create the WhatsApp message
    const whatsappMessage = `*New Inquiry*\n\n*Name:* ${name || 'Not provided'}\n*Email:* ${email || 'Not provided'}\n*Phone:* ${phone || 'Not provided'}\n\n*Message:*\n${message || 'No message provided'}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp URL with your number (8308209470)
    const whatsappUrl = `https://wa.me/918308209470?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team for expert advice and quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Contact Information</h3>
            
            {/* Address */}
            <Card hover={false} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 mb-1">Address</h4>
                <p className="text-dark-600">
                  Orange Corner, nearby Diamond Hospital<br />
                  Sangamner 422605<br />
                  Maharashtra, Ahilya Nagar
                </p>
              </div>
            </Card>

            {/* Phone */}
            <Card hover={false} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 mb-1">Phone</h4>
                <a href="tel:+918308209470" className="text-secondary-600 hover:text-secondary-700 font-medium">
                  +91 83082 09470
                </a>
              </div>
            </Card>

            {/* Email */}
            <Card hover={false} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 mb-1">Email</h4>
                <a href="mailto:guptasagar46201@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium break-all">
                  guptasagar46201@gmail.com
                </a>
              </div>
            </Card>
          </div>

          {/* Right: Contact Form */}
          <Card hover={false}>
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Sagar Gupta"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="+91 83082 09470"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <Button 
                type="button" 
                variant="primary" 
                className="w-full"
                onClick={handleWhatsAppClick}
              >
                Send via WhatsApp
                <Send className="inline-block ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
