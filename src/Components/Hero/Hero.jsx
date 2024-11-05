'use client'

import React, { useState, useEffect } from 'react'
import './Hero.css'
import backgroundImage from '../../assets/background_img.png'

const phrases = [
    "Crafting beautiful interfaces",
    "Turning ideas into digital reality",
    "Coding with creativity"
]

const useTypewriter = (phrases, typingSpeed = 50, pauseTime = 2000) => {
  const [displayedText, setDisplayedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    let i = 0
    let currentPhrase = phrases[phraseIndex]
    let isDeleting = false
    let timer

    const loop = () => {
      if (!isDeleting && i < currentPhrase.length) {
        setDisplayedText(currentPhrase.substring(0, i + 1))
        i++
        timer = setTimeout(loop, typingSpeed)
      } else if (isDeleting && i > 0) {
        setDisplayedText(currentPhrase.substring(0, i - 1))
        i--
        timer = setTimeout(loop, typingSpeed / 2)
      } else if (i === 0) {
        isDeleting = false
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        timer = setTimeout(loop, pauseTime)
      } else {
        isDeleting = true
        timer = setTimeout(loop, pauseTime)
      }
    }

    timer = setTimeout(loop, typingSpeed)

    return () => clearTimeout(timer)
  }, [phrases, typingSpeed, pauseTime, phraseIndex])

  return displayedText
}

const Hero = () => {
    const typedText = useTypewriter(phrases, 50, 2000)

    return ( 
        <div className='hero' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='hero'>
        <p className="typewriter">
                {typedText}
                <span className="cursor"></span>
            </p>
            <h1><span>I'm Laura Polet</span>, <br/>frontend developer.</h1>
        
           {/*  <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>*/} 
            <style jsx>{`
                .typewriter {
                    display: inline-block;
                    min-height: 1.2em;
                    min-width: 15em;
                    margin-top: 0.5em;
                    text-align: center;
                }
                .cursor {
                    display: inline-block;
                    width: 3px;
                    height: 1em;
                    background-color: #000;
                    margin-left: 2px;
                    animation: blink 0.7s infinite;
                }
                @keyframes blink {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `}</style>
        </div>
        </div> 
    )
}

export default Hero
