import React from 'react'
import '../styles/Form.css'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('./FormHandler.jsx'); 
  };
  return (
    <form className='form'>
      <label>Your Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Message</label>
      <textarea id="message" rows={6} placeholder='Type Your Message Here'></textarea>
      <button className='btn' type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Form
