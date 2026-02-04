"use client"

import { ArrowLeft, Calendar, Clock, Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import TerminalWidget from "@/components/terminal-widget"
import CodeEditor from "@/components/code-editor"

// Sample blog data
const blogPosts = {
  "importance-of-website": {
    title: "Your Digital Storefront: Why Every Business Needs a Website in 2025",
    date: "May 15, 2025",
    readTime: "5 min read",
    author: {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "/placeholder.svg?height=100&width=100",
    },
    category: "Web Development",
    content: `
      <p>In today's digital age, having a website is no longer optional for businesses. It's a necessity. Your website serves as your digital storefront, available 24/7 to potential customers around the world.</p>
      
      <h2>Why Your Business Needs a Website</h2>
      
      <p>A professional website builds credibility and trust with your audience. It provides a platform to showcase your products or services, share your brand story, and connect with customers. Without a website, you're missing out on countless opportunities to grow your business.</p>
      
      <p>Here are some key reasons why having a website is crucial:</p>
      
      <ul>
        <li>Increased visibility and reach</li>
        <li>24/7 availability for customers</li>
        <li>Credibility and professionalism</li>
        <li>Cost-effective marketing</li>
        <li>Competitive advantage</li>
      </ul>
      
      <h2>The Cost of Not Having a Website</h2>
      
      <p>Without a website, you're essentially invisible to a large portion of your potential customer base. In an era where people turn to Google before making purchasing decisions, not having an online presence means missing out on significant business opportunities.</p>
      
      <h2>Getting Started with Your Website</h2>
      
      <p>Creating a website doesn't have to be complicated or expensive. With modern tools and platforms, businesses of all sizes can establish a professional online presence quickly and affordably.</p>
      
      <p>At Escape Inc., we specialize in creating custom websites tailored to your specific business needs. Whether you need a simple informational site or a complex e-commerce platform, we have the expertise to bring your vision to life.</p>
    `,
    codeSnippet: `// Simple responsive navigation component
import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon */}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;`,
    terminalCommands: [
      "npm create next-app my-business-site",
      "cd my-business-site",
      "npm install tailwindcss postcss autoprefixer",
      "npx tailwindcss init -p",
    ],
    terminalResponses: [
      "Creating a new Next.js app in /my-business-site...",
      "Changed directory to my-business-site",
      "Installing TailwindCSS and dependencies...",
      "Created tailwind.config.js and postcss.config.js",
    ],
  },
  "github-deployment": {
    title: "From Code to Live Site in Minutes: The GitHub Deployment Revolution",
    date: "May 13, 2025",
    readTime: "4 min read",
    author: {
      name: "Sarah Chen",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
    category: "Development",
    content: `
      <p>GitHub has evolved from a simple code repository to a powerful platform for continuous integration and deployment. In this article, we'll explore the benefits of using GitHub for your deployment workflow.</p>
      
      <h2>Streamlined Workflow</h2>
      
      <p>GitHub Actions allows you to automate your build, test, and deployment pipeline directly from your repository. This integration eliminates the need for separate CI/CD tools and provides a seamless workflow from code to production.</p>
      
      <h2>Built-in Security</h2>
      
      <p>GitHub includes several security features that help protect your code and deployment process. From dependency scanning to secret management, GitHub provides tools to ensure your applications are secure before they reach production.</p>
      
      <h2>Collaboration and Visibility</h2>
      
      <p>With GitHub, your entire team has visibility into the deployment process. Pull requests, code reviews, and deployment logs are all accessible in one place, making it easier to collaborate and troubleshoot issues.</p>
      
      <h2>Setting Up GitHub Actions for Deployment</h2>
      
      <p>Setting up GitHub Actions for deployment is straightforward. You create a workflow file in your repository that defines the steps to build, test, and deploy your application. GitHub then executes these steps whenever you push changes to your repository.</p>
      
      <p>At Escape Inc., we help businesses implement efficient deployment workflows using GitHub and other modern DevOps tools. Our expertise ensures your applications are deployed reliably and securely, allowing you to focus on building great features for your users.</p>
    `,
    codeSnippet: `# GitHub Actions workflow for deploying a Next.js app to Vercel
name: Deploy to Vercel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          working-directory: ./
          vercel-args: '--prod'`,
    terminalCommands: [
      "git init",
      "git add .",
      "git commit -m 'Initial commit'",
      "git branch -M main",
      "git remote add origin https://github.com/username/repo.git",
      "git push -u origin main",
    ],
    terminalResponses: [
      "Initialized empty Git repository in /project/.git/",
      "Changes staged for commit",
      "[main (root-commit) 0123456] Initial commit",
      "Branch 'main' set up to track remote branch 'main' from 'origin'",
      "Remote added",
      "Enumerating objects: 10, done. Counting objects: 100% (10/10), done.",
    ],
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 md:px-6 bg-gray-900">
        <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
        <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link href="/blog">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="outline" className="mb-8 border-gray-700 text-gray-300 hover:bg-gray-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span
                className={`${
                  post.category === "Web Development"
                    ? "bg-blue-900/50 text-blue-300 border-blue-800"
                    : "bg-purple-900/50 text-purple-300 border-purple-800"
                } px-2 py-1 rounded-full text-xs font-medium border`}
              >
                {post.category}
              </span>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-800 border border-gray-700">
                  <Image
                    src={post.author.image || "/placeholder.svg"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-medium text-white block">{post.author.name}</span>
                  <span className="text-sm text-gray-400">{post.author.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-6 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Share on GitHub</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-4">Code Example</h3>
                  <CodeEditor code={post.codeSnippet} language={post.codeSnippet.includes("import") ? "jsx" : "yaml"} />
                </div>
              </Card>

              <TerminalWidget
                title="Terminal Commands"
                commands={post.terminalCommands}
                responses={post.terminalResponses}
                delay={1000}
              />

              <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-md">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {Object.entries(blogPosts)
                      .filter(([key]) => key !== slug)
                      .map(([key, relatedPost]) => (
                        <li key={key}>
                          <Link
                            href={`/blog/${key}`}
                            className="text-cyan-400 hover:text-cyan-300 hover:underline block"
                          >
                            {relatedPost.title}
                          </Link>
                          <span className="text-sm text-gray-400">{relatedPost.date}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
