// useTypewriter.js
import { useState, useEffect } from 'react'

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

export default useTypewriter