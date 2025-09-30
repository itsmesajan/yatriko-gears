import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary">
              {/* SVG Logo */}
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold">Yatriko Gears</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About Us", "Products", "Gallery", "Contact"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium hover:text-primary transition-colors">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {/* Search icon */}
              🔍
            </button>
            <button className="md:hidden rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {/* Hamburger icon */}
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
