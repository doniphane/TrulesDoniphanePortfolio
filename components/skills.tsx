"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
  Blocks,
  Workflow,
} from "lucide-react"

interface Skill {
  name: string
  description: string
  icon: React.ElementType
  color: string
}

const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "HTML", description: "Structure sémantique et accessible.", icon: Braces, color: "#e34f26" },
    { name: "CSS", description: "Mise en page moderne et responsive.", icon: Palette, color: "#1572b6" },
    { name: "React.js", description: "Composants réutilisables et réactivité.", icon: Atom, color: "#61dafb" },
    { name: "Next.js", description: "Applications full-stack et performance.", icon: Server, color: "#1a1a1a" },
    { name: "Flutter", description: "Applications mobiles multiplateformes.", icon: Smartphone, color: "#46c6f2" },
    { name: "Laravel", description: "Framework PHP élégant et robuste.", icon: Blocks, color: "#ff2d20" },
  ],
  backend: [
    { name: "Node.js", description: "Services serveur en JavaScript.", icon: Server, color: "#68a063" },
    { name: "PHP", description: "Développement back-end traditionnel.", icon: Braces, color: "#777bb4" },
    { name: "Python", description: "Scripts, automatisation et data.", icon: Workflow, color: "#3776ab" },
    { name: "MySQL", description: "Bases de données relationnelles.", icon: Database, color: "#4479a1" },
    { name: "MongoDB", description: "Bases NoSQL orientées documents.", icon: Leaf, color: "#47a248" },
    { name: "Symfony", description: "Framework PHP orienté entreprise.", icon: Layers, color: "#8e44ad" },
    { name: "Supabase", description: "Backend as a service moderne.", icon: Cloud, color: "#3ecf8e" },
  ],
  divers: [
    { name: "Linux", description: "Administration et serveurs.", icon: TerminalIcon, color: "#fcc624" },
    { name: "Windows", description: "Déploiement et maintenance.", icon: Monitor, color: "#00a4ef" },
    { name: "WordPress", description: "CMS et thèmes personnalisés.", icon: PenTool, color: "#21759b" },
    { name: "AI / IA", description: "Intégration de solutions intelligentes.", icon: Sparkles, color: "#c2703e" },
  ],
}

const categories = [
  { key: "frontend", label: "Front-end", count: skills.frontend.length },
  { key: "backend", label: "Back-end", count: skills.backend.length },
  { key: "divers", label: "Outils", count: skills.divers.length },
]

export default function Skills() {
  const [active, setActive] = useState("frontend")
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="relative py-24 bg-muted/20 overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-14"
        >
          {/* Header */}
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-3 block">
              02 — Compétences
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Mes{" "}
              <span className="text-gradient italic">compétences</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Les technologies que j&apos;utilise pour concevoir des
              applications web et mobiles performantes.
            </p>
          </div>

          {/* Category Selector + Content */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar nav */}
            <div className="lg:w-56 shrink-0">
              <div className="flex lg:flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActive(cat.key)}
                    className={`group flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-300 rounded-xl ${
                      active === cat.key
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-card"
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        active === cat.key ? "text-primary-foreground" : ""
                      }`}
                    >
                      {cat.label}
                    </span>
                    <span
                      className={`ml-auto text-xs font-mono px-2 py-0.5 rounded-full ${
                        active === cat.key
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Skills grid */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {skills[active].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                    >
                      <SkillCard skill={skill} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 hover:border-primary/30 transition-all duration-300 p-5">
      {/* Color accent bar */}
      <div
        className="absolute top-0 left-0 h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: skill.color }}
      />

      <div className="flex items-start gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${skill.color}15`,
            color: skill.color,
          }}
        >
          <skill.icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-foreground leading-tight">
            {skill.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  )
}
