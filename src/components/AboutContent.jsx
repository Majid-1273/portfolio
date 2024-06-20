import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/AboutContent.css"
import img1 from '../assets/about1.jpg'
import img2 from '../assets/about2.jpg'

const AboutContent = () => {
    const handleDownload = () => {
    const fileUrl = '/resume.pdf';
    
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return (
        <div className='about'>
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I'm a React Front-End Developer. I create responsive secure websites for my clients.</p>
                <button className='btn btn-about' onClick={handleDownload}>Download Resume</button>
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
