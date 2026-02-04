"use client"

import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useState } from "react"
import CodeEditor from "@/components/code-editor"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const codeSnippet = `// Simple React state hook
const [theme, setTheme] = useState('dark');
const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
// Perfect for theme switching!`

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Blog</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Insights, tips, and updates from the Escape Inc. team on web development, design, and digital strategy.
              </p>
            </div>
            <div className="relative">
              <CodeEditor code={codeSnippet} language="javascript" />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 px-4 md:px-6 bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Button
                variant="outline"
                className="rounded-full border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                All
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                Web Development
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                Design
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                Business
              </Button>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full md:w-[300px] pl-10 bg-gray-800 border-gray-700 text-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full text-xs font-medium border border-blue-800">
                  Web Development
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>May 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>5 min read</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
                Your Digital Storefront: Why Every Business Needs a Website in 2025
              </h2>
              <p className="text-gray-300 mb-6">
                In today's digital age, having a website is no longer optional for businesses. It's a necessity. Discover how a professional website transforms your business presence and unlocks 24/7 customer engagement opportunities you can't afford to miss.
              </p>
              <Link href="/blog/importance-of-website">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Latest Articles</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay up-to-date with the latest trends, tips, and insights in web development and digital strategy.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                id: 1,
                slug: "quick-deployment",
                category: "Development",
                categoryColor: "bg-blue-900/50 text-blue-300 border-blue-800",
                date: "May 11, 2025",
                title: "Launch Fast or Get Left Behind: The Speed Advantage in Web Development",
                description: "In a world where every day counts, discover why rapid deployment isn't just nice to have—it's your competitive weapon.",
              },
              {
                id: 2,
                slug: "social-media-tricks",
                category: "Business",
                categoryColor: "bg-purple-900/50 text-purple-300 border-purple-800",
                date: "May 12, 2025",
                title: "5 Powerful Social Media Hacks That Drive Real Business Results",
                description: "Stop posting into the void. Learn actionable strategies that turn casual scrollers into engaged customers and brand advocates.",
              },
              {
                id: 3,
                slug: "github-deployment",
                category: "Development",
                categoryColor: "bg-blue-900/50 text-blue-300 border-blue-800",
                date: "May 13, 2025",
                title: "From Code to Live Site in Minutes: The GitHub Deployment Revolution",
                description: "Modern deployment shouldn't be complicated. Explore how GitHub Actions automates your workflow and eliminates deployment headaches forever.",
              },
              {
                id: 4,
                slug: "tech-stack-guide",
                category: "Development",
                categoryColor: "bg-blue-900/50 text-blue-300 border-blue-800",
                date: "May 14, 2025",
                title: "Choosing Your Weapons: The Ultimate Tech Stack Decision Guide",
                description: "React or Vue? SQL or NoSQL? Make informed decisions that set your project up for long-term success with our comprehensive framework.",
              },
              {
                id: 5,
                slug: "responsive-design",
                category: "Design",
                categoryColor: "bg-green-900/50 text-green-300 border-green-800",
                date: "May 15, 2025",
                title: "Mobile-First Design Isn't Optional Anymore: A Modern Approach",
                description: "With mobile traffic dominating, learn the essential principles and practical techniques for creating truly responsive experiences.",
              },
              {
                id: 6,
                slug: "performance-optimization",
                category: "Development",
                categoryColor: "bg-blue-900/50 text-blue-300 border-blue-800",
                date: "May 16, 2025",
                title: "The Need for Speed: Proven Tactics to Supercharge Your Website Performance",
                description: "Every millisecond matters. Discover battle-tested optimization strategies that reduce load times and boost user satisfaction.",
              },
            ].map((article) => (
              <motion.div key={article.id} variants={item}>
                <Card className="border-gray-700 bg-gray-900 hover:shadow-md hover:shadow-cyan-500/5 transition-shadow overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span className={`${article.categoryColor} px-2 py-1 rounded-full text-xs font-medium border`}>
                        {article.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white">{article.title}</CardTitle>
                    <CardDescription className="text-gray-400">{article.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
