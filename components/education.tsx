import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "Maestria en Ingenieria de Software",
    institution: "Universidad Tecnologica Nacional",
    period: "2020 - 2022",
    description:
      "Especializacion en arquitectura de sistemas distribuidos y metodologias agiles de desarrollo.",
  },
  {
    degree: "Ingenieria en Sistemas Computacionales",
    institution: "Instituto Politecnico Nacional",
    period: "2013 - 2017",
    description:
      "Formacion integral en desarrollo de software, redes y administracion de sistemas.",
  },
]

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2023",
  },
  {
    name: "Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    year: "2023",
  },
  {
    name: "Scrum Master Certified (SMC)",
    issuer: "Scrum Alliance",
    year: "2022",
  },
  {
    name: "MongoDB Developer Associate",
    issuer: "MongoDB",
    year: "2021",
  },
  {
    name: "Oracle Java SE 11 Developer",
    issuer: "Oracle",
    year: "2020",
  },
]

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
