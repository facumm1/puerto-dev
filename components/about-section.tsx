import { CheckCircle, Users, Zap, Shield } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge technologies and creative solutions",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Robust, secure, and maintainable code",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Close partnership throughout the development process",
  },
]

export function AboutSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.about.title}</h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              {t.about.intro}
            </p>

            <div className="space-y-4 mb-8">
              {t.about.checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* <div className="grid grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{value.title}</h3>
                  <p className="text-xs text-muted-foreground text-pretty">{value.description}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className="relative">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                {/* <img
                  src="/professional-software-development-team-working-tog.jpg"
                  alt="Puerto Dev Team"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                /> */}

                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{t.about.missionTitle}</h3>
                  <p className="text-muted-foreground text-pretty">
                    {t.about.mission}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
