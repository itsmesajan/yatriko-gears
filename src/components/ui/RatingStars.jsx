// src/components/RatingStars.jsx
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const RatingStars = ({ rating, iconSize = 16, color = 'text-primary' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const renderStar = (Icon, key) => (
    <Icon key={key} className={`h-4 w-4 ${color}`} style={{ fontSize: `${iconSize}px` }} fill="currentColor" />
  );

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => renderStar(Star, `full-${i}`))}
      {hasHalfStar && renderStar(StarHalf, 'half')}
      {[...Array(emptyStars)].map((_, i) => renderStar(Star, `empty-${i}`))}
    </div>
  );
};

export default RatingStars;