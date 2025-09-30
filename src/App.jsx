import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductListingPage from './components/ProductListingPage'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
