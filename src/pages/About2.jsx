import './About2.css'
import React from 'react'
import low3 from "../assets/EvaImages/high5.png"
import headshot from '../assets/EvaImages/profile.png'
import Timeline2 from '../components/Timeline2'

const About2 = () => {
  return (
    <div className='about-top'>
        <div className='about-back-container'>
            <img src={low3} alt="" />
        </div>
        <div className="about-headshot">
            <img src={headshot} alt="Headshot" className="about-headshot" />
            <h2>Über Mich</h2>
        </div>
        <div className='about-article'>
            <div className='about-timeline'>
                <Timeline2/>
            </div>
            

        </div>
        

    </div>
  )
}

export default About2