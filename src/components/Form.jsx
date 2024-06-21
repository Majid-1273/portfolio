import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
    <form name="contact" className='form' data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contact" />

      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" rows={6} placeholder='Type Your Message Here' name="message"></textarea>

      <button className='btn' type='submit'>Submit</button>
    </form>
  )
}

export default Form
