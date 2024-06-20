import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Footer from "../components/Footer.jsx"
import Work from "../components/Work.jsx"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
