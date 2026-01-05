"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Star } from "lucide-react"

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false })
      setTestimonials(data || [])
      setLoading(false)
    }

    fetchTestimonials()
  }, [supabase])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    await supabase.from("testimonials").delete().eq("id", id)
    setTestimonials(testimonials.filter((t) => t.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Testimonials</h1>
        <Link href="/admin/testimonials/new">
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            <Plus size={20} className="mr-2" />
            New Testimonial
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="text-slate-400">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{testimonial.client_name}</h3>
                  <p className="text-slate-400 text-sm">{testimonial.client_company}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 mb-4 line-clamp-3">{testimonial.content}</p>
              <div className="flex gap-2">
                <Link href={`/admin/testimonials/${testimonial.id}`}>
                  <Button variant="ghost" size="sm" className="text-cyan-400">
                    <Edit size={16} />
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="text-red-400" onClick={() => handleDelete(testimonial.id)}>
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
