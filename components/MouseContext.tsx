"use client"

import { createContext, useContext, useRef, useEffect, useMemo, ReactNode } from "react"

interface GlowOptions {
  intensity?: number
}

interface GlowEntry {
  intensity: number
  tx: number
  ty: number
}

interface MouseGlowRegistry {
  registerGlowElement: (element: HTMLElement, options?: GlowOptions) => () => void
}

const MouseContext = createContext<MouseGlowRegistry | undefined>(undefined)

const IDLE_OPACITY = 0.2

export function MouseProvider({ children }: { children: ReactNode }) {
  const glowElementsRef = useRef<Set<HTMLElement>>(new Set())
  const glowEntriesRef = useRef<WeakMap<HTMLElement, GlowEntry>>(new WeakMap())

  const registerGlowElement = (element: HTMLElement, options?: GlowOptions) => {
    glowElementsRef.current.add(element)
    glowEntriesRef.current.set(element, {
      intensity: options?.intensity ?? 1,
      tx: 0,
      ty: 0,
    })
    return () => {
      glowElementsRef.current.delete(element)
      glowEntriesRef.current.delete(element)
    }
  }

  useEffect(() => {
    const position = { x: 0, y: 0, hovering: false }
    let rafId = 0

    const handleMouseMove = (e: MouseEvent) => {
      position.x = e.clientX
      position.y = e.clientY
      position.hovering = true
    }

    const handleMouseLeave = () => {
      position.hovering = false
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Fase 1: lecturas de layout agrupadas. Fase 2: escrituras agrupadas.
    const updateGlowPositions = () => {
      const elements = Array.from(glowElementsRef.current)
      const measurements = elements.map((element) => ({
        element,
        rect: element.getBoundingClientRect(),
      }))

      const maxDistance =
        Math.max(window.innerWidth, window.innerHeight) * 0.3

      for (const { element, rect } of measurements) {
        const entry = glowEntriesRef.current.get(element)
        if (!entry || rect.width === 0 || rect.height === 0) continue

        // Centro base sin contar el translate ya aplicado
        const baseCenterX = rect.left + rect.width / 2 - entry.tx
        const baseCenterY = rect.top + rect.height / 2 - entry.ty

        if (position.hovering) {
          const distanceX = position.x - baseCenterX
          const distanceY = position.y - baseCenterY

          const targetTx = distanceX * 0.1
          const targetTy = distanceY * 0.1

          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          )
          const targetOpacity = Math.max(
            0.3,
            1 - Math.min(distance / maxDistance, 0.7)
          )

          entry.tx += (targetTx - entry.tx) * 0.15
          entry.ty += (targetTy - entry.ty) * 0.15
          element.style.transform = `translate(${entry.tx}px, ${entry.ty}px)`
          element.style.opacity = (
            targetOpacity * entry.intensity
          ).toString()
        } else {
          // Regreso suave a la posicion base y opacidad idle
          entry.tx += (0 - entry.tx) * 0.15
          entry.ty += (0 - entry.ty) * 0.15
          element.style.transform = `translate(${entry.tx}px, ${entry.ty}px)`
          element.style.opacity = IDLE_OPACITY.toString()
        }
      }

      rafId = requestAnimationFrame(updateGlowPositions)
    }

    rafId = requestAnimationFrame(updateGlowPositions)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const value = useMemo(() => ({ registerGlowElement }), [])

  return (
    <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
  )
}

export function useMouse() {
  const context = useContext(MouseContext)
  if (context === undefined) {
    throw new Error("useMouse debe ser usado dentro de MouseProvider")
  }
  return context
}
