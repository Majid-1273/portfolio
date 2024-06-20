import React, { Component } from 'react'
import '../styles/Hero3.css'

class Hero3 extends Component{
  render(){
    return (
      <div className='hero3-img'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
  
}

export default Hero3
