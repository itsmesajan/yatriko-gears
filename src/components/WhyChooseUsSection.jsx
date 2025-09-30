import React from 'react'
import { features } from '../constants/data'
import FeatureCard from './FeatureCard'

const WhyChooseUsSection = () => {
  return (
        <section className="bg-white dark:bg-background-dark py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Yatriko Gears?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Your Trusted Partner for Travel Gear. At Yatriko Gears, we are committed to providing you with the best travel gear and service.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
