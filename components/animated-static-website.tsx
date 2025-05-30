"use client"

import { useEffect, useRef } from "react"

export default function AnimatedStaticWebsite() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationFrame: number
    let time = 0

    // Particles for background effect
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; alpha: number }[] = []

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: ["#00ffff", "#ff00ff", "#ffff00", "#00ff00"][Math.floor(Math.random() * 4)],
        alpha: Math.random() * 0.5 + 0.3,
      })
    }

    // Code lines with different colors
    const codeLines = [
      { text: "<!DOCTYPE html>", color: "#ff6b6b", delay: 0 },
      { text: '<html lang="en">', color: "#4ecdc4", delay: 0.5 },
      { text: "  <head>", color: "#45b7d1", delay: 1 },
      { text: '    <meta charset="UTF-8">', color: "#96ceb4", delay: 1.5 },
      { text: "    <title>Static Site</title>", color: "#feca57", delay: 2 },
      { text: '    <link rel="stylesheet" href="style.css">', color: "#ff9ff3", delay: 2.5 },
      { text: "  </head>", color: "#45b7d1", delay: 3 },
      { text: "  <body>", color: "#4ecdc4", delay: 3.5 },
      { text: '    <header class="hero">', color: "#54a0ff", delay: 4 },
      { text: "      <h1>Welcome!</h1>", color: "#5f27cd", delay: 4.5 },
      { text: "    </header>", color: "#54a0ff", delay: 5 },
      { text: "  </body>", color: "#4ecdc4", delay: 5.5 },
      { text: "</html>", color: "#4ecdc4", delay: 6 },
    ]

    // File system animation
    const files = [
      { name: "index.html", status: "building", progress: 0, color: "#00ff00" },
      { name: "style.css", status: "pending", progress: 0, color: "#00ffff" },
      { name: "script.js", status: "pending", progress: 0, color: "#ffff00" },
      { name: "assets/", status: "pending", progress: 0, color: "#ff00ff" },
    ]

    const animate = () => {
      time += 0.016

      // Clear with dark background
      ctx.fillStyle = "#0a0a0a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.globalAlpha = particle.alpha
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })
      ctx.globalAlpha = 1

      // Draw terminal window
      const terminalX = 20
      const terminalY = 20
      const terminalW = canvas.width - 40
      const terminalH = canvas.height * 0.6

      // Terminal background with glow
      ctx.fillStyle = "#1a1a1a"
      ctx.fillRect(terminalX, terminalY, terminalW, terminalH)
      ctx.strokeStyle = "#00ff00"
      ctx.lineWidth = 2
      ctx.strokeRect(terminalX, terminalY, terminalW, terminalH)

      // Terminal header
      ctx.fillStyle = "#2a2a2a"
      ctx.fillRect(terminalX, terminalY, terminalW, 30)

      // Terminal buttons
      const colors = ["#ff5f56", "#ffbd2e", "#27ca3f"]
      colors.forEach((color, i) => {
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(terminalX + 15 + i * 20, terminalY + 15, 6, 0, Math.PI * 2)
        ctx.fill()
      })

      // Terminal title
      ctx.fillStyle = "#ffffff"
      ctx.font = "12px monospace"
      ctx.fillText("Static Site Builder v2.0", terminalX + 80, terminalY + 20)

      // Draw code with typing effect
      ctx.font = "14px monospace"
      const startY = terminalY + 60

      codeLines.forEach((line, index) => {
        const lineTime = time - line.delay
        if (lineTime > 0) {
          const progress = Math.min(1, lineTime * 3)
          const visibleChars = Math.floor(line.text.length * progress)
          const visibleText = line.text.substring(0, visibleChars)

          ctx.fillStyle = line.color
          ctx.fillText(visibleText, terminalX + 20, startY + index * 20)

          // Blinking cursor
          if (progress < 1 && Math.floor(time * 3) % 2 === 0) {
            const textWidth = ctx.measureText(visibleText).width
            ctx.fillStyle = "#ffffff"
            ctx.fillRect(terminalX + 20 + textWidth, startY + index * 20 - 12, 8, 2)
          }
        }
      })

      // File system panel
      const panelX = 20
      const panelY = terminalY + terminalH + 20
      const panelW = canvas.width - 40
      const panelH = canvas.height - panelY - 20

      ctx.fillStyle = "#1a1a1a"
      ctx.fillRect(panelX, panelY, panelW, panelH)
      ctx.strokeStyle = "#00ffff"
      ctx.lineWidth = 2
      ctx.strokeRect(panelX, panelY, panelW, panelH)

      // Panel header
      ctx.fillStyle = "#00ffff"
      ctx.font = "bold 14px monospace"
      ctx.fillText("BUILD STATUS", panelX + 10, panelY + 20)

      // File status
      files.forEach((file, index) => {
        const fileY = panelY + 40 + index * 25

        // Update file status based on time
        const fileTime = time - index * 2
        if (fileTime > 0) {
          if (file.status === "pending") {
            file.status = "building"
          }
          if (fileTime > 3) {
            file.status = "complete"
            file.progress = 1
          } else if (file.status === "building") {
            file.progress = Math.min(1, fileTime / 3)
          }
        }

        // File name
        ctx.fillStyle = "#ffffff"
        ctx.font = "12px monospace"
        ctx.fillText(file.name, panelX + 10, fileY)

        // Status indicator
        let statusColor = "#666666"
        let statusText = "PENDING"

        if (file.status === "building") {
          statusColor = "#ffff00"
          statusText = "BUILDING"
        } else if (file.status === "complete") {
          statusColor = "#00ff00"
          statusText = "COMPLETE"
        }

        ctx.fillStyle = statusColor
        ctx.fillText(statusText, panelX + 120, fileY)

        // Progress bar
        const barX = panelX + 200
        const barY = fileY - 10
        const barW = 100
        const barH = 8

        ctx.strokeStyle = "#333333"
        ctx.strokeRect(barX, barY, barW, barH)

        if (file.progress > 0) {
          ctx.fillStyle = file.color
          ctx.fillRect(barX, barY, barW * file.progress, barH)

          // Add glow to progress bar
          ctx.shadowBlur = 5
          ctx.shadowColor = file.color
          ctx.fillRect(barX, barY, barW * file.progress, barH)
          ctx.shadowBlur = 0
        }
      })

      // Deploy button animation
      if (time > 15) {
        const deployTime = time - 15
        const buttonX = canvas.width - 120
        const buttonY = panelY + panelH - 40
        const buttonW = 100
        const buttonH = 30

        const isDeploying = deployTime < 3
        const deployProgress = Math.min(1, deployTime / 3)

        if (isDeploying) {
          // Pulsing deploy button
          const pulse = Math.sin(time * 10) * 0.3 + 0.7
          ctx.fillStyle = `rgba(255, 0, 255, ${pulse})`
          ctx.fillRect(buttonX, buttonY, buttonW, buttonH)

          ctx.fillStyle = "#ffffff"
          ctx.font = "bold 12px monospace"
          ctx.textAlign = "center"
          ctx.fillText("DEPLOYING...", buttonX + buttonW / 2, buttonY + buttonH / 2 + 4)

          // Progress indicator
          ctx.strokeStyle = "#ff00ff"
          ctx.lineWidth = 3
          ctx.strokeRect(buttonX - 5, buttonY - 5, (buttonW + 10) * deployProgress, buttonH + 10)
        } else {
          // Success state
          ctx.fillStyle = "#00ff00"
          ctx.fillRect(buttonX, buttonY, buttonW, buttonH)

          ctx.fillStyle = "#000000"
          ctx.font = "bold 12px monospace"
          ctx.textAlign = "center"
          ctx.fillText("DEPLOYED!", buttonX + buttonW / 2, buttonY + buttonH / 2 + 4)

          // Success glow
          ctx.shadowBlur = 20
          ctx.shadowColor = "#00ff00"
          ctx.strokeStyle = "#00ff00"
          ctx.lineWidth = 2
          ctx.strokeRect(buttonX, buttonY, buttonW, buttonH)
          ctx.shadowBlur = 0
        }
        ctx.textAlign = "left"
      }

      // Matrix-style falling characters
      if (time > 10) {
        const chars = "01HTMLCSS"
        for (let i = 0; i < 20; i++) {
          const x = (i * canvas.width) / 20 + Math.sin(time + i) * 20
          const y = ((time * 100 + i * 50) % (canvas.height + 100)) - 100

          ctx.fillStyle = `rgba(0, 255, 0, ${0.3 + Math.sin(time + i) * 0.2})`
          ctx.font = "16px monospace"
          ctx.fillText(chars[Math.floor(time + i) % chars.length], x, y)
        }
      }

      // Reset animation
      if (time > 20) {
        time = 0
        files.forEach((file) => {
          file.status = "pending"
          file.progress = 0
        })
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
