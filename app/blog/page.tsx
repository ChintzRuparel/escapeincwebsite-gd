const BlogPage = () => {
  // Sample blog posts data (replace with your actual data source)
  const blogPosts = [
    {
      title: "The Future of E-commerce Solutions",
      tags: ["E-commerce Solutions", "Technology", "Innovation"],
      content:
        "Explore the latest trends and innovations in E-commerce Solutions. Learn how these platforms are transforming the online retail landscape.",
    },
    {
      title: "Choosing the Right E-commerce Solutions for Your Business",
      tags: ["E-commerce Solutions", "Business", "Strategy"],
      content:
        "A comprehensive guide to selecting the best E-commerce Solutions for your specific business needs. Consider factors like scalability, features, and cost.",
    },
    {
      title: "Optimizing Your E-commerce Solutions for Maximum Conversions",
      tags: ["E-commerce Solutions", "Marketing", "Optimization"],
      content:
        "Discover proven strategies to optimize your E-commerce Solutions and increase your conversion rates. Implement techniques like A/B testing and personalized experiences.",
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
