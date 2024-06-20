import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero3 from '../components/Hero3'
import PricingCards from '../components/PricingCards'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero3 heading="PROJECTS." text="Some of my most recent works" />
      <Work/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Projects
