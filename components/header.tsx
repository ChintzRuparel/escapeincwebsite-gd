"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Terminal } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useCommandMenu } from "@/components/command-menu-provider"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { setOpen } = useCommandMenu()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Timeline", href: "/timeline" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/enquiry" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center">
                <Terminal className="h-6 w-6 text-cyan-400 mr-2" />
                <span className="text-xl font-bold text-white">
                  Escape <span className="text-cyan-400">Inc</span>
                </span>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden md:flex gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative group ${
                    pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
                      ? "text-white bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                  {(pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="hidden md:flex items-center h-9 rounded-md border border-gray-700 bg-gray-800 px-3 text-sm text-gray-300 transition-colors hover:border-gray-600"
          >
            <span>Command Menu</span>
            <div className="ml-3 flex items-center gap-1 text-xs text-gray-500">
              <kbd className="rounded bg-gray-700 px-1.5 py-0.5">⌘</kbd>
              <kbd className="rounded bg-gray-700 px-1.5 py-0.5">K</kbd>
            </div>
          </button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-gray-700 text-gray-300">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-gray-800">
              <div className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => setOpen(true)}
                  className="flex items-center h-9 rounded-md border border-gray-700 bg-gray-800 px-3 text-sm text-gray-300 transition-colors hover:border-gray-600"
                >
                  <span>Command Menu</span>
                  <div className="ml-3 flex items-center gap-1 text-xs text-gray-500">
                    <kbd className="rounded bg-gray-700 px-1.5 py-0.5">⌘</kbd>
                    <kbd className="rounded bg-gray-700 px-1.5 py-0.5">K</kbd>
                  </div>
                </button>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-mono transition-colors hover:text-cyan-400 ${
                      pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
                        ? "text-cyan-400"
                        : "text-gray-300"
                    }`}
                  >
                    {`> ${item.name}`}
                  </Link>
                ))}

                <Link href="/enquiry" className="mt-4">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none">
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
