import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
      <form name="contact" method='POST' className='form' netlify>
      <label htmlFor="">Your Name</label>
      <input type="text" name="name" />
      <label htmlFor="">Email</label>
      <input type="email" name="email" />
      <label htmlFor="">Message</label>
      <textarea id="" rows={6} placeholder='Type Your Message Here' name="message"></textarea>
      <button className='btn' type='submit'>Submit</button>
      </form>
  )
}

export default Form
