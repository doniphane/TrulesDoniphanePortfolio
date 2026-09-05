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
  Terminal,
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
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-14"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 mb-6">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">04. Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Parlons <span className="text-gradient">Projet</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Vous avez une idée ou un défi technique ? Échangeons sur la manière dont je peux vous aider à le concrétiser.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
            <Card className="relative overflow-hidden border-border bg-card hover:border-primary/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
              
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full border border-border bg-muted" />
                <div className="w-2.5 h-2.5 rounded-full border border-border bg-muted" />
                <div className="w-2.5 h-2.5 rounded-full border border-border bg-muted" />
              </div>

              <CardContent className="grid grid-cols-1 gap-10 p-8 md:p-12 lg:grid-cols-2">
                {/* CTA */}
                <div className="flex flex-col justify-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center border border-border bg-muted/50">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono tracking-tight text-foreground mb-4">
                    Vous avez un projet ?
                  </h3>
                  <div className="font-mono text-sm text-muted-foreground mb-8 space-y-3">
                    <p>&gt; Je suis disponible pour développer vos idées : sites vitrines, applications web &amp; mobiles, automatisations.</p>
                    <p>&gt; Réponse rapide garantie.</p>
                  </div>
                  <a href="mailto:trulesdoniphane974@gmail.com" className="inline-block">
                    <Button size="lg" className="group font-mono uppercase tracking-widest bg-primary hover:bg-primary/90">
                      <Mail className="mr-2 h-4 w-4" />
                      Écrivez-moi
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>

                {/* Socials */}
                <div className="flex flex-col justify-center gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-card group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                        <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-1">{social.label}</p>
                        <p className="truncate text-sm font-mono text-foreground">{social.value}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CV & Location */}
          <motion.div variants={itemVariants} className="mx-auto flex max-w-4xl flex-col items-center gap-6">
            <a href="/cv.pdf" target="_blank" download>
              <Button size="lg" variant="outline" className="group font-mono uppercase tracking-widest border-border hover:border-primary hover:bg-primary/10 hover:text-primary">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Télécharger CV
              </Button>
            </a>

            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <MapPin className="h-4 w-4 text-primary" />
              Plate Saint-Leu, La Réunion
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="border-t border-border pt-8 text-center text-xs font-mono text-muted-foreground uppercase tracking-widest"
          >
            <p>© {currentYear} Trules Doniphane. Tous droits réservés.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
