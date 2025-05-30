"use client"

import { useEffect, useState, useRef } from "react"

export default function AnimatedTechIcon() {
  const [mounted, setMounted] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const typingSpeedRef = useRef(80) // ms per character

  // Clean, modern code with proper syntax highlighting
  const codeLines = [
    { text: "// Escape Inc - Modern Web Development", color: "text-gray-400" },
    { text: "import React from 'react';", color: "text-blue-400" },
    { text: "import { motion } from 'framer-motion';", color: "text-blue-400" },
    { text: "", color: "text-white" },
    { text: "function App() {", color: "text-purple-400" },
    { text: "  const [isLoading, setIsLoading] = useState(false);", color: "text-yellow-300" },
    { text: "  const data = useQuery('api/projects');", color: "text-yellow-300" },
    { text: "", color: "text-white" },
    { text: "  useEffect(() => {", color: "text-purple-400" },
    { text: "    // Initialize application", color: "text-gray-400" },
    { text: "    fetchData();", color: "text-green-400" },
    { text: "  }, []);", color: "text-purple-400" },
    { text: "", color: "text-white" },
    { text: "  return (", color: "text-purple-400" },
    { text: '    <div className="container">', color: "text-orange-400" },
    { text: '      <Header title="Welcome to Escape Inc" />', color: "text-orange-400" },
    { text: "      {data.map(item => (", color: "text-orange-400" },
    { text: "        <ProjectCard key={item.id} {...item} />", color: "text-orange-400" },
    { text: "      ))}      ", color: "text-orange-400" },
    { text: "    </div>", color: "text-orange-400" },
    { text: "  );", color: "text-purple-400" },
    { text: "}", color: "text-purple-400" },
    { text: "", color: "text-white" },
    { text: "export default App;", color: "text-blue-400" },
  ]

  useEffect(() => {
    setMounted(true)

    // Typing animation
    const typingInterval = setInterval(() => {
      setCurrentChar((prev) => {
        // If we've completed the current line
        if (prev >= codeLines[currentLine].text.length) {
          setCurrentLine((currentLineVal) => {
            // If we've completed all lines, reset
            if (currentLineVal >= codeLines.length - 1) {
              setTimeout(() => {
                setCurrentLine(0)
                setCurrentChar(0)
              }, 2000) // Pause before restarting
              return currentLineVal
            }
            setCurrentChar(0) // Reset character count for new line
            return currentLineVal + 1 // Move to next line
          })
          return prev
        }
        return prev + 1 // Type next character
      })
    }, typingSpeedRef.current)

    return () => clearInterval(typingInterval)
  }, [currentLine])

  if (!mounted) {
    return <div className="w-full h-full bg-gray-900 rounded-lg animate-pulse" />
  }

  return (
    <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-sm font-medium text-gray-300">App.jsx</div>
        </div>
        <div className="flex space-x-3 text-gray-400 text-xs">
          <div className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
            <span>main</span>
          </div>
          <div className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
            <span>React</span>
          </div>
        </div>
      </div>

      {/* Code Editor Sidebar */}
      <div className="absolute top-10 bottom-0 left-0 w-10 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-5 h-5 mb-3 rounded-sm flex items-center justify-center ${i === 0 ? "bg-blue-500 text-white" : "text-gray-400"}`}
          >
            {i === 0 ? (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z"
                  clipRule="evenodd"
                />
              </svg>
            ) : i === 1 ? (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <div className="w-3 h-3 rounded-sm bg-current opacity-60"></div>
            )}
          </div>
        ))}
      </div>

      {/* Line Numbers */}
      <div className="absolute top-10 bottom-0 left-10 w-8 bg-gray-800 flex flex-col items-end pr-2 py-3 text-xs text-gray-500 font-mono">
        {codeLines.map((_, i) => (
          <div key={i} className={`h-6 ${i <= currentLine ? "opacity-100" : "opacity-0"}`}>
            {i + 1}
          </div>
        ))}
      </div>

      {/* Code Content */}
      <div className="absolute top-10 bottom-0 left-18 right-0 overflow-y-auto p-3 font-mono text-sm">
        {codeLines.map((line, i) => (
          <div key={i} className={`h-6 flex items-center ${i <= currentLine ? "opacity-100" : "opacity-0"}`}>
            <span className={line.color}>
              {i === currentLine ? line.text.substring(0, currentChar) : i < currentLine ? line.text : ""}
              {i === currentLine && (
                <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-0.5">&nbsp;</span>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-blue-600 flex items-center justify-between px-4 text-xs text-white">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
            <span>Ready</span>
          </div>
          <div>React</div>
          <div>JavaScript</div>
        </div>
        <div className="flex items-center space-x-4">
          <div>UTF-8</div>
          <div>
            Ln {currentLine + 1}, Col {currentChar + 1}
          </div>
        </div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute -inset-0.5 bg-blue-500 opacity-10 blur-xl rounded-lg"></div>
    </div>
  )
}
