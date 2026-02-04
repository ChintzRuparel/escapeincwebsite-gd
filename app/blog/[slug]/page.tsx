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
      name: "Marketing Team",
      role: "Digital Strategy",
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
  "quick-deployment": {
    title: "Launch Fast or Get Left Behind: The Speed Advantage in Web Development",
    date: "May 11, 2025",
    readTime: "6 min read",
    author: {
      name: "Development Team",
      role: "Web Development",
      image: "/placeholder.svg?height=100&width=100",
    },
    category: "Development",
    content: `
      <p>In the fast-paced world of modern business, speed is everything. The ability to deploy your website quickly can mean the difference between capturing market share and watching competitors take the lead.</p>
      
      <h2>The Competitive Edge of Speed</h2>
      
      <p>When you deploy quickly, you gain immediate feedback from real users. This allows you to iterate and improve faster than competitors who are stuck in lengthy development cycles. Quick deployment isn't about cutting corners—it's about working smarter.</p>
      
      <h2>Modern Deployment Strategies</h2>
      
      <p>Today's deployment tools have revolutionized how we ship code. With platforms like Vercel, Netlify, and AWS Amplify, you can go from code to production in minutes, not hours or days. These platforms handle scaling, security, and performance automatically.</p>
      
      <ul>
        <li>Automated CI/CD pipelines</li>
        <li>Instant rollback capabilities</li>
        <li>Preview deployments for every change</li>
        <li>Global CDN distribution</li>
        <li>Zero-downtime deployments</li>
      </ul>
      
      <h2>Best Practices for Rapid Deployment</h2>
      
      <p>Start with a solid foundation using modern frameworks like Next.js or React. Implement continuous integration from day one. Use feature flags to deploy code safely without impacting users. Monitor everything so you can catch issues before they become problems.</p>
      
      <p>At Escape Inc., we've mastered the art of rapid deployment without sacrificing quality. Our streamlined workflows ensure your website launches quickly while maintaining the highest standards of performance and security.</p>
    `,
    codeSnippet: `// Next.js deployment configuration for Vercel
module.exports = {
  // Optimize images automatically
  images: {
    domains: ['yourdomain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Configure headers for better performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
        ],
      },
    ]
  },
}`,
    terminalCommands: [
      "npm install -g vercel",
      "vercel login",
      "vercel --prod",
    ],
    terminalResponses: [
      "Successfully installed Vercel CLI",
      "Success! Email authentication complete.",
      "Deploying to production... Done! https://your-site.vercel.app",
    ],
  },
  "social-media-tricks": {
    title: "5 Powerful Social Media Hacks That Drive Real Business Results",
    date: "May 12, 2025",
    readTime: "5 min read",
    author: {
      name: "Marketing Team",
      role: "Social Media Strategy",
      image: "/placeholder.svg?height=100&width=100",
    },
    category: "Business",
    content: `
      <p>Social media isn't just about posting pretty pictures anymore. It's a powerful business tool that, when used correctly, can drive real revenue and growth. Here are five proven strategies that work.</p>
      
      <h2>1. The Power of Consistency</h2>
      
      <p>Posting regularly is more important than posting perfectly. Your audience needs to see you consistently to remember you. Use scheduling tools to maintain a steady presence even when you're busy running your business.</p>
      
      <h2>2. Engage, Don't Broadcast</h2>
      
      <p>Social media is a conversation, not a billboard. Respond to comments, ask questions, and create content that encourages interaction. The algorithm rewards engagement, which means more visibility for your business.</p>
      
      <h2>3. Video Content Dominates</h2>
      
      <p>Video content gets 10x more engagement than static posts. You don't need expensive equipment—smartphone videos that show the real side of your business often perform best. Behind-the-scenes content, quick tips, and customer testimonials are gold.</p>
      
      <h2>4. Leverage User-Generated Content</h2>
      
      <p>Your customers are your best marketers. Encourage them to share their experiences and repost their content (with permission). This builds trust and provides you with authentic marketing material.</p>
      
      <h2>5. Track What Actually Works</h2>
      
      <p>Don't just post and hope. Use analytics to understand what content resonates with your audience. Double down on what works and cut what doesn't. Your time is valuable��spend it on strategies that deliver results.</p>
      
      <p>At Escape Inc., we help businesses develop social media strategies that actually move the needle. Contact us to learn how we can help amplify your online presence.</p>
    `,
    codeSnippet: `// Simple social media sharing component
import { Share2, Twitter, Facebook, Linkedin } from 'lucide-react'

export function SocialShare({ url, title }) {
  const shareLinks = {
    twitter: \`https://twitter.com/intent/tweet?url=\${url}&text=\${title}\`,
    facebook: \`https://www.facebook.com/sharer/sharer.php?u=\${url}\`,
    linkedin: \`https://www.linkedin.com/sharing/share-offsite/?url=\${url}\`,
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch (err) {
        console.log('Share cancelled')
      }
    }
  }

  return (
    <div className="flex gap-2">
      <button onClick={handleShare} className="p-2 hover:bg-gray-100 rounded">
        <Share2 className="w-5 h-5" />
      </button>
      <a href={shareLinks.twitter} target="_blank" rel="noopener">
        <Twitter className="w-5 h-5" />
      </a>
      <a href={shareLinks.facebook} target="_blank" rel="noopener">
        <Facebook className="w-5 h-5" />
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener">
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  )
}`,
    terminalCommands: [
      "npm install @analytics/google-analytics",
      "npm install react-share",
    ],
    terminalResponses: [
      "Added Google Analytics package",
      "Added social sharing components",
    ],
  },
  "github-deployment": {
    title: "From Code to Live Site in Minutes: The GitHub Deployment Revolution",
    date: "May 13, 2025",
    readTime: "4 min read",
    author: {
      name: "Development Team",
      role: "DevOps",
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
  "tech-stack-guide": {
    title: "Choosing Your Weapons: The Ultimate Tech Stack Decision Guide",
    date: "May 14, 2025",
    readTime: "7 min read",
    author: {
      name: "Development Team",
      role: "Technical Architecture",
      image: "/placeholder.svg?height=100&width=100",
    },
    category: "Development",
    content: `
      <p>Choosing the right tech stack is one of the most critical decisions you'll make for your project. The wrong choice can lead to technical debt, scalability issues, and frustrated developers. The right choice sets you up for long-term success.</p>
      
      <h2>Understanding Your Requirements</h2>
      
      <p>Before jumping into specific technologies, understand what you're building. Are you creating a simple content site, a complex web application, or an e-commerce platform? Your requirements should drive your technology choices, not the other way around.</p>
      
      <h2>Frontend Frameworks: Making the Right Choice</h2>
      
      <p>React remains the most popular choice for good reason—it's mature, has excellent tooling, and a massive community. Next.js builds on React to add server-side rendering and an amazing developer experience. For simpler sites, vanilla JavaScript or lightweight frameworks might be all you need.</p>
      
      <ul>
        <li>React/Next.js: Best for complex applications needing SSR and SEO</li>
        <li>Vue.js: Excellent for progressive enhancement and gentle learning curve</li>
        <li>Svelte: Fastest performance, great for speed-critical applications</li>
        <li>Vanilla JS: Perfect for simple sites without framework overhead</li>
      </ul>
      
      <h2>Backend and Database Decisions</h2>
      
      <p>For the backend, Node.js offers full-stack JavaScript and excellent performance. Pair it with Express for flexibility or Next.js API routes for simplicity. For databases, PostgreSQL is a solid choice for relational data, while MongoDB works well for flexible, document-based storage.</p>
      
      <h2>Don't Overlook Developer Experience</h2>
      
      <p>The best tech stack is one your team can actually use effectively. Consider the learning curve, available talent, and tooling quality. A slightly "worse" technology that your team masters will outperform a "better" one they struggle with.</p>
      
      <p>At Escape Inc., we have deep experience with modern tech stacks and can help you make informed decisions based on your specific needs, budget, and timeline. We'll ensure you start with a foundation that scales with your success.</p>
    `,
    codeSnippet: `// Example Next.js API route with TypeScript
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  success: boolean
  data?: any
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const items = await prisma.item.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
      })
      
      res.status(200).json({ success: true, data: items })
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch items' 
      })
    }
  } else {
    res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    })
  }
}`,
    terminalCommands: [
      "npx create-next-app@latest my-app --typescript",
      "cd my-app",
      "npm install prisma @prisma/client",
      "npx prisma init",
    ],
    terminalResponses: [
      "Creating Next.js app with TypeScript...",
      "Changed directory",
      "Installing Prisma ORM...",
      "Created prisma/schema.prisma",
    ],
  },
  "responsive-design": {
    title: "Mobile-First Design Isn't Optional Anymore: A Modern Approach",
    date: "May 15, 2025",
    readTime: "6 min read",
    author: {
      name: "Design Team",
      role: "UI/UX Design",
      image: "/placeholder.svg?height=100&width=100",
    },
    category: "Design",
    content: `
      <p>Over 60% of web traffic now comes from mobile devices. If your website doesn't work perfectly on phones and tablets, you're losing more than half your potential customers. Mobile-first design isn't just a trend—it's a business necessity.</p>
      
      <h2>What Mobile-First Really Means</h2>
      
      <p>Mobile-first means designing for the smallest screen first, then progressively enhancing for larger screens. This approach forces you to focus on what's truly important, creating cleaner, more focused experiences across all devices.</p>
      
      <h2>Essential Responsive Design Principles</h2>
      
      <p>Start with a flexible grid system that adapts to any screen size. Use relative units like percentages and rem instead of fixed pixels. Implement breakpoints thoughtfully—not every design needs five breakpoints, three is often enough.</p>
      
      <ul>
        <li>Flexible layouts using CSS Grid and Flexbox</li>
        <li>Responsive images that load appropriately for each device</li>
        <li>Touch-friendly interactive elements (minimum 44x44 pixels)</li>
        <li>Readable typography without zooming (minimum 16px)</li>
        <li>Performance optimization for slower mobile networks</li>
      </ul>
      
      <h2>Testing Across Devices</h2>
      
      <p>Browser developer tools are great for initial testing, but nothing beats testing on real devices. Check your site on both iOS and Android, in portrait and landscape orientations. Pay special attention to touch interactions and form inputs on mobile.</p>
      
      <h2>Common Mobile Design Mistakes to Avoid</h2>
      
      <p>Don't hide essential navigation in hamburger menus if you can avoid it. Don't make users pinch and zoom to interact with your content. Don't use tiny font sizes or buttons. And most importantly, don't assume users want a "dumbed down" mobile experience—they want the same information, just optimized for their device.</p>
      
      <p>At Escape Inc., every website we build is fully responsive and mobile-optimized from day one. We ensure your site looks stunning and functions flawlessly on every device your customers use.</p>
    `,
    codeSnippet: `// Responsive component with Tailwind CSS
export function ResponsiveCard({ title, description, image }) {
  return (
    <div className="
      flex flex-col
      md:flex-row
      gap-4 md:gap-6
      p-4 md:p-6
      bg-white rounded-lg shadow-md
      hover:shadow-lg transition-shadow
    ">
      <img 
        src={image} 
        alt={title}
        className="
          w-full md:w-48
          h-48 md:h-auto
          object-cover rounded
        "
      />
      
      <div className="flex-1">
        <h3 className="
          text-xl md:text-2xl
          font-bold mb-2
          text-gray-900
        ">
          {title}
        </h3>
        
        <p className="
          text-sm md:text-base
          text-gray-600
          leading-relaxed
        ">
          {description}
        </p>
        
        <button className="
          mt-4
          px-4 py-2 md:px-6 md:py-3
          bg-blue-600 hover:bg-blue-700
          text-white rounded
          text-sm md:text-base
          transition-colors
        ">
          Learn More
        </button>
      </div>
    </div>
  )
}`,
    terminalCommands: [
      "npm install tailwindcss postcss autoprefixer",
      "npx tailwindcss init -p",
    ],
    terminalResponses: [
      "Installing Tailwind CSS and dependencies...",
      "Created tailwind.config.js and postcss.config.js",
    ],
  },
  "performance-optimization": {
    title: "The Need for Speed: Proven Tactics to Supercharge Your Website Performance",
    date: "May 16, 2025",
    readTime: "8 min read",
    author: {
      name: "Development Team",
      role: "Performance Engineering",
      image: "/placeholder.svg?height=100&width=100",
    },
    category: "Development",
    content: `
      <p>A one-second delay in page load time can reduce conversions by 7%. Your website's performance directly impacts your bottom line. Let's explore proven strategies to make your site blazingly fast.</p>
      
      <h2>Understanding Web Performance</h2>
      
      <p>Performance isn't just about load time—it's about the entire user experience. Core Web Vitals (LCP, FID, CLS) measure what users actually experience. Focus on these metrics to improve both user satisfaction and search engine rankings.</p>
      
      <h2>Image Optimization: The Low-Hanging Fruit</h2>
      
      <p>Images typically account for 50-70% of page weight. Use modern formats like WebP and AVIF. Implement lazy loading so images only load when needed. Use responsive images to serve appropriately sized versions to different devices.</p>
      
      <ul>
        <li>Compress images without visible quality loss</li>
        <li>Use next-gen formats (WebP, AVIF) with fallbacks</li>
        <li>Implement lazy loading for below-the-fold images</li>
        <li>Use a CDN to serve images from locations close to users</li>
        <li>Specify width and height to prevent layout shifts</li>
      </ul>
      
      <h2>Code Optimization Strategies</h2>
      
      <p>Minimize JavaScript bundles by code splitting and tree shaking. Load critical CSS inline and defer non-critical styles. Use server-side rendering or static generation for faster initial page loads. Remove unused dependencies and analyze your bundle regularly.</p>
      
      <h2>Caching and CDN Usage</h2>
      
      <p>Implement aggressive caching strategies for static assets. Use a CDN to serve content from edge locations worldwide. Browser caching, CDN caching, and server-side caching all work together to dramatically reduce load times for returning visitors.</p>
      
      <h2>Monitoring and Continuous Improvement</h2>
      
      <p>Use tools like Lighthouse, WebPageTest, and real user monitoring to track performance over time. Performance isn't a one-time task—it requires ongoing attention as you add features and content.</p>
      
      <p>At Escape Inc., we obsess over performance. Our sites consistently score 90+ on Lighthouse and deliver exceptional user experiences that keep visitors engaged and converting.</p>
    `,
    codeSnippet: `// Next.js Image optimization with lazy loading
import Image from 'next/image'

export function OptimizedGallery({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((img, index) => (
        <div key={img.id} className="relative aspect-square">
          <Image
            src={img.url}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover rounded"
            loading={index < 3 ? 'eager' : 'lazy'}
            quality={85}
          />
        </div>
      ))}
    </div>
  )
}

// Dynamic import for heavy components
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false // Don't render on server if not needed
})

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart data={data} />
    </div>
  )
}`,
    terminalCommands: [
      "npm install sharp",
      "npx @next/bundle-analyzer",
    ],
    terminalResponses: [
      "Installing Sharp for image optimization...",
      "Opening bundle analysis in browser...",
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
