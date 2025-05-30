"use client"

import { ArrowRight, Globe, Layers, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import TechnologiesSection from "@/components/technologies-section"

export default function Home() {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <div className="flex flex-col bg-gray-900">
      <HeroSection />

      {/* About Section */}
      <section className="py-20 px-4 md:px-6 relative bg-gray-900" ref={aboutRef}>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                // About
              </span>{" "}
              Escape Inc.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              A full-stack web development company specializing in robust, scalable, and user-centric web applications.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate={aboutInView ? "show" : "hidden"}
          >
            <motion.div variants={item}>
              <Card className="card-tech h-full">
                <CardHeader className="pb-2">
                  <Globe className="h-10 w-10 text-cyan-400 mb-2" />
                  <CardTitle className="text-white">Web Solutions</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 font-mono text-sm">
                  <p>
                    Delivering exceptional digital experiences tailored to clients' needs, enhancing online presence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-tech h-full">
                <CardHeader className="pb-2">
                  <Layers className="h-10 w-10 text-cyan-400 mb-2" />
                  <CardTitle className="text-white">Scalable Architecture</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 font-mono text-sm">
                  <p>Building robust applications that grow with your business and adapt to changing requirements.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-tech h-full">
                <CardHeader className="pb-2">
                  <Zap className="h-10 w-10 text-cyan-400 mb-2" />
                  <CardTitle className="text-white">Fast Deployment</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 font-mono text-sm">
                  <p>Quick website deployment with GitHub integration, perfect for businesses of all sizes.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 md:px-6 relative bg-gray-900" ref={techRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                // Technologies
              </span>{" "}
              We Use
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              We leverage cutting-edge technologies to build modern, efficient, and scalable web applications.
            </p>
          </motion.div>

          <TechnologiesSection />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 relative bg-gray-900" ref={servicesRef}>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">// Our</span>{" "}
              Services
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Comprehensive web development solutions tailored to your specific needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate={servicesInView ? "show" : "hidden"}
          >
            <motion.div variants={item}>
              <Card className="card-tech overflow-hidden h-full">
                <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <CardHeader>
                  <CardTitle className="text-white">Static Website Deployment</CardTitle>
                  <CardDescription className="text-gray-400 font-mono">With 3-year domain support</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300 font-mono text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0" />
                      <span>Ideal for small businesses & portfolios</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0" />
                      <span>Highly cost-effective solution</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0" />
                      <span>Quick deployment timeframe</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/enquiry" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none font-mono">
                      Get a Quote
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-tech overflow-hidden h-full">
                <div className="h-1 bg-gradient-to-r from-green-500 to-teal-500"></div>
                <CardHeader>
                  <CardTitle className="text-white">E-commerce Solutions</CardTitle>
                  <CardDescription className="text-gray-400 font-mono">Online store development</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300 font-mono text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-400 mr-2 shrink-0" />
                      <span>Perfect for transitioning to e-commerce</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-400 mr-2 shrink-0" />
                      <span>Inventory & payment integration</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-400 mr-2 shrink-0" />
                      <span>First-rate customer support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/enquiry" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white border-none font-mono">
                      Get a Quote
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-tech overflow-hidden h-full">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardHeader>
                  <CardTitle className="text-white">Full Stack Development</CardTitle>
                  <CardDescription className="text-gray-400 font-mono">Complete web solution</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300 font-mono text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-purple-400 mr-2 shrink-0" />
                      <span>For tech-heavy, feature-rich platforms</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-purple-400 mr-2 shrink-0" />
                      <span>Full-stack development</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-purple-400 mr-2 shrink-0" />
                      <span>API development and integration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/enquiry" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none font-mono">
                      Get a Quote
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="group border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
