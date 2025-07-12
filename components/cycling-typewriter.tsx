"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface CyclingTypewriterProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  pauseDuration?: number
}

export function CyclingTypewriter({
  texts,
  className = "",
  typingSpeed = 100,
  pauseDuration = 2000,
}: CyclingTypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    const currentText = texts[currentTextIndex]

    if (isTyping) {
      if (currentCharIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentCharIndex + 1))
          setCurrentCharIndex(currentCharIndex + 1)
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished typing, pause before erasing
        const timer = setTimeout(() => {
          setIsTyping(false)
        }, pauseDuration)
        return () => clearTimeout(timer)
      }
    } else {
      if (currentCharIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentCharIndex - 1))
          setCurrentCharIndex(currentCharIndex - 1)
        }, typingSpeed / 2) // Erase faster than typing
        return () => clearTimeout(timer)
      } else {
        // Finished erasing, move to next text
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsTyping(true)
      }
    }
  }, [currentTextIndex, currentCharIndex, isTyping, texts, typingSpeed, pauseDuration])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  )
}
