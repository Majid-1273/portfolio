import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero4 from  '../components/Hero4'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero4 heading="CONTACT." text="Let's have a chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact

