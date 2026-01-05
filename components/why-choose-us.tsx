import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions",
  },
  {
    title: "Expert Team",
    description: "Dedicated professionals with deep expertise in automation and AI",
  },
  {
    title: "Scalable Solutions",
    description: "Systems designed to grow and evolve with your business",
  },
  {
    title: "24/7 Automation",
    description: "Intelligent systems that work around the clock for your success",
  },
  {
    title: "Custom Tailored",
    description: "Solutions built specifically for your unique business needs",
  },
  {
    title: "Proven Results",
    description: "Track record of delivering 60-80% efficiency improvements",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Hornlink Technology</h2>
          <p className="text-xl text-muted-foreground max-w-2xl text-balance">
            Proven expertise in delivering transformative digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <Card key={reason.title}>
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle className="text-lg">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
