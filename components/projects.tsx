import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sistema de Generación de Números Aleatorios",
    description:
      "Sistema que automatiza la generación de números para sorteos televisivos (Chontico y Lotería del Valle), reduciendo el tiempo de preparación de 45 minutos a solo 5 minutos. Incluye panel administrativo, sistema de seguridad, gestión de permisos de acceso y autenticación JWT.",
    technologies: ["Angular", "TypeScript", "FastAPI", "Python", "Oracle DB", "Docker", "JWT"],
    github: "https://github.com/Nesus3Ch4n/proyecto-gna-frontend",
    featured: true,
  },
  {
    id: 2,
    title: "Sistema de Paz y Salvo - Portal PAU",
    description:
      "Sistema para validación de paz y salvo de empleados que finalizan su relación laboral en Gane SuperGiros. Implementa autenticación JWT y sistema de notificaciones por email. Desarrollado en 3 meses con resultados eficientes y robustos.",
    technologies: ["Angular", "TypeScript", "FastAPI", "Python", "Oracle DB", "Docker", "JWT"],
    github: "https://github.com/Nesus3Ch4n/paz-y-salvo-Remaked",
    featured: true,
  },
  {
    id: 3,
    title: "Actualización de Datos de Empleados",
    description:
      "Módulo para la plataforma Portal PAU de Gane SuperGiros que permite reescribir y gestionar datos de empleados. Incluye sistema de auditoría, administración de accesos, generación de reportes Excel, paginación y autenticación JWT. Optimizado para alta concurrencia de peticiones en tiempo real.",
    technologies: ["Angular", "TypeScript", "FastAPI", "Python", "Oracle DB", "Docker", "JWT"],
    github: "https://github.com/Nesus3Ch4n/actualizacion-datos-frontend",
    featured: true,
  },
  {
    id: 6,
    title: "Radicación de Incapacidades Laborales",
    description:
      "Aplicación web para digitalizar y agilizar el proceso de radicación de incapacidades laborales, eliminando procesos manuales y en papel. Proyecto de grado para Talento Tech.",
    technologies: ["Node.js", "Express", "HTML", "CSS", "Bootstrap", "MySQL", "APIs REST"],
    github: "https://github.com/JuanPython1/Module_Example_Incapacidades_SIPAC",
    featured: false,
  },
  {
    id: 4,
    title: "SIPAC - Módulo de Movilidades Académicas",
    description:
      "Módulo para el sistema SIPAC de la Universidad Santiago de Cali que automatiza la gestión de movilidades entrantes y salientes de profesores y estudiantes para intercambios académicos.",
    technologies: ["Laravel", "Node.js", "MySQL", "Oracle SQL", "MVC"],
    demo: null,
    featured: false,
  },
  {
    id: 5,
    title: "Sistema de Gestión de Inventario - Biblioteca",
    description:
      "Sistema de optimización de inventario para la biblioteca de la Universidad Santiago de Cali, mejorando el seguimiento y control de recursos bibliográficos.",
    technologies: ["Laravel", "Node.js", "MySQL", "Oracle SQL"],
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
            <Link href="https://github.com/Nesus3Ch4n" target="_blank" rel="noopener noreferrer">
              Hechale un vistazo a mi Github
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
