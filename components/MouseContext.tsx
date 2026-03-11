"use client"

import { createContext, useContext, useRef, useEffect, useState, ReactNode } from "react"

interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
  isHovering: boolean
}

interface MouseContextType {
  mousePosition: MousePosition
  registerGlowElement: (element: HTMLElement | null) => void
}

const MouseContext = createContext<MouseContextType | undefined>(undefined)

export function MouseProvider({ children }: { children: ReactNode }) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isHovering: false
  })
  
  const glowElementsRef = useRef<Set<HTMLElement>>(new Set())
  const animationRef = useRef<number>()
  const containerRef = useRef<HTMLDivElement | null>(null)

  const registerGlowElement = (element: HTMLElement | null) => {
    if (element) {
      glowElementsRef.current.add(element)
    }
  }

  useEffect(() => {
    // Crear un contenedor invisible que cubra toda la pantalla
    const container = document.createElement('div')
    container.style.position = 'fixed'
    container.style.top = '0'
    container.style.left = '0'
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.pointerEvents = 'none'
    container.style.zIndex = '9999'
    containerRef.current = container
    document.body.appendChild(container)

    const handleMouseMove = (e: MouseEvent) => {
      // Posición absoluta del mouse
      const x = e.clientX
      const y = e.clientY
      
      // Posición normalizada para efectos (valores entre -1 y 1)
      const normalizedX = (x / window.innerWidth) * 2 - 1
      const normalizedY = (y / window.innerHeight) * 2 - 1
      
      setMousePosition({
        x,
        y,
        normalizedX,
        normalizedY,
        isHovering: true
      })
    }

    const handleMouseLeave = () => {
      setMousePosition(prev => ({
        ...prev,
        isHovering: false
      }))
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (containerRef.current) {
        document.body.removeChild(containerRef.current)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Actualizar posición de los elementos glow
  useEffect(() => {
    if (!mousePosition.isHovering) return

    const updateGlowPositions = () => {
      glowElementsRef.current.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const elementCenterX = rect.left + rect.width / 2
        const elementCenterY = rect.top + rect.height / 2
        
        // Calcular distancia del mouse al centro del elemento
        const distanceX = mousePosition.x - elementCenterX
        const distanceY = mousePosition.y - elementCenterY
        
        // Aplicar transformación basada en la distancia
        const moveX = distanceX * 0.1 // Intensidad del movimiento
        const moveY = distanceY * 0.1
        
        // Calcular opacidad basada en la distancia
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        const maxDistance = Math.max(window.innerWidth, window.innerHeight) * 0.3
        const opacity = Math.max(0.3, 1 - Math.min(distance / maxDistance, 0.7))
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`
        element.style.opacity = opacity.toString()
      })
      
      animationRef.current = requestAnimationFrame(updateGlowPositions)
    }

    animationRef.current = requestAnimationFrame(updateGlowPositions)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  return (
    <MouseContext.Provider value={{ mousePosition, registerGlowElement }}>
      {children}
    </MouseContext.Provider>
  )
}

export function useMouse() {
  const context = useContext(MouseContext)
  if (context === undefined) {
    throw new Error('useMouse debe ser usado dentro de MouseProvider')
  }
  return context
}