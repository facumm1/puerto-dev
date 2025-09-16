"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          {/* Base background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

          {/* Static background layers for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,191,255,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,206,209,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,139,139,0.08),transparent_70%)]" />

          {/* Static glowing elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow delay-500" />
        </div>

        <div className="relative z-10">
          <HeroSection />
          <div id="services">
            <ServicesSection />
          </div>
          <div id="portfolio">
            <PortfolioSection />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </main>
    </>
  )
}
