const AboutPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="/images/about-us.jpg" // Replace with your actual image path
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to provide innovative and reliable E-commerce Solutions to businesses of all sizes. We strive
            to empower our clients to succeed in the digital marketplace by offering cutting-edge technology and
            exceptional customer support.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            We envision a future where every business has access to the tools and resources they need to thrive online.
            We are committed to being a leader in the e-commerce industry, constantly pushing the boundaries of what's
            possible.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Integrity</li>
            <li>Collaboration</li>
            <li>Excellence</li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
        <p className="text-gray-700">
          We are a team of passionate and experienced professionals dedicated to helping our clients achieve their
          e-commerce goals. Our team includes developers, designers, marketers, and customer support specialists, all
          working together to provide a comprehensive solution.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
