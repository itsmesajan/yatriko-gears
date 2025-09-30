import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400 sm:px-6 lg:px-8">
        <p>Follow us on social media for updates and travel inspiration:</p>
        <div className="mt-4 flex justify-center gap-4">
          <a className="hover:text-primary" href="#">
            {/* Using a generic Lucide icon for Facebook since the original used the full path */}
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
            </svg>
          </a>
          <a className="hover:text-primary" href="#">
            {/* Using a generic Lucide icon for Twitter/X */}
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a className="hover:text-primary" href="#">
            {/* Using a generic Lucide icon for Instagram */}
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.267 12.354c.007-.09.011-.18.011-.271 0-3.32-2.686-6.012-6.002-6.012a5.98 5.98 0 00-4.394 1.834 6.006 6.006 0 00-.77 7.399 6.002 6.002 0 009.155-3.084zm-3.131-1.378c-.68.328-1.428.435-2.189.377a3.99 3.99 0 01-3.15-3.818 4.032 4.032 0 011.083-2.827c.108-.12.296-.06.322.083.025.14.153.84.195 1.05.066.321.223.639.421.921.21.298.463.54.746.721.28.18.59.3.91.36.32.06.64.06.96.02a.498.498 0 01.53.518c-.027.273-.13.535-.29.77-.16.235-.37.438-.62.595-.24.15-.5.25-.76.3z" fillRule="evenodd"></path>
            </svg>
          </a>
        </div>
        <p className="mt-4">© 2024 Yatriko Gears. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
