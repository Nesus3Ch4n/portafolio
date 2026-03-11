import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "Ingeniería en Sistemas",
    institution: "Universidad Santiago de Cali",
    period: "Feb 2020 - Dic 2025",
    description: "Formación integral en ingeniería de software con énfasis en arquitectura de sistemas empresariales y desarrollo full stack. Durante la carrera, implementé proyectos académicos aplicando principios SOLID, MVC y POO, destacando en la optimización de procesos administrativos mediante soluciones tecnológicas escalables. Desarrollé habilidades en análisis de sistemas, modelado de datos y gestión de proyectos de software.",
    achievements: [
      "Implementé sistemas de información para la DGI (Dirección General de Investigación) automatizando procesos administrativos universitarios",
      "Diseñé e implementé el módulo de movilidades académicas para el sistema SIPAC utilizando arquitectura MVC",
      "Desarrollé sistemas de gestión de inventario y portafolios personales aplicando patrones de diseño y buenas prácticas"
    ],
    skills: ["Estructuras de datos", "Bases de datos", "Lenguajes de programación", "Laravel", "Gestión de proyectos", "Arquitectura MVC", "Principios SOLID", "POO"]
  },
  {
    degree: "Desarrollador Web Full Stack Avanzado",
    institution: "Talento Tech",
    period: "Nov 2024 - Ene 2025",
    description: "Programación intensiva enfocada en el desarrollo de aplicaciones web completas con arquitecturas modernas. Aprendí a diseñar e implementar sistemas escalables utilizando Node.js, Express y bases de datos relacionales, aplicando principios de diseño de APIs RESTful y buenas prácticas de desarrollo backend.",
    achievements: [
      "Desarrollé un sistema de radicación de incapacidades laborales como proyecto de grado, digitalizando procesos administrativos manuales",
      "Implementé consumo de APIs y manejo de JSON para integración de servicios",
      "Diseñé la arquitectura backend utilizando Node.js con Express siguiendo el patrón MVC"
    ],
    skills: ["JavaScript", "Node.js", "Express", "Desarrollo de API REST", "Arquitectura backend", "JSON", "Bootstrap"]
  },
  {
    degree: "Técnico Desarrollador de Software",
    institution: "Servicio Nacional de Aprendizaje (SENA)",
    period: "Feb 2017 - Dic 2019",
    description: "Formación técnica enfocada en fundamentos de desarrollo de software, bases de datos relacionales y programación web. Adquirí los cimientos para comprender la arquitectura de sistemas, el modelado de datos y el ciclo de vida del desarrollo de software.",
    achievements: [
      "Desarrollé un proyecto CRUD de tienda virtual de comidas rápidas implementando arquitectura de tres capas (presentación, lógica, datos)",
      "Obtuve el puesto #2 en la Institución Educativa Técnico Industrial Donald Rodrigo Tafur con proyecto de especialista en sistemas",
      "Implementé interfaces web con HTML, CSS y JavaScript integradas con backend en PHP y MySQL"
    ],
    skills: ["Gestión de proyectos web", "Base de datos relacional", "Diseño web", "Desarrollo web", "Metodologías de desarrollo", "PHP", "MySQL", "Arquitectura de 3 capas"]
  }
]

const certifications = [
  {
    name: "Diplomado en Derechos Humanos, Etnoeducacion y Catedra de estudios Afrocolombianos",
    issuer: "Universidad de las Americas y el Caribe Internacional - REMAFRO",
    year: "2026",
    type: "Diplomado"
  },
  {
    name: "Coach para docentes",
    issuer: "Organización Iberoamericana de Coaching",
    year: "2024",
    type: "Certificación"
  },
  {
    name: "Inglés B2",
    issuer: "Grupo Interactivas",
    year: "2024",
    type: "Idioma"
  },
  {
    name: "Photoshop Avanzado",
    issuer: "Grupo Interactivas",
    year: "2024",
    type: "Curso"
  },
  {
    name: "Microsoft Office 365",
    issuer: "Grupo Interactivas",
    year: "2024",
    type: "Curso"
  }
]

const typeTagClasses = `
  px-2 py-0.5 bg-primary/5 text-primary text-[10px] font-medium 
  rounded-full border border-primary/20
  inline-block
`
const uniqueTypes = [...new Set(certifications.map(cert => cert.type))]

export function Education() {
  return (
    <section id="educacion" className="py-24 px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Formacion
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Educacion y Certificaciones
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Formacion academica continua y certificaciones profesionales que respaldan 
            mi expertise tecnico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Educacion</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.degree} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono">{edu.period}</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certificaciones</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <Card key={cert.name} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {cert.issuer}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                       <p className={typeTagClasses}>{cert.type}</p>
                    </div>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
