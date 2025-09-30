import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
