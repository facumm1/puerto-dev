"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"

export function ContactSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const handleEmailClick = () => {
    window.location.href = "mailto:hello@puertodev.com"
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/15551234567", "_blank")
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance text-foreground px-2">
            {t.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          <Card className="group bg-card/30 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:bg-card/50 animate-slide-in-up">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:animate-pulse-glow">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {t.contact.email.title}
              </h3>

              <p className="text-accent font-medium mb-3 sm:mb-4 text-sm sm:text-base">hello@puertodev.com</p>

              <p className="text-sm text-muted-foreground mb-4 sm:mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {t.contact.email.description}
              </p>

              <Button
                onClick={handleEmailClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 sm:py-3 group/btn transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                {t.contact.email.cta}
                <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-lg" />
            </div>
          </Card>

          <Card className="group bg-card/30 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:bg-card/50 animate-slide-in-up delay-200">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 group-hover:animate-pulse-glow">
                <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {t.contact.whatsapp.title}
              </h3>

              <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">+1 (555) 123-4567</p>

              <p className="text-sm text-muted-foreground mb-4 sm:mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {t.contact.whatsapp.description}
              </p>

              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 bg-transparent font-semibold py-2.5 sm:py-3 group/btn text-sm sm:text-base"
              >
                {t.contact.whatsapp.cta}
                <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 rounded-lg" />
            </div>
          </Card>
        </div>

        <div className="text-center pt-12 sm:pt-16 animate-fade-in delay-500">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-6">{t.contact.social}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: "LinkedIn", url: "https://linkedin.com/company/puertodev" },
              { name: "Twitter", url: "https://twitter.com/puertodev" },
              { name: "GitHub", url: "https://github.com/puertodev" },
            ].map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="sm"
                onClick={() => window.open(social.url, "_blank")}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 text-sm sm:text-base px-3 sm:px-4"
              >
                {social.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
