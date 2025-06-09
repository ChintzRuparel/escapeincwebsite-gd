const TechnologiesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technology 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-700">
              We build interactive user interfaces with React, ensuring a seamless user experience.
            </p>
          </div>

          {/* Technology 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Node.js</h3>
            <p className="text-gray-700">
              Our backend solutions are powered by Node.js, providing scalability and performance.
            </p>
          </div>

          {/* Technology 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">E-commerce Solutions</h3>
            <p className="text-gray-700">
              We specialize in developing E-commerce Solutions that are tailored to your business needs.
            </p>
          </div>

          {/* Technology 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">GraphQL</h3>
            <p className="text-gray-700">We use GraphQL to build efficient and flexible APIs for data fetching.</p>
          </div>

          {/* Technology 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">PostgreSQL</h3>
            <p className="text-gray-700">We utilize PostgreSQL for robust and reliable data storage solutions.</p>
          </div>

          {/* Technology 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Next.js</h3>
            <p className="text-gray-700">
              We leverage Next.js for building performant and SEO-friendly web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
