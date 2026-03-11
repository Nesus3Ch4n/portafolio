import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Arquitectura de Microservicios: Lecciones Aprendidas",
    excerpt:
      "Despues de implementar microservicios en multiples proyectos, comparto las lecciones mas importantes sobre cuando y como adoptar esta arquitectura.",
    date: "15 Feb 2024",
    readTime: "8 min",
    category: "Arquitectura",
    slug: "arquitectura-microservicios-lecciones",
  },
  {
    title: "Optimizacion de Rendimiento en React: Guia Completa",
    excerpt:
      "Tecnicas avanzadas para mejorar el rendimiento de aplicaciones React, desde memo hasta virtualizacion de listas.",
    date: "28 Ene 2024",
    readTime: "12 min",
    category: "Frontend",
    slug: "optimizacion-rendimiento-react",
  },
  {
    title: "CI/CD con GitHub Actions: De Cero a Produccion",
    excerpt:
      "Tutorial paso a paso para configurar pipelines de integracion y despliegue continuo usando GitHub Actions.",
    date: "10 Ene 2024",
    readTime: "15 min",
    category: "DevOps",
    slug: "cicd-github-actions-tutorial",
  },
  {
    title: "Patrones de Diseno en TypeScript Moderno",
    excerpt:
      "Explorando como implementar patrones de diseno clasicos aprovechando las caracteristicas modernas de TypeScript.",
    date: "20 Dic 2023",
    readTime: "10 min",
    category: "Desarrollo",
    slug: "patrones-diseno-typescript",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Blog
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Experiencias y Conocimiento
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Comparto mis experiencias, aprendizajes y reflexiones sobre desarrollo 
            de software, arquitectura y las mejores practicas de la industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="bg-card border-border hover:border-primary/50 transition-all group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-primary border-primary/50">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary text-sm font-medium hover:underline underline-offset-4"
                >
                  Leer mas
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Ver todos los articulos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
