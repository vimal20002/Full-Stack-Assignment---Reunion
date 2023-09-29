import React from 'react'
import './about.css'
import about from '../images/about.png'
import AboutCard from './AboutCard'
const About = () => {
  return (
    <div className='mn'>
        <div className="main-ab">
            <img src={about} alt="about" className='abt' />
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>

        </div>
    </div>
  )
}

export default About