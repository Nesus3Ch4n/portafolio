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
    icon: Mail,
    label: "Email",
    value: "carlos@ejemplo.com",
    href: "mailto:carlos@ejemplo.com",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Ciudad de Mexico, Mexico",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/carlosmartinez",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/carlosmartinez",
    href: "https://github.com",
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

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">
              Informacion de Contacto
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.label} className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">
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

          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Enviar Mensaje
                </h3>
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="name">Nombre</FieldLabel>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          required
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="subject">Asunto</FieldLabel>
                      <Input
                        id="subject"
                        placeholder="Asunto del mensaje"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({ ...formState, subject: e.target.value })
                        }
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message">Mensaje</FieldLabel>
                      <Textarea
                        id="message"
                        placeholder="Escribe tu mensaje aqui..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        required
                      />
                    </Field>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
