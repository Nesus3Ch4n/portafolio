import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"


const social = [
  {
    name: "GitHub",
    href: "https://github.com/Nesus3Ch4n",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jesus-felipe-cordoba-echandia-a5160723b/",
    icon: Linkedin,
  }
]
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Primera fila: Logo + Redes Sociales */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo y frase - Centrado siempre */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Link href="#inicio" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">JC</span>
              </div>
              <span className="text-foreground font-semibold">Jesus Cordoba</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              En cada software desarrollado reside una galaxia de historias; permite que la fuerza me guíe para ser parte de la tuya.
            </p>
          </div>

          {/* Redes Sociales - Centrado siempre */}
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

        {/* Segunda fila: Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {currentYear} Jesus Felipe Cordoba Echandia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}