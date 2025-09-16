import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
    image: "/modern-e-commerce-platform-interface.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Healthcare Mobile App",
    description: "Cross-platform mobile application for patient management and telemedicine consultations.",
    image: "/healthcare-mobile-app.png",
    tags: ["React Native", "Firebase", "WebRTC"],
  },
  {
    title: "Data Analytics Dashboard",
    description: "Real-time business intelligence dashboard with interactive charts and automated reporting.",
    image: "/data-analytics-dashboard.png",
    tags: ["Python", "D3.js", "MongoDB"],
  },
  {
    title: "Fintech Web App",
    description: "Secure financial management platform with transaction tracking and investment portfolio analysis.",
    image: "/fintech-web-application-interface.jpg",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
]

export function PortfolioSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Showcasing our latest projects and successful collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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
