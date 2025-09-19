"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Globe, BarChart3 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"

export function ServicesSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const services = [
    {
      icon: Smartphone,
      title: t.services.mobile.title,
      description: t.services.mobile.description,
      shortText: t.services.mobile.shortText,
      image: "/web-mobile-service.png",
    },
    {
      icon: Globe,
      title: t.services.web.title,
      description: t.services.web.description,
      shortText: t.services.web.shortText,
      image: "/fintech-web-application-interface.jpg",
    },
    {
      icon: BarChart3,
      title: t.services.data.title,
      description: t.services.data.description,
      shortText: t.services.data.shortText,
      image: "/data-analytics-dashboard.png",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance font-sans text-foreground px-2">
            {t.services.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto px-4">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/30 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:bg-card/50 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/40 to-transparent" />

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:animate-pulse-glow">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>

              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-semibold text-card-foreground font-sans group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm text-accent font-medium mb-2 sm:mb-3 opacity-90">{service.shortText}</p>
                <CardDescription className="text-muted-foreground leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-lg" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
