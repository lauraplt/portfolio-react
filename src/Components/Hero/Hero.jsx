'use client'

import React from 'react'
import './Hero.css'
import backgroundImage from '../../assets/background_img.png'
import useTypewriter from './useTypewriter'

const phrases = [
    "Crafting beautiful interfaces",
    "Turning ideas into digital reality",
    "Coding with creativity"
]

const Hero = () => {
    const typedText = useTypewriter(phrases, 50, 2000)

    return ( 
        <div className='hero' style={{ backgroundImage: `url(${backgroundImage})` }} role="banner">
            <p className="typewriter" aria-live="polite">
                {typedText}
                <span className="cursor" aria-hidden="true"></span>
            </p>
            <h1>
                <span>I'm Laura Polet</span>, <br/>
                frontend developer.
            </h1>
        
            {/* Uncomment when ready to use
            <div className="hero-action">
                <button className="hero-connect">Connect with me</button>
                <button className="hero-resume">My resume</button>
            </div>
            */}
        </div>
    )
}

export default Hero