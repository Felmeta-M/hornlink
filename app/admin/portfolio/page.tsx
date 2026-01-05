"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function PortfolioManagement() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from("portfolio_projects").select("*").order("created_at", { ascending: false })
      setProjects(data || [])
      setLoading(false)
    }

    fetchProjects()
  }, [supabase])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    await supabase.from("portfolio_projects").delete().eq("id", id)
    setProjects(projects.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Portfolio Projects</h1>
        <Link href="/admin/portfolio/new">
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            <Plus size={20} className="mr-2" />
            New Project
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="text-slate-400">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-700 transition-colors"
            >
              {project.image_url && (
                <img
                  src={project.image_url || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2">
                  <Link href={`/admin/portfolio/${project.id}`}>
                    <Button variant="ghost" size="sm" className="text-cyan-400">
                      <Edit size={16} />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="text-red-400" onClick={() => handleDelete(project.id)}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
