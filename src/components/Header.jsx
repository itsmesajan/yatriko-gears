// src/components/Header.jsx
import React, { useState } from 'react';
// Changed Kitesurfing to Sailboat
import { Menu, Sailboat, ChevronDown, User, ShoppingCart, Truck, HandCoins, ShieldCheck, DollarSign } from 'lucide-react'; 
import { PrimaryButton, SecondaryButton } from './ui/Button';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Rent', href: '#rent' },
    { name: 'Buy', href: '#buy' },
    { name: 'Sell', href: '#sell' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-700/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          {/* Changed Kitesurfing to Sailboat */}
          <Sailboat className="text-primary h-8 w-8" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Yatriko Gears</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.name} className="text-sm font-medium hover:text-primary dark:hover:text-primary" href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <SecondaryButton className="hidden sm:block">Login</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
          <button className="rounded-lg p-2 text-gray-600 dark:text-gray-300 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu (Optional: For a complete solution, you'd implement a full mobile overlay here) */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50 px-4 py-2">
          {navItems.map((item) => (
            <a key={item.name} className="block py-2 text-sm font-medium hover:text-primary dark:hover:text-primary" href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
export default Header;