"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function AddressFooter() {
  return (
    <section className="w-full py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">Get In Touch</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-background p-8 rounded-lg shadow-md text-center">
            <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground text-sm">
              Hornlink Technology Plaza
              <br />
              123 Tech Street
              <br />
              Lagos, Nigeria
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-md text-center">
            <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">
              +234 (0) 123 456 7890
              <br />
              +234 (0) 123 456 7891
              <br />
              Available 24/7
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-md text-center">
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">
              info@hornlink.com
              <br />
              support@hornlink.com
              <br />
              hello@hornlink.com
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-md text-center">
            <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
            <p className="text-muted-foreground text-sm">
              Mon - Fri: 9:00 - 18:00
              <br />
              Sat: 10:00 - 14:00
              <br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
