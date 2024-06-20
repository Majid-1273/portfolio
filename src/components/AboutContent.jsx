import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/AboutContent.css"
import img1 from '../assets/about1.jpg'
import img2 from '../assets/about2.jpg'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I'm a React Front-End Developer. I create responsive secure websites for my clients.</p>
                <Link to="/contact"><button className='btn btn-about'>Contact</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img1} alt="My image 1" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={img2} alt="My image 2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
