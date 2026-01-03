import React from 'react';
import { Product } from '@/types/types';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <Card className="flex flex-col h-full group">
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden relative">
        {/* Placeholder for product image */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
              <span className="text-2xl">📷</span>
            </div>
            <p className="text-xs text-gray-500">{product.category}</p>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-sm text-dark-600 mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-bold text-primary-600">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            isLoading={isAdding}
            className="group-hover:scale-105"
          >
            {isAdding ? 'Added!' : (
              <>
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};
