"use client"

import { Star } from "lucide-react"

export function ClientReviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStartup Inc",
      role: "CEO",
      rating: 5,
      text: "Hornlink transformed our entire workflow. Their automation solutions saved us 30 hours per week and reduced errors by 90%. Highly recommended!",
      image: "/professional-woman-headshot.png",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions Ltd",
      role: "Operations Director",
      rating: 5,
      text: "The team at Hornlink is incredibly knowledgeable and responsive. They built custom solutions that perfectly fit our needs.",
      image: "/professional-man-headshot.png",
    },
    {
      id: 3,
      name: "Emma Davis",
      company: "eCommerce Global",
      role: "Business Manager",
      rating: 5,
      text: "Best investment we made this year. Their AI solutions helped us increase revenue by 40% while reducing operational costs.",
      image: "/woman-executive-headshot.png",
    },
  ]

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">Trusted by leading companies worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{review.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.role} at {review.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
