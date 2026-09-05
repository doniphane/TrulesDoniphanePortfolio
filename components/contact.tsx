"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Youtube,
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Send,
} from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const currentYear = new Date().getFullYear()

  const socials = [
    { label: "Email", value: "trulesdoniphane974@gmail.com", href: "mailto:trulesdoniphane974@gmail.com", icon: Mail },
    { label: "GitHub", value: "github.com/doniphane", href: "https://github.com/doniphane", icon: Github },
    { label: "LinkedIn", value: "doniphane-trules", href: "https://www.linkedin.com/in/doniphane-trules-970638318/", icon: Linkedin },
    { label: "YouTube", value: "@noelson9749", href: "https://www.youtube.com/@noelson9749/videos", icon: Youtube },
  ]

  return (
    <section id="contact" className="relative py-24 bg-muted/20 overflow-hidden">
      <div className="container relative px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-14"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-3 block">
              04 — Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Travaillons <span className="text-gradient italic">ensemble</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Un projet en tête ? Besoin d&apos;un site, d&apos;une application ou de conseils ? N&apos;hésitez pas à me contacter,
              je serais ravi d&apos;échanger avec vous.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div variants={itemVariants}>
            <Card className="relative overflow-hidden border-border/60 bg-card/50">
              <CardContent className="grid grid-cols-1 gap-10 p-8 md:p-12 lg:grid-cols-2">
                {/* CTA */}
                <div className="flex flex-col justify-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold font-serif mb-3">
                    Vous avez un projet ?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Je suis disponible pour développer vos idées : sites vitrines, applications web &amp; mobiles,
                    automatisations et bien plus. Réponse rapide garantie.
                  </p>
                  <a href="mailto:trulesdoniphane974@gmail.com" className="inline-block">
                    <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                      <Mail className="mr-2 h-4 w-4" />
                      Écrivez-moi
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>

                {/* Socials */}
                <div className="flex flex-col justify-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-border/60 bg-muted/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <social.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{social.label}</p>
                        <p className="truncate text-sm font-medium text-foreground">{social.value}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CV & Location */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
            <a href="/cv.pdf" target="_blank" download>
              <Button size="lg" variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Télécharger mon CV
              </Button>
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Plate Saint-Leu, La Réunion
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="border-t border-border/60 pt-8 text-center text-sm text-muted-foreground"
          >
            <p>© {currentYear} Trules Doniphane. Tous droits réservés.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
