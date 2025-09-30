// src/components/FilterSidebar.jsx
import React from 'react';

const ButtonPill = ({ children, isActive, onClick }) => {
  const activeClasses = isActive
    ? 'bg-primary text-white'
    : 'bg-gray-200 text-gray-700 hover:bg-primary/20 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary/30';

  return (
    <button
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const FilterSidebar = () => {
  // In a real app, you'd manage the active state for filtering
  const categories = ['All', 'Rent', 'Buy', 'Sell'];
  const sortBy = ['Relevance', 'Price: Low to High', 'Price: High to Low'];
  
  return (
    <aside className="w-full lg:w-1/4">
      <div className="space-y-6 rounded-lg bg-white p-4 dark:bg-background-dark/50">
        
        {/* Categories Filter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Categories</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <ButtonPill key={cat} isActive={index === 0} onClick={() => console.log(`Filter by ${cat}`)}>
                {cat}
              </ButtonPill>
            ))}
          </div>
        </div>

        {/* Sort By Filter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Sort by</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {sortBy.map((sort, index) => (
              <ButtonPill 
                key={sort} 
                isActive={index === 0} 
                className={index === 0 ? 'bg-primary/20 text-primary' : ''}
                onClick={() => console.log(`Sort by ${sort}`)}
              >
                {sort}
              </ButtonPill>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;