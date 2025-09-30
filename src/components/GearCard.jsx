import React from 'react'

const GearCard = ({ item }) => {
  return (
    <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img alt={item.alt} className="h-full w-full object-cover object-center group-hover:opacity-75" src={item.imageUrl} />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700 dark:text-gray-200">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {item.name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
      </div>
      <p className="text-sm font-medium text-gray-900 dark:text-white">{item.price}</p>
    </div>
  </div>
  )
}

export default GearCard
