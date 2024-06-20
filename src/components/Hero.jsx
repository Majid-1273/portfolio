import "../styles/Hero.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
       
      </div>
      <div className="content"><p>HI, I'M Majid Khan</p>
      <h1>React Develpoer.</h1>
      <div>
        <Link to="/projects" className="btn btn-hero" >Projects
        </Link>
        <Link to="/contact" className="btn-light" >Contact
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Hero
