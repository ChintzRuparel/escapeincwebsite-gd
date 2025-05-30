"use client"

import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-gray-800">
              <Image src="/placeholder.svg?height=400&width=600" alt="Featured Article" fill className="object-cover" />
            </div>
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
                The Importance of Having a Website for Your Business
              </h2>
              <p className="text-gray-300 mb-6">
                In today's digital age, having a website is no longer optional for businesses. It's a necessity. Learn
                why having a website is crucial for your business success and how it can help you reach more customers.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-800 border border-gray-700">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Author" fill className="object-cover" />
                  </div>
                  <span className="font-medium text-gray-300">Alex Johnson</span>
                </div>
              </div>
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
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-gray-700 bg-gray-900 hover:shadow-md hover:shadow-cyan-500/5 transition-shadow overflow-hidden">
                  <div className="relative h-48 w-full border-b border-gray-800">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Article+${i}`}
                      alt={`Article ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span
                        className={`${
                          i % 3 === 0
                            ? "bg-green-900/50 text-green-300 border-green-800"
                            : i % 3 === 1
                              ? "bg-blue-900/50 text-blue-300 border-blue-800"
                              : "bg-purple-900/50 text-purple-300 border-purple-800"
                        } px-2 py-1 rounded-full text-xs font-medium border`}
                      >
                        {i % 3 === 0 ? "Design" : i % 3 === 1 ? "Development" : "Business"}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>May {i + 10}, 2025</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white">
                      {i === 1
                        ? "Why Quick Website Deployment Matters"
                        : i === 2
                          ? "Social Media Quick Tricks for Businesses"
                          : i === 3
                            ? "The Benefits of Using GitHub for Deployment"
                            : i === 4
                              ? "Choosing the Right Tech Stack for Your Project"
                              : i === 5
                                ? "Responsive Design Best Practices"
                                : "Optimizing Website Performance"}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {i === 1
                        ? "Learn why deploying your website quickly can give you a competitive edge."
                        : i === 2
                          ? "Simple social media strategies that can boost your online presence."
                          : i === 3
                            ? "Discover the advantages of using GitHub for website deployment."
                            : i === 4
                              ? "Tips for selecting the right technologies for your web project."
                              : i === 5
                                ? "Ensure your website looks great on all devices with these tips."
                                : "Techniques to improve your website's loading speed and performance."}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-400">
                          {i % 3 === 0 ? "Sarah Chen" : i % 3 === 1 ? "Alex Johnson" : "Michael Rodriguez"}
                        </span>
                      </div>
                      <Link
                        href={`/blog/article-${i}`}
                        className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
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
