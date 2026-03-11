"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import Image from "next/image"

interface OptimizedCarouselProps {
  images: string[]
  alt?: string
  className?: string
  autoPlay?: boolean
  interval?: number
  showThumbnails?: boolean
}

export function OptimizedCarousel({
  images,
  alt = "Imagen",
  className = "",
  autoPlay = true,
  interval = 4000,
  showThumbnails = true,
}: OptimizedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Precargar imágenes cercanas
  useEffect(() => {
    if (typeof window === "undefined" || !images || images.length === 0) return

    const preloadImages = [currentIndex]
    if (currentIndex > 0) preloadImages.push(currentIndex - 1)
    if (currentIndex < images.length - 1) preloadImages.push(currentIndex + 1)

    preloadImages.forEach((index) => {
      const img = new window.Image()
      img.src = images[index]
    })
  }, [currentIndex, images.length])

  // Autoplay optimizado
  useEffect(() => {
    if (!autoPlay || !images || images.length <= 1) return

    let timeoutId: NodeJS.Timeout
    let lastTime = Date.now()

    const scheduleNext = () => {
      const now = Date.now()
      const timeSinceLast = now - lastTime
      const delay = Math.max(0, interval - timeSinceLast)

      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        lastTime = Date.now()
        scheduleNext()
      }, delay)
    }

    scheduleNext()

    return () => clearTimeout(timeoutId)
  }, [autoPlay, interval, images])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  if (!images || images.length === 0) return null

  return (
    <>
      {/* Carrusel principal */}
      <div className={`relative w-full max-w-full sm:max-w-2xl mx-auto ${className}`}>
        <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden rounded-xl bg-muted">
          {/* Indicador de carga */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
          )}

          {/* Imagen actual */}
          <Image
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 768px) 100vw, 800px"
            quality={85}
            priority={currentIndex === 0}
            onLoadingComplete={() => setIsLoading(false)}
          />

          {/* Overlay gradiente */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Botón pantalla completa */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute right-3 top-3 z-10 rounded-lg bg-background/80 p-2 text-foreground shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-background"
            aria-label="Pantalla completa"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          {/* Controles de navegación */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <button
              onClick={goToPrevious}
              className="rounded-full bg-background/80 p-2 text-foreground shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-background"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={goToNext}
              className="rounded-full bg-background/80 p-2 text-foreground shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-background"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Contador */}
          <div className="absolute bottom-3 right-3 rounded-full bg-background/60 px-2 py-1 text-xs font-medium backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-4 bg-primary shadow-[0_0_8px_rgba(0,123,255,0.5)]"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Miniaturas opcionales */}
        {showThumbnails && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 h-10 w-14 sm:h-12 sm:w-16 overflow-hidden rounded-lg border-2 transition-all ${
                  index === currentIndex
                    ? "border-primary shadow-[0_0_8px_rgba(0,123,255,0.5)]"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  width={64}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal pantalla completa */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="relative m-4 h-full max-h-[90vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute -top-10 right-0 z-10 text-foreground/60 transition-colors hover:text-foreground"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative h-full w-full">
              <Image
                src={images[currentIndex]}
                alt={`${alt} ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                quality={90}
                priority
              />
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-3 text-foreground shadow-lg transition-all hover:scale-105 hover:bg-background"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-3 text-foreground shadow-lg transition-all hover:scale-105 hover:bg-background"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

