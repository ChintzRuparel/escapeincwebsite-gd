"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Terminal, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function EnquiryPage() {
  const [formState, setFormState] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceModel: "static",
    backend: "",
    meeting: "",
    requirements: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-10 md:py-12 lg:py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">Get in Touch</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Fill out the form below to discuss your project requirements and how Escape Inc. can help bring your
              vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-md shadow-lg">
              <CardHeader className="px-4 md:px-6 pt-4 md:pt-6">
                <div className="flex items-center mb-2">
                  <Terminal className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 mr-2" />
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white">Project Enquiry Form</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base text-gray-300">
                  Please provide details about your project requirements and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
                {!isSubmitted ? (
                  <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company-name" className="text-gray-200">
                          Company Name
                        </Label>
                        <Input
                          id="company-name"
                          name="companyName"
                          placeholder="Your company name"
                          className="bg-gray-900 border-gray-700 text-gray-200 placeholder:text-gray-500"
                          value={formState.companyName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-name" className="text-gray-200">
                          Contact Name
                        </Label>
                        <Input
                          id="contact-name"
                          name="contactName"
                          placeholder="Your full name"
                          className="bg-gray-900 border-gray-700 text-gray-200 placeholder:text-gray-500"
                          value={formState.contactName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-200">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-gray-900 border-gray-700 text-gray-200 placeholder:text-gray-500"
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-200">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          className="bg-gray-900 border-gray-700 text-gray-200 placeholder:text-gray-500"
                          value={formState.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm md:text-base text-gray-200">Service Model</Label>
                      <RadioGroup
                        defaultValue="static"
                        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
                        value={formState.serviceModel}
                        onValueChange={(value) => handleSelectChange("serviceModel", value)}
                      >
                        <div className="flex items-center space-x-2 border border-gray-700 rounded-lg p-3 md:p-4 hover:bg-gray-800 cursor-pointer bg-gray-900">
                          <RadioGroupItem value="static" id="static" className="text-cyan-400" />
                          <Label htmlFor="static" className="cursor-pointer text-sm md:text-base text-gray-200">
                            Static Website
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-gray-700 rounded-lg p-3 md:p-4 hover:bg-gray-800 cursor-pointer bg-gray-900">
                          <RadioGroupItem value="shopify" id="shopify" className="text-cyan-400" />
                          <Label htmlFor="shopify" className="cursor-pointer text-sm md:text-base text-gray-200">
                            Shopify Store
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-gray-700 rounded-lg p-3 md:p-4 hover:bg-gray-800 cursor-pointer bg-gray-900">
                          <RadioGroupItem value="fullstack" id="fullstack" className="text-cyan-400" />
                          <Label htmlFor="fullstack" className="cursor-pointer text-sm md:text-base text-gray-200">
                            Full Stack Website
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="backend" className="text-sm md:text-base text-gray-200">
                          Backend Requirements
                        </Label>
                        <Select
                          value={formState.backend}
                          onValueChange={(value) => handleSelectChange("backend", value)}
                        >
                          <SelectTrigger id="backend" className="bg-gray-900 border-gray-700 text-gray-200">
                            <SelectValue placeholder="Select backend requirements" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-gray-200">
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="basic">Basic (Authentication, Simple Database)</SelectItem>
                            <SelectItem value="advanced">Advanced (Complex Database, APIs)</SelectItem>
                            <SelectItem value="custom">Custom (Specific Requirements)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="meeting" className="text-sm md:text-base text-gray-200">
                          Preferred Meeting Time
                        </Label>
                        <Select
                          value={formState.meeting}
                          onValueChange={(value) => handleSelectChange("meeting", value)}
                        >
                          <SelectTrigger id="meeting" className="bg-gray-900 border-gray-700 text-gray-200">
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-gray-200">
                            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                            <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements" className="text-sm md:text-base text-gray-200">
                        Project Requirements
                      </Label>
                      <Textarea
                        id="requirements"
                        name="requirements"
                        placeholder="Please describe your project requirements in detail..."
                        className="min-h-[120px] md:min-h-[150px] bg-gray-900 border-gray-700 text-gray-200 placeholder:text-gray-500 text-sm md:text-base"
                        value={formState.requirements}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-sm md:text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    className="flex flex-col items-center justify-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Enquiry Submitted!</h3>
                    <p className="text-gray-300 text-center max-w-md mb-6">
                      Thank you for your interest in Escape Inc. We've received your enquiry and will get back to you
                      within 24 hours.
                    </p>
                    <div className="terminal p-4 bg-gray-900 border border-gray-700 rounded-lg font-mono text-sm text-gray-300 w-full max-w-md">
                      <div className="flex items-center mb-2">
                        <Terminal className="h-4 w-4 text-cyan-400 mr-2" />
                        <span className="text-xs text-gray-400">Terminal</span>
                      </div>
                      <p>
                        <span className="text-green-400">$</span> submit-enquiry --company="
                        {formState.companyName || "Your Company"}"
                      </p>
                      <p className="text-gray-500">Processing enquiry...</p>
                      <p className="text-green-400">
                        Success! Enquiry ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
                      </p>
                      <p>
                        <span className="text-green-400">$</span> <span className="animate-pulse">▌</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
