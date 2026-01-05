"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { Button } from "@/components/ui/button"
import { Trash2, Eye, EyeOff } from "lucide-react"

export default function ContactFormsManagement() {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    const fetchSubmissions = async () => {
      const { data } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false })
      setSubmissions(data || [])
      setLoading(false)
    }

    fetchSubmissions()
  }, [supabase])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    await supabase.from("contact_submissions").delete().eq("id", id)
    setSubmissions(submissions.filter((s) => s.id !== id))
  }

  const handleMarkAsRead = async (id: string, read: boolean) => {
    await supabase.from("contact_submissions").update({ read: !read }).eq("id", id)
    setSubmissions(submissions.map((s) => (s.id === id ? { ...s, read: !read } : s)))
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">Contact Form Submissions</h1>

      {loading ? (
        <div className="text-slate-400">Loading...</div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800 border-b border-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Email</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Subject</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {submissions.map((submission) => (
                  <tr
                    key={submission.id}
                    className={`hover:bg-slate-800 transition-colors ${!submission.read ? "bg-slate-800 bg-opacity-50" : ""}`}
                  >
                    <td className="px-6 py-4 text-white font-medium">{submission.name}</td>
                    <td className="px-6 py-4 text-slate-400">{submission.email}</td>
                    <td className="px-6 py-4 text-slate-400">{submission.subject}</td>
                    <td className="px-6 py-4 text-slate-400">{submission.service_interested || "-"}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded text-sm ${
                          submission.read ? "bg-slate-800 text-slate-400" : "bg-cyan-950 text-cyan-400"
                        }`}
                      >
                        {submission.read ? "Read" : "Unread"}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-cyan-400"
                        onClick={() => handleMarkAsRead(submission.id, submission.read)}
                      >
                        {submission.read ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400"
                        onClick={() => handleDelete(submission.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
