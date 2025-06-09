"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Wrench, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

type TechCategory = "frontend" | "backend" | "tools"
type Technology = {
  name: string
  category: TechCategory
  description: string
  color: string
}

export default function TechnologySelector() {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>("frontend")
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const technologies: Technology[] = [
    // Frontend
    {
      name: "React",
      category: "frontend",
      description: "A JavaScript library for building user interfaces",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Next.js",
      category: "frontend",
      description: "The React framework for production",
      color: "from-black to-gray-800",
    },
    {
      name: "Vue",
      category: "frontend",
      description: "Progressive JavaScript framework",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Angular",
      category: "frontend",
      description: "Platform for building mobile & desktop web applications",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      description: "Utility-first CSS framework",
      color: "from-cyan-500 to-cyan-600",
    },
    { name: "SASS", category: "frontend", description: "CSS with superpowers", color: "from-pink-500 to-pink-600" },
    {
      name: "TypeScript",
      category: "frontend",
      description: "JavaScript with syntax for types",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "JavaScript",
      category: "frontend",
      description: "The programming language of the web",
      color: "from-yellow-400 to-yellow-500",
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      description: "JavaScript runtime built on Chrome's V8 engine",
      color: "from-green-600 to-green-700",
    },
    {
      name: "Django",
      category: "backend",
      description: "High-level Python web framework",
      color: "from-green-800 to-green-900",
    },
    {
      name: "Ruby on Rails",
      category: "backend",
      description: "Server-side web application framework",
      color: "from-red-600 to-red-700",
    },
    {
      name: "MongoDB",
      category: "backend",
      description: "Document-oriented NoSQL database",
      color: "from-green-500 to-green-600",
    },
    {
      name: "PostgreSQL",
      category: "backend",
      description: "Powerful, open source object-relational database",
      color: "from-blue-700 to-blue-800",
    },
    {
      name: "GraphQL",
      category: "backend",
      description: "Query language for your API",
      color: "from-pink-600 to-pink-700",
    },
    {
      name: "Firebase",
      category: "backend",
      description: "Google's mobile platform for app development",
      color: "from-yellow-500 to-yellow-600",
    },

    // Tools & DevOps
    {
      name: "Git",
      category: "tools",
      description: "Distributed version control system",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Docker",
      category: "tools",
      description: "Platform for developing, shipping, and running applications",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Kubernetes",
      category: "tools",
      description: "Container orchestration system",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "GitHub Actions",
      category: "tools",
      description: "CI/CD platform integrated with GitHub",
      color: "from-gray-700 to-gray-800",
    },
    { name: "AWS", category: "tools", description: "Cloud computing services", color: "from-orange-400 to-orange-500" },
    {
      name: "Vercel",
      category: "tools",
      description: "Platform for frontend frameworks and static sites",
      color: "from-black to-gray-800",
    },
    { name: "Jest", category: "tools", description: "JavaScript testing framework", color: "from-red-500 to-red-600" },
    {
      name: "Webpack",
      category: "tools",
      description: "Static module bundler for JavaScript applications",
      color: "from-blue-400 to-blue-500",
    },
  ]

  const filteredTech = technologies.filter((tech) => tech.category === selectedCategory)
  const selectedTechnology = technologies.find((tech) => tech.name === selectedTech)

  return (
    <div className="w-full max-w-5xl mx-auto p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-xl">
      {/* Category Selector */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <CategoryButton
          isActive={selectedCategory === "frontend"}
          onClick={() => {
            setSelectedCategory("frontend")
            setSelectedTech(null)
          }}
          icon={<Code className="w-5 h-5" />}
          label="Frontend"
        />
        <CategoryButton
          isActive={selectedCategory === "backend"}
          onClick={() => {
            setSelectedCategory("backend")
            setSelectedTech(null)
          }}
          icon={<Database className="w-5 h-5" />}
          label="Backend"
        />
        <CategoryButton
          isActive={selectedCategory === "tools"}
          onClick={() => {
            setSelectedCategory("tools")
            setSelectedTech(null)
          }}
          icon={<Wrench className="w-5 h-5" />}
          label="Tools & DevOps"
        />
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AnimatePresence mode="wait">
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <button
                onClick={() => setSelectedTech(tech.name === selectedTech ? null : tech.name)}
                className={cn(
                  "w-full h-24 rounded-lg p-4 text-left transition-all overflow-hidden group",
                  "border border-gray-800 hover:border-gray-700",
                  tech.name === selectedTech
                    ? `bg-gradient-to-br ${tech.color} shadow-lg`
                    : "bg-gray-800/50 hover:bg-gray-800",
                )}
              >
                <div className="absolute inset-0 opacity-10 bg-pattern" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3
                      className={cn(
                        "font-bold text-lg transition-colors",
                        tech.name === selectedTech ? "text-white" : "text-gray-100",
                      )}
                    >
                      {tech.name}
                    </h3>
                    {tech.name === selectedTech && <Check className="w-5 h-5 text-white" />}
                  </div>

                  <div
                    className={cn(
                      "text-xs transition-colors",
                      tech.name === selectedTech ? "text-white/80" : "text-gray-400",
                    )}
                  >
                    {tech.name === selectedTech ? (
                      tech.description
                    ) : (
                      <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Select</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Selected Technology Details */}
      <AnimatePresence>
        {selectedTechnology && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 overflow-hidden"
          >
            <div className={`p-6 rounded-lg bg-gradient-to-br ${selectedTechnology.color} text-white`}>
              <h3 className="text-2xl font-bold mb-2">{selectedTechnology.name}</h3>
              <p className="text-white/90 mb-4">{selectedTechnology.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/20 rounded-full text-sm">
                  {selectedTechnology.category === "frontend"
                    ? "Frontend"
                    : selectedTechnology.category === "backend"
                      ? "Backend"
                      : "Tools & DevOps"}
                </span>
                <span className="px-3 py-1 bg-black/20 rounded-full text-sm">Documentation</span>
                <span className="px-3 py-1 bg-black/20 rounded-full text-sm">Examples</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CategoryButton({
  isActive,
  onClick,
  icon,
  label,
}: {
  isActive: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all",
        isActive
          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white",
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {isActive && (
        <motion.div layoutId="activeIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
      )}
    </button>
  )
}
