// src/components/Header.jsx
import React from 'react';
import { Search, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';

const navItems = [
  { name: 'Rent', path: '/product' },
  { name: 'Buy', path: '/product?category=buy' },
  { name: 'Sell', path: '/sell' }, // Maybe 'Sell' goes to a different page
  { name: 'Trips', path: '/trips' },
  { name: 'Community', path: '/community' },
];

const Header = () => (
  <header className="sticky top-0 z-20 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" className='py-4'>
            <Logo />
          </Link>
          </div>
          <div className="flex items-center gap-8">
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                to={item.path} 
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="w-full rounded-full border-gray-300/50 dark:border-gray-700/50 bg-primary/10 dark:bg-background-dark/50 py-2 pl-10 pr-4 text-sm text-gray-300 dark:text-gray-100 focus:border-primary focus:ring-primary"
              placeholder="Search gear..."
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;