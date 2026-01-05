"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Code, Brain, BarChart3 } from "lucide-react";

const services = [
  {
    id: "tm",
    slug: "training-mentorship",
    title: "Training & Mentorship",
    description:
      "Equip teams with skills to master automation, AI tools, and modern frameworks",
    icon: Brain,
    color: "bg-primary/10",
    accent: "text-primary",
    features: [
      "YouTube Tutorials",
      "One-on-One Mentorship",
      "Team Training Programs",
      "Skool Community",
    ],
  },
  {
    id: "awa",
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    description:
      "Automate repetitive tasks with intelligent systems that work 24/7",
    icon: Zap,
    color: "bg-primary/10",
    accent: "text-primary",
    features: [
      "n8n Workflows",
      "AI Integration",
      "Voice Automation",
      "CRM Integration",
    ],
  },
  {
    id: "awd",
    slug: "web-development",
    title: "AI-Powered Web Design & Development",
    description:
      "Build stunning, intelligent websites with AI personalization and data-driven insights",
    icon: Code,
    color: "bg-primary/10",
    accent: "text-primary",
    features: [
      "React & Next.js",
      "AI Chatbots",
      "Responsive Design",
      "Vercel Deployment",
    ],
  },
  {
    id: "sbsd",
    slug: "business-systems",
    title: "Smart Business Systems Development",
    description:
      "Create custom digital ecosystems that optimize operations and drive growth",
    icon: BarChart3,
    color: "bg-primary/10",
    accent: "text-primary",
    features: [
      "CRM & ERP",
      "Analytics Systems",
      "Process Automation",
      "60-80% Efficiency Gain",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl text-balance">
            Comprehensive solutions designed to drive innovation and transform
            your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${service.accent}`} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${service.accent.replace(
                              "text-",
                              "bg-"
                            )}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
