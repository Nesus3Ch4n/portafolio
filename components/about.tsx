import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experience = [
  {
    title: "Aprendiz TI (Full Stack Developer + DevOps)",
    company: "Gane SuperGiros · Temporal",
    period: "Abr 2025 - Oct 2025",
    location: "Cali, Valle del Cauca · Presencial",
    description:
      "Desarrollo de 3 proyectos clave para la plataforma interna Portal PAU de Gane SuperGiros, con resultados de alto valor agregado:",
    achievements: [
      "**Sistema de Paz y Salvo**: Implementé un sistema de validación de paz y salvo para empleados que finalizan su relación laboral. Incluye autenticación JWT y sistema de notificaciones por email. Completado en 3 meses con resultados eficientes y robustos.",
      "**Actualización de Datos de Empleados**: Desarrollé y migré un módulo completo para reescribir y gestionar datos de empleados con sistema de auditoría, administración de accesos, generación de reportes Excel, paginación y autenticación JWT. Optimizado para alta concurrencia de peticiones en tiempo real.",
      "**Generación de Números Aleatorios**: Creé un sistema que reduce el tiempo de preparación para los sorteos televisivos de Chontico y Lotería del Valle de 45 minutos a solo 5 minutos. Incluye sistema de seguridad, panel administrativo y gestión de permisos de acceso."
    ],
    technologies: ["Angular", "TypeScript", "FastAPI", "Python", "Oracle DB", "Docker", "JWT"],
  },
  {
    title: "Auxiliar de Investigación en Desarrollo de Software",
    company: "DGI - Universidad Santiago de Cali",
    period: "Feb 2023 - Oct 2024",
    description:
      "Desarrollo de aplicaciones web para optimizar procesos administrativos universitarios. Implementación del módulo de movilidades entrantes y salientes para el sistema SIPAC, automatizando la gestión de intercambios académicos de profesores y estudiantes. Tambien el desarrollo de sistema de optimización de inventario para la biblioteca universitaria, mejorando el seguimiento y control de recursos bibliográficos.",
    technologies: ["Laravel", "Node.js", "MySQL", "Oracle SQL", "MVC"],
  },
  {
    title: "Desarrollador Full Stack - Proyecto de Grado",
    company: "Talento Tech - Universidad Santiago de Cali",
    period: "Nov 2024 - Ene 2025",
    description:
      "Desarrollo de dos versiones de aplicación web para radicación de incapacidades laborales, digitalizando procesos administrativos manuales y tediosos. Implementación de consumo de APIs, JSON y base de datos MySQL",
    technologies: ["Node.js", "Express", "Laravel", "Bootstrap", "MySQL", "APIs REST"],
  },
  {
    title: "Desarrollador - Proyecto de Grado Estudiantil",
    company: "Institución Educativa Técnico Industrial Donald Rodrigo Tafur",
    period: "Feb 2018 - Nov 2019",
    description:
      "Desarrollo de aplicación web para gestión de demandas de comidas rápidas para la empresa Brother's Burger. Proyecto presentado como trabajo de grado para obtener el título de bachiller.",
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
  }
]
export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 lg:px-8 bg-background">
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
            que impactan positivamente en las organizaciones. Con experiencia en 
            desarrollo full stack y automatización de procesos, he trabajado en proyectos 
            que optimizan tiempos y recursos de manera significativa.
          </p>
        </div>

        <div className="relative space-y-8 group/timeline">
          {/* Línea de tiempo con efecto neon */}
          <div className="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 w-0.5 
                        bg-gradient-to-b from-transparent via-primary/20 to-transparent
                        transition-all duration-300 ease-out
                        group-hover/timeline:via-primary group-hover/timeline:shadow-[0_0_15px_rgba(0,123,255,0.5)]
                        will-change-transform will-change-opacity">
          </div>
          
          {experience.map((job, index) => (
            <div key={index} className="relative flex items-start gap-6 md:gap-8 group">
              {/* Icono de timeline con efecto */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full 
                            bg-primary/10 border-2 border-primary text-primary 
                            flex-shrink-0 z-10
                            transition-all duration-300 ease-out
                            group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground
                            group-hover:shadow-[0_0_20px_rgba(0,123,255,0.6)]
                            will-change-transform will-change-shadow">
                <Briefcase className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Contenido */}
              <div className="flex-1 bg-card border border-border rounded-xl p-6 
                            transition-all duration-300 ease-out
                            group-hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(0,123,255,0.15)]
                            hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,123,255,0.2)] 
                            will-change-transform will-change-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {job.title}
                    </h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {job.period}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Achievements condicionales */}
                {job.achievements && job.achievements.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary mb-2">Logros clave:</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span dangerouslySetInnerHTML={{ 
                            __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" 
                           className="border-primary/20 text-primary
                                    transition-all duration-300
                                    hover:bg-primary hover:text-primary-foreground hover:border-primary
                                    hover:shadow-[0_0_12px_rgba(0,123,255,0.4)]
                                    will-change-transform will-change-shadow">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}