"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Home, Info, LayoutDashboard, Timer, PanelRight, Mail, Search } from "lucide-react"
import { useCommandMenu } from "@/components/command-menu-provider"

interface NavigationItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
  description?: string
}

const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="h-4 w-4" />,
    href: "/",
    description: "Go to homepage",
  },
  {
    id: "about",
    label: "About",
    icon: <Info className="h-4 w-4" />,
    href: "/about",
    description: "Learn more about us",
  },
  {
    id: "services",
    label: "Services",
    icon: <LayoutDashboard className="h-4 w-4" />,
    href: "/services",
    description: "View our services",
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: <Timer className="h-4 w-4" />,
    href: "/timeline",
    description: "View our timeline",
  },
  {
    id: "blog",
    label: "Blog",
    icon: <PanelRight className="h-4 w-4" />,
    href: "/blog",
    description: "Read our blog posts",
  },
  {
    id: "contact",
    label: "Contact",
    icon: <Mail className="h-4 w-4" />,
    href: "/enquiry",
    description: "Get in touch with us",
  },
  {
    id: "ecommerce",
    label: "E-commerce Solutions",
    icon: <LayoutDashboard className="h-4 w-4" />,
    href: "/ecommerce",
    description: "Explore our e-commerce solutions",
  },
]

export default function CommandPalette() {
  const { open, setOpen } = useCommandMenu()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredItems = navigationItems.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleNavigation = (href: string) => {
    console.log("Navigating to:", href) // Debug log
    setOpen(false)
    setSearchQuery("")
    setSelectedIndex(0)

    // Use window.location for reliable navigation
    window.location.href = href
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
        break
      case "Enter":
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          handleNavigation(filteredItems[selectedIndex].href)
        }
        break
      case "Escape":
        e.preventDefault()
        setOpen(false)
        setSearchQuery("")
        setSelectedIndex(0)
        break
    }
  }

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleGlobalKeyDown)
    return () => document.removeEventListener("keydown", handleGlobalKeyDown)
  }, [setOpen])

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setSearchQuery("")
      setSelectedIndex(0)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 max-w-lg">
        <div className="flex flex-col">
          {/* Search Input */}
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or search..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
          </div>

          {/* Navigation Items */}
          <div className="max-h-[300px] overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">No results found.</div>
            ) : (
              <div className="p-2">
                <div className="mb-2 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Navigation
                </div>
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left ${
                      index === selectedIndex
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    {item.icon}
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      {item.description && <span className="text-xs text-muted-foreground">{item.description}</span>}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t px-3 py-2 text-xs text-muted-foreground">
            Press{" "}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>{" "}
            to open • Use arrow keys to navigate • Press Enter to select
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
