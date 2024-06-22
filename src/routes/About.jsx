import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2.jsx'
import AboutContent from '../components/AboutContent.jsx'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="ABOUT" text="I'm a friendly Web-App Developer" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
