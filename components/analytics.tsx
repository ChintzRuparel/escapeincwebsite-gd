"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function Analytics() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [analyticsData, setAnalyticsData] = useState<number[]>([])

  useEffect(() => {
    setMounted(true)
    // Generate random analytics data
    const data = Array.from({ length: 52 }, () => Math.floor(Math.random() * 10))
    setAnalyticsData(data)

    // Show analytics after a delay
    const timer = setTimeout(() => {
      setShowAnalytics(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <>
      {showAnalytics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-lg p-4 shadow-lg z-50 w-64"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium text-gray-200">Live Analytics</h3>
            <button
              onClick={() => setShowAnalytics(false)}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Contributions</span>
              <span>Last year</span>
            </div>
            <div className="h-20 grid grid-cols-52 gap-1">
              {analyticsData.map((value, i) => (
                <div key={i} className="relative group">
                  <div
                    className={`w-full h-full rounded-sm ${
                      value === 0
                        ? "bg-gray-800"
                        : value < 3
                          ? "bg-emerald-900"
                          : value < 6
                            ? "bg-emerald-700"
                            : value < 8
                              ? "bg-emerald-600"
                              : "bg-emerald-500"
                    }`}
                  ></div>
                  <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-xs text-white py-1 px-2 rounded pointer-events-none whitespace-nowrap">
                    {value} contributions
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center text-gray-400">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-sm mr-1"></span>
                <span>Today: 7 contributions</span>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">View all</button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
