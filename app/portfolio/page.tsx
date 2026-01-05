"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Automation for Fashion Retail",
    client: "StyleHub Fashion",
    service: "AI & Workflow Automation",
    challenge: "Manual order processing causing delays and customer dissatisfaction",
    solution:
      "Implemented n8n-based workflow to automate order processing, inventory management, and customer notifications",
    results: [
      "65% reduction in order processing time",
      "40% decrease in human errors",
      "24/7 customer support via AI chatbot",
    ],
    image: "/fashion-ecommerce-automation.jpg",
    tags: ["n8n", "OpenAI", "Automation", "E-commerce"],
  },
  {
    id: 2,
    title: "AI-Powered SaaS Platform Launch",
    client: "DataViz Pro",
    service: "AI-Powered Website Design & Development",
    challenge: "Needed modern, scalable SaaS platform with real-time analytics and AI insights",
    solution:
      "Built Next.js application with React frontend, Node.js backend, integrated with OpenAI for intelligent analytics",
    results: [
      "150+ active users in first month",
      "Mobile-responsive design achieving 95+ Lighthouse score",
      "Implemented real-time data synchronization",
    ],
    image: "/saas-analytics-platform.jpg",
    tags: ["Next.js", "React", "AI Integration", "SaaS"],
  },
  {
    id: 3,
    title: "Smart Business System for Manufacturing",
    client: "TechManufacture Corp",
    service: "Smart Business Systems Development",
    challenge: "Complex inventory, production, and supply chain management across multiple facilities",
    solution:
      "Developed comprehensive ERP system with PostgreSQL database, real-time dashboards, and predictive analytics",
    results: [
      "60% improvement in operational efficiency",
      "Real-time inventory visibility across 5 facilities",
      "$500K annual cost savings",
    ],
    image: "/manufacturing-erp-system.jpg",
    tags: ["ERP", "PostgreSQL", "Analytics", "Business Systems"],
  },
  {
    id: 4,
    title: "Professional Development Training Program",
    client: "TechStartups Accelerator",
    service: "Training & Mentorship",
    challenge: "Need to train 200+ entrepreneurs on AI automation and modern development",
    solution: "Created comprehensive YouTube course series, live mentorship sessions, and interactive Skool community",
    results: ["200+ students trained", "92% completion rate", "15+ launched automation businesses"],
    image: "/training-education-program.jpg",
    tags: ["Training", "Mentorship", "Content Creation", "Community"],
  },
  {
    id: 5,
    title: "Voice AI Automation for Customer Service",
    client: "TeleComm Solutions",
    service: "AI & Workflow Automation",
    challenge: "High volume of customer inquiries causing long wait times",
    solution: "Integrated Vapi voice AI with Twilio for intelligent voice routing and automated response system",
    results: [
      "90% reduction in hold time",
      "Handles 500+ calls daily automatically",
      "35% cost reduction in support team",
    ],
    image: "/voice-ai-customer-service.jpg",
    tags: ["Voice AI", "Vapi", "Twilio", "Customer Service"],
  },
  {
    id: 6,
    title: "Website Redesign with AI Personalization",
    client: "E-Learning Academy",
    service: "AI-Powered Website Design & Development",
    challenge: "Outdated website with low engagement and conversion rates",
    solution: "Complete redesign with Next.js, AI-powered course recommendations, and personalized user journeys",
    results: [
      "85% increase in time on site",
      "42% increase in course enrollments",
      "3.2x improvement in conversion rate",
    ],
    image: "/elearning-website-redesign.jpg",
    tags: ["Web Design", "AI Personalization", "Conversion Optimization"],
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Portfolio & Case Studies</h1>
          <p className="text-lg md:text-xl text-blue-100 text-balance max-w-2xl">
            Explore real-world projects where we transformed businesses through technology, automation, and innovation.
            See the impact we've made.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {study.service}
                    </span>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">Client: {study.client}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Results</h4>
                    <ul className="text-sm space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-blue-600 font-bold mt-0.5">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <p className="text-muted-foreground">Client Revenue Impact</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Let's discuss how we can create a similar success story for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
