"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Fashion E-Commerce Automation",
      description:
        "Automated inventory, order processing, and customer communication for a 500K+ monthly revenue store",
      result: "45% faster order processing",
      image: "/ecommerce-fashion-store-dashboard.jpg",
    },
    {
      id: 2,
      title: "SaaS Analytics Platform",
      description: "Built a complete analytics platform with real-time dashboards and AI-powered insights",
      result: "10K+ active users",
      image: "/analytics-dashboard.png",
    },
    {
      id: 3,
      title: "Manufacturing ERP System",
      description: "Developed smart business system for production management and supply chain optimization",
      result: "60% productivity increase",
      image: "/manufacturing-production-floor-management-system.jpg",
    },
  ]

  return (
    <section className="w-full py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our most impactful projects that deliver real business results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Result: {project.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
