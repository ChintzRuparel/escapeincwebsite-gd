import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800 bg-gray-900/80 backdrop-blur-md text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <span className="text-xl font-bold text-white">
                  Escape <span className="text-cyan-400">Inc</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 font-mono text-sm">
              A full-stack web development company specializing in robust, scalable, and user-centric web applications.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/escape.innovate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/escape-inc-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/orgs/Escape-Inc/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-mono font-semibold mb-4 text-cyan-400">// Company</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono font-semibold mb-4 text-cyan-400">// Services</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Static Website
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Full Stack Website
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-mono">
            &copy; {new Date().getFullYear()} Escape Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-mono"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-mono"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-mono"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
