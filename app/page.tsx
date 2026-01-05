import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ClientReviews } from "@/components/client-reviews"
import { LatestBlog } from "@/components/latest-blog"
import { Partners } from "@/components/partners"
import { Newsletter } from "@/components/newsletter"
import { AddressFooter } from "@/components/address-footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Services />
      <AboutSection />
      <PortfolioSection />
      <ClientReviews />
      <LatestBlog />
      <Partners />
      <Newsletter />
      <AddressFooter />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  )
}
