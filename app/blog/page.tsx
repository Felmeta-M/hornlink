"use client"

import Link from "next/link"
import { Search, ArrowRight } from "lucide-react"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with n8n: A Complete Beginner's Guide",
    excerpt:
      "Learn how to build your first automation workflow with n8n without coding. Perfect for business owners and entrepreneurs.",
    category: "Automation",
    author: "Ahmed Hassan",
    date: "2025-03-15",
    readTime: 8,
    image: "/n8n-automation-guide.jpg",
    slug: "getting-started-n8n",
  },
  {
    id: 2,
    title: "Top 10 AI Automation Use Cases for Small Businesses",
    excerpt:
      "Discover how AI automation can increase productivity by 60% or more. Real examples from companies like yours.",
    category: "AI",
    author: "Sarah Williams",
    date: "2025-03-12",
    readTime: 12,
    image: "/ai-use-cases-business.jpg",
    slug: "ai-automation-use-cases",
  },
  {
    id: 3,
    title: "Next.js 16: What's New and How to Build Modern Web Apps",
    excerpt:
      "Explore the latest features in Next.js 16, including React Server Components, improved routing, and performance enhancements.",
    category: "Web Development",
    author: "John Developer",
    date: "2025-03-10",
    readTime: 15,
    image: "/nextjs-web-development.jpg",
    slug: "nextjs-16-guide",
  },
  {
    id: 4,
    title: "Building AI Agents: From Theory to Production",
    excerpt:
      "A deep dive into creating intelligent AI agents using OpenAI APIs and best practices for enterprise deployment.",
    category: "AI",
    author: "Ahmed Hassan",
    date: "2025-03-08",
    readTime: 18,
    image: "/ai-agents-production.jpg",
    slug: "building-ai-agents",
  },
  {
    id: 5,
    title: "Supabase vs Firebase: Choosing the Right Backend for Your App",
    excerpt: "Compare two popular backend-as-a-service platforms. Which one is right for your project? Let's find out.",
    category: "Backend",
    author: "Tech Mentor",
    date: "2025-03-05",
    readTime: 10,
    image: "/supabase-firebase-comparison.jpg",
    slug: "supabase-vs-firebase",
  },
  {
    id: 6,
    title: "Voice AI: The Future of Customer Service Automation",
    excerpt: "How companies are using voice AI to handle customer inquiries 24/7 while reducing costs by 40%.",
    category: "Automation",
    author: "Sarah Williams",
    date: "2025-03-01",
    readTime: 14,
    image: "/voice-ai-customer-service.jpg",
    slug: "voice-ai-customer-service",
  },
  {
    id: 7,
    title: "Database Design Best Practices for Scalable Applications",
    excerpt:
      "Learn how to design databases that scale with your business. Real-world examples and optimization techniques.",
    category: "Backend",
    author: "John Developer",
    date: "2025-02-28",
    readTime: 16,
    image: "/database-design-scalable.jpg",
    slug: "database-design-best-practices",
  },
  {
    id: 8,
    title: "React Server Components: A Game Changer for Web Development",
    excerpt:
      "Understand how React Server Components simplify development and improve performance for modern web applications.",
    category: "Web Development",
    author: "Tech Mentor",
    date: "2025-02-25",
    readTime: 12,
    image: "/react-server-components.jpg",
    slug: "react-server-components",
  },
]

const categories = ["All", "Automation", "AI", "Web Development", "Backend"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Hornlink Blog</h1>
          <p className="text-lg md:text-xl text-blue-100 text-balance max-w-2xl">
            Insights, tutorials, and thought leadership on AI, automation, web development, and digital transformation.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-card border-b border-border sticky top-16 z-40 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-xs text-muted-foreground">
                          {post.author} • {new Date(post.date).toLocaleDateString()}
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-blue-100 mb-8 text-balance">
            Get the latest insights, tutorials, and updates delivered to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
