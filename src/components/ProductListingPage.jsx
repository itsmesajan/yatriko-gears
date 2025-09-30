// src/App.jsx
import React from 'react';
import FilterSidebar from './FIlterSidebar';
import { products } from '../constants/data';
import ProductCard from './ProductCard';

const ProductListingPage = () => (
  <div className="relative flex h-auto min-h-screen w-full flex-col">
    <main className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Travel Gears</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Discover gear for your next adventure. Rent, buy, or sell.</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        
        {/* Sidebar */}
        <FilterSidebar />
        
        {/* Product Grid */}
        <section className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default ProductListingPage;