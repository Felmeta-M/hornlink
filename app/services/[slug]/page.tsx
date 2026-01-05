import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const serviceDetails = {
  "training-mentorship": {
    title: "Training & Mentorship",
    tagline: "Learn. Build. Lead. Together we shape the future with AI.",
    description:
      "At Hornlink Technology, we believe knowledge is the foundation of innovation. Our Training & Mentorship service equips individuals, teams, and organizations with the technical and practical skills required to excel in the digital and AI-driven world.",
    mainBenefits: [
      "Comprehensive n8n automation tutorials from beginner to expert",
      "AI Agents exploration and implementation guidance",
      "One-to-one personalized mentorship sessions",
      "Structured team training programs (up to 25 participants)",
      "Active Skool community for collaboration and growth",
    ],
    tools: ["n8n", "OpenAI", "Skool", "YouTube", "Google Workspace", "Slack"],
    implementation: [
      "Weekly content plans for tutorials and mentorship videos",
      "Consistent branding and educational delivery",
      "Active community engagement through Skool",
      "Progress tracking using feedback forms and analytics",
    ],
    color: "bg-blue-500/10",
    accent: "text-blue-600 dark:text-blue-400",
  },
  "ai-automation": {
    title: "AI & Workflow Automation",
    tagline: "We don't just automate processes — we automate success.",
    description:
      "Our AI & Workflow Automation service focuses on helping organizations automate repetitive and time-consuming tasks through intelligent, human-like AI systems. We design and deploy custom workflows that simplify business operations, enhance accuracy, and increase productivity.",
    mainBenefits: [
      "Automate sales, marketing, and customer management workflows",
      "24/7 intelligent systems serving your clients efficiently",
      "AI-powered voice and chat interactions with customers",
      "Personalized message automation and lead processing",
      "Seamless integration with your existing tools",
    ],
    tools: ["n8n", "OpenAI API", "Supabase", "Vapi", "Twilio", "Slack", "HubSpot"],
    implementation: [
      "Map out repetitive workflows and define automation objectives",
      "Use n8n for workflow orchestration and trigger automation",
      "Connect AI models for intelligent responses and decision-making",
      "Integrate communication tools for seamless operations",
    ],
    color: "bg-cyan-500/10",
    accent: "text-cyan-600 dark:text-cyan-400",
  },
  "web-development": {
    title: "AI-Powered Web Design & Development",
    tagline: "Smart design meets intelligent technology.",
    description:
      "Our AI-Powered Website Design & Development service brings together creativity, intelligence, and performance to deliver websites that not only look stunning but also adapt dynamically to your users and business needs.",
    mainBenefits: [
      "Interactive, scalable, and responsive websites",
      "AI-driven personalization and automation features",
      "Improved user experience and engagement",
      "AI chatbots and recommendation systems",
      "Lightning-fast performance and reliability",
    ],
    tools: ["JavaScript", "React.js", "Node.js", "Next.js", "Express.js", "Vercel", "AWS EC2", "Docker"],
    implementation: [
      "Use Git-based version control for team collaboration",
      "Deploy through Vercel or AWS for scalability",
      "Incorporate AI elements like chatbots or recommendations",
      "Maintain comprehensive front-end and back-end documentation",
    ],
    color: "bg-purple-500/10",
    accent: "text-purple-600 dark:text-purple-400",
  },
  "business-systems": {
    title: "Smart Business Systems Development",
    tagline: "We build systems that grow with your business — intelligently and sustainably.",
    description:
      "Our Smart Business Systems Development service is designed to help businesses create digital ecosystems that grow alongside them. We focus on building custom, data-driven systems that simplify management, optimize operations, and enhance performance across departments.",
    mainBenefits: [
      "Custom CRM and ERP platforms tailored to your needs",
      "Inventory and analytics systems for better insights",
      "Modular and scalable architecture for future growth",
      "60-80% improvement in operational efficiency",
      "AI and automation integration for smarter decisions",
    ],
    tools: ["Python", "Node.js", "PostgreSQL", "Supabase", "Google Cloud", "AWS", "Power BI", "n8n"],
    implementation: [
      "Conduct comprehensive client requirement assessments",
      "Design scalable database schema and backend APIs",
      "Integrate automation and analytics features",
      "Monitor KPIs and ensure system efficiency post-deployment",
    ],
    color: "bg-green-500/10",
    accent: "text-green-600 dark:text-green-400",
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]

  if (!service) {
    return (
      <main className="w-full">
        <Navigation />
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{service.title}</h1>
          <p className="text-2xl text-muted-foreground mb-8 text-balance max-w-3xl italic">{service.tagline}</p>
          <p className="text-lg text-balance max-w-2xl leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.mainBenefits.map((benefit, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Tools & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {service.tools.map((tool) => (
              <Card key={tool}>
                <CardContent className="pt-6">
                  <p className="font-semibold text-center">{tool}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Implementation Approach</h2>
          <div className="space-y-4">
            {service.implementation.map((step, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full ${service.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="font-bold text-sm">{idx + 1}</span>
                    </div>
                    <CardTitle className="text-xl">{step}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      <Footer />
    </main>
  )
}
