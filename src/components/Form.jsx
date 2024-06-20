import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
      <form name="contact" className='form' netlify>
      <label htmlFor="">Your Name</label>
      <input type="text" name="name" />
      <label htmlFor="">Email</label>
      <input type="email" name="email" />
      <label htmlFor="">Message</label>
      <textarea name="" id="" rows={6} placeholder='Type Your Message Here'></textarea>
      <button className='btn' type='submit'>Submit</button>
      </form>
  )
}

export default Form
