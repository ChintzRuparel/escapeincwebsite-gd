import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CommandPalette from "@/components/command-palette"
import { Toaster } from "@/components/ui/toaster"
import { CommandMenuProvider } from "@/components/command-menu-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Escape Inc. | Full-Stack Web Development",
  description:
    "Escape Inc. specializes in robust, scalable, and user-centric web applications, delivering exceptional digital experiences tailored to clients' needs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-mono antialiased bg-gray-900 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CommandMenuProvider>
            <div className="flex min-h-screen flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
              <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl z-0"></div>
              <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl z-0"></div>
              <Header />
              <main className="flex-1 relative z-10">{children}</main>
              <Footer />
              <CommandPalette />
              <Toaster />
            </div>
          </CommandMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
