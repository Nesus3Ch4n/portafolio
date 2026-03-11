import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Mi", href: "#sobre-mi" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Educacion", href: "#educacion" },
  { name: "Blog", href: "#blog" },
  { name: "Contacto", href: "#contacto" },
]

const social = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:carlos@ejemplo.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Link href="#inicio" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CM</span>
              </div>
              <span className="text-foreground font-semibold">Carlos Martinez</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center lg:text-left max-w-xs">
              Ingeniero en Sistemas especializado en desarrollo de software y arquitectura de sistemas.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center gap-4">
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {currentYear} Carlos Martinez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
