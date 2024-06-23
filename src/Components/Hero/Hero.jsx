import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container' id="hero">
      <div className="Hero-text">
        <h1>Work Together, Grow Together</h1>
        <p>"Innovating Tomorrow’s Solutions" for a focus on innovation and quality!</p>
      <button className='btn'>Explore More  <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
