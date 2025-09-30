// src/components/ProductDetails.jsx
import React from 'react';
import RatingStars from './ui/RatingStars';
import { productDetails } from '../constants/data';

// --- Sub-Components ---

const ProductImageGallery = ({ images }) => (
  <div className="grid grid-cols-3 grid-rows-3 gap-2 overflow-hidden rounded-xl">
    {/* Main Image (col-span-3 row-span-3 on small, col-span-2 row-span-3 on medium+) */}
    <div 
      className="col-span-3 row-span-3 h-full min-h-[300px] bg-cover bg-center md:col-span-2 md:row-span-3" 
      style={{ backgroundImage: `url("${images[0]}")` }}
    ></div>
    {/* Side Images (Hidden on small, visible on medium+) */}
    {images.slice(1).map((url, index) => (
      <div 
        key={index}
        className="hidden h-full min-h-[150px] bg-cover bg-center md:block" 
        style={{ backgroundImage: `url("${url}")` }}
      ></div>
    ))}
  </div>
);

const RentBuyPanel = ({ data }) => (
  <div className="rounded-lg border border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark p-6">
    <h1 className="text-2xl font-bold text-black dark:text-white">{data.name}</h1>
    <p className="mt-2 text-sm text-black/70 dark:text-white/70">{data.description}</p>
    
    <div className="mt-6 space-y-6">
      {/* Rent Section */}
      <div>
        <h2 className="text-lg font-semibold text-black dark:text-white">Rent</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-black/60 dark:text-white/60">Rental Price</span>
            <span className="text-lg font-bold text-black dark:text-white">{data.rentalPrice}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-black/60 dark:text-white/60">Availability</span>
            <span className="inline-flex items-center gap-2 text-lg font-bold text-green-500"> 
              <span className="size-2 rounded-full bg-green-500"></span> {data.availability}
            </span>
          </div>
        </div>
        <button className="mt-4 w-full rounded bg-primary py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">Rent Now</button>
      </div>
      
      <div className="border-t border-black/10 dark:border-white/10"></div>
      
      {/* Buy Section */}
      <div>
        <h2 className="text-lg font-semibold text-black dark:text-white">Buy</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-black/60 dark:text-white/60">Retail Price</span>
            <span className="text-lg font-bold text-black dark:text-white">{data.retailPrice}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-black/60 dark:text-white/60">Condition</span>
            <span className="text-lg font-bold text-black dark:text-white">{data.condition}</span>
          </div>
        </div>
        <button className="mt-4 w-full rounded bg-primary py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">Buy Now</button>
      </div>
    </div>
  </div>
);

const ReviewSummary = ({ summary }) => {
  const { averageRating, totalReviews, ratingsDistribution } = summary;
  
  // Calculate percentage for bar graph
  const getPercentage = (count) => {
    return totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(0) + '%' : '0%';
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-black dark:text-white">Reviews</h2>
      <div className="mt-6 flex flex-col gap-8 md:flex-row">
        
        {/* Average Rating Box */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark p-6 md:w-1/3">
          <p className="text-5xl font-extrabold text-black dark:text-white">{averageRating.toFixed(1)}</p>
          <div className="mt-2">
            <RatingStars rating={averageRating} iconSize={20} />
          </div>
          <p className="mt-2 text-sm text-black/60 dark:text-white/60">Based on {totalReviews} reviews</p>
        </div>
        
        {/* Rating Distribution Bars */}
        <div className="flex flex-1 flex-col justify-center gap-2">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = ratingsDistribution[rating] || 0;
            const percent = getPercentage(count);
            return (
              <div key={rating} className="flex items-center gap-4">
                <span className="text-sm font-medium text-black dark:text-white">{rating}</span>
                <div className="h-2 flex-1 rounded-full bg-black/10 dark:bg-white/10">
                  <div className="h-full rounded-full bg-primary" style={{ width: percent }}></div>
                </div>
                <span className="w-10 text-right text-sm text-black/60 dark:text-white/60">{percent}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---

const ProductDetails = () => {
  // Use data from the imported object
  const data = productDetails;

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
      <div className="mb-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li><a className="text-black/60 dark:text-white/60 hover:text-primary dark:hover:text-primary" href="/product">Backpacks</a></li>
            <li><span className="text-black/40 dark:text-white/40">/</span></li>
            <li><span className="font-medium text-black dark:text-white">{data.name}</span></li>
          </ol>
        </nav>
      </div>
      
      {/* Product Image Gallery & Details Panel */}
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-3/5">
          <ProductImageGallery images={data.images} />
        </div>
        <div className="w-full md:w-2/5">
          <RentBuyPanel data={data} />
        </div>
      </div>

      {/* Reviews Summary */}
      <ReviewSummary summary={data.reviewSummary} />

      {/* Individual Reviews */}
      <div className="mt-12 space-y-8">
        {data.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      
    </main>
  );
};

export default ProductDetails;