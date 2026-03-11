"use client"

import { OptimizedCarousel } from "@/components/ui/OptimizedCarousel"

export const gnaImages = [
  "/assets/images/gna/gna-login.png",
  "/assets/images/gna/gna-register.png",
  "/assets/images/gna/gna-home.png",
  "/assets/images/gna/gna-numbers.png",
  "/assets/images/gna/gna.png",
  "/assets/images/gna/gna-audit.png",
  "/assets/images/gna/gna-roles.png",
]

export function GnaGallery() {
  return (
    <section id="gna" className="bg-background/60 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 lg:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Galería Proyectos
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Vistas claves de los ultimos proyectos realizados.
          </p>
        </div>

        <OptimizedCarousel images={gnaImages} alt="Pantalla del sistema GNA" />
      </div>
    </section>
  )
}

