"use client"

import { OptimizedCarousel } from "@/components/ui/OptimizedCarousel"

export const gnaImages = [
  "assets/images/gna/gna-login.png",
  "assets/images/gna/gna-register.png",
  "assets/images/gna/gna-home.png",
  "assets/images/gna/gna-numbers.png",
  "assets/images/gna/gna.png",
  "assets/images/gna/gna-audit.png",
  "assets/images/gna/gna-roles.png",
  "assets/images/tallermotos/taller-1.png",
  "assets/images/tallermotos/taller-2.png",
]

export const tallerImages = [
 
]

export function GnaGallery() {
  return (
    <section id="gna" className="bg-background/60 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 lg:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Galería Proyectos
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Vistas claves de los ultimos proyectos realizados.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-foreground">
            Sistema GNA - Gane SuperGiros
          </h3>
          <OptimizedCarousel images={gnaImages} alt="Pantalla del sistema GNA" />
        </div>

      </div>
    </section>
  )
}
