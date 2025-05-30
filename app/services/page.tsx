import { ArrowRight, CheckCircle, Code, Database, Globe, Layers, Server, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeEditor from "@/components/code-editor"
import AnimatedStaticWebsite from "@/components/animated-static-website"
import AnimatedFullstack from "@/components/animated-fullstack"
import AnimatedTechIcon from "@/components/animated-tech-icon"

export default function ServicesPage() {
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Escape Inc - Web Solutions</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="hero">
    <nav class="navbar">
      <div class="logo">Escape Inc</div>
      <ul class="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div class="hero-content">
      <h1>Crafting Tomorrow's Web</h1>
      <p>Full-stack solutions for modern businesses</p>
      <button class="cta-button">Get Started</button>
    </div>
  </header>
  
  <section id="services" class="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="service-grid">
        <div class="service-card">
          <h3>Static Websites</h3>
          <p>Fast, secure, and cost-effective</p>
        </div>
        <div class="service-card">
          <h3>E-commerce</h3>
          <p>Shopify-powered online stores</p>
        </div>
        <div class="service-card">
          <h3>Full Stack</h3>
          <p>Complex web applications</p>
        </div>
      </div>
    </div>
  </section>
  
  <script src="script.js"></script>
</body>
</html>`

  return (
    <div className="flex flex-col bg-gray-900 text-white">
      {/* Hero Section - Merged with page background */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Crafting tomorrow's web</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Services</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Comprehensive web development solutions tailored to your specific needs, helping your business thrive in
                the digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                  <span className="text-sm font-medium text-gray-300">⚡ 99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-gray-300">🚀 &lt;50ms Response Time</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-300">🔒 Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span className="text-sm font-medium text-gray-300">☁️ Cloud Native</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-800">
              <CodeEditor code={htmlCode} language="html" filename="index.html" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Models Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Service Models</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service model that best fits your business needs and goals.
            </p>
          </div>

          <Tabs defaultValue="static" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger value="static" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
                Static Website
              </TabsTrigger>
              <TabsTrigger value="shopify" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
                Shopify Store
              </TabsTrigger>
              <TabsTrigger value="fullstack" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
                Full Stack Website
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="static"
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Static Website Deployment</h3>
                  <p className="text-gray-300 mb-6">
                    Perfect for small businesses, portfolios, and informational sites without complex backend needs. Our
                    static website deployment includes 3-year domain support.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Highly cost-effective solution</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Quick deployment timeframe</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Responsive design for all devices</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">SEO optimization included</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Full support by Escape Inc.</p>
                    </div>
                  </div>
                  <div>
                    <Link href="/enquiry">
                      <Button className="bg-cyan-600 hover:bg-cyan-700">Get a Quote</Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-700">
                  <AnimatedStaticWebsite />
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="shopify"
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Shopify-Based Online Store</h3>
                  <p className="text-gray-300 mb-6">
                    Perfect for entrepreneurs and SMBs transitioning to e-commerce. Our Shopify-based solution converts
                    your physical store/inventory into a fully functional online shop.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Shopify-powered hosting</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Inventory management system</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Payment gateway integration</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Product catalog setup</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 shrink-0" />
                      <p className="text-gray-300">First-rate customer support</p>
                    </div>
                  </div>
                  <div>
                    <Link href="/enquiry">
                      <Button className="bg-purple-600 hover:bg-purple-700">Get a Quote</Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-700">
                  <AnimatedTechIcon />
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="fullstack"
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Backend Full Stack Website</h3>
                  <p className="text-gray-300 mb-6">
                    Ideal for tech-heavy, feature-rich platforms and custom internal/external tools that require complex
                    functionality and robust backend systems.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Full-stack development</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Heavy backend capabilities</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Server-side development</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">Database design and implementation</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 shrink-0" />
                      <p className="text-gray-300">API development and integration</p>
                    </div>
                  </div>
                  <div>
                    <Link href="/enquiry">
                      <Button className="bg-cyan-600 hover:bg-cyan-700">Get a Quote</Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-700">
                  <AnimatedFullstack />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Additional Services</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond our core service models, we offer a range of specialized services to enhance your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-800/50 transition-all">
              <CardHeader className="pb-2">
                <Globe className="h-10 w-10 text-cyan-500 mb-2" />
                <CardTitle className="text-white">SEO Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Improve your website's visibility in search engines and drive organic traffic to your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-800/50 transition-all">
              <CardHeader className="pb-2">
                <Layers className="h-10 w-10 text-purple-500 mb-2" />
                <CardTitle className="text-white">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Create intuitive, engaging, and user-friendly interfaces that enhance the user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-800/50 transition-all">
              <CardHeader className="pb-2">
                <Database className="h-10 w-10 text-purple-500 mb-2" />
                <CardTitle className="text-white">Database Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Design and implement efficient, scalable, and secure database systems for your applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-800/50 transition-all">
              <CardHeader className="pb-2">
                <Server className="h-10 w-10 text-cyan-500 mb-2" />
                <CardTitle className="text-white">API Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Build robust APIs that enable seamless integration between your applications and third-party services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-800/50 transition-all">
              <CardHeader className="pb-2">
                <ShoppingBag className="h-10 w-10 text-purple-500 mb-2" />
                <CardTitle className="text-white">E-commerce Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Integrate e-commerce functionality into your existing website or build a new online store from
                  scratch.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-800/50 transition-all">
              <CardHeader className="pb-2">
                <Code className="h-10 w-10 text-cyan-500 mb-2" />
                <CardTitle className="text-white">Custom Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Develop custom solutions tailored to your specific business needs and requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Process</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure the successful delivery of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-900/50 text-cyan-400 font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Discovery</h3>
              <p className="text-gray-300">
                We start by understanding your business, goals, and requirements through detailed discussions.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/50 text-purple-400 font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Planning</h3>
              <p className="text-gray-300">
                We create a detailed project plan, including timelines, milestones, and deliverables.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-900/50 text-cyan-400 font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Development</h3>
              <p className="text-gray-300">
                Our team works on implementing the solution according to the agreed-upon specifications.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/50 text-purple-400 font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Delivery</h3>
              <p className="text-gray-300">
                We deploy the solution, provide training, and ensure everything works as expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to get started?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and how Escape Inc. can help bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white border-0"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
