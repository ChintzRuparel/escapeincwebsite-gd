"use client"

import { motion } from "framer-motion"
import { GitFork, Star, AlertCircle } from "lucide-react"

interface RepoCardProps {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  issues: number
  lastUpdated: string
  onClick?: () => void
}

export function RepoCard({ name, description, language, stars, forks, issues, lastUpdated, onClick }: RepoCardProps) {
  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-400",
      Python: "bg-green-400",
      Java: "bg-red-400",
      Go: "bg-cyan-400",
      Rust: "bg-orange-400",
      Ruby: "bg-red-500",
      PHP: "bg-purple-400",
      HTML: "bg-orange-500",
      CSS: "bg-blue-500",
    }
    return colors[lang] || "bg-gray-400"
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-gray-400 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3v18h18" />
            <path d="M18.4 9a9 9 0 0 0-9.4 9" />
          </svg>
          <h3 className="text-blue-400 font-medium">{name}</h3>
        </div>
        <div className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full">Public</div>
      </div>
      <p className="text-gray-400 text-sm mt-2 mb-4">{description}</p>
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className={`h-3 w-3 rounded-full ${getLanguageColor(language)} mr-1`}></div>
            <span className="text-gray-400">{language}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Star className="h-3.5 w-3.5 mr-1" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <GitFork className="h-3.5 w-3.5 mr-1" />
            <span>{forks}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <AlertCircle className="h-3.5 w-3.5 mr-1" />
            <span>{issues}</span>
          </div>
        </div>
        <div className="text-gray-500">Updated {lastUpdated}</div>
      </div>
    </motion.div>
  )
}
