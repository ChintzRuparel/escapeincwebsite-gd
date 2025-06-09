const BlogPage = () => {
  // Sample blog posts data (replace with your actual data source)
  const blogPosts = [
    {
      title: "The Future of Scalable E-commerce Platforms",
      tags: ["Scalable E-commerce Platforms", "Technology", "Innovation"],
      content:
        "Explore the latest trends and innovations in Scalable E-commerce Platforms. Learn how these platforms are transforming the online retail landscape.",
    },
    {
      title: "Choosing the Right Scalable E-commerce Platforms for Your Business",
      tags: ["Scalable E-commerce Platforms", "Business", "Strategy"],
      content:
        "A comprehensive guide to selecting the best Scalable E-commerce Platforms for your specific business needs. Consider factors like scalability, features, and cost.",
    },
    {
      title: "Optimizing Your Scalable E-commerce Platforms for Maximum Conversions",
      tags: ["Scalable E-commerce Platforms", "Marketing", "Optimization"],
      content:
        "Discover proven strategies to optimize your Scalable E-commerce Platforms and increase your conversion rates. Implement techniques like A/B testing and personalized experiences.",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <div className="mb-2">
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
