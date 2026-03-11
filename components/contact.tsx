"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Colombia, Cali",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Jesus Felipe Cordoba Echandia",
    href: "https://www.linkedin.com/in/jesus-felipe-cordoba-echandia-a5160723b/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Nesus3Ch4n",
    href: "https://github.com/Nesus3Ch4n",
  },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({ name: "", email: "", subject: "", message: "" })
    alert("Mensaje enviado correctamente. Te contactare pronto.")
  }

  return (
    <section id="contacto" className="py-24 px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Estoy disponible para proyectos freelance, colaboraciones o 
            simplemente para conversar sobre tecnologia. No dudes en contactarme.
          </p>
        </div>
  
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center lg:text-left">
              Informacion de Contacto
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.label} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors font-medium break-words"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium break-words">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
