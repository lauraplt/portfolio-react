import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return ( 
        <div className='hero'>
         <img src={profile_img} alt="" />
         <h1><span>I'm Laura Polet</span>, frontend developer based in Paris.</h1>
         <p> I’m a front-end developer with a fresh background in web development. I love designing modern, intuitive interfaces and am always seeking new challenges to refine my skills. </p>
        <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
        </div>
        </div>
    )
}

export default Hero 
