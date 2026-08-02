"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Smartphone,
  Server,
  Database,
  Leaf,
  Layers,
  Cloud,
  Terminal as TerminalIcon,
  Monitor,
  PenTool,
  Sparkles,
} from "lucide-react"

interface Skill {
  name: string
  description: string
  icon: React.ElementType
}

const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "HTML", description: "Structure sémantique et accessible de mes interfaces.", icon: Braces },
    { name: "CSS", description: "Mise en page moderne, responsive et animations.", icon: Palette },
    { name: "React.js", description: "Composants réutilisables et interfaces réactives.", icon: Atom },
    { name: "Next.js", description: "Applications web full-stack et performance.", icon: Server },
    { name: "Flutter", description: "Applications mobiles multiplateformes.", icon: Smartphone },
  ],
  backend: [
    { name: "Node.js", description: "API et services serveur en JavaScript.", icon: Server },
    { name: "PHP", description: "Développement back-end et CMS.", icon: Braces },
    { name: "MySQL", description: "Modélisation et requêtes de bases de données.", icon: Database },
    { name: "MongoDB", description: "Bases de données NoSQL orientées documents.", icon: Leaf },
    { name: "Symfony", description: "Framework back-end PHP orienté entreprise.", icon: Layers },
    { name: "Supabase", description: "Backend as a service et authentification.", icon: Cloud },
  ],
  divers: [
    { name: "Linux", description: "Environnement de travail et serveurs.", icon: TerminalIcon },
    { name: "Windows", description: "Déploiement et maintenance système.", icon: Monitor },
    { name: "WordPress", description: "Sites vitrines et thèmes personnalisés.", icon: PenTool },
  ],
}

const categories = [
  { key: "frontend", label: "Front-end", icon: Atom },
  { key: "backend", label: "Back-end", icon: Server },
  { key: "divers", label: "Outils & Divers", icon: Sparkles },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="relative py-24 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 glow-cyan-center opacity-60 pointer-events-none" />
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* En-tête */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Code2 className="h-4 w-4" />
              Compétences
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mes <span className="text-gradient">Compétences</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Les technologies que j&apos;utilise pour concevoir des applications web et mobiles performantes.
            </p>
          </motion.div>

          {/* Onglets */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 gap-1 mb-10">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.key} value={cat.key} className="flex items-center justify-center gap-2 py-2.5">
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(skills).map(([category, categorySkills]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                      >
                        <Card className="group h-full overflow-hidden border-primary/15 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-12px_rgba(139,92,246,0.4)]">
                          <CardContent className="flex h-full flex-col p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/10">
                              <skill.icon className="h-6 w-6 text-primary" />
                            </div>

                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                              {skill.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}