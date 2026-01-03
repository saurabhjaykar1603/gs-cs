import React from 'react';
import { Shield, Headphones, Award, Zap } from 'lucide-react';
import { Card } from './ui/Card';

const features = [
  {
    icon: Shield,
    title: '100% Secure Systems',
    description: 'Military-grade encryption and certified security products for maximum protection',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support and emergency response team available',
    color: 'text-secondary-600',
    bgColor: 'bg-secondary-50',
  },
  {
    icon: Award,
    title: 'Professional Installation',
    description: 'Certified technicians with years of experience and quality workmanship guarantee',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Zap,
    title: 'Smart Technology',
    description: 'Latest IoT-enabled devices with mobile app control and real-time alerts',
    color: 'text-secondary-600',
    bgColor: 'bg-secondary-50',
  },
];

export const FeatureCards = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            We deliver excellence in security solutions with cutting-edge technology and unmatched customer service
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="text-center group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-dark-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
