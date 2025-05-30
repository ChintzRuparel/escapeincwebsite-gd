import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Users,
  UserCheck,
  Copyright,
  ShieldX,
  AlertTriangle,
  FileX,
  RefreshCw,
  Scale,
  Mail,
} from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  const sections = [
    {
      id: "1",
      title: "Acceptance of Terms",
      icon: FileText,
      content:
        "By accessing or using our website, you agree to be bound by these Terms. If you do not agree, do not use our services.",
    },
    {
      id: "2",
      title: "Use of Our Services",
      icon: Users,
      content: [
        "You must be at least 13 years old to use our site.",
        "You agree to use the site only for lawful purposes.",
        "You may not copy, distribute, modify, or use any content or code without permission.",
      ],
    },
    {
      id: "3",
      title: "User Accounts",
      icon: UserCheck,
      content: "If you register for an account:",
      subItems: [
        "You are responsible for maintaining its confidentiality.",
        "You are liable for any activity that occurs under your login credentials.",
        "We reserve the right to terminate accounts that violate our policies.",
      ],
    },
    {
      id: "4",
      title: "Intellectual Property",
      icon: Copyright,
      content:
        "All content, branding, source code, and design elements are the property of Escape Inc unless otherwise stated. Unauthorized use is strictly prohibited.",
    },
    {
      id: "5",
      title: "Prohibited Activities",
      icon: ShieldX,
      content: "You agree not to:",
      subItems: [
        "Interfere with the operation of our website",
        "Attempt to gain unauthorized access to our systems",
        "Use our services to transmit malicious software or spam",
      ],
    },
    {
      id: "6",
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: "We are not liable for:",
      subItems: [
        "Any indirect, incidental, or consequential damages",
        "Data loss or system outages",
        "Errors or inaccuracies in content",
      ],
    },
    {
      id: "7",
      title: "Disclaimers",
      icon: FileX,
      content:
        'All content is provided "as is." We do not guarantee the site will always be available, secure, or error-free.',
    },
    {
      id: "8",
      title: "Modifications",
      icon: RefreshCw,
      content:
        "We reserve the right to update or modify these Terms at any time. Your continued use constitutes acceptance of the revised Terms.",
    },
    {
      id: "9",
      title: "Governing Law",
      icon: Scale,
      content:
        "These Terms shall be governed by and construed under the laws of Mumbai, India, without regard to conflicts of law.",
    },
    {
      id: "10",
      title: "Contact",
      icon: Mail,
      content: (
        <span>
          For questions, reach out to us at{" "}
          <a href="mailto:esc.inc.services@gmail.com" className="text-cyan-400 hover:text-cyan-300 underline font-mono">
            esc.inc.services@gmail.com
          </a>
        </span>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-lg mb-6">
            <FileText className="h-8 w-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-cyan-400">{"// "}</span>Terms of Service
          </h1>
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700">
            <span className="text-gray-400 font-mono text-sm">Effective Date:</span>
            <span className="text-cyan-400 font-mono text-sm ml-2">January 2025</span>
          </div>
          <p className="text-gray-300 mt-6 text-lg font-mono max-w-3xl mx-auto">
            Welcome to Escape Inc! These Terms of Service govern your use of our website and any products, services, or
            features we provide.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <Card
                  key={section.id}
                  className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-cyan-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 font-mono text-cyan-400">
                          {section.id}. {section.title}
                        </h3>
                        <div className="text-gray-300 font-mono text-sm leading-relaxed">
                          {Array.isArray(section.content) ? (
                            <ul className="space-y-2">
                              {section.content.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-cyan-400 mr-2">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mb-3">{section.content}</p>
                          )}

                          {section.subItems && (
                            <ul className="space-y-2 mt-3 ml-4">
                              {section.subItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-cyan-400 mr-2">→</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-lg mb-6">
                <Mail className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-cyan-400">{"// "}Questions About These Terms?</h3>
              <p className="text-gray-300 mb-6 font-mono">
                If you have any questions or concerns about our Terms of Service, we're here to help.
              </p>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white font-mono">
                <Link href="/enquiry">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
