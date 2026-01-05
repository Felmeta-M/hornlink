"use client"

export function Partners() {
  const partners = [
    { name: "OpenAI", logo: "OpenAI" },
    { name: "n8n", logo: "n8n" },
    { name: "Supabase", logo: "Supabase" },
    { name: "Vercel", logo: "Vercel" },
    { name: "Google Cloud", logo: "Google Cloud" },
    { name: "Stripe", logo: "Stripe" },
    { name: "HubSpot", logo: "HubSpot" },
    { name: "AWS", logo: "AWS" },
  ]

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Technology Partners</h2>
          <p className="text-lg text-muted-foreground">
            We partner with industry-leading platforms to deliver best-in-class solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-32"
            >
              <div className="text-center">
                <p className="font-semibold text-foreground text-lg">{partner.logo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
