import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trules Doniphane - Portfolio",
  description: "Portfolio de Trules Doniphane, Développeur Web & Web Mobile",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var stored = localStorage.getItem("theme");
              var theme = stored === "light" ? "light" : "dark";
              if (theme === "dark") {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            } catch (e) {}
          })();
        ` }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
