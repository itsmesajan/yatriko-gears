import React from 'react'

const Footer = () => {
  return (
             <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="size-8 text-primary">
                {/* SVG Logo */}
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="..." fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Yatriko Gears</h2>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs text-center md:text-left">© 2024 Yatriko Gears. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">Quick Links</h3>
            <nav className="mt-4 space-y-2">
              {["Home", "About Us", "Products", "Gallery", "Contact"].map(link => (
                <a key={link} href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">{link}</a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex items-center gap-4 mt-4">
              {/* Social icons */}
              <span>IG</span>
              <span>FB</span>
              <span>TW</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
