import React, { Component } from 'react'
import "../styles/Hero2.css"

class Hero2 extends Component{
  render(){
    return (
      <div className='hero2-img'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
  
}

export default Hero2
