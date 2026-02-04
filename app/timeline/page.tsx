import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedTechIcon from "@/components/animated-tech-icon"

export default function TimelinePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">How We Work</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Our structured approach ensures the successful delivery of your project, from initial concept to final
                deployment.
              </p>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] hidden lg:block">
              <AnimatedTechIcon />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 text-white">Project Timeline</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-gray-400 px-4">
              A detailed breakdown of our development process, from initial contact to project completion.
            </p>
          </div>

          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {/* Phase 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
              <div className="md:col-span-4 flex flex-col">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black font-bold text-base md:text-lg mr-3 md:mr-4 shrink-0">
                    1
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Discovery Phase</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground text-gray-400">
                  We start by understanding your business, goals, and requirements through detailed discussions.
                </p>
              </div>
              <div className="md:col-span-8">
                <Card className="border-none shadow-sm bg-gray-800 text-white">
                  <CardContent className="p-4 md:p-5 lg:p-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Initial Consultation</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We discuss your project requirements, goals, and expectations to gain a clear understanding
                            of your needs.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Requirements Gathering</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We collect detailed information about your project, including functionality, design
                            preferences, and technical requirements.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Proposal & Quote</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            Based on the gathered requirements, we provide a detailed proposal and quote for your
                            project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
              <div className="md:col-span-4 flex flex-col">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black font-bold text-base md:text-lg mr-3 md:mr-4 shrink-0">
                    2
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Planning Phase</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground text-gray-400">
                  We create a detailed project plan, including timelines, milestones, and deliverables.
                </p>
              </div>
              <div className="md:col-span-8">
                <Card className="border-none shadow-sm bg-gray-800 text-white">
                  <CardContent className="p-4 md:p-5 lg:p-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Project Scope Definition</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We define the scope of the project, including features, functionality, and deliverables.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Timeline Creation</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We create a detailed timeline with milestones to ensure the project stays on track.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Resource Allocation</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We assign the right team members with the appropriate skills to your project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-lg mr-4">
                    3
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Design Phase</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground text-gray-400">
                  We create wireframes and design mockups to visualize the look and feel of your website.
                </p>
              </div>
              <div className="md:col-span-8">
                <Card className="border-none shadow-sm bg-gray-800 text-white">
                  <CardContent className="p-4 md:p-5 lg:p-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Wireframing</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We create wireframes to outline the structure and layout of your website.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">UI/UX Design</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We design the user interface and experience to ensure an intuitive and engaging website.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Design Approval</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We present the designs for your review and make revisions based on your feedback.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-lg mr-4">
                    4
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Development Phase</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground text-gray-400">
                  Our team works on implementing the solution according to the agreed-upon specifications.
                </p>
              </div>
              <div className="md:col-span-8">
                <Card className="border-none shadow-sm bg-gray-800 text-white">
                  <CardContent className="p-4 md:p-5 lg:p-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Frontend Development</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We build the user interface using modern frontend technologies.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Backend Development</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We implement the server-side logic, databases, and APIs as needed.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Integration</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We integrate third-party services and APIs as required by your project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-lg mr-4">
                    5
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Testing Phase</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground text-gray-400">
                  We thoroughly test the solution to ensure it meets all requirements and functions correctly.
                </p>
              </div>
              <div className="md:col-span-8">
                <Card className="border-none shadow-sm bg-gray-800 text-white">
                  <CardContent className="p-4 md:p-5 lg:p-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Functionality Testing</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We test all features and functionality to ensure they work as expected.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Compatibility Testing</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We ensure your website works across different browsers, devices, and screen sizes.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Performance Testing</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We optimize your website for speed, performance, and user experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-lg mr-4">
                    6
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Deployment Phase</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground text-gray-400">
                  We deploy the solution to your production environment and ensure everything works as expected.
                </p>
              </div>
              <div className="md:col-span-8">
                <Card className="border-none shadow-sm bg-gray-800 text-white">
                  <CardContent className="p-4 md:p-5 lg:p-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Deployment Preparation</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We prepare your website for deployment, including server configuration and domain setup.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Go-Live</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We deploy your website to the production environment and make it accessible to users.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Post-Deployment Testing</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We perform final tests to ensure everything works correctly in the production environment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phase 7 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-lg mr-4">
                    7
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Support Phase</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground text-gray-400">
                  We provide ongoing support and maintenance to ensure your website continues to run smoothly.
                </p>
              </div>
              <div className="md:col-span-8">
                <Card className="border-none shadow-sm bg-gray-800 text-white">
                  <CardContent className="p-4 md:p-5 lg:p-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Training</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We provide training on how to use and maintain your website.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Ongoing Support</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We offer ongoing support to address any issues or questions that may arise.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Maintenance</h4>
                          <p className="text-xs md:text-sm text-muted-foreground text-gray-400">
                            We provide regular maintenance to keep your website secure, up-to-date, and running
                            smoothly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to start your project?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and how Escape Inc. can help bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
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
