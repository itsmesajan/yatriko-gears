// src/components/Header.jsx
import React from 'react';
import { Search, Heart, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Rent', path: '/product?category=rent' },
  { name: 'Buy', path: '/product?category=buy' },
  { name: 'Sell', path: '/sell' }, // Maybe 'Sell' goes to a different page
  { name: 'Trips', path: '/trips' },
  { name: 'Community', path: '/community' },
];

const Header = () => (
  <header className="sticky top-0 z-20 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Map className="h-8 w-8 text-primary" />{" "}
            {/* Using Map icon for the logo */}
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Yatriko Gears
            </h1>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                to={item.path} // <--- Use 'to' instead of 'href'
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
              className="w-full rounded-full border-gray-300/50 dark:border-gray-700/50 bg-white/50 dark:bg-background-dark/50 py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary"
              placeholder="Search gear..."
              type="text"
            />
          </div>

          {/* List Gear Button */}
          <button className="hidden md:flex items-center justify-center rounded-full px-4 py-2 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
            List your gear
          </button>

          {/* Wishlist Button */}
          <button className="rounded-full p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors">
            <Heart className="h-5 w-5 fill-current" />
          </button>

          {/* Profile Picture */}
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2WxItT7OWv680msagFAAKWwAFA80aBLnBV7DoxpqrllyAszZiWHgLgLGKHf9Opv2q5S7ZA_kwCjCND4aqk-KLLmgTS9n0pl-OQhNTb05yXdTYc4PLRGvc7NsUhZpBMB9N7gLUSqVJggautXZ0RlMUtZfm0NJNSkAXGpFqKAuoaEOlE9BCrsH_PXCJdBnQRSFBdV32yUqba4u42g0wi6bKs9ZcfY0xxQQoXaaeclIju3Rvfhrh21jaent6GhNmYExL-HUT1GruzzkW")`,
            }}
          ></div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;