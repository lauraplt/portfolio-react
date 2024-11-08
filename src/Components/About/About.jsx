import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.svg'
import cvPDF from '../../assets/CVLauraPolet.pdf'
import htmlIcon from '../../assets/html.svg'
import cssIcon from '../../assets/css.svg'
import javascriptIcon from '../../assets/js.svg'
import reactIcon from '../../assets/react.svg'
import nodejsIcon from '../../assets/nodejs.svg'
import gitIcon from '../../assets/git.svg'
import githubIcon from '../../assets/github.svg'


export default function About() {
  return (
    <div id='about' className='about'>
      <div className="about-content">
        <div className="about-image">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-text-block">
          <div className="about-para">
            <div className="para-container">
              <h2 className='para-title'>About me</h2>
              <p className='p1'>I'm a front-end developer with a background in project management and digital experimentation. With three years of experience leading A/B Testing projects and coordinating a team of developers, I ensure that quality standards are met in every deliverable.</p>
              <p className='p2'>Recently, I completed a six-month web development training to expand my technical skills, and this portfolio showcases my work in front-end development. I bring together my technical abilities and project management expertise to deliver unique digital experiences.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="social-icons">
          <div className="skill-item">
            <img src={htmlIcon} alt="HTML" className="social-icon" />
            <span className="skill-name">HTML</span>
          </div>
          <div className="skill-item">
            <img src={cssIcon} alt="CSS" className="social-icon" />
            <span className="skill-name">CSS</span>
          </div>
          <div className="skill-item">
            <img src={javascriptIcon} alt="Javascript" className="social-icon" />
            <span className="skill-name">Javascript</span>
          </div>
          <div className="skill-item">
            <img src={reactIcon} alt="React" className="social-icon" />
            <span className="skill-name">React</span>
          </div>
          <div className="skill-item">
            <img src={nodejsIcon} alt="NodeJS" className="social-icon" />
            <span className="skill-name">NodeJS</span>
          </div>
          <div className="skill-item">
            <img src={gitIcon} alt="Git" className="social-icon" />
            <span className="skill-name">Git</span>
          </div>
          <div className="skill-item">
            <img src={githubIcon} alt="Github" className="social-icon" />
            <span className="skill-name">Github</span>
          </div>
        </div>
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
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="about-linkedin-link"
        >
          <button className="about-linkedin">
            See My LinkedIn
          </button>
        </a>
      </div>
    </div>
  )
}