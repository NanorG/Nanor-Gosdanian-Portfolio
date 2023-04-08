import React from 'react'
import CV from '../../assets/Nanor Gosdanian CV.pdf'

function Button() {
  return (
    <div className="button">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#Contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Button