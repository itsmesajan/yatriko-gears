import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
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
