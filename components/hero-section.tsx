"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Terminal, Code } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { useCommandMenu } from "@/components/command-menu-provider"
import CodeEditor from "@/components/code-editor"

export default function HeroSection() {
  const { setOpen } = useCommandMenu()
  const containerRef = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState(0)
  const [forks, setForks] = useState(0)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setStars(Math.floor(Math.random() * 1000) + 5000)
      setForks(Math.floor(Math.random() * 500) + 1000)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleCommandK = () => {
    setOpen(true)
  }

  // Shorter code snippet
  const codeSnippet = `import { useState, useEffect } from 'react';

export function useProject(id) {
  const [project, setProject] = useState(null);
  useEffect(() => { fetch(\`/api/projects/\${id}\`).then(r => r.json()).then(setProject); }, [id]);
}`

  return (
    <section className="relative min-h-screen py-12 md:py-20 overflow-hidden bg-gray-900" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <motion.div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            className="flex flex-col space-y-6 pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main heading - positioned on the left side */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                exceptional
              </span>{" "}
              <br className="hidden md:block" />
              digital experiences
            </motion.h1>

            <div className="flex items-center space-x-2">
              <div className="bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-xs font-mono text-gray-400 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span>Crafting tomorrow's web</span>
              </div>
              <div
                className="bg-gray-800 border border-gray-700 rounded-full px-3 py-1 text-xs font-mono text-gray-400 cursor-pointer hover:bg-gray-700 transition-colors flex items-center"
                onClick={handleCommandK}
              >
                <kbd className="px-1.5 py-0.5 bg-gray-700 rounded text-gray-400 text-[10px] font-mono mr-1">⌘</kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-700 rounded text-gray-400 text-[10px] font-mono">K</kbd>
              </div>
            </div>

            <div className="text-sm font-mono text-cyan-400 mb-2 tracking-wider">
              <TypeAnimation
                sequence={["> SCALABLE SOLUTIONS", 1000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-md leading-relaxed">
              Escape Inc. specializes in robust, scalable, and user-centric web applications tailored to your needs.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <Link href="/enquiry">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none h-12 px-6 text-base"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://github.com/Escape-Inc" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 text-white h-12 px-6 text-base"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Check on GitHub
                </Button>
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap gap-6 items-center">
              {[
                { icon: <Code className="h-5 w-5 text-cyan-400" />, text: "100+ Components", desc: "Ready to use" },
                {
                  icon: <Terminal className="h-5 w-5 text-purple-400" />,
                  text: "CLI Tools",
                  desc: "Developer friendly",
                },
                { icon: <Github className="h-5 w-5 text-blue-400" />, text: "Open Source", desc: "Community driven" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 border border-gray-700/50">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.text}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Ready to deploy badge moved to top of code editor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-1.5 mb-3 w-fit"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-mono text-gray-300">Ready to deploy</span>
            </motion.div>

            <div className="relative z-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-gray-700 rounded-lg p-3 z-10"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs font-mono text-gray-300">TypeScript ready</span>
                </div>
              </motion.div>

              <div className="relative z-0">
                <CodeEditor
                  code={codeSnippet.split("\n").slice(0, 8).join("\n") + "\n// ..."}
                  language="typescript"
                  filename="useEscapeProject.ts"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
