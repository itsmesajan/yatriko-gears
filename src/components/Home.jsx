import React from 'react'
import HeroSection from './HeroSection'
// import ProductSection from './ProductSection'
import PopularItemsSection from './PopularItemsSection'
import WhyChooseUsSection from './WhyChooseUsSection'
import CSection from './CSection'



const Home = () => {
  return (
    <main className="flex-grow">
        <HeroSection />
        <PopularItemsSection />
        <WhyChooseUsSection />
        <CSection />
      </main>
  )
}

export default Home
