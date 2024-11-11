'use client'

import React from 'react'
import './Hero.css'
import backgroundImage from '../../assets/background-img.png'
import useTypewriter from './useTypewriter'

const phrases = [
    "Crafting beautiful interfaces",
    "Turning ideas into digital reality",
    "Coding with creativity"
]

export default function Hero() {
    const typedText = useTypewriter(phrases, 50, 2000)

    return ( 
        <div id='home' className='hero' role="banner">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="typewriter" aria-live="polite">
                    {typedText}
                    <span className="cursor" aria-hidden="true"></span>
                </p>
                <h1 className="gradient-text">
                    I'm<span> Laura Polet</span>, <br/>
                    frontend developer.
                </h1>
            
            </div>
        </div>
    )
}
