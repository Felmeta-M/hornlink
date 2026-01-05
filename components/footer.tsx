import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg" />
              <span className="font-bold text-lg">Hornlink</span>
            </div>
            <p className="text-slate-400 text-sm">
              Driving digital transformation through innovation, automation, and intelligence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services/training-mentorship" className="hover:text-white transition">
                  Training & Mentorship
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/business-systems" className="hover:text-white transition">
                  Business Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <Link
                href="mailto:info@hornlink.tech"
                className="text-slate-400 hover:text-white transition"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-slate-400 hover:text-white transition"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-slate-400 hover:text-white transition"
                title="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-slate-400 text-sm">info@hornlink.tech</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} Hornlink Technology. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
