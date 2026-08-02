"use client"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const STORAGE_KEY = "theme"

function applyThemeClass(theme: Theme) {
  const html = document.documentElement
  if (theme === "dark") {
    html.classList.add("dark")
  } else {
    html.classList.remove("dark")
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  // À la première exécution côté client : lit la préférence (stockée sinon système), puis applique
  useEffect(() => {
    let initialTheme: Theme = "dark"
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === "light" || stored === "dark") {
        initialTheme = stored
      } else {
        // Défaut : suivi du système, mais dark-first sur les anciens navigateurs
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        initialTheme = prefersDark ? "dark" : "dark" // Dark-first par défaut
      }
    } catch {
      initialTheme = "dark"
    }

    setThemeState(initialTheme)
    applyThemeClass(initialTheme)
    setMounted(true)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    try {
      localStorage.setItem(STORAGE_KEY, newTheme)
    } catch {
      /* ignore */
    }
    applyThemeClass(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {mounted ? children : null}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    return { theme: "dark" as Theme, setTheme: (() => {}) as (t: Theme) => void }
  }
  return context
}