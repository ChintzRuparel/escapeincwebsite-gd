import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturedBlogs() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Blogs</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and tips from our team of experts on web development, design, and digital strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Blog+1"
                alt="Blog 1"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  Web Development
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>May 15, 2025</span>
                </div>
              </div>
              <CardTitle className="text-xl">Importance of Having a Website</CardTitle>
              <CardDescription>
                Learn why having a website is crucial for your business success and how it can help you reach more
                customers.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/blog/importance-of-website" className="text-blue-500 hover:underline flex items-center">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Blog+2"
                alt="Blog 2"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Social Media
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>May 12, 2025</span>
                </div>
              </div>
              <CardTitle className="text-xl">Social Media Quick Tricks</CardTitle>
              <CardDescription>
                Simple social media strategies that can boost your online presence and engage with your audience.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/blog/social-media-tricks" className="text-blue-500 hover:underline flex items-center">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Blog+3"
                alt="Blog 3"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                  Development
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>May 10, 2025</span>
                </div>
              </div>
              <CardTitle className="text-xl">GitHub Deployment Benefits</CardTitle>
              <CardDescription>
                Discover the advantages of using GitHub for website deployment and how it can streamline your workflow.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/blog/github-deployment" className="text-blue-500 hover:underline flex items-center">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Blogs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
