import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <div className="fixed top-6 right-6 z-50">
          <ModeToggle />
        </div>
        <Hero />
        <div className="section-divider mx-auto max-w-4xl" />
        <About />
        <div className="section-divider mx-auto max-w-4xl" />
        <Skills />
        <div className="section-divider mx-auto max-w-4xl" />
        <Projects />
        <div className="section-divider mx-auto max-w-4xl" />
        <Contact />
      </main>
    </ThemeProvider>
  )
}
