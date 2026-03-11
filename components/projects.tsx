import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Sistema de Gestion Empresarial",
    description:
      "Plataforma integral para la gestion de recursos empresariales incluyendo inventario, ventas, y reportes en tiempo real.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "API de Procesamiento de Pagos",
    description:
      "Microservicio de alta disponibilidad para procesamiento de transacciones financieras con integracion a multiples pasarelas.",
    technologies: ["Go", "gRPC", "Redis", "Kubernetes"],
    github: "https://github.com",
    demo: null,
    featured: true,
  },
  {
    title: "Dashboard de Analytics",
    description:
      "Panel de visualizacion de datos con graficos interactivos y reportes automatizados para toma de decisiones.",
    technologies: ["Next.js", "D3.js", "Python", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "App de Productividad",
    description:
      "Aplicacion movil multiplataforma para gestion de tareas y seguimiento de habitos con sincronizacion en la nube.",
    technologies: ["React Native", "Firebase", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Plataforma E-Learning",
    description:
      "Sistema de educacion en linea con soporte para video streaming, evaluaciones y certificaciones.",
    technologies: ["Vue.js", "Django", "MongoDB", "AWS S3"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Bot de Automatizacion",
    description:
      "Sistema de automatizacion de procesos empresariales con integracion a multiples plataformas y APIs.",
    technologies: ["Python", "FastAPI", "RabbitMQ", "Docker"],
    github: "https://github.com",
    demo: null,
    featured: false,
  },
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Proyectos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Trabajo Destacado
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Una seleccion de proyectos que demuestran mi experiencia en desarrollo 
            de software y resolucion de problemas complejos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all group"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-primary border-primary">
                      Destacado
                    </Badge>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all group"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center justify-end gap-2 mb-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              Ver mas proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
