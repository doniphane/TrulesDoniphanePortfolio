import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <main className="min-h-screen">
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}
