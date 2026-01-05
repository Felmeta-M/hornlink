"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-muted/20" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left section hero */}
        <div className="max-w-3xl lg:max-w-none">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">
              Driving Digital Transformation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight mb-6">
            Automate, Innovate, Transform
          </h1>

          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl leading-relaxed">
            Hornlink Technology empowers businesses with AI-driven automation,
            intelligent web solutions, and custom smart systems to stay ahead in
            the digital era.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <Button size="lg">
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Right section hero */}
        <div className="hidden lg:block relative perspective-1000">
          {/* Decorative blobs */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Main Dashboard Card */}
          <Card className="relative z-10 bg-card/80 backdrop-blur-sm shadow-2xl animate-in fade-in zoom-in duration-1000">
            <CardHeader className="border-b pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      System Analytics
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Real-time monitoring
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Stat 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Automation Efficiency
                  </span>
                  <span className="font-medium text-green-600">+124%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-primary rounded-full animate-[width_1s_ease-out]" />
                </div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tasks Processed</span>
                  <span className="font-medium">8,432</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-primary rounded-full animate-[width_1s_ease-out]" />
                </div>
              </div>

              {/* Mini Chart Visual */}
              <div className="flex items-end justify-between gap-2 h-16 pt-2">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Floating Card 1: AI Status */}
          <Card className="absolute -right-6 top-12 z-20 w-48 shadow-xl border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur animate-in slide-in-from-right-10 fade-in duration-1000 delay-300">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-full">
                <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  AI Status
                </p>
                <p className="text-sm font-bold text-purple-600 dark:text-purple-400">
                  Active
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Floating Card 2: Success */}
          <Card className="absolute -left-6 bottom-20 z-20 shadow-xl border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur animate-in slide-in-from-left-10 fade-in duration-1000 delay-500">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm font-bold">Optimization</p>
                <p className="text-xs text-muted-foreground">Complete</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
