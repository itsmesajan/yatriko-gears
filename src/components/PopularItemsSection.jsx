import React from 'react'
import { popularItems } from '../constants/data'
import GearCard from './GearCard'
import { PrimaryButton } from './ui/Button'

const PopularItemsSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Popular Rental Items</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Discover our most sought-after gear, perfect for your next expedition.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {popularItems.map((item, index) => (
            <GearCard key={index} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton className="px-8 py-3 text-base font-bold shadow-lg">View All Rentals</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default PopularItemsSection
