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
    { name: "HTML", description: "Structure sémantique et accessible.", icon: Braces },
    { name: "CSS", description: "Mise en page moderne et responsive.", icon: Palette },
    { name: "React.js", description: "Composants réutilisables et réactivité.", icon: Atom },
    { name: "Next.js", description: "Applications full-stack et performance.", icon: Server },
    { name: "Flutter", description: "Applications mobiles multiplateformes.", icon: Smartphone },
  ],
  backend: [
    { name: "Node.js", description: "Services serveur en JavaScript.", icon: Server },
    { name: "PHP", description: "Développement back-end traditionnel.", icon: Braces },
    { name: "MySQL", description: "Modélisation et requêtes SQL.", icon: Database },
    { name: "MongoDB", description: "Bases de données NoSQL.", icon: Leaf },
    { name: "Symfony", description: "Framework PHP robuste.", icon: Layers },
    { name: "Supabase", description: "Backend as a service moderne.", icon: Cloud },
  ],
  divers: [
    { name: "Linux", description: "Administration et serveurs.", icon: TerminalIcon },
    { name: "Windows", description: "Déploiement et maintenance.", icon: Monitor },
    { name: "WordPress", description: "CMS et thèmes personnalisés.", icon: PenTool },
  ],
}

const categories = [
  { key: "frontend", label: "Frontend", icon: Atom },
  { key: "backend", label: "Backend", icon: Server },
  { key: "divers", label: "Outils", icon: Sparkles },
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
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 mb-6">
              <Code2 className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">02. Compétences</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Mes <span className="text-gradient">Stacks</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Les technologies que j&apos;utilise pour concevoir des applications performantes et robustes.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 gap-1 mb-10">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.key} value={cat.key} className="flex items-center justify-center gap-2 py-2.5 font-mono uppercase tracking-widest text-xs">
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(skills).map(([category, categorySkills]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                      >
                        <Card className="group h-full overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] relative">
                          <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
                          <CardContent className="flex h-full flex-col p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                              <skill.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                            </div>

                            <h3 className="text-lg font-bold font-mono text-foreground mb-2">{skill.name}</h3>
                            <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground font-mono">
                              &gt; {skill.description}
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
