import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Lightbulb } from "lucide-react"

const teamMembers = [
  {
    name: "Innovation Team",
    role: "Tech Leadership",
    description: "Driving cutting-edge solutions in AI, automation, and digital transformation",
    color: "bg-blue-500/10",
  },
  {
    name: "Development Team",
    role: "Engineering Excellence",
    description: "Building scalable, intelligent systems that power modern businesses",
    color: "bg-cyan-500/10",
  },
  {
    name: "Mentorship Team",
    role: "Knowledge Sharing",
    description: "Empowering professionals with skills to master automation and AI tools",
    color: "bg-purple-500/10",
  },
  {
    name: "Client Success Team",
    role: "Partnership Focus",
    description: "Ensuring every project delivers measurable impact and business value",
    color: "bg-green-500/10",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly explore emerging technologies to deliver cutting-edge solutions",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients to understand and exceed their expectations",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards of quality and professionalism in everything we do",
  },
]

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navigation />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About Hornlink Technology</h1>
          <p className="text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
            We're a team of innovators, developers, and mentors dedicated to transforming businesses through AI,
            automation, and intelligent technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower organizations and individuals with transformative technology solutions that drive
                  efficiency, innovation, and sustainable growth in the digital age. We believe in the power of AI and
                  automation to unlock human potential and reshape how businesses operate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading partner for digital transformation, known for delivering intelligent, scalable
                  solutions that evolve with our clients' needs. We envision a world where every business, regardless of
                  size, has access to world-class AI and automation expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title}>
                  <CardHeader>
                    <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Why Hornlink Technology Exists</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In today's rapidly evolving digital landscape, businesses struggle with repetitive processes, scattered
                systems, and limited access to cutting-edge technology expertise. Many organizations know they need to
                transform but lack the roadmap, tools, or talent to make it happen effectively.
              </p>
              <p>
                Hornlink Technology was founded to bridge this gap. We provide comprehensive solutions that span
                training and mentorship, intelligent automation, beautiful and functional web experiences, and custom
                business systems. We don't just build technology—we empower our clients to understand it, control it,
                and thrive with it.
              </p>
              <p>
                Our four core service pillars work together to create a complete ecosystem: educating teams, automating
                workflows, building digital experiences, and creating intelligent systems that drive measurable business
                impact. This integrated approach ensures sustainable transformation and lasting competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member) => (
              <Card key={member.name} className={member.color}>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sm font-semibold text-muted-foreground mt-2">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-2xl">Collaborative Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our teams work seamlessly together, combining deep expertise in AI, automation, web development, and
                business systems. This integrated approach ensures that every solution is built on a foundation of best
                practices, proven methodologies, and innovative thinking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just service providers—we're partners committed to your success. Every team member is
                dedicated to understanding your challenges, delivering exceptional results, and building long-term
                relationships based on trust and measurable impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "60-80%", label: "Average Efficiency Improvement" },
              { stat: "4", label: "Core Service Areas" },
              { stat: "24/7", label: "Automation Coverage" },
              { stat: "100%", label: "Client-Focused Delivery" },
            ].map((item) => (
              <Card key={item.label} className="text-center">
                <CardContent className="pt-8">
                  <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.stat}</p>
                  <p className="text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Join Us on Your Transformation Journey</h2>
          <p className="text-xl text-blue-100 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Let's work together to turn your challenges into opportunities for growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Contact Our Team <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
