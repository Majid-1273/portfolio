import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
    <form className='form'>
      <label>Your Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Message</label>
      <textarea id="message" rows={6} placeholder='Type Your Message Here'></textarea>
      <button className='btn' type='submit'>Submit</button>
    </form>
  )
}

export default Form
