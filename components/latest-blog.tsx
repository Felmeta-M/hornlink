"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LatestBlog() {
  const posts = [
    {
      id: 1,
      title: "How AI Automation is Transforming Customer Service",
      excerpt: "Discover how AI agents are revolutionizing customer interactions and reducing response times by 80%.",
      date: "Nov 25, 2025",
      category: "AI Automation",
      image: "/ai-chatbot.png",
    },
    {
      id: 2,
      title: "The Future of Web Development with AI-Powered Tools",
      excerpt:
        "Explore how AI is making web development faster, smarter, and more accessible to businesses of all sizes.",
      date: "Nov 20, 2025",
      category: "Web Development",
      image: "/web-development-ai-tools.jpg",
    },
    {
      id: 3,
      title: "Building Scalable Business Systems: A Complete Guide",
      excerpt:
        "Learn best practices for designing business systems that grow with your organization without costly redesigns.",
      date: "Nov 15, 2025",
      category: "Business Systems",
      image: "/business-system-dashboard.png",
    },
  ]

  return (
    <section className="w-full py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground">Stay updated with industry insights and best practices</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{post.category}</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
