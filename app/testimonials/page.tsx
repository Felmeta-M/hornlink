"use client"

import { Star, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "James Mitchell",
    company: "StyleHub Fashion",
    role: "CEO",
    image: "/business-owner-portrait.jpg",
    testimonial:
      "Hornlink transformed our order processing from 3 days to 1 hour. Their AI automation solution saved us thousands monthly. Highly recommended!",
    rating: 5,
    result: "65% faster processing",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    company: "DataViz Pro",
    role: "Founder",
    image: "/startup-founder-portrait.jpg",
    testimonial:
      "The team at Hornlink built our SaaS platform from scratch. Professional, innovative, and delivered exactly what we needed on time.",
    rating: 5,
    result: "150+ users in month one",
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "TechManufacture Corp",
    role: "Operations Director",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Their ERP system gave us real-time visibility across all facilities. The productivity improvement was immediate and measurable.",
    rating: 5,
    result: "$500K annual savings",
  },
  {
    id: 4,
    name: "Lisa Thompson",
    company: "TeleComm Solutions",
    role: "Customer Service Manager",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "The voice AI system handles 90% of our inquiries automatically. Our team is more focused on complex customer needs. Incredible ROI.",
    rating: 5,
    result: "90% reduction in hold time",
  },
  {
    id: 5,
    name: "David Park",
    company: "E-Learning Academy",
    role: "CMO",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Website redesign with AI personalization was game-changing. Our conversion rates tripled. Best investment we've made this year.",
    rating: 5,
    result: "3.2x conversion increase",
  },
  {
    id: 6,
    name: "Jessica Kumar",
    company: "RetailMax Inc",
    role: "Tech Lead",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Working with Hornlink was seamless. Their technical expertise in AI and automation is unmatched in the industry.",
    rating: 5,
    result: "85% team efficiency gain",
  },
]

const successMetrics = [
  {
    metric: "50+",
    label: "Projects Delivered",
    description: "Successful implementations across diverse industries",
  },
  {
    metric: "150+",
    label: "Happy Clients",
    description: "Companies trusting us with their digital transformation",
  },
  {
    metric: "98%",
    label: "Satisfaction Rate",
    description: "Clients consistently rating us highly for quality and service",
  },
  {
    metric: "$2M+",
    label: "Client Revenue Impact",
    description: "Total value generated for our clients through our solutions",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What Our Clients Say</h1>
          <p className="text-lg md:text-xl text-blue-100 text-balance max-w-2xl">
            Real success stories from companies we've helped transform through innovation, automation, and intelligence.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-card border-b border-border py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <div className="font-semibold mb-1">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-600/30 mb-4" />

                <p className="text-muted-foreground mb-6 flex-1">"{testimonial.testimonial}"</p>

                <div className="border-t border-border pt-4 mb-4">
                  <p className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {testimonial.result}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Join Hundreds of Successful Companies</h2>
          <p className="text-lg text-blue-100 mb-8 text-balance">
            Let's create your success story. Schedule a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
