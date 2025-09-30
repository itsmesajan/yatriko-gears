import React from 'react'
import { productList } from '../constants/data'

const ProductSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Diverse Gear for Every Adventure</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From trekking poles to portable stoves, we provide a comprehensive range of travel accessories. Choose to rent for a single trip or purchase for a lifetime of adventures.
          </p>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productList.map((product) => (
            <div key={product.name} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img className="h-full w-full object-cover object-center group-hover:opacity-75" src={product.img} alt={product.name} />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-gray-200">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Sale: ${product.sale}</p>
                  <p className="text-xs font-medium text-primary">Rent: ${product.rent}/day</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
