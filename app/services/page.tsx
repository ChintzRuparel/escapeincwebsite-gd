import type { Metadata } from "next"
import { FaCode, FaShoppingCart, FaServer } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Services - My Portfolio",
  description: "Explore the services I offer, including web development, e-commerce solutions, and more.",
}

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Static Website Deployment */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <FaCode className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Static Website Deployment</h2>
          <p className="text-gray-700 mb-4">We offer fast and reliable static website deployment services.</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Fast and reliable deployment
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Optimized for performance
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Secure and scalable infrastructure
            </li>
          </ul>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>

        {/* E-commerce Solutions */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <FaShoppingCart className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">E-commerce Solutions</h2>
          <p className="text-gray-700 mb-4">Online store development with payments solution and sales analysis.</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Custom storefront design
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Secure payment gateway integration
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Inventory management system
            </li>
          </ul>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>

        {/* Full Stack Development */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <FaServer className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Full Stack Development</h2>
          <p className="text-gray-700 mb-4">End-to-end web application development from front-end to back-end.</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Front-end development with React
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Back-end development with Node.js
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              Database design and management
            </li>
          </ul>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
