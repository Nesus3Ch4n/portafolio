import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experience = [
  {
    title: "Ingeniero de Software Senior",
    company: "Tech Solutions Inc.",
    period: "2022 - Presente",
    description:
      "Liderando el desarrollo de aplicaciones empresariales escalables. Implementacion de arquitecturas de microservicios y CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    title: "Desarrollador Full Stack",
    company: "Digital Innovations",
    period: "2019 - 2022",
    description:
      "Desarrollo de plataformas web y moviles. Integracion de APIs REST y bases de datos NoSQL.",
    technologies: ["Vue.js", "Python", "MongoDB", "Firebase"],
  },
  {
    title: "Desarrollador Junior",
    company: "StartUp Labs",
    period: "2017 - 2019",
    description:
      "Desarrollo frontend y mantenimiento de sistemas legacy. Participacion en proyectos agiles.",
    technologies: ["JavaScript", "PHP", "MySQL", "Git"],
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Sobre Mi
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Experiencia Profesional
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Soy un ingeniero en sistemas apasionado por crear soluciones tecnologicas 
            que impactan positivamente en las organizaciones. Con mas de 7 anos de 
            experiencia en el desarrollo de software, he trabajado en diversos proyectos 
            que van desde startups hasta grandes corporaciones.
          </p>
        </div>

        <div className="grid gap-8">
          {experience.map((job, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="h-5 w-5" />
                      <span className="font-semibold">{job.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm lg:text-right">
                    <Calendar className="h-4 w-4 lg:hidden" />
                    <span className="font-mono">{job.period}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
