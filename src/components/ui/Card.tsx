import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true, style }) => {
  const hoverClasses = hover ? 'hover:shadow-premium-hover hover:-translate-y-1' : '';
  
  return (
    <div className={`bg-white rounded-xl shadow-premium transition-all duration-300 p-6 ${hoverClasses} ${className}`} style={style}>
      {children}
    </div>
  );
};
