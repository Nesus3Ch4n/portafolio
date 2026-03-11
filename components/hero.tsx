"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { MouseGlowHero } from "@/components/ui/MouseGlow"

const palabras = ['Backend & Arquitectura', 'Frontend & UX', 'DevOps & Cloud', 'Automatización con IA & Analista BD '];

const tagClasses = `
  px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium 
  rounded-full border border-primary/30 
  transition-all duration-300 
  hover:bg-primary/20 hover:border-primary hover:shadow-lg 
  hover:-translate-y-0.5 cursor-default
`;

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-bold text-sm tracking-wider uppercase">
                Ingeniero en Sistemas
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Jesus Felipe Cordoba Echandia
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Construyendo sistemas escalables que transforman datos complejos en decisiones claras.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {palabras.map((palabra, index) => (
                <div key={index} className={tagClasses}>
                  {palabra}
                </div>
              ))}
            </div>

            {/* <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#proyectos">Ver Proyectos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contacto">Contactar</Link>
              </Button>
            </div> */}

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/Nesus3Ch4n"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jesus-felipe-cordoba-echandia-a5160723b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div 
              className="relative cursor-crosshair"
            >
              {/* Círculos principales estáticos */}
              <div className="w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300">
                <div className="w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-card border border-border flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">JC</span>
                  </div>
                </div>
              </div>
              
              {/* Efectos de blur controlados por el MouseProvider */}
              <MouseGlowHero />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="#sobre-mi"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <span className="text-sm mb-2">Descubre mas</span>
            <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}