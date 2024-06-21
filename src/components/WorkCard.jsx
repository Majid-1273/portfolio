import React from 'react'
import "../styles/WorkCard.css"
import { NavLink } from 'react-bootstrap'

const WorkCard = (props) => {
  return (
    <div className='project-card'><img src={props.imgsrc} alt="ProjectImage" />
        <h2 className="project-title">{props.title}</h2>
        <div className='pro-details'>
          <p className='description'>{props.text}.</p>
          <div className='pro-btns'>
          <a href={props.view} className='btn btn-projects' target="_blank" rel="noopener noreferrer">Visit Now</a>
          </div>
          </div>
          </div>
  )
}

export default WorkCard
