"use client"

import { useRef, useEffect } from "react"
import { useMouse } from "@/components/MouseContext"

interface MouseGlowProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent'
  intensity?: number
  children?: React.ReactNode
}

export function MouseGlow({ 
  className = "", 
  size = 'md',
  color = 'primary',
  intensity = 1,
  children 
}: MouseGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null)
  const { registerGlowElement, mousePosition } = useMouse()

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  }

  const colorClasses = {
    primary: 'bg-primary/30',
    secondary: 'bg-secondary/30',
    accent: 'bg-accent/30'
  }

  useEffect(() => {
    if (glowRef.current) {
      registerGlowElement(glowRef.current)
    }
  }, [registerGlowElement])

  return (
    <div
      ref={glowRef}
      className={`absolute rounded-full blur-2xl pointer-events-none transition-opacity duration-300 ease-out
                 ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      style={{
        opacity: mousePosition.isHovering ? 0.6 * intensity : 0.2,
        willChange: 'transform, opacity'
      }}
    />
  )
}

// Componente para efectos decorativos (como el del Hero)
export function MouseGlowHero() {
  return (
    <>
      <MouseGlow 
        size="lg"
        color="primary"
        intensity={1.2}
        className="-top-4 -right-4"
      />
      <MouseGlow 
        size="lg"
        color="primary"
        intensity={0.8}
        className="-bottom-4 -left-4"
      />
    </>
  )
}