import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Overview from '../../components/Overview/Overview'
import Stats from '../../components/Stats/Stats'
import Testimonials from '../../components/Testimonials/Testimonials'
import CTA from '../../components/CTA/CTA'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Map from '../../components/Map/Map'

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Overview />
      <Stats />
      <Map />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
