import { ArrowRight, Lock, Shield, Database, Server, UserCheck, Share, Mail } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-gray-800/50 rounded-full mb-4">
              <Lock className="h-5 w-5 text-cyan-400 mr-2" />
              <span className="text-sm font-mono text-gray-300">Data Protection</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-mono">
              Our commitment to protecting your personal data and ensuring transparency.
            </p>
            <div className="mt-6 inline-block">
              <div className="inline-flex items-center justify-center px-3 py-1 bg-gray-800 border border-gray-700 rounded-full">
                <span className="text-xs font-mono text-gray-300">Effective Date: January 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 lg:p-10">
            <div className="max-w-none font-mono">
              <p className="text-gray-300 mb-8">
                Your privacy is critically important to us. At Escape Inc., we are committed to protecting the personal
                data you share with us and ensuring transparency in how we collect, use, and safeguard it.
              </p>

              <div className="space-y-12">
                {/* Section 1 */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Database className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-cyan-400 mr-2">1.</span> Information We Collect
                      </h2>
                      <p className="text-gray-300 mb-4">We may collect the following categories of information:</p>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                          <span>
                            <strong className="text-white">Personal Information:</strong> Name, email address, contact
                            information, company details.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                          <span>
                            <strong className="text-white">Usage Data:</strong> IP address, browser type, operating
                            system, pages visited.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                          <span>
                            <strong className="text-white">Cookies:</strong> Used to personalize your experience.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Server className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-cyan-400 mr-2">2.</span> How We Use Your Information
                      </h2>
                      <p className="text-gray-300 mb-4">We use the collected data to:</p>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                          <span>Deliver and improve our website and services</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                          <span>Communicate with you</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                          <span>Conduct analytics and gather feedback</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                          <span>Protect against unauthorized behavior</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Share className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-cyan-400 mr-2">3.</span> Data Sharing
                      </h2>
                      <p className="text-gray-300 mb-4">
                        We do not sell your personal information. We may share data with trusted service providers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-cyan-400 mr-2">4.</span> Data Security
                      </h2>
                      <p className="text-gray-300">
                        We implement robust security protocols including HTTPS encryption and access control.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <UserCheck className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-cyan-400 mr-2">5.</span> Your Rights
                      </h2>
                      <p className="text-gray-300 mb-4">You may access, correct, or delete your data.</p>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-cyan-400 mr-2">6.</span> Contact Us
                      </h2>
                      <p className="text-gray-300">
                        Email us at{" "}
                        <a href="mailto:esc.inc.services@gmail.com" className="text-cyan-400 hover:underline">
                          esc.inc.services@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-gray-800/50 rounded-full mb-4">
              <Shield className="h-5 w-5 text-cyan-400 mr-2" />
              <span className="text-sm font-mono text-gray-300">Data Protection</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Have Questions About Your Data?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-mono">
              We're committed to transparency and protecting your privacy.
            </p>
            <a
              href="/enquiry"
              className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-mono rounded-md transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
