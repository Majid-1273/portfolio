import React, { Component } from 'react'
import "../styles/Hero4.css"

class Hero4 extends Component{
  render(){
    return (
      <div className='hero4-img'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
  
}

export default Hero4
