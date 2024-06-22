import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/AboutContent.css";
import img1 from '../assets/about1.jpg';
import img2 from '../assets/about2.jpg';
import resumePDF from '../assets/resume.pdf';

const AboutContent = () => {
    const handleOpenResume = () => {
        window.open(resumePDF, '_blank');
    };

    return (
        <div className='about'>
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am a MERN Stack developer, bringing web ideas to life with React, Node.js, Express, and MongoDB.</p>
                <button className='btn btn-about' onClick={handleOpenResume}>View Resume</button>
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
    );
};

export default AboutContent;
