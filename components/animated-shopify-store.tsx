"use client"

import { useEffect, useRef } from "react"

export default function AnimatedShopifyStore() {
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

    // Emoji collections for different effects
    const techEmojis = ["💻", "🖥️", "⌨️", "🖱️", "💾", "📱", "⚡", "🔧", "⚙️", "🛠️", "🔌", "📡", "🌐", "💡", "🔋"]
    const codeEmojis = ["🚀", "⭐", "✨", "💫", "🌟", "🔥", "💎", "🎯", "🎨", "🎪", "🎭", "🎨", "🎲", "🎮", "🎸"]
    const reactionEmojis = ["😍", "🤩", "😎", "🥳", "🤯", "🔥", "💯", "👏", "🙌", "✌️", "👍", "💪", "🎉", "🎊", "🥇"]

    // Code snippets for the floating code editor
    const codeSnippets = [
      {
        language: "typescript",
        code: [
          "import { useState, useEffect } from 'react';",
          "import { motion } from 'framer-motion';",
          "",
          "interface DataProps {",
          "  id: string;",
          "  title: string;",
          "  value: number;",
          "}",
          "",
          "export const Dashboard = () => {",
          "  const [data, setData] = useState<DataProps[]>([]);",
          "  const [loading, setLoading] = useState(true);",
          "",
          "  useEffect(() => {",
          "    const fetchData = async () => {",
          "      try {",
          "        const response = await fetch('/api/data');",
          "        const result = await response.json();",
          "        setData(result);",
          "      } catch (error) {",
          "        console.error('Error fetching data:', error);",
          "      } finally {",
          "        setLoading(false);",
          "      }",
          "    };",
          "",
          "    fetchData();",
          "  }, []);",
          "",
          "  return (",
          "    <motion.div",
          "      initial={{ opacity: 0 }}",
          "      animate={{ opacity: 1 }}",
          "      className='dashboard'",
          "    >",
          "      {loading ? (",
          "        <Loader />",
          "      ) : (",
          "        <DataVisualizer data={data} />",
          "      )}",
          "    </motion.div>",
          "  );",
          "};",
        ],
      },
      {
        language: "javascript",
        code: [
          "// Advanced animation system",
          "class ParticleSystem {",
          "  constructor(options = {}) {",
          "    this.particles = [];",
          "    this.maxParticles = options.maxParticles || 100;",
          "    this.emissionRate = options.emissionRate || 5;",
          "    this.gravity = options.gravity || 0.1;",
          "    this.wind = options.wind || 0;",
          "  }",
          "",
          "  update() {",
          "    // Add new particles",
          "    for (let i = 0; i < this.emissionRate; i++) {",
          "      if (this.particles.length < this.maxParticles) {",
          "        this.particles.push(this.createParticle());",
          "      }",
          "    }",
          "",
          "    // Update existing particles",
          "    this.particles.forEach((particle, index) => {",
          "      particle.velocity.x += this.wind;",
          "      particle.velocity.y += this.gravity;",
          "",
          "      particle.position.x += particle.velocity.x;",
          "      particle.position.y += particle.velocity.y;",
          "      particle.life -= 1;",
          "",
          "      if (particle.life <= 0) {",
          "        this.particles.splice(index, 1);",
          "      }",
          "    });",
          "  }",
          "",
          "  render(ctx) {",
          "    this.particles.forEach(particle => {",
          "      ctx.beginPath();",
          "      ctx.arc(",
          "        particle.position.x,",
          "        particle.position.y,",
          "        particle.size,",
          "        0,",
          "        Math.PI * 2",
          "      );",
          "      ctx.fillStyle = particle.color;",
          "      ctx.fill();",
          "    });",
          "  }",
          "}",
        ],
      },
    ]

    // Floating emojis with physics
    const floatingEmojis: {
      x: number
      y: number
      vx: number
      vy: number
      emoji: string
      size: number
      rotation: number
      rotationSpeed: number
      bounce: number
      gravity: number
      life: number
      maxLife: number
      scale: number
      targetScale: number
      color: string
      glowSize: number
      trail: { x: number; y: number; alpha: number }[]
    }[] = []

    // Emoji explosions
    const explosions: {
      x: number
      y: number
      particles: {
        x: number
        y: number
        vx: number
        vy: number
        emoji: string
        size: number
        rotation: number
        rotationSpeed: number
        life: number
        maxLife: number
        scale: number
      }[]
      shockwave: {
        radius: number
        maxRadius: number
        alpha: number
      }
    }[] = []

    // Emoji rain
    const emojiRain: {
      x: number
      y: number
      speed: number
      emoji: string
      size: number
      rotation: number
      rotationSpeed: number
      sway: number
      swaySpeed: number
      bounce: number
      trail: { x: number; y: number; alpha: number; size: number }[]
    }[] = []

    // Swirling emoji vortex
    const vortexEmojis: {
      angle: number
      radius: number
      targetRadius: number
      speed: number
      emoji: string
      size: number
      rotation: number
      rotationSpeed: number
      verticalOffset: number
      verticalSpeed: number
      scale: number
      alpha: number
    }[] = []

    // Code editor state
    const codeEditor = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      currentSnippet: 0,
      currentLine: 0,
      typingPosition: 0,
      typingSpeed: 1,
      typingPause: 0,
      lineHeight: 20,
      fontSize: 14,
      padding: 15,
      headerHeight: 35,
      opacity: 0,
      targetOpacity: 1,
      rotation: 0,
      scale: 0.8,
      targetScale: 1,
      lastTypingTime: 0,
      showCursor: true,
      lastCursorBlink: 0,
      cursorBlinkRate: 500,
      colors: {
        background: "rgba(30, 30, 40, 0.85)",
        header: "rgba(40, 40, 50, 0.9)",
        text: "#f8f8f2",
        comment: "#6272a4",
        keyword: "#ff79c6",
        string: "#f1fa8c",
        number: "#bd93f9",
        function: "#50fa7b",
        type: "#8be9fd",
        variable: "#f8f8f2",
        property: "#ff79c6",
        operator: "#ff79c6",
        border: "#6272a4",
      },
    }

    // Initialize code editor dimensions
    codeEditor.width = canvas.width * 0.45
    codeEditor.height = canvas.height * 0.5
    codeEditor.x = canvas.width * 0.5 - codeEditor.width * 0.5
    codeEditor.y = canvas.height * 0.5 - codeEditor.height * 0.5

    // Initialize emoji rain
    for (let i = 0; i < 30; i++) {
      emojiRain.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        speed: Math.random() * 3 + 2,
        emoji: [...techEmojis, ...codeEmojis][Math.floor(Math.random() * (techEmojis.length + codeEmojis.length))],
        size: Math.random() * 20 + 15,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        bounce: Math.random() * 0.8 + 0.2,
        trail: [],
      })
    }

    // Initialize vortex emojis
    for (let i = 0; i < 20; i++) {
      vortexEmojis.push({
        angle: (i / 20) * Math.PI * 2,
        radius: Math.random() * 150 + 50,
        targetRadius: Math.random() * 150 + 50,
        speed: Math.random() * 0.02 + 0.01,
        emoji: codeEmojis[Math.floor(Math.random() * codeEmojis.length)],
        size: Math.random() * 25 + 20,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        verticalOffset: Math.random() * 100 - 50,
        verticalSpeed: Math.random() * 0.01 + 0.005,
        scale: 1,
        alpha: 1,
      })
    }

    // Create explosion at position
    const createExplosion = (x: number, y: number, intensity = 1) => {
      const particleCount = Math.floor(15 * intensity)
      const particles = []

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2
        const speed = Math.random() * 8 + 4
        particles.push({
          x: 0,
          y: 0,
          vx: Math.cos(angle) * speed * intensity,
          vy: Math.sin(angle) * speed * intensity,
          emoji: reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)],
          size: Math.random() * 30 + 20,
          rotation: 0,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
          life: 120,
          maxLife: 120,
          scale: 1,
        })
      }

      explosions.push({
        x,
        y,
        particles,
        shockwave: {
          radius: 0,
          maxRadius: 150 * intensity,
          alpha: 1,
        },
      })
    }

    // Create floating emoji
    const createFloatingEmoji = (x: number, y: number) => {
      floatingEmojis.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        emoji: techEmojis[Math.floor(Math.random() * techEmojis.length)],
        size: Math.random() * 35 + 25,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        bounce: Math.random() * 0.8 + 0.6,
        gravity: Math.random() * 0.1 + 0.05,
        life: 300,
        maxLife: 300,
        scale: 0,
        targetScale: 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        glowSize: Math.random() * 20 + 10,
        trail: [],
      })
    }

    // Get syntax highlighting color for code
    const getSyntaxColor = (token: string, language: string) => {
      if (token.startsWith("//")) return codeEditor.colors.comment
      if (token.startsWith("/*") || token.endsWith("*/")) return codeEditor.colors.comment
      if (token.startsWith('"') || token.startsWith("'") || token.endsWith('"') || token.endsWith("'"))
        return codeEditor.colors.string
      if (
        token.includes("import") ||
        token.includes("export") ||
        token.includes("const") ||
        token.includes("let") ||
        token.includes("var") ||
        token.includes("function") ||
        token.includes("return") ||
        token.includes("class") ||
        token.includes("interface") ||
        token.includes("extends") ||
        token.includes("implements") ||
        token.includes("new") ||
        token.includes("this") ||
        token.includes("try") ||
        token.includes("catch") ||
        token.includes("finally") ||
        token.includes("async") ||
        token.includes("await") ||
        token.includes("if") ||
        token.includes("else") ||
        token.includes("for") ||
        token.includes("while") ||
        token.includes("switch") ||
        token.includes("case") ||
        token.includes("break") ||
        token.includes("continue") ||
        token.includes("default")
      )
        return codeEditor.colors.keyword
      if (token.includes("number") || token.includes("string") || token.includes("boolean") || token.includes("any"))
        return codeEditor.colors.type
      if (!isNaN(Number(token))) return codeEditor.colors.number
      if (token.includes("(") && token.includes(")")) return codeEditor.colors.function
      if (token.includes("{") || token.includes("}") || token.includes("[") || token.includes("]"))
        return codeEditor.colors.operator
      return codeEditor.colors.text
    }

    // Draw rounded rectangle
    const roundRect = (x: number, y: number, width: number, height: number, radius: number) => {
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
    }

    // Draw code editor
    const drawCodeEditor = (timestamp: number) => {
      // Animate position and scale
      codeEditor.rotation = Math.sin(time * 0.2) * 0.03
      codeEditor.opacity += (codeEditor.targetOpacity - codeEditor.opacity) * 0.05
      codeEditor.scale += (codeEditor.targetScale - codeEditor.scale) * 0.05

      // Save context for transformations
      ctx.save()
      ctx.translate(codeEditor.x + codeEditor.width / 2, codeEditor.y + codeEditor.height / 2)
      ctx.rotate(codeEditor.rotation)
      ctx.scale(codeEditor.scale, codeEditor.scale)
      ctx.translate(-codeEditor.width / 2, -codeEditor.height / 2)
      ctx.globalAlpha = codeEditor.opacity

      // Draw editor background with rounded corners
      ctx.fillStyle = codeEditor.colors.background
      roundRect(0, 0, codeEditor.width, codeEditor.height, 8)
      ctx.fill()

      // Draw editor border
      ctx.strokeStyle = codeEditor.colors.border
      ctx.lineWidth = 2
      roundRect(0, 0, codeEditor.width, codeEditor.height, 8)
      ctx.stroke()

      // Draw editor header
      ctx.fillStyle = codeEditor.colors.header
      roundRect(0, 0, codeEditor.width, codeEditor.headerHeight, 8)
      ctx.fill()

      // Draw header buttons
      const buttonRadius = 6
      const buttonSpacing = 8
      ctx.fillStyle = "#ff5f56" // Close button
      ctx.beginPath()
      ctx.arc(15, codeEditor.headerHeight / 2, buttonRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "#ffbd2e" // Minimize button
      ctx.beginPath()
      ctx.arc(15 + buttonRadius * 2 + buttonSpacing, codeEditor.headerHeight / 2, buttonRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "#27c93f" // Expand button
      ctx.beginPath()
      ctx.arc(15 + (buttonRadius * 2 + buttonSpacing) * 2, codeEditor.headerHeight / 2, buttonRadius, 0, Math.PI * 2)
      ctx.fill()

      // Draw file name
      ctx.fillStyle = codeEditor.colors.text
      ctx.font = `${codeEditor.fontSize}px 'SF Mono', Monaco, Consolas, monospace`
      ctx.textAlign = "center"
      const fileName =
        codeEditor.currentSnippet === 0 ? "Dashboard.tsx" : codeEditor.currentSnippet === 1 ? "ParticleSystem.js" : ""
      ctx.fillText(fileName, codeEditor.width / 2, codeEditor.headerHeight / 2 + 5)

      // Set up clipping for code content
      ctx.save()
      ctx.beginPath()
      ctx.rect(
        codeEditor.padding,
        codeEditor.headerHeight + 5,
        codeEditor.width - codeEditor.padding * 2,
        codeEditor.height - codeEditor.headerHeight - codeEditor.padding,
      )
      ctx.clip()

      // Get current snippet
      const snippet = codeSnippets[codeEditor.currentSnippet]
      const code = snippet.code

      // Handle typing animation
      if (timestamp - codeEditor.lastTypingTime > 50) {
        codeEditor.lastTypingTime = timestamp

        // If we're at the end of the current line
        if (codeEditor.typingPosition >= code[codeEditor.currentLine].length) {
          // If we have a typing pause, wait
          if (codeEditor.typingPause > 0) {
            codeEditor.typingPause--
          } else {
            // Move to next line
            codeEditor.currentLine++
            codeEditor.typingPosition = 0
            codeEditor.typingPause = 5 // Pause briefly between lines

            // If we've reached the end of the snippet, reset or move to next snippet
            if (codeEditor.currentLine >= code.length) {
              codeEditor.typingPause = 50 // Longer pause at end of snippet
              codeEditor.currentLine = 0
              codeEditor.currentSnippet = (codeEditor.currentSnippet + 1) % codeSnippets.length
            }
          }
        } else {
          // Continue typing current line
          codeEditor.typingPosition += codeEditor.typingSpeed
        }
      }

      // Handle cursor blinking
      if (timestamp - codeEditor.lastCursorBlink > codeEditor.cursorBlinkRate) {
        codeEditor.lastCursorBlink = timestamp
        codeEditor.showCursor = !codeEditor.showCursor
      }

      // Draw line numbers and code
      ctx.textAlign = "right"
      ctx.font = `${codeEditor.fontSize}px 'SF Mono', Monaco, Consolas, monospace`

      for (let i = 0; i < code.length; i++) {
        const y = codeEditor.headerHeight + codeEditor.padding + i * codeEditor.lineHeight

        // Only draw if in visible area
        if (y > codeEditor.headerHeight && y < codeEditor.height) {
          // Line number
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
          ctx.fillText(`${i + 1}`, codeEditor.padding + 20, y)

          // Code line with syntax highlighting
          ctx.textAlign = "left"
          const line = code[i]

          // If this is a line we're currently typing
          if (i === codeEditor.currentLine) {
            const typedText = line.substring(0, Math.floor(codeEditor.typingPosition))

            // Simple syntax highlighting by splitting on spaces and checking each token
            const tokens = typedText.split(/(\s+|[.,;:(){}[\]<>])/g)
            let xPos = codeEditor.padding + 40

            tokens.forEach((token) => {
              if (token.trim() === "") {
                xPos += ctx.measureText(token).width
                return
              }

              ctx.fillStyle = getSyntaxColor(token, snippet.language)
              ctx.fillText(token, xPos, y)
              xPos += ctx.measureText(token).width
            })

            // Draw blinking cursor
            if (codeEditor.showCursor) {
              ctx.fillStyle = codeEditor.colors.text
              ctx.fillRect(
                codeEditor.padding + 40 + ctx.measureText(typedText).width,
                y - codeEditor.lineHeight + 4,
                2,
                codeEditor.lineHeight - 2,
              )
            }
          } else if (i < codeEditor.currentLine) {
            // Lines we've already typed - show with syntax highlighting
            const tokens = line.split(/(\s+|[.,;:(){}[\]<>])/g)
            let xPos = codeEditor.padding + 40

            tokens.forEach((token) => {
              if (token.trim() === "") {
                xPos += ctx.measureText(token).width
                return
              }

              ctx.fillStyle = getSyntaxColor(token, snippet.language)
              ctx.fillText(token, xPos, y)
              xPos += ctx.measureText(token).width
            })
          }
        }
      }

      ctx.restore() // Restore from clipping
      ctx.restore() // Restore from transformations
    }

    // Periodically create explosions and floating emojis
    let lastExplosion = 0
    let lastFloatingEmoji = 0

    const animate = (timestamp: number) => {
      time += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Animated gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time * 0.5) * 100,
        canvas.height / 2 + Math.cos(time * 0.3) * 100,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height),
      )
      gradient.addColorStop(0, `hsl(${(time * 20) % 360}, 40%, 10%)`)
      gradient.addColorStop(0.5, `hsl(${(time * 15 + 60) % 360}, 30%, 8%)`)
      gradient.addColorStop(1, `hsl(${(time * 10 + 120) % 360}, 20%, 5%)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Animated grid pattern
      ctx.strokeStyle = `hsla(${(time * 30) % 360}, 50%, 50%, 0.1)`
      ctx.lineWidth = 1
      const gridSize = 50
      const offsetX = (time * 20) % gridSize
      const offsetY = (time * 15) % gridSize

      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Create periodic explosions
      if (timestamp - lastExplosion > 2000) {
        lastExplosion = timestamp
        createExplosion(
          Math.random() * canvas.width * 0.6 + canvas.width * 0.2,
          Math.random() * canvas.height * 0.6 + canvas.height * 0.2,
          Math.random() * 1.5 + 0.5,
        )
      }

      // Create floating emojis
      if (timestamp - lastFloatingEmoji > 500) {
        lastFloatingEmoji = timestamp
        createFloatingEmoji(Math.random() * canvas.width, Math.random() * canvas.height)
      }

      // Update and draw emoji rain
      emojiRain.forEach((drop) => {
        // Update position
        drop.y += drop.speed
        drop.sway += drop.swaySpeed
        drop.x += Math.sin(drop.sway) * 2
        drop.rotation += drop.rotationSpeed

        // Add to trail
        drop.trail.push({ x: drop.x, y: drop.y, alpha: 1, size: drop.size })
        if (drop.trail.length > 8) drop.trail.shift()

        // Reset if off screen
        if (drop.y > canvas.height + 50) {
          drop.y = -50
          drop.x = Math.random() * canvas.width
          drop.emoji = [...techEmojis, ...codeEmojis][
            Math.floor(Math.random() * (techEmojis.length + codeEmojis.length))
          ]
        }

        // Draw trail
        drop.trail.forEach((point, i) => {
          const alpha = (i / drop.trail.length) * 0.3
          point.alpha = alpha
          point.size *= 0.95

          ctx.save()
          ctx.globalAlpha = alpha
          ctx.font = `${point.size}px Arial`
          ctx.textAlign = "center"
          ctx.fillText(drop.emoji, point.x, point.y)
          ctx.restore()
        })

        // Draw main emoji with glow
        ctx.save()
        ctx.translate(drop.x, drop.y)
        ctx.rotate(drop.rotation)
        ctx.shadowBlur = 15
        ctx.shadowColor = `hsl(${(time * 50 + drop.x) % 360}, 70%, 60%)`
        ctx.font = `${drop.size}px Arial`
        ctx.textAlign = "center"
        ctx.fillText(drop.emoji, 0, 0)
        ctx.restore()
      })

      // Update and draw vortex emojis
      const vortexCenterX = canvas.width / 2 + Math.sin(time * 0.3) * 50
      const vortexCenterY = canvas.height / 2 + Math.cos(time * 0.2) * 30

      vortexEmojis.forEach((vortexEmoji) => {
        // Update vortex motion
        vortexEmoji.angle += vortexEmoji.speed
        vortexEmoji.radius += (vortexEmoji.targetRadius - vortexEmoji.radius) * 0.02
        vortexEmoji.rotation += vortexEmoji.rotationSpeed
        vortexEmoji.verticalOffset += Math.sin(time + vortexEmoji.angle) * vortexEmoji.verticalSpeed

        // Change target radius occasionally
        if (Math.random() < 0.005) {
          vortexEmoji.targetRadius = Math.random() * 150 + 50
        }

        // Calculate position
        const x = vortexCenterX + Math.cos(vortexEmoji.angle) * vortexEmoji.radius
        const y = vortexCenterY + Math.sin(vortexEmoji.angle) * vortexEmoji.radius + vortexEmoji.verticalOffset

        // Pulsing scale
        vortexEmoji.scale = 1 + Math.sin(time * 2 + vortexEmoji.angle) * 0.3

        // Draw with glow and rotation
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(vortexEmoji.rotation)
        ctx.scale(vortexEmoji.scale, vortexEmoji.scale)
        ctx.shadowBlur = 20
        ctx.shadowColor = `hsl(${(vortexEmoji.angle * 180) % 360}, 80%, 60%)`
        ctx.font = `${vortexEmoji.size}px Arial`
        ctx.textAlign = "center"
        ctx.fillText(vortexEmoji.emoji, 0, 0)
        ctx.restore()
      })

      // Update and draw floating emojis
      floatingEmojis.forEach((emoji, index) => {
        // Physics
        emoji.vy += emoji.gravity
        emoji.x += emoji.vx
        emoji.y += emoji.vy
        emoji.rotation += emoji.rotationSpeed
        emoji.life--

        // Scale animation
        emoji.scale += (emoji.targetScale - emoji.scale) * 0.1

        // Bounce off edges
        if (emoji.x < 0 || emoji.x > canvas.width) {
          emoji.vx *= -emoji.bounce
          emoji.x = Math.max(0, Math.min(canvas.width, emoji.x))
        }
        if (emoji.y < 0 || emoji.y > canvas.height) {
          emoji.vy *= -emoji.bounce
          emoji.y = Math.max(0, Math.min(canvas.height, emoji.y))
        }

        // Add to trail
        emoji.trail.push({ x: emoji.x, y: emoji.y, alpha: 1 })
        if (emoji.trail.length > 10) emoji.trail.shift()

        // Remove if life is over
        if (emoji.life <= 0) {
          floatingEmojis.splice(index, 1)
          return
        }

        // Draw trail
        emoji.trail.forEach((point, i) => {
          const alpha = (i / emoji.trail.length) * 0.2
          ctx.save()
          ctx.globalAlpha = alpha
          ctx.fillStyle = emoji.color
          ctx.beginPath()
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })

        // Draw emoji with glow and effects
        const alpha = emoji.life / emoji.maxLife
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.translate(emoji.x, emoji.y)
        ctx.rotate(emoji.rotation)
        ctx.scale(emoji.scale, emoji.scale)

        // Multiple glow layers
        ctx.shadowBlur = emoji.glowSize
        ctx.shadowColor = emoji.color
        ctx.font = `${emoji.size}px Arial`
        ctx.textAlign = "center"
        ctx.fillText(emoji.emoji, 0, 0)

        // Extra glow
        ctx.shadowBlur = emoji.glowSize * 2
        ctx.fillText(emoji.emoji, 0, 0)

        ctx.restore()
      })

      // Update and draw explosions
      explosions.forEach((explosion, expIndex) => {
        // Update shockwave
        explosion.shockwave.radius += 8
        explosion.shockwave.alpha = Math.max(0, 1 - explosion.shockwave.radius / explosion.shockwave.maxRadius)

        // Draw shockwave
        if (explosion.shockwave.alpha > 0) {
          ctx.save()
          ctx.globalAlpha = explosion.shockwave.alpha
          ctx.strokeStyle = `hsl(${(time * 100) % 360}, 80%, 60%)`
          ctx.lineWidth = 4
          ctx.beginPath()
          ctx.arc(explosion.x, explosion.y, explosion.shockwave.radius, 0, Math.PI * 2)
          ctx.stroke()

          // Inner shockwave
          ctx.strokeStyle = `hsl(${(time * 100 + 180) % 360}, 80%, 80%)`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(explosion.x, explosion.y, explosion.shockwave.radius * 0.7, 0, Math.PI * 2)
          ctx.stroke()
          ctx.restore()
        }

        // Update particles
        explosion.particles.forEach((particle, partIndex) => {
          particle.x += particle.vx
          particle.y += particle.vy
          particle.vx *= 0.98
          particle.vy *= 0.98
          particle.vy += 0.2 // gravity
          particle.rotation += particle.rotationSpeed
          particle.life--

          const alpha = particle.life / particle.maxLife
          particle.scale = alpha

          if (particle.life <= 0) {
            explosion.particles.splice(partIndex, 1)
            return
          }

          // Draw particle with effects
          ctx.save()
          ctx.globalAlpha = alpha
          ctx.translate(explosion.x + particle.x, explosion.y + particle.y)
          ctx.rotate(particle.rotation)
          ctx.scale(particle.scale, particle.scale)

          // Glow effect
          ctx.shadowBlur = 25
          ctx.shadowColor = `hsl(${(particle.life * 5) % 360}, 80%, 60%)`
          ctx.font = `${particle.size}px Arial`
          ctx.textAlign = "center"
          ctx.fillText(particle.emoji, 0, 0)

          // Extra bright center
          ctx.shadowBlur = 40
          ctx.fillText(particle.emoji, 0, 0)
          ctx.restore()
        })

        // Remove explosion if no particles left
        if (explosion.particles.length === 0 && explosion.shockwave.alpha <= 0) {
          explosions.splice(expIndex, 1)
        }
      })

      // Draw code editor
      drawCodeEditor(timestamp)

      // Central pulsing emoji
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const centerPulse = 1 + Math.sin(time * 3) * 0.3
      const centerRotation = time * 0.5

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(centerRotation)
      ctx.scale(centerPulse, centerPulse)

      // Multiple glow layers for center emoji
      const centerEmoji = "🚀"
      const centerSize = 60

      ctx.shadowBlur = 50
      ctx.shadowColor = `hsl(${(time * 60) % 360}, 80%, 60%)`
      ctx.font = `${centerSize}px Arial`
      ctx.textAlign = "center"
      ctx.fillText(centerEmoji, 0, 0)

      ctx.shadowBlur = 80
      ctx.shadowColor = `hsl(${(time * 60 + 120) % 360}, 80%, 40%)`
      ctx.fillText(centerEmoji, 0, 0)

      ctx.shadowBlur = 120
      ctx.shadowColor = `hsl(${(time * 60 + 240) % 360}, 80%, 20%)`
      ctx.fillText(centerEmoji, 0, 0)

      ctx.restore()

      // Random sparkle effects
      for (let i = 0; i < 5; i++) {
        if (Math.random() < 0.3) {
          const sparkleX = Math.random() * canvas.width
          const sparkleY = Math.random() * canvas.height
          const sparkleSize = Math.random() * 20 + 10

          ctx.save()
          ctx.translate(sparkleX, sparkleY)
          ctx.rotate(Math.random() * Math.PI * 2)
          ctx.shadowBlur = 20
          ctx.shadowColor = `hsl(${Math.random() * 360}, 80%, 60%)`
          ctx.font = `${sparkleSize}px Arial`
          ctx.textAlign = "center"
          ctx.fillText("✨", 0, 0)
          ctx.restore()
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate(0)

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
