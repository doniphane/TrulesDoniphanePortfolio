"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-none">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-center space-x-4">
                  
                  {/* Email */}
                  <a href="mailto:trulesdoniphane974@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-12 w-12 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </a>

                  {/* Github (en attente de ton lien) */}
                  <a href="https://github.com/doniphane" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-12 w-12 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">Github</span>
                    </Button>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/doniphane-trules-970638318/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-12 w-12 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                </div>

                <div className="text-center">
                  <Link href="/cv.pdf" target="_blank" download legacyBehavior>
                    <Button size="lg" className="group">
                      <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Télécharger mon CV
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Trules Doniphane. Tous droits réservés.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
