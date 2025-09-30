import React from 'react'

const CSection = () => {
  return (
    <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Ready to Start Your Adventure?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Browse our extensive collection of travel gear and find everything you need for your next trip.
            </p>
            <div className="mt-8">
              <button className="rounded-lg bg-primary px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-primary/90">
                Explore Gear
              </button>
            </div>
          </div>
        </section>
  )
}

export default CSection
