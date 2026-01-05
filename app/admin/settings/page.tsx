"use client"

import { Button } from "@/components/ui/button"

export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
              <input
                type="text"
                defaultValue="Hornlink Technology"
                className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                defaultValue="info@hornlink.com"
                className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded"
                disabled
              />
            </div>
          </div>
          <Button className="mt-6 bg-cyan-500 hover:bg-cyan-600">Save Changes</Button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Support</h2>
          <p className="text-slate-400 mb-4">Need help with your admin panel?</p>
          <Button variant="outline" className="border-slate-700 text-slate-300 bg-transparent">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}
