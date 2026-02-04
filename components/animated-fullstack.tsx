"use client"

import { useEffect, useRef } from "react"

export default function AnimatedFullstack() {
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

    // Architecture layers - clean 3-tier design
    const layers = [
      { name: "Client", y: 0.15, color: "#3b82f6", icon: "browser" },
      { name: "Server", y: 0.5, color: "#8b5cf6", icon: "server" },
      { name: "Database", y: 0.85, color: "#06b6d4", icon: "database" },
    ]

    // Data flows between layers
    const dataFlows: {
      fromLayer: number
      toLayer: number
      progress: number
      speed: number
      active: boolean
      type: string
    }[] = []

    // Initialize some data flows
    for (let i = 0; i < 3; i++) {
      dataFlows.push({
        fromLayer: 0,
        toLayer: 1,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.004,
        active: true,
        type: "request",
      })
      dataFlows.push({
        fromLayer: 1,
        toLayer: 2,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.003,
        active: true,
        type: "query",
      })
    }

    // Subtle ambient particles
    const ambientParticles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 15; i++) {
      ambientParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
      })
    }

    const drawLayerIcon = (x: number, y: number, type: string, size: number, color: string) => {
      ctx.strokeStyle = color
      ctx.fillStyle = color
      ctx.lineWidth = 1.5

      if (type === "browser") {
        // Browser window icon
        ctx.beginPath()
        ctx.roundRect(x - size / 2, y - size / 2, size, size * 0.75, 3)
        ctx.stroke()
        // Address bar
        ctx.beginPath()
        ctx.moveTo(x - size / 2, y - size / 2 + 10)
        ctx.lineTo(x + size / 2, y - size / 2 + 10)
        ctx.stroke()
        // Dots
        ctx.beginPath()
        ctx.arc(x - size / 2 + 5, y - size / 2 + 5, 2, 0, Math.PI * 2)
        ctx.fill()
      } else if (type === "server") {
        // Server stack icon
        for (let i = 0; i < 3; i++) {
          ctx.beginPath()
          ctx.roundRect(x - size / 2, y - size / 2 + i * 12, size, 10, 2)
          ctx.stroke()
          // LED indicator
          ctx.beginPath()
          ctx.arc(x + size / 2 - 6, y - size / 2 + i * 12 + 5, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      } else if (type === "database") {
        // Database cylinder icon
        ctx.beginPath()
        ctx.ellipse(x, y - size / 3, size / 2.5, size / 6, 0, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x - size / 2.5, y - size / 3)
        ctx.lineTo(x - size / 2.5, y + size / 4)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x + size / 2.5, y - size / 3)
        ctx.lineTo(x + size / 2.5, y + size / 4)
        ctx.stroke()
        ctx.beginPath()
        ctx.ellipse(x, y + size / 4, size / 2.5, size / 6, 0, 0, Math.PI)
        ctx.stroke()
      }
    }

    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2

    const animate = () => {
      time += 0.016

      // Premium dark gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, "#0c1222")
      bgGradient.addColorStop(0.5, "#0f172a")
      bgGradient.addColorStop(1, "#0c1222")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Subtle radial glow in center
      const centerGlow = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.6
      )
      centerGlow.addColorStop(0, "rgba(59, 130, 246, 0.03)")
      centerGlow.addColorStop(1, "transparent")
      ctx.fillStyle = centerGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw ambient particles
      ambientParticles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw vertical connection lines between layers (subtle)
      const connectionX = canvas.width / 2
      layers.forEach((layer, i) => {
        if (i < layers.length - 1) {
          const startY = layer.y * canvas.height + 35
          const endY = layers[i + 1].y * canvas.height - 35

          // Connection line gradient
          const lineGrad = ctx.createLinearGradient(connectionX, startY, connectionX, endY)
          lineGrad.addColorStop(0, `${layer.color}40`)
          lineGrad.addColorStop(0.5, `${layers[i + 1].color}20`)
          lineGrad.addColorStop(1, `${layers[i + 1].color}40`)

          ctx.strokeStyle = lineGrad
          ctx.lineWidth = 2
          ctx.setLineDash([8, 8])
          ctx.beginPath()
          ctx.moveTo(connectionX, startY)
          ctx.lineTo(connectionX, endY)
          ctx.stroke()
          ctx.setLineDash([])
        }
      })

      // Update and draw data flows
      dataFlows.forEach((flow) => {
        flow.progress += flow.speed

        if (flow.progress >= 1) {
          flow.progress = 0
          // Randomly change direction
          if (Math.random() > 0.5) {
            const temp = flow.fromLayer
            flow.fromLayer = flow.toLayer
            flow.toLayer = temp
            flow.type = flow.type === "request" ? "response" : flow.type === "query" ? "data" : "request"
          }
        }

        const fromY = layers[flow.fromLayer].y * canvas.height
        const toY = layers[flow.toLayer].y * canvas.height
        const currentY = fromY + (toY - fromY) * easeInOutSine(flow.progress)
        const currentX = canvas.width / 2 + Math.sin(flow.progress * Math.PI * 2 + time) * 3

        // Determine flow color based on direction
        const flowColor = flow.fromLayer < flow.toLayer ? "#3b82f6" : "#22c55e"

        // Draw data packet
        const packetSize = 6
        ctx.fillStyle = flowColor
        ctx.globalAlpha = 0.9
        ctx.beginPath()
        ctx.arc(currentX, currentY, packetSize, 0, Math.PI * 2)
        ctx.fill()

        // Subtle glow
        ctx.fillStyle = flowColor
        ctx.globalAlpha = 0.2
        ctx.beginPath()
        ctx.arc(currentX, currentY, packetSize * 2, 0, Math.PI * 2)
        ctx.fill()

        // Trail effect
        for (let i = 1; i <= 4; i++) {
          const trailProgress = Math.max(0, flow.progress - i * 0.03)
          const trailY = fromY + (toY - fromY) * easeInOutSine(trailProgress)
          const trailX = canvas.width / 2 + Math.sin(trailProgress * Math.PI * 2 + time) * 3
          
          ctx.fillStyle = flowColor
          ctx.globalAlpha = 0.15 - i * 0.03
          ctx.beginPath()
          ctx.arc(trailX, trailY, packetSize - i, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.globalAlpha = 1
      })

      // Draw layer cards
      layers.forEach((layer, index) => {
        const cardWidth = 160
        const cardHeight = 60
        const cardX = canvas.width / 2 - cardWidth / 2
        const cardY = layer.y * canvas.height - cardHeight / 2

        // Card shadow
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
        ctx.beginPath()
        ctx.roundRect(cardX + 3, cardY + 3, cardWidth, cardHeight, 12)
        ctx.fill()

        // Card background
        const cardGrad = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardHeight)
        cardGrad.addColorStop(0, "#1e293b")
        cardGrad.addColorStop(1, "#0f172a")
        ctx.fillStyle = cardGrad
        ctx.beginPath()
        ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 12)
        ctx.fill()

        // Card border with subtle glow
        const pulse = Math.sin(time * 2 + index) * 0.2 + 0.8
        ctx.strokeStyle = `${layer.color}${Math.floor(pulse * 99).toString(16).padStart(2, "0")}`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 12)
        ctx.stroke()

        // Layer icon
        drawLayerIcon(cardX + 30, cardY + cardHeight / 2, layer.icon, 30, layer.color)

        // Layer name
        ctx.fillStyle = "#f8fafc"
        ctx.font = "600 14px -apple-system, BlinkMacSystemFont, sans-serif"
        ctx.textAlign = "left"
        ctx.fillText(layer.name, cardX + 55, cardY + cardHeight / 2 - 6)

        // Status indicator
        ctx.fillStyle = "#22c55e"
        ctx.beginPath()
        ctx.arc(cardX + 55, cardY + cardHeight / 2 + 12, 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#94a3b8"
        ctx.font = "11px -apple-system, BlinkMacSystemFont, sans-serif"
        ctx.fillText("Active", cardX + 65, cardY + cardHeight / 2 + 16)

        ctx.textAlign = "left"
      })

      // Draw metrics panel (bottom right)
      const metricsX = canvas.width - 130
      const metricsY = canvas.height - 80
      const metricsW = 115
      const metricsH = 65

      ctx.fillStyle = "rgba(15, 23, 42, 0.9)"
      ctx.beginPath()
      ctx.roundRect(metricsX, metricsY, metricsW, metricsH, 8)
      ctx.fill()

      ctx.strokeStyle = "rgba(71, 85, 105, 0.5)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(metricsX, metricsY, metricsW, metricsH, 8)
      ctx.stroke()

      // Metrics content
      ctx.fillStyle = "#94a3b8"
      ctx.font = "10px -apple-system, BlinkMacSystemFont, sans-serif"
      ctx.fillText("Latency", metricsX + 10, metricsY + 18)

      ctx.fillStyle = "#f8fafc"
      ctx.font = "600 16px -apple-system, BlinkMacSystemFont, sans-serif"
      const latency = Math.floor(12 + Math.sin(time * 1.5) * 4)
      ctx.fillText(`${latency}ms`, metricsX + 10, metricsY + 38)

      ctx.fillStyle = "#22c55e"
      ctx.font = "10px -apple-system, BlinkMacSystemFont, sans-serif"
      ctx.fillText("99.9% uptime", metricsX + 10, metricsY + 55)

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
