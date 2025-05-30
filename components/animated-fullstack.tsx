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

    // Network nodes
    const nodes: { x: number; y: number; layer: string; color: string; connections: number[]; activity: number }[] = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.2,
        layer: "Frontend",
        color: "#00ffff",
        connections: [3, 4],
        activity: 0,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.2,
        layer: "Frontend",
        color: "#00ffff",
        connections: [3, 4],
        activity: 0,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.2,
        layer: "CDN",
        color: "#ffff00",
        connections: [0, 1, 3],
        activity: 0,
      },
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.5,
        layer: "API",
        color: "#ff00ff",
        connections: [5, 6],
        activity: 0,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.5,
        layer: "API",
        color: "#ff00ff",
        connections: [5, 6],
        activity: 0,
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.8,
        layer: "Database",
        color: "#00ff00",
        connections: [],
        activity: 0,
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.8,
        layer: "Database",
        color: "#00ff00",
        connections: [],
        activity: 0,
      },
    ]

    // Data packets
    const packets: {
      x: number
      y: number
      targetX: number
      targetY: number
      progress: number
      color: string
      size: number
      type: string
      trail: { x: number; y: number }[]
    }[] = []

    // System logs
    const logs: { message: string; time: number; type: string; color: string }[] = []

    // Matrix rain
    const matrixColumns = Math.floor(canvas.width / 20)
    const matrixDrops: number[] = new Array(matrixColumns).fill(0)

    const animate = () => {
      time += 0.016

      // Dark tech background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      )
      gradient.addColorStop(0, "#001122")
      gradient.addColorStop(1, "#000000")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Matrix rain effect
      ctx.fillStyle = "rgba(0, 255, 0, 0.1)"
      ctx.font = "12px monospace"
      for (let i = 0; i < matrixDrops.length; i++) {
        const char = String.fromCharCode(0x30a0 + Math.random() * 96)
        ctx.fillText(char, i * 20, matrixDrops[i] * 20)

        if (matrixDrops[i] * 20 > canvas.height && Math.random() > 0.975) {
          matrixDrops[i] = 0
        }
        matrixDrops[i]++
      }

      // Create random data packets
      if (Math.random() < 0.1) {
        const fromNode = Math.floor(Math.random() * nodes.length)
        const connections = nodes[fromNode].connections
        if (connections.length > 0) {
          const toNode = connections[Math.floor(Math.random() * connections.length)]

          packets.push({
            x: nodes[fromNode].x,
            y: nodes[fromNode].y,
            targetX: nodes[toNode].x,
            targetY: nodes[toNode].y,
            progress: 0,
            color: ["#ff0080", "#0080ff", "#80ff00", "#ff8000"][Math.floor(Math.random() * 4)],
            size: Math.random() * 8 + 4,
            type: ["GET", "POST", "PUT", "DELETE"][Math.floor(Math.random() * 4)],
            trail: [],
          })
        }
      }

      // Update and draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i]
        packet.progress += 0.02

        const currentX = packet.x + (packet.targetX - packet.x) * packet.progress
        const currentY = packet.y + (packet.targetY - packet.y) * packet.progress

        // Add to trail
        packet.trail.push({ x: currentX, y: currentY })
        if (packet.trail.length > 10) packet.trail.shift()

        // Draw trail
        packet.trail.forEach((point, index) => {
          const alpha = (index / packet.trail.length) * 0.5
          ctx.globalAlpha = alpha
          ctx.fillStyle = packet.color
          ctx.beginPath()
          ctx.arc(point.x, point.y, packet.size * alpha, 0, Math.PI * 2)
          ctx.fill()
        })
        ctx.globalAlpha = 1

        // Draw packet
        ctx.fillStyle = packet.color
        ctx.beginPath()
        ctx.arc(currentX, currentY, packet.size, 0, Math.PI * 2)
        ctx.fill()

        // Glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = packet.color
        ctx.beginPath()
        ctx.arc(currentX, currentY, packet.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Packet type label
        ctx.fillStyle = "#ffffff"
        ctx.font = "8px monospace"
        ctx.textAlign = "center"
        ctx.fillText(packet.type, currentX, currentY - packet.size - 5)
        ctx.textAlign = "left"

        // Remove completed packets
        if (packet.progress >= 1) {
          // Create explosion effect
          for (let j = 0; j < 8; j++) {
            const angle = (j / 8) * Math.PI * 2
            const sparkX = packet.targetX + Math.cos(angle) * 20
            const sparkY = packet.targetY + Math.sin(angle) * 20

            ctx.fillStyle = packet.color
            ctx.beginPath()
            ctx.arc(sparkX, sparkY, 3, 0, Math.PI * 2)
            ctx.fill()
          }

          // Add log entry
          logs.push({
            message: `${packet.type} request completed`,
            time: time,
            type: packet.type,
            color: packet.color,
          })
          if (logs.length > 8) logs.shift()

          packets.splice(i, 1)
        }
      }

      // Draw connections between nodes
      nodes.forEach((node, index) => {
        node.connections.forEach((connectionIndex) => {
          const targetNode = nodes[connectionIndex]

          // Animated connection line
          const pulse = Math.sin(time * 3 + index) * 0.5 + 0.5
          ctx.strokeStyle = `rgba(100, 100, 255, ${pulse * 0.3})`
          ctx.lineWidth = 2
          ctx.setLineDash([5, 5])
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(targetNode.x, targetNode.y)
          ctx.stroke()
          ctx.setLineDash([])
        })
      })

      // Draw nodes with activity
      nodes.forEach((node, index) => {
        // Update activity
        node.activity = Math.max(0, node.activity - 0.02)

        // Check for nearby packets
        packets.forEach((packet) => {
          const dist = Math.sqrt((packet.x - node.x) ** 2 + (packet.y - node.y) ** 2)
          if (dist < 30) {
            node.activity = Math.min(1, node.activity + 0.1)
          }
        })

        // Node background
        const nodeSize = 40 + node.activity * 20
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()

        // Node border with activity glow
        ctx.strokeStyle = node.color
        ctx.lineWidth = 3 + node.activity * 5
        ctx.shadowBlur = 10 + node.activity * 20
        ctx.shadowColor = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.stroke()
        ctx.shadowBlur = 0

        // Node label
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px monospace"
        ctx.textAlign = "center"
        ctx.fillText(node.layer, node.x, node.y + 4)
        ctx.textAlign = "left"

        // Activity indicator
        if (node.activity > 0) {
          ctx.fillStyle = node.color
          ctx.font = "8px monospace"
          ctx.textAlign = "center"
          ctx.fillText("ACTIVE", node.x, node.y + 20)
          ctx.textAlign = "left"
        }
      })

      // System monitor panel
      const panelX = 10
      const panelY = 10
      const panelW = 250
      const panelH = 200

      ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
      ctx.fillRect(panelX, panelY, panelW, panelH)
      ctx.strokeStyle = "#00ff00"
      ctx.lineWidth = 2
      ctx.strokeRect(panelX, panelY, panelW, panelH)

      // Panel header
      ctx.fillStyle = "#00ff00"
      ctx.font = "bold 14px monospace"
      ctx.fillText("SYSTEM MONITOR", panelX + 10, panelY + 20)

      // System stats
      const stats = [
        `CPU: ${(50 + Math.sin(time * 2) * 30).toFixed(1)}%`,
        `RAM: ${(60 + Math.sin(time * 1.5) * 20).toFixed(1)}%`,
        `Network: ${packets.length} packets`,
        `Uptime: ${Math.floor(time)}s`,
        `Requests/sec: ${(Math.sin(time) * 50 + 100).toFixed(0)}`,
      ]

      stats.forEach((stat, index) => {
        ctx.fillStyle = "#ffffff"
        ctx.font = "10px monospace"
        ctx.fillText(stat, panelX + 10, panelY + 45 + index * 15)
      })

      // Recent logs
      ctx.fillStyle = "#00ff00"
      ctx.font = "bold 12px monospace"
      ctx.fillText("RECENT ACTIVITY", panelX + 10, panelY + 130)

      logs.slice(-5).forEach((log, index) => {
        const age = time - log.time
        const alpha = Math.max(0, 1 - age / 5)

        ctx.globalAlpha = alpha
        ctx.fillStyle = log.color
        ctx.font = "8px monospace"
        ctx.fillText(log.message, panelX + 10, panelY + 150 + index * 12)
      })
      ctx.globalAlpha = 1

      // Performance graph
      const graphX = canvas.width - 200
      const graphY = 10
      const graphW = 180
      const graphH = 100

      ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
      ctx.fillRect(graphX, graphY, graphW, graphH)
      ctx.strokeStyle = "#ffff00"
      ctx.lineWidth = 2
      ctx.strokeRect(graphX, graphY, graphW, graphH)

      ctx.fillStyle = "#ffff00"
      ctx.font = "bold 12px monospace"
      ctx.fillText("PERFORMANCE", graphX + 10, graphY + 20)

      // Draw performance line
      ctx.strokeStyle = "#ff00ff"
      ctx.lineWidth = 2
      ctx.beginPath()
      for (let i = 0; i < graphW; i += 5) {
        const x = graphX + i
        const y = graphY + graphH / 2 + Math.sin(time * 2 + i * 0.1) * 20
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

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
