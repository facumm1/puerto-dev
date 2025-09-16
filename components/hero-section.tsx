"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Smartphone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"

export function HeroSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,191,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.15),transparent_50%)]" />
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-24 h-24 sm:w-48 sm:h-48 bg-accent/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-secondary/10 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow delay-500" />
      </div>

      <div className="hidden sm:block absolute top-1/4 left-1/4 animate-float">
        <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary/60 drop-shadow-lg" />
      </div>
      <div className="hidden sm:block absolute top-1/3 right-1/4 animate-float delay-500">
        <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-accent/60 drop-shadow-lg" />
      </div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/3 animate-float delay-1000">
        <Database className="w-6 h-6 sm:w-7 sm:h-7 text-secondary/60 drop-shadow-lg" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance font-sans leading-tight">
          <span className="text-primary drop-shadow-lg">{t.hero.title}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-6 sm:mb-8 text-balance max-w-2xl mx-auto px-2">
          {t.hero.subtitle}
        </p>

        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 text-pretty max-w-xl mx-auto px-4">
          {t.hero.description}
        </p>

        <Button
          size="lg"
          onClick={scrollToPortfolio}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold group transition-all duration-300 hover:scale-105 animate-pulse-glow w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          {t.hero.cta}
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
