"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Hornlink Technology offer?",
        answer:
          "Hornlink Technology offers four core services: Training & Mentorship (educational content and hands-on guidance), AI & Workflow Automation (automating repetitive tasks), AI-Powered Website Design & Development (building intelligent web applications), and Smart Business Systems Development (creating scalable enterprise solutions).",
      },
      {
        question: "How long has Hornlink been in business?",
        answer:
          "We've been helping businesses transform through technology and automation for several years, delivering 50+ projects and serving 150+ happy clients across various industries.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work with startups, SMEs, and enterprises across diverse industries including e-commerce, SaaS, manufacturing, education, telecommunications, retail, and more. Our solutions are adaptable to any business type.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        question: "What is AI & Workflow Automation?",
        answer:
          "AI & Workflow Automation uses tools like n8n, OpenAI, and Twilio to automate repetitive business tasks. We design custom workflows that can process inquiries, send messages, manage leads, handle voice interactions, and more—all working 24/7 to increase productivity and reduce costs by 40-65%.",
      },
      {
        question: "Can you build a custom website for my business?",
        answer:
          "Yes! Our AI-Powered Website Design & Development service creates stunning, intelligent websites using modern technologies like Next.js, React, and Node.js. We incorporate AI personalization, responsive design, and performance optimization tailored to your business needs.",
      },
      {
        question: "What is included in the Training & Mentorship program?",
        answer:
          "Our Training & Mentorship includes YouTube tutorials (covering n8n, OpenAI, AI Agents), one-on-one mentorship sessions, structured team training programs (up to 25 participants), and access to our active Skool community for continuous learning and networking.",
      },
      {
        question: "How do you approach Smart Business Systems Development?",
        answer:
          "We conduct thorough requirement assessments, design custom database schemas, build scalable APIs, integrate automation and analytics, and implement monitoring for KPIs. We use Agile methodologies and maintain communication throughout to ensure the system matches your business objectives.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What technologies and platforms do you use?",
        answer:
          "We use modern tech stacks including Next.js, React, Node.js, Express.js, Python, PostgreSQL, MongoDB, Supabase, n8n, OpenAI APIs, Vapi, Twilio, AWS, Google Cloud, and more. We choose the best tools based on your specific project requirements.",
      },
      {
        question: "Do you provide ongoing support and maintenance?",
        answer:
          "Yes, we provide ongoing support packages including monitoring, updates, bug fixes, and performance optimization. We ensure your systems continue running smoothly and adapting to your changing business needs.",
      },
      {
        question: "Can your solutions scale as my business grows?",
        answer:
          "All our solutions are built with scalability in mind. Whether you need to handle 10 or 10,000 users, our systems grow with your business through cloud infrastructure, database optimization, and modular architecture.",
      },
      {
        question: "Do you provide API integrations?",
        answer:
          "Yes, we excel at integrating APIs with your existing systems. We connect tools like HubSpot, Slack, Twilio, payment processors, and custom APIs to create seamless workflows and unified systems.",
      },
    ],
  },
  {
    category: "Pricing & Process",
    questions: [
      {
        question: "How much do your services cost?",
        answer:
          "Pricing varies based on project complexity, scope, and timeline. Training programs start at one level, while custom automation and development projects are quoted individually. We recommend scheduling a consultation to discuss your specific needs and get an accurate quote.",
      },
      {
        question: "What is your typical project timeline?",
        answer:
          "Timelines vary: Training programs can be 4-12 weeks, automation workflows 2-4 weeks, website development 6-12 weeks, and business systems 8-16 weeks. We provide detailed timelines after the requirements assessment.",
      },
      {
        question: "Do you offer custom training for my team?",
        answer:
          "Yes! We offer customized training programs tailored to your team's skill level and business needs. These can cover n8n, AI automation, modern web development, database design, and more. We train from beginner to expert levels.",
      },
      {
        question: "How do I get started with Hornlink?",
        answer:
          "Simply contact us through our website, schedule a free consultation call, and we'll discuss your goals, challenges, and how our services can help. After understanding your needs, we'll prepare a proposal with timeline and investment.",
      },
    ],
  },
  {
    category: "Results & ROI",
    questions: [
      {
        question: "What kind of results can I expect?",
        answer:
          "Our clients typically see 40-80% improvement in operational efficiency, 65%+ reduction in processing time, 3x+ increase in conversion rates, 24/7 customer support capability, and substantial cost savings. Real results depend on your specific implementation.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We define KPIs at project start and track them throughout implementation. We monitor metrics like processing time, error rates, customer satisfaction, conversion rates, cost savings, and user engagement depending on your project goals.",
      },
      {
        question: "What's your client satisfaction rate?",
        answer:
          "We maintain a 98% client satisfaction rate. Our clients consistently praise our professionalism, technical expertise, communication, and the tangible business results we deliver.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-blue-100 text-balance max-w-2xl">
            Find answers to common questions about our services, process, and how we can help your business.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          {faqData.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-2xl font-bold mb-8 text-blue-600">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((item, i) => (
                  <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Didn't find what you're looking for?</h2>
          <p className="text-lg text-blue-100 mb-8 text-balance">
            Our team is here to answer any questions and discuss your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted transition-colors"
      >
        <span className="font-semibold text-left">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
