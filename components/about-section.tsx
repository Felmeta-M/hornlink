"use client";

import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Hornlink
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hornlink Technology is a leading digital transformation company
              dedicated to helping businesses harness the power of AI,
              automation, and intelligent systems to drive growth and
              innovation.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    10+ Years Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Proven track record in digital transformation
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    500+ Successful Projects
                  </h3>
                  <p className="text-muted-foreground">
                    Delivered across industries and scales
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    Expert Team of 50+
                  </h3>
                  <p className="text-muted-foreground">
                    Certified professionals in AI and automation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/team-working-on-automation-and-ai-projects-in-mode.jpg"
              alt="Hornlink Team"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
