"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Mail className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get Updates & Latest News</h2>
        <p className="text-lg text-blue-100 mb-8">
          Subscribe to our newsletter to stay informed about AI trends, automation tips, and exclusive offers
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-foreground border-0"
            required
          />
          <Button type="submit" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
            Subscribe
          </Button>
        </form>

        {subscribed && (
          <p className="text-white mt-4 font-semibold">Thank you for subscribing! Check your email for confirmation.</p>
        )}

        <p className="text-sm text-blue-100 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  )
}
