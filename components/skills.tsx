import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Database, 
  Cloud, 
  Server, 
  Smartphone, 
  GitBranch,
  Shield,
  Cpu
} from "lucide-react"

const skillCategories = [
  {
    title: "Lenguajes de Programacion",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go"],
  },
  {
    title: "Frontend",
    icon: Smartphone,
    skills: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Django", "Spring Boot", ".NET Core", "FastAPI"],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    title: "Control de Versiones",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Git Flow", "Code Review"],
  },
  {
    title: "Seguridad",
    icon: Shield,
    skills: ["OAuth 2.0", "JWT", "OWASP", "SSL/TLS", "Penetration Testing", "Encryption"],
  },
  {
    title: "Arquitectura",
    icon: Cpu,
    skills: ["Microservicios", "REST APIs", "GraphQL", "Event-Driven", "DDD", "Clean Architecture"],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Habilidades Tecnicas
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stack Tecnologico
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Dominio de tecnologias modernas y herramientas que permiten crear 
            soluciones robustas, escalables y mantenibles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
