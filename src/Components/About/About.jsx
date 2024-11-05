import React from 'react'
import './About.css'

import profile_img from '../../assets/profile_img.svg'
import cvPDF from '../../assets/CVLauraPolet.pdf';

const About = () => {
    return ( 
        <div className='about' >
            <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
      <div className="about-sections">
    
        <div className="about-right">
            <div className="about-para">
                <p className='p1'>I’m a front-end developer with a strong background in project management and digital experimentation. With three years of experience leading AB Testing projects and coordinating a team of developers, I ensure that quality standards are met in every deliverable.</p>
                <p className='p2'>Recently, I completed a six-month web development training to expand my technical skills, and this portfolio showcases my work in front-end development. I bring together my technical abilities and project management expertise to deliver engaging digital experiences.</p>
            </div>
            
            <div className="about-skills">
                <div className="about-skill"> <p> HTML & CSS </p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"> <p> React JS </p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"> <p> JavaScript </p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"> <p> Git/Github </p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"> <p> NodeJS </p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"> <p> Project Lead</p><hr style={{width:"70%"}}/></div>
            </div>
            <div className="about-action">
                <a 
                    href={cvPDF} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="about-resume-link"
                >
                    <button className="about-resume">
                        Read My Resume
                    </button>
                </a>
            </div>
        </div>
    </div>

        </div>
    )
}

export default About 
