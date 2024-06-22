import React from 'react'
import "../styles/Footer.css"
import { FaHome, FaMailBulk, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"
import { NavLink } from'react-router-dom'
import { MdMail } from 'react-icons/md'
import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <p>Lahore, Pakistan.</p> 
                    </div>
                    <div className='email'>
                    <p><MdMail size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            khanmajid2004@gmail.com</p>
                    </div>
                    <div className='linkedin'>
                    <p><NavLink to="https://www.linkedin.com/in/majid-khan-wp/"><FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />www.linkedin.com/in/majid-khan-wp/
                            </NavLink></p>
                    </div>
                </div>
                <div className="right">
                        <h4>About me</h4>
                        <p>
                        I'm a MERN stack Developer. I create responsive and secure websites for my clients.</p>
                        <div className='social'><NavLink to="https://www.facebook.com/profile.php?id=100095154400735"><FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink><NavLink to="https://x.com/majid_1273"><FaXTwitter  size={30} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink><NavLink to="https://www.linkedin.com/in/majid-khan-wp/"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink></div>
                </div>
            </div>
        </div>
    )
}

export default footer
