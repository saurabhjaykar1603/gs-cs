'use client';

import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';
import { Button } from './ui/Button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-dark-900">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6 text-dark-700" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-20 h-20 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-dark-900 mb-2">Your cart is empty</h3>
              <p className="text-dark-600 mb-6">Add some products to get started!</p>
              <Button onClick={onClose} variant="primary">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-4">
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-2xl">📷</span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-dark-900 mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-primary-600 font-bold mb-2">
                        ₹{item.price.toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-300"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors h-fit"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                    <span className="text-sm text-dark-600">Item Total:</span>
                    <span className="font-bold text-dark-900">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Subtotal */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-dark-900">Subtotal:</span>
              <span className="text-2xl font-bold text-primary-600">
                ₹{getTotal().toLocaleString()}
              </span>
            </div>
            <Button variant="primary" className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            <button
              onClick={onClose}
              className="w-full mt-3 text-dark-600 hover:text-dark-900 font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};
