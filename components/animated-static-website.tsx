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

    // Floating browser windows representing static pages
    const browserWindows = [
      { x: 0.15, y: 0.2, width: 0.35, height: 0.5, title: "Home", delay: 0, opacity: 0 },
      { x: 0.55, y: 0.15, width: 0.3, height: 0.4, title: "About", delay: 0.8, opacity: 0 },
      { x: 0.5, y: 0.55, width: 0.35, height: 0.35, title: "Contact", delay: 1.6, opacity: 0 },
    ]

    // Connection lines between windows
    const connections = [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 2 },
    ]

    // Subtle floating particles
    const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = []
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const drawBrowserWindow = (
      x: number,
      y: number,
      w: number,
      h: number,
      title: string,
      opacity: number,
      isActive: boolean
    ) => {
      ctx.globalAlpha = opacity

      // Window shadow
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.beginPath()
      ctx.roundRect(x + 4, y + 4, w, h, 8)
      ctx.fill()

      // Window background
      const windowGradient = ctx.createLinearGradient(x, y, x, y + h)
      windowGradient.addColorStop(0, "#1e293b")
      windowGradient.addColorStop(1, "#0f172a")
      ctx.fillStyle = windowGradient
      ctx.beginPath()
      ctx.roundRect(x, y, w, h, 8)
      ctx.fill()

      // Window border
      ctx.strokeStyle = isActive ? "rgba(59, 130, 246, 0.5)" : "rgba(71, 85, 105, 0.5)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(x, y, w, h, 8)
      ctx.stroke()

      // Title bar
      ctx.fillStyle = "#334155"
      ctx.beginPath()
      ctx.roundRect(x, y, w, 28, [8, 8, 0, 0])
      ctx.fill()

      // Window controls
      const controlColors = ["#ef4444", "#f59e0b", "#22c55e"]
      controlColors.forEach((color, i) => {
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(x + 14 + i * 16, y + 14, 5, 0, Math.PI * 2)
        ctx.fill()
      })

      // Title text
      ctx.fillStyle = "#94a3b8"
      ctx.font = "11px -apple-system, BlinkMacSystemFont, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(title, x + w / 2, y + 18)
      ctx.textAlign = "left"

      // Content area - simplified page preview
      const contentY = y + 36
      const contentH = h - 44
      const contentPadding = 12

      // Header placeholder
      ctx.fillStyle = isActive ? "rgba(59, 130, 246, 0.3)" : "rgba(71, 85, 105, 0.3)"
      ctx.beginPath()
      ctx.roundRect(x + contentPadding, contentY, w - contentPadding * 2, 20, 4)
      ctx.fill()

      // Content lines
      const lineCount = Math.floor((contentH - 40) / 14)
      for (let i = 0; i < Math.min(lineCount, 6); i++) {
        const lineWidth = (0.5 + Math.random() * 0.4) * (w - contentPadding * 2)
        ctx.fillStyle = "rgba(71, 85, 105, 0.4)"
        ctx.beginPath()
        ctx.roundRect(x + contentPadding, contentY + 30 + i * 14, lineWidth, 6, 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
    }

    const animate = () => {
      time += 0.016

      // Clear with gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      bgGradient.addColorStop(0, "#0f172a")
      bgGradient.addColorStop(1, "#1e293b")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid
      ctx.strokeStyle = "rgba(71, 85, 105, 0.1)"
      ctx.lineWidth = 1
      const gridSize = 40
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw floating particles
      particles.forEach((particle) => {
        particle.y -= particle.speed
        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        }

        ctx.fillStyle = `rgba(148, 163, 184, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Update browser window opacities with smooth entrance
      browserWindows.forEach((win) => {
        const elapsed = time - win.delay
        if (elapsed > 0) {
          win.opacity = Math.min(1, easeOutCubic(elapsed / 1.5))
        }
      })

      // Draw connection lines between windows
      connections.forEach((conn) => {
        const from = browserWindows[conn.from]
        const to = browserWindows[conn.to]

        const fromX = from.x * canvas.width + (from.width * canvas.width) / 2
        const fromY = from.y * canvas.height + (from.height * canvas.height) / 2
        const toX = to.x * canvas.width + (to.width * canvas.width) / 2
        const toY = to.y * canvas.height + (to.height * canvas.height) / 2

        const lineOpacity = Math.min(from.opacity, to.opacity) * 0.3

        // Draw dashed connection line
        ctx.strokeStyle = `rgba(59, 130, 246, ${lineOpacity})`
        ctx.lineWidth = 1
        ctx.setLineDash([4, 4])
        ctx.beginPath()
        ctx.moveTo(fromX, fromY)
        ctx.lineTo(toX, toY)
        ctx.stroke()
        ctx.setLineDash([])

        // Animated data packet traveling along the line
        if (from.opacity > 0.8 && to.opacity > 0.8) {
          const packetProgress = ((time * 0.5 + conn.from * 0.3) % 1)
          const packetX = fromX + (toX - fromX) * packetProgress
          const packetY = fromY + (toY - fromY) * packetProgress

          ctx.fillStyle = `rgba(59, 130, 246, ${0.8})`
          ctx.beginPath()
          ctx.arc(packetX, packetY, 4, 0, Math.PI * 2)
          ctx.fill()

          // Packet glow
          ctx.fillStyle = `rgba(59, 130, 246, 0.3)`
          ctx.beginPath()
          ctx.arc(packetX, packetY, 8, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Draw browser windows with subtle floating animation
      browserWindows.forEach((win, index) => {
        const floatOffset = Math.sin(time * 0.8 + index * 1.5) * 5
        const x = win.x * canvas.width
        const y = win.y * canvas.height + floatOffset
        const w = win.width * canvas.width
        const h = win.height * canvas.height
        const isActive = Math.floor(time / 3) % 3 === index

        drawBrowserWindow(x, y, w, h, win.title, win.opacity, isActive)
      })

      // Draw "Deploy" indicator when all windows are visible
      if (browserWindows.every((w) => w.opacity > 0.9)) {
        const deployProgress = ((time - 3) % 6) / 6

        // Central deploy status
        const centerX = canvas.width / 2
        const centerY = canvas.height - 40

        ctx.globalAlpha = 0.9

        // Status pill
        const pillWidth = 140
        const pillHeight = 32
        const pillX = centerX - pillWidth / 2
        const pillY = centerY - pillHeight / 2

        ctx.fillStyle = deployProgress < 0.5 ? "#1e40af" : "#166534"
        ctx.beginPath()
        ctx.roundRect(pillX, pillY, pillWidth, pillHeight, 16)
        ctx.fill()

        // Status text
        ctx.fillStyle = "#ffffff"
        ctx.font = "12px -apple-system, BlinkMacSystemFont, sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(deployProgress < 0.5 ? "Deploying..." : "Live", centerX, centerY + 4)
        ctx.textAlign = "left"

        // Spinning indicator or checkmark
        if (deployProgress < 0.5) {
          ctx.strokeStyle = "#ffffff"
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(pillX + 20, centerY, 6, time * 3, time * 3 + Math.PI * 1.5)
          ctx.stroke()
        } else {
          ctx.strokeStyle = "#22c55e"
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(pillX + 20, centerY, 8, 0, Math.PI * 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(pillX + 15, centerY)
          ctx.lineTo(pillX + 19, centerY + 4)
          ctx.lineTo(pillX + 26, centerY - 4)
          ctx.stroke()
        }

        ctx.globalAlpha = 1
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
