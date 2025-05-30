"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ContributionGraph() {
  const [contributions, setContributions] = useState<number[][]>([])
  const [loading, setLoading] = useState(true)
  const [hoverInfo, setHoverInfo] = useState<{ x: number; y: number; count: number } | null>(null)

  useEffect(() => {
    // Generate random contribution data
    const generateData = () => {
      const weeks = 12
      const daysPerWeek = 7
      const data = []

      for (let i = 0; i < weeks; i++) {
        const week = []
        for (let j = 0; j < daysPerWeek; j++) {
          // Higher probability of contributions on weekdays
          const isWeekday = j > 0 && j < 6
          const max = isWeekday ? 15 : 5
          week.push(Math.floor(Math.random() * max))
        }
        data.push(week)
      }

      return data
    }

    setContributions(generateData())
    setLoading(false)
  }, [])

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-gray-800"
    if (count < 3) return "bg-emerald-900"
    if (count < 6) return "bg-emerald-700"
    if (count < 10) return "bg-emerald-600"
    return "bg-emerald-500"
  }

  if (loading) {
    return <div className="h-24 bg-gray-800 rounded-md animate-pulse"></div>
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-300">Contribution activity</h3>
        <div className="text-xs text-gray-500">Last 12 weeks</div>
      </div>

      <div className="relative">
        <div className="grid grid-flow-col gap-1">
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-1">
              {week.map((count, dayIndex) => (
                <motion.div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(count)} hover:ring-2 hover:ring-gray-300 transition-all`}
                  whileHover={{ scale: 1.2 }}
                  onMouseEnter={() => setHoverInfo({ x: weekIndex, y: dayIndex, count })}
                  onMouseLeave={() => setHoverInfo(null)}
                ></motion.div>
              ))}
            </div>
          ))}
        </div>

        {hoverInfo && (
          <div
            className="absolute bg-gray-800 text-white text-xs py-1 px-2 rounded pointer-events-none z-10"
            style={{
              left: `${(hoverInfo.x / contributions.length) * 100}%`,
              top: `${(hoverInfo.y / 7) * 100}%`,
              transform: "translate(-50%, -130%)",
            }}
          >
            {hoverInfo.count} contributions
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-1 text-gray-500">
          <span>Less</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
            <div className="w-2 h-2 bg-emerald-900 rounded-sm"></div>
            <div className="w-2 h-2 bg-emerald-700 rounded-sm"></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-sm"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
        <button className="text-blue-400 hover:text-blue-300 transition-colors">View full activity</button>
      </div>
    </div>
  )
}
