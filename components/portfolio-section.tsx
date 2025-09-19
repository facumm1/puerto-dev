import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"

export function PortfolioSection() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const projects = [
    {
      title: t.projects.dosArroyosMobile.title,
      description: t.projects.dosArroyosMobile.description,
      image: "/dos-arroyos-mobile.png",
      tags: ["React Native", "Firebase"],
      styles: 'bg-white',
    },
    {
      title: t.projects.dosArroyosWeb.title,
      description: t.projects.dosArroyosWeb.description,
      image: "/dos-arroyos-web.png",
      tags: ["React", "Node.js"],
      styles: 'scale-130 bg-white',
    },
    {
      title: t.projects.puertoRanaCatalogo.title,
      description: t.projects.puertoRanaCatalogo.description,
      image: "/puerto-rana-catalogo.jpg",
      tags: ["Next.js", "Tailwind"],
    },
    {
      title: t.projects.puertoRanaGestion.title,
      description: t.projects.puertoRanaGestion.description,
      image: "/puerto-rana-admin.png",
      tags: ["React", "Firebase"],
      styles: 'scale-100 bg-black/40',
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.portfolio.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden opacity-80">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`${project.styles} w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
