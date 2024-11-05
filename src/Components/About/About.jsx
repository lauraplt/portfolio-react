import React from 'react'
import './About.css'

import profile_img from '../../assets/profile_img.svg'

const About = () => {
    return ( 
        <div className='about' >
            <div className="about-title">
                <h1>About me</h1>
            </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a front-end developer with a fresh background in web development. I love designing modern, intuitive interfaces and am always seeking new challenges to refine my skills.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"> <p> HTML & CSS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"> <p> React JS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"> <p> JavaScript</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"> <p> Git/Github</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"> <p> NodeJS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"> <p> API REST</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
    </div>

        </div>
    )
}

export default About 
