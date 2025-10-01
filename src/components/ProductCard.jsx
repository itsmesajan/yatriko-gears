// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TypeBadge = ({ type }) => {
  const isRent = type === 'RENT';
  const color = isRent ? 'bg-primary/80' : 'bg-green-500/80';
  
  return (
    <span className={`rounded-full ${color} px-2 py-1 text-xs font-semibold text-white`}>
      {type}
    </span>
  );
};

const ProductCard = ({ product }) => (
  <Link 
    to={`/product/${product.id}`} // 👈 Link to the defined route path 
    className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:bg-background-dark/50">
    <div className="relative">
      {/* Image Container with aspect-square class from aspect-ratio plugin */}
      <div 
        className="aspect-square w-full bg-cover bg-center" 
        style={{ backgroundImage: `url("${product.imageUrl}")` }}
      ></div>
      
      {/* Overlay for hover effect */}
      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
      
      {/* Badges for Rent/Buy status */}
      <div className="absolute bottom-2 right-2 flex gap-2">
        {product.type.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </div>
    </div>
    
    <div className="p-4">
      <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">{product.name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
    </div>
  </Link>
);

export default ProductCard;