import TechnologySelector from "@/components/technology-selector"

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Technology</span>{" "}
          Stack
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We leverage cutting-edge technologies to build modern, efficient, and scalable web applications. Explore our
          tech stack below.
        </p>
      </div>

      <TechnologySelector />

      <div className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Need help choosing the right technology?</h2>
        <p className="text-gray-300 mb-6">
          Our team of experts can help you select the perfect tech stack for your project based on your specific
          requirements.
        </p>
        <a
          href="/enquiry"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all"
        >
          Get Expert Advice
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  )
}

import { ArrowRight } from "lucide-react"
