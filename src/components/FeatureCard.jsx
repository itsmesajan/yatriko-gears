import React from 'react'

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
      <Icon className="text-primary h-8 w-8" />
    </div>
    <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{description}</p>
  </div>
  )
}

export default FeatureCard
