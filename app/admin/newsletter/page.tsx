"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { Button } from "@/components/ui/button"
import { Trash2, Download } from "lucide-react"

export default function NewsletterManagement() {
  const [subscribers, setSubscribers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    const fetchSubscribers = async () => {
      const { data } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .eq("subscribed", true)
        .order("created_at", { ascending: false })
      setSubscribers(data || [])
      setLoading(false)
    }

    fetchSubscribers()
  }, [supabase])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    await supabase.from("newsletter_subscribers").delete().eq("id", id)
    setSubscribers(subscribers.filter((s) => s.id !== id))
  }

  const handleExport = () => {
    const csv = subscribers.map((s) => `${s.email},${s.name || ""}`).join("\n")
    const blob = new Blob(["email,name\n" + csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "newsletter_subscribers.csv"
    a.click()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Newsletter Subscribers</h1>
        <Button onClick={handleExport} className="bg-cyan-500 hover:bg-cyan-600">
          <Download size={20} className="mr-2" />
          Export CSV
        </Button>
      </div>

      {loading ? (
        <div className="text-slate-400">Loading...</div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <p className="text-slate-400">
              Total Subscribers: <span className="text-cyan-400 font-semibold">{subscribers.length}</span>
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800 border-b border-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Email</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Subscribed</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-4 text-white">{subscriber.email}</td>
                    <td className="px-6 py-4 text-slate-400">{subscriber.name || "-"}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded text-sm bg-green-950 text-green-400">Yes</span>
                    </td>
                    <td className="px-6 py-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400"
                        onClick={() => handleDelete(subscriber.id)}
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
