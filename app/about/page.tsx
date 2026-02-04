import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Code, Database, Globe, Server, Zap, Shield, Cloud } from "lucide-react"
import TeamMember from "@/components/team-member"
import CodeEditor from "@/components/code-editor"

export default function AboutPage() {
  const aboutCode = `// About Escape Inc.
const company = {
  name: "Escape Inc.",
  founded: 2024,
  mission: "Building tomorrow's web",
  team: ["Chintan", "Esha", "Sachi"],
  
  expertise: [
    "Full-Stack Development",
    "AI Integration", 
    "Financial Technology",
    "Scalable Architecture"
  ],
  
  values: {
    innovation: true,
    quality: "enterprise-grade",
    collaboration: "global"
  }
};

export default company;`

  return (
    <div className="flex flex-col bg-gray-900">
      {/* Hero Section - Similar to home page */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm mb-4 md:mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Building the future of web
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">About Escape Inc.</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              We're a team of passionate developers, designers, and strategists dedicated to creating exceptional
              digital experiences that drive business success.
            </p>
          </div>

          {/* Stats Grid - Similar to home page */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 sm:mr-2 mb-1 sm:mb-0" />
                <span className="text-xs md:text-sm text-gray-300">99.9% Uptime</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                <Globe className="h-4 w-4 md:h-5 md:w-5 text-blue-400 sm:mr-2 mb-1 sm:mb-0" />
                <span className="text-xs md:text-sm text-gray-300">&lt;50ms Response</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-400 sm:mr-2 mb-1 sm:mb-0" />
                <span className="text-xs md:text-sm text-gray-300">Enterprise Security</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                <Cloud className="h-4 w-4 md:h-5 md:w-5 text-purple-400 sm:mr-2 mb-1 sm:mb-0" />
                <span className="text-xs md:text-sm text-gray-300">Cloud Native</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Code Snippet */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-white">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
                At Escape Inc., we're committed to enhancing online presence and helping businesses thrive in today's
                competitive digital landscape through robust, scalable, and user-centric web applications.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We believe that exceptional digital experiences are the cornerstone of business success in the modern
                world, and we're dedicated to delivering solutions that exceed expectations.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                  <p className="text-gray-300">Delivering exceptional digital experiences</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                  <p className="text-gray-300">Building robust, scalable applications</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                  <p className="text-gray-300">Enhancing online presence for businesses</p>
                </div>
              </div>
            </div>
            <div className="h-[300px] md:h-[350px] lg:h-[400px] hidden lg:block">
              <CodeEditor code={aboutCode} language="javascript" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Expertise</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in a wide range of technologies and services to deliver the best solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-tech border-gray-800 bg-gray-800/50 backdrop-blur-md hover:shadow-md hover:shadow-cyan-500/5 transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Frontend Development</h3>
                <p className="text-gray-300">
                  Creating intuitive, responsive, and engaging user interfaces with modern frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="card-tech border-gray-800 bg-gray-800/50 backdrop-blur-md hover:shadow-md hover:shadow-cyan-500/5 transition-shadow">
              <CardContent className="pt-6">
                <Database className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Backend Development</h3>
                <p className="text-gray-300">
                  Building robust server-side applications and APIs that power your digital experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="card-tech border-gray-800 bg-gray-800/50 backdrop-blur-md hover:shadow-md hover:shadow-cyan-500/5 transition-shadow">
              <CardContent className="pt-6">
                <Server className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">DevOps & Deployment</h3>
                <p className="text-gray-300">
                  Streamlining development workflows and ensuring smooth, reliable deployments.
                </p>
              </CardContent>
            </Card>

            <Card className="card-tech border-gray-800 bg-gray-800/50 backdrop-blur-md hover:shadow-md hover:shadow-cyan-500/5 transition-shadow">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">E-commerce Solutions</h3>
                <p className="text-gray-300">
                  Developing online stores and e-commerce platforms that drive sales and growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section - Updated with actual photos */}
      <section className="py-20 px-4 md:px-6 bg-gray-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Meet Our Founders</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              The visionary leaders driving innovation and excellence at Escape Inc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamMember
              name="Chintan N Ruparel"
              role="Co-Founder"
              image="/images/chintan-ruparel.jpeg"
              skills={["AI", "Finance", "Full-Stack", "Scalable Architecture"]}
              bio="Merging AI, finance, and full-stack engineering to build scalable digital solutions."
              university="New York University, New York"
            />

            <TeamMember
              name="Esha Shah"
              role="Co-Founder"
              image="/images/esha-shah.jpeg"
              skills={["Product Strategy", "UI/UX", "Business Development", "Innovation"]}
              bio="Driving product vision and user experience excellence with a focus on innovative business solutions."
              university="NMIMS University, Mumbai"
            />

            <TeamMember
              name="Sachi Shah"
              role="Co-Founder"
              image="/images/sachi-shah.png"
              skills={["System Architecture", "Data Engineering", "Cloud Infrastructure", "Performance"]}
              bio="Building robust, scalable infrastructure and optimizing system performance for enterprise-grade applications."
              university="Carnegie Mellon University, Pittsburgh"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Similar to home page */}
      <section className="py-20 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to work with us?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how Escape Inc. can help your business thrive in today's competitive digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
