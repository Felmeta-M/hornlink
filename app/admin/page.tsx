"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { FileText, Users, ImageIcon, Mail } from "lucide-react"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    blogPosts: 0,
    testimonials: 0,
    projects: 0,
    subscribers: 0,
    contactForms: 0,
  })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    const fetchStats = async () => {
      const [
        { count: blogCount },
        { count: testimonialCount },
        { count: projectCount },
        { count: subscriberCount },
        { count: contactCount },
      ] = await Promise.all([
        supabase.from("blog_posts").select("*", { count: "exact", head: true }),
        supabase.from("testimonials").select("*", { count: "exact", head: true }),
        supabase.from("portfolio_projects").select("*", { count: "exact", head: true }),
        supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
        supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
      ])

      setStats({
        blogPosts: blogCount || 0,
        testimonials: testimonialCount || 0,
        projects: projectCount || 0,
        subscribers: subscriberCount || 0,
        contactForms: contactCount || 0,
      })
    }

    fetchStats()
  }, [supabase])

  const cards = [
    { title: "Blog Posts", value: stats.blogPosts, icon: FileText, color: "text-blue-400" },
    { title: "Testimonials", value: stats.testimonials, icon: Users, color: "text-purple-400" },
    { title: "Portfolio Projects", value: stats.projects, icon: ImageIcon, color: "text-green-400" },
    { title: "Newsletter Subscribers", value: stats.subscribers, icon: Mail, color: "text-cyan-400" },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.title}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm mb-2">{card.title}</p>
                  <p className="text-3xl font-bold text-white">{card.value}</p>
                </div>
                <Icon className={`${card.color} opacity-50`} size={40} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Quick Stats</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-slate-300">
              <span>Contact Form Submissions</span>
              <span className="font-semibold text-cyan-400">{stats.contactForms}</span>
            </div>
            <div className="border-t border-slate-800 pt-3 flex justify-between text-slate-300">
              <span>Total Content Items</span>
              <span className="font-semibold text-cyan-400">
                {stats.blogPosts + stats.testimonials + stats.projects}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <p className="text-slate-400 text-sm">
            All your content management tools are ready. Start by adding blog posts, testimonials, or portfolio
            projects.
          </p>
        </div>
      </div>
    </div>
  )
}
