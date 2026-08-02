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
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Send,
  Handshake,
} from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const currentYear = new Date().getFullYear()

  const socials = [
    {
      label: "Email",
      value: "trulesdoniphane974@gmail.com",
      href: "mailto:trulesdoniphane974@gmail.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/doniphane",
      href: "https://github.com/doniphane",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "doniphane-trules",
      href: "https://www.linkedin.com/in/doniphane-trules-970638318/",
      icon: Linkedin,
    },
  ]

  return (
    <section id="contact" className="relative py-24 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 glow-violet pointer-events-none" />
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-14"
        >
          {/* En-tête */}
          <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <MessageCircle className="h-4 w-4" />
              Contact
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Travaillons <span className="text-gradient">ensemble</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un projet en tête ? Besoin d&apos;un site, d&apos;une application ou de conseils ? N&apos;hésitez pas à me contacter,
              je serais ravi d&apos;échanger avec vous.
            </p>
          </motion.div>

          {/* Carte de contact */}
          <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
            <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-card/60 to-secondary/10 backdrop-blur-md">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
              <CardContent className="relative grid grid-cols-1 gap-10 p-8 md:p-12 lg:grid-cols-2">
                {/* CTA */}
                <div className="flex flex-col justify-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/10">
                    <Handshake className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Vous avez un projet ? <span className="text-gradient">Parlons-en.</span>
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Je suis disponible pour développer vos idées : sites vitrines, applications web &amp; mobiles,
                    automatisations et bien plus. Réponse rapide garantie.
                  </p>
                  <a href="mailto:trulesdoniphane974@gmail.com" className="mt-6 inline-block">
                    <Button size="lg" className="group">
                      <Mail className="mr-2 h-4 w-4" />
                      Écrivez-moi
                      <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex flex-col justify-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/40 p-3.5 transition-colors hover:border-primary/40 hover:bg-primary/10"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/10">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">{social.label}</p>
                        <p className="truncate text-sm text-muted-foreground">{social.value}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bas de carte + CV */}
          <motion.div variants={itemVariants} className="mx-auto flex max-w-4xl flex-col items-center gap-6">
            <a href="/cv.pdf" target="_blank" download>
              <Button size="lg" variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Télécharger mon CV
              </Button>
            </a>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
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