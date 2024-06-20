import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
      <form name="Query" className='form' netlify>
      <label htmlFor="">Your Name</label>
      <input type="text" name="" id="" />
      <label htmlFor="">Email</label>
      <input type="email" name="" id="" />
      <label htmlFor="">Message</label>
      <textarea name="" id="" rows={6} placeholder='Type Your Message Here'></textarea>
      <button className='btn'>Submit</button>
      </form>
  )
}

export default Form
