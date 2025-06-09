"use client"

import { useEffect } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Code2,
  FileCode,
  Github,
  Home,
  Info,
  LayoutDashboard,
  Mail,
  PanelRight,
  ShoppingCart,
  Timer,
} from "lucide-react"
import { useCommandMenu } from "@/components/command-menu-provider"

export default function CommandPalette() {
  const { open, setOpen } = useCommandMenu()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/"
            }}
          >
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/about"
            }}
          >
            <Info className="mr-2 h-4 w-4" />
            <span>About</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/services"
            }}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Services</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/timeline"
            }}
          >
            <Timer className="mr-2 h-4 w-4" />
            <span>Timeline</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/blog"
            }}
          >
            <PanelRight className="mr-2 h-4 w-4" />
            <span>Blog</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/enquiry"
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Services">
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/services#static"
            }}
          >
            <FileCode className="mr-2 h-4 w-4" />
            <span>Static Website</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/services#shopify"
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            <span>Shopify Store</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = "/services#fullstack"
            }}
          >
            <Code2 className="mr-2 h-4 w-4" />
            <span>Full Stack Website</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Social">
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.open("https://github.com", "_blank")
            }}
          >
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.open("https://twitter.com", "_blank")
            }}
          >
            <svg
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span>Twitter</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.open("https://linkedin.com", "_blank")
            }}
          >
            <svg
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
