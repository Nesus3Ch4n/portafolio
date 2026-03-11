"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Mi", href: "#sobre-mi" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Educacion", href: "#educacion" },
  { name: "Blog", href: "#blog" },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    // Pequeño retraso para asegurar que el DOM está listo
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          // Ordenar entries por su posición en el viewport
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => {
              // Priorizar la sección más cercana al centro del viewport
              const aRect = a.target.getBoundingClientRect()
              const bRect = b.target.getBoundingClientRect()
              const aCenter = Math.abs(aRect.top + aRect.height / 2 - window.innerHeight / 2)
              const bCenter = Math.abs(bRect.top + bRect.height / 2 - window.innerHeight / 2)
              return aCenter - bCenter
            })

          if (visibleEntries.length > 0) {
            const sectionId = visibleEntries[0].target.id
            setActiveSection(sectionId)
          }
        },
        {
          threshold: [0.1, 0.3, 0.5], // Múltiples thresholds para mejor detección
          rootMargin: "-50px 0px -50px 0px", // Margen más pequeño
        }
      )

      // Observar todas las secciones
      navigation.forEach((item) => {
        const sectionId = item.href.replace("#", "")
        const element = document.getElementById(sectionId)
        if (element) {
          observer.observe(element)
        }
      })

      return () => {
        // Limpiar observer
        navigation.forEach((item) => {
          const sectionId = item.href.replace("#", "")
          const element = document.getElementById(sectionId)
          if (element) {
            observer.unobserve(element)
          }
        })
      }
    }, 100) // Pequeño retraso para asegurar que el DOM está listo

    return () => clearTimeout(timeoutId)
  }, [])

  // Función para obtener las clases del link según si está activo
  const getLinkClasses = (href: string) => {
    const sectionId = href.replace("#", "")
    const isActive = activeSection === sectionId
    
    return `
      text-sm font-medium transition-all duration-300
      ${isActive 
        ? 'text-primary shadow-[0_0_10px_rgba(0,123,255,0.5)] drop-shadow-[0_0_8px_rgba(0,123,255,0.8)]' 
        : 'text-muted-foreground hover:text-primary hover:shadow-[0_0_8px_rgba(0,123,255,0.3)]'
      }
    `
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#inicio" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">JC</span>
            </div>
            <span className="text-foreground font-semibold hidden sm:block">Jesus Cordoba</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={getLinkClasses(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="#contacto">Contactar</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => {
              const sectionId = item.href.replace("#", "")
              const isActive = activeSection === sectionId
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary shadow-[0_0_10px_rgba(0,123,255,0.5)] drop-shadow-[0_0_8px_rgba(0,123,255,0.8)]'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <Button asChild className="w-full mt-4">
              <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                Contactar
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}