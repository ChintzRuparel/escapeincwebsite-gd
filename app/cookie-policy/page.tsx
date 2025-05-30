import type { Metadata } from "next"
import Link from "next/link"
import { Cookie, Info, Layers, Target, ExternalLink, Settings, CheckCircle, RefreshCw, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cookie Policy | Escape Inc",
  description: "Learn about how Escape Inc uses cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6">
              <Cookie className="h-8 w-8 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-gray-400">// </span>
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-400 font-mono mb-2">Effective Date: January 2025</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
              This Cookie Policy explains how <span className="text-cyan-400">Escape Inc</span> uses cookies and similar
              technologies when you visit our website.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid gap-8">
              {/* Section 1: What Are Cookies */}
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg">
                      <Info className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold font-mono text-cyan-400">1. What Are Cookies?</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-mono">
                    Cookies are small text files stored on your device to enhance user experience and gather data about
                    usage patterns.
                  </p>
                </div>
              </div>

              {/* Section 2: Types of Cookies */}
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg">
                      <Layers className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold font-mono text-cyan-400">2. Types of Cookies We Use</h2>
                  </div>
                  <div className="space-y-4 font-mono">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies:</h3>
                      <p className="text-gray-300">Required for site functionality (e.g., login, navigation).</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Performance Cookies:</h3>
                      <p className="text-gray-300">
                        Help us understand site usage and performance (e.g., Google Analytics).
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies:</h3>
                      <p className="text-gray-300">Remember preferences and settings (e.g., language, layout).</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Advertising Cookies (if applicable):</h3>
                      <p className="text-gray-300">Serve personalized ads and track engagement.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Why We Use Cookies */}
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg">
                      <Target className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold font-mono text-cyan-400">3. Why We Use Cookies</h2>
                  </div>
                  <ul className="space-y-3 font-mono text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-cyan-400">→</span>
                      Improve site speed and performance
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-cyan-400">→</span>
                      Customize user experience
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-cyan-400">→</span>
                      Analyze visitor behavior
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-cyan-400">→</span>
                      Prevent fraud and ensure security
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Third-Party Cookies */}
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg">
                      <ExternalLink className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold font-mono text-cyan-400">4. Third-Party Cookies</h2>
                  </div>
                  <div className="space-y-4 font-mono">
                    <p className="text-gray-300">Some cookies are placed by third-party services we use, such as:</p>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-center gap-3">
                        <span className="text-cyan-400">•</span>
                        Google Analytics
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-cyan-400">•</span>
                        Stripe (for payments)
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-cyan-400">•</span>
                        Cloudflare (security and CDN)
                      </li>
                    </ul>
                    <p className="text-gray-300">
                      We do not control these cookies directly and recommend reviewing their policies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Managing Cookies */}
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg">
                      <Settings className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold font-mono text-cyan-400">5. Managing Cookies</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-mono">
                    You can manage or disable cookies through your browser settings. Disabling cookies may affect
                    certain features or functionality of our website.
                  </p>
                </div>
              </div>

              {/* Section 6: Consent */}
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold font-mono text-cyan-400">6. Consent</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-mono">
                    By continuing to browse our site, you consent to our use of cookies unless you disable them
                    manually.
                  </p>
                </div>
              </div>

              {/* Section 7: Changes to Policy */}
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg">
                      <RefreshCw className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold font-mono text-cyan-400">7. Changes to This Policy</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-mono">
                    We may update this policy to reflect changes in technology or legal requirements. Please revisit
                    periodically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)]" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6">
                  <Mail className="h-8 w-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4 font-mono">Questions About Our Cookie Policy?</h2>
                <p className="text-gray-300 mb-8 font-mono max-w-2xl mx-auto">
                  If you have any questions about how we use cookies or need clarification on any aspect of this policy,
                  we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white font-mono">
                    <Link href="/enquiry">Contact Us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 font-mono"
                  >
                    <a href="mailto:esc.inc.services@gmail.com">esc.inc.services@gmail.com</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
