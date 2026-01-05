import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Code, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

const servicesList = [
  {
    id: "training-mentorship",
    slug: "training-mentorship",
    title: "Training & Mentorship",
    shortDesc: "Master AI tools and automation frameworks",
    icon: Brain,
    color: "bg-blue-500/10",
    accent: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    shortDesc: "Automate repetitive processes with AI",
    icon: Zap,
    color: "bg-cyan-500/10",
    accent: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "AI-Powered Web Design & Development",
    shortDesc: "Build intelligent, dynamic websites",
    icon: Code,
    color: "bg-purple-500/10",
    accent: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "business-systems",
    slug: "business-systems",
    title: "Smart Business Systems Development",
    shortDesc: "Custom systems for enterprise growth",
    icon: BarChart3,
    color: "bg-green-500/10",
    accent: "text-green-600 dark:text-green-400",
  },
]

export default function ServicesPage() {
  return (
    <main className="w-full">
      <Navigation />

      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl text-balance">
            Comprehensive solutions designed to transform your business and accelerate growth
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {servicesList.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                        <Icon className={`w-7 h-7 ${service.accent}`} />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{service.shortDesc}</p>
                      <Button variant="outline" className="w-full bg-transparent">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
