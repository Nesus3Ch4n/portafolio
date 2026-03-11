import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { GnaGallery } from "@/components/gna-gallery"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <GnaGallery />
      <Projects />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
