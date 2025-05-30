"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

interface TerminalWidgetProps {
  title?: string
  commands?: string[]
  responses?: string[]
  delay?: number
  autoType?: boolean
  className?: string
}

export default function TerminalWidget({
  title = "Terminal",
  commands = ["echo 'Hello, World!'"],
  responses = ["Hello, World!"],
  delay = 1000,
  autoType = true,
  className = "",
}: TerminalWidgetProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [typing, setTyping] = useState(autoType)
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (!autoType) {
      setTypedText(commands[currentLine] || "")
      return
    }

    if (typing && currentLine < commands.length) {
      const command = commands[currentLine]
      if (typedText.length < command.length) {
        const timer = setTimeout(
          () => {
            setTypedText(command.substring(0, typedText.length + 1))
          },
          50 + Math.random() * 50,
        ) // Random typing speed for realism
        return () => clearTimeout(timer)
      } else {
        setTyping(false)
        const timer = setTimeout(() => {
          if (currentLine < commands.length - 1) {
            setCurrentLine(currentLine + 1)
            setTypedText("")
            setTyping(true)
          }
        }, delay)
        return () => clearTimeout(timer)
      }
    }
  }, [typing, typedText, currentLine, commands, responses, delay, autoType])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm ${className}`}
    >
      <div className="flex items-center mb-2">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs font-mono text-gray-400 flex items-center">
          <Terminal className="h-3.5 w-3.5 mr-1.5 text-cyan-400" />
          <span>{title}</span>
        </div>
      </div>
      <div className="space-y-1">
        {commands.slice(0, currentLine).map((cmd, i) => (
          <div key={i}>
            <div className="flex">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-gray-300">{cmd}</span>
            </div>
            {responses[i] && <div className="text-gray-400 whitespace-pre-wrap">{responses[i]}</div>}
          </div>
        ))}
        <div className="flex">
          <span className="text-green-400 mr-2">$</span>
          <span className="text-gray-300">{typedText}</span>
          {showCursor && <span className="text-gray-300 animate-pulse">▌</span>}
        </div>
      </div>
    </motion.div>
  )
}
