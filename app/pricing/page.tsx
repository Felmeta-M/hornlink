"use client"

import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter Training",
    service: "Training & Mentorship",
    price: "Custom",
    description: "Perfect for individuals and small teams",
    features: [
      "Access to 50+ YouTube tutorials",
      "Community access on Skool",
      "Monthly live Q&A sessions",
      "Educational resources library",
      "Certificate of completion",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro Automation",
    service: "AI & Workflow Automation",
    price: "Custom",
    description: "For businesses ready to automate",
    features: [
      "Custom workflow design & implementation",
      "n8n setup and configuration",
      "OpenAI API integration",
      "3-month support included",
      "Performance monitoring & optimization",
      "Unlimited API calls",
    ],
    cta: "Schedule Demo",
    highlight: true,
  },
  {
    name: "Custom Website",
    service: "AI-Powered Web Development",
    price: "Custom",
    description: "Beautiful, intelligent websites",
    features: [
      "Custom Next.js/React build",
      "AI personalization features",
      "Mobile responsive design",
      "SEO optimization",
      "Deployment & hosting setup",
      "6 months free support",
    ],
    cta: "View Portfolio",
    highlight: false,
  },
  {
    name: "Enterprise System",
    service: "Smart Business Systems",
    price: "Custom",
    description: "Scalable solutions for enterprises",
    features: [
      "Custom database design",
      "API development & integration",
      "Analytics & reporting dashboards",
      "Automation & AI integration",
      "Security & compliance setup",
      "Dedicated support team",
      "1-year maintenance included",
    ],
    cta: "Request Proposal",
    highlight: true,
  },
]

const packages = [
  {
    name: "Training & Mentorship",
    options: [
      {
        title: "Self-Paced Online Course",
        price: "$297",
        duration: "lifetime access",
      },
      {
        title: "Group Training (up to 25)",
        price: "$2,500",
        duration: "per session",
      },
      {
        title: "One-on-One Mentorship",
        price: "$150",
        duration: "per hour",
      },
    ],
  },
  {
    name: "AI & Workflow Automation",
    options: [
      {
        title: "Simple Workflow",
        price: "$1,500",
        duration: "one-time",
      },
      {
        title: "Advanced Automation",
        price: "$3,000 - $8,000",
        duration: "project-based",
      },
      {
        title: "Enterprise Automation",
        price: "Custom Quote",
        duration: "consultation required",
      },
    ],
  },
  {
    name: "Web Development",
    options: [
      {
        title: "Landing Page",
        price: "$2,000",
        duration: "one-time",
      },
      {
        title: "Full Website",
        price: "$5,000 - $15,000",
        duration: "project-based",
      },
      {
        title: "SaaS Platform",
        price: "Custom Quote",
        duration: "consultation required",
      },
    ],
  },
  {
    name: "Business Systems",
    options: [
      {
        title: "CRM System",
        price: "$8,000 - $20,000",
        duration: "implementation",
      },
      {
        title: "ERP System",
        price: "$15,000 - $50,000",
        duration: "implementation",
      },
      {
        title: "Custom Enterprise Solution",
        price: "Custom Quote",
        duration: "consultation required",
      },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Simple, Transparent Pricing</h1>
          <p className="text-lg md:text-xl text-blue-100 text-balance max-w-2xl">
            Solutions for every business size. Custom quotes based on your specific needs. No hidden fees.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Service Tiers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border overflow-hidden transition-all ${
                  plan.highlight ? "border-blue-600 shadow-lg scale-105 md:scale-100 lg:scale-105" : "border-border"
                }`}
              >
                <div className={`p-6 ${plan.highlight ? "bg-blue-600 text-white" : "bg-card"}`}>
                  <div className="text-sm font-semibold mb-2 opacity-80">{plan.service}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-3">{plan.price}</div>
                  <p className={`text-sm ${plan.highlight ? "text-blue-100" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-colors ${
                      plan.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing Breakdown by Service</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {packages.map((pkg) => (
              <div key={pkg.name}>
                <h3 className="text-xl font-bold mb-6 text-blue-600">{pkg.name}</h3>
                <div className="space-y-4">
                  {pkg.options.map((option, i) => (
                    <div key={i} className="bg-background p-4 rounded-lg border border-border">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold">{option.title}</h4>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">{option.price}</div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{option.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">What's Included in Every Project</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Consultation",
                description: "Free initial consultation to understand your needs and goals",
              },
              {
                title: "Custom Solution Design",
                description: "Tailored approach specific to your business requirements",
              },
              {
                title: "Quality Assurance",
                description: "Thorough testing and optimization before delivery",
              },
              {
                title: "Clear Communication",
                description: "Regular updates and transparency throughout the project",
              },
              {
                title: "Post-Launch Support",
                description: "Support period included to ensure smooth implementation",
              },
              {
                title: "Performance Monitoring",
                description: "Tracking results and KPIs to measure success",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 text-balance">
            Schedule a free consultation to discuss your project and get a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
