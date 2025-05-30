import TechShowcase from "@/components/tech-showcase"

export default function TechStackPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Technology</span>{" "}
            Stack
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions for our clients.
          </p>
        </div>

        <TechShowcase />
      </div>
    </div>
  )
}
