'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { FilterState } from '@/types/types';
import { SlidersHorizontal } from 'lucide-react';

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    sortBy: 'none',
  });

  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch =
        filters.category === 'All' || product.category === filters.category;
      return categoryMatch;
    });

    // Sort
    if (filters.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="section-container py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl">
            Browse our comprehensive range of professional security solutions
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden btn-primary mb-6 flex items-center gap-2"
        >
          <SlidersHorizontal className="w-5 h-5" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`lg:w-64 flex-shrink-0 ${
              showFilters ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="bg-white rounded-xl shadow-premium p-6 sticky top-24">
              <h2 className="text-xl font-bold text-dark-900 mb-6">Filters</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-dark-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === category}
                        onChange={() =>
                          setFilters({ ...filters, category })
                        }
                        className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-dark-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="font-semibold text-dark-900 mb-3">Sort By</h3>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      sortBy: e.target.value as FilterState['sortBy'],
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="none">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() =>
                  setFilters({
                    category: 'All',
                    sortBy: 'none',
                  })
                }
                className="w-full mt-6 btn-outline"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-4 text-dark-600">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-dark-600">No products found matching your filters.</p>
                <button
                  onClick={() =>
                    setFilters({
                      category: 'All',
                      sortBy: 'none',
                    })
                  }
                  className="mt-4 btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
