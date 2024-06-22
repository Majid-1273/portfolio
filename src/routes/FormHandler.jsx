import React from 'react'
import "../styles/FormHandler.css"

const FormHandler = () => {
  const gotoHome = () => {
    window.location.href = '/';
  };
  return (
    <div className='outerDiv'>
      <div>
      <p>Your data was not submitted as there is</p>
      <p className='errMsg'>NO DATABASE CONNECTED TO THIS WEBSITE</p>
      <button onClick={gotoHome}>Goto HomePage</button>
    </div>
    </div>
  )
}

export default FormHandler
