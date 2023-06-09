import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Partners from './components/Partners/Partners'
import Features from './components/Features/Features'
import Stats from './components/Stats/Stats'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

import './styles.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Features />
      <Stats />
      <Footer />
    </>
  )
}

export default App
