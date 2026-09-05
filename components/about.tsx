"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  GraduationCap,
  MapPin,
  Heart,
  User,
  BookOpen,
  Terminal,
  Wrench,
  FolderGit2,
  CalendarClock,
  Layers,
  Clapperboard,
  Sparkles,
  ArrowRight,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const quickStats = [
  { icon: FolderGit2, value: "20+", label: "Projets réalisés" },
  { icon: CalendarClock, value: "3+", label: "Années d'expérience" },
  { icon: Terminal, value: "15+", label: "Technologies" },
  { icon: Clapperboard, value: "Vidéo", label: "Contenu créé" },
  { icon: Sparkles, value: "IA", label: "Solutions intelligentes" },
]

const journeyTimeline = [
  {
    icon: GraduationCap,
    year: "2024 — 2025",
    status: "Terminé",
    title: "Concepteur Développeur d'Applications",
    place: "Ariane Formation",
    description:
      "J'ai approfondi mes compétences en développement et élargi mon expertise pour concevoir des applications complètes de A à Z.",
  },
  {
    icon: BookOpen,
    year: "2022 — 2023",
    status: "Terminé",
    title: "Développeur Web & Web Mobile",
    place: "Institut de Formation de la Réunion (IFR)",
    description: "Bases solides acquises en développement front-end et back-end.",
  },
  {
    icon: Layers,
    year: "2020 — 2022",
    status: "Terminé",
    title: "BTS Électronique et Communication",
    place: null,
    description:
      "Compréhension approfondie des systèmes informatiques et approche analytique des problèmes techniques.",
  },
  {
    icon: Wrench,
    year: "2019 — 2020",
    status: "Terminé",
    title: "Bac Pro Sciences Numériques",
    place: "Lycée de Trois Bassins, La Réunion",
    description:
      "Initiation aux technologies numériques et bases de ma reconversion vers le développement web.",
  },
]

const details = [
  { icon: MapPin, label: "Localisation", value: "Plate Saint-Leu, La Réunion" },
  { icon: Clapperboard, label: "Création vidéo", value: "Montage & présentation" },
  { icon: Wrench, label: "Hardware", value: "Assemblage & réparation PC" },
  { icon: Sparkles, label: "Intelligence Artificielle", value: "Automation & chatbots" },
]

const hobbies = [
  {
    icon: Clapperboard,
    title: "Création vidéo",
    desc: "Je produit et monte des vidéos pour partager mes projets et ma passion avec ma communauté.",
    tags: ["Montage", "Présentation"],
  },
  {
    icon: Wrench,
    title: "Réparation Informatique",
    desc: "Passionné par le matériel, je répare et optimise des ordinateurs : assemblage de PC, diagnostic de pannes.",
    tags: ["Assemblage PC", "Diagnostic", "Optimisation"],
  },
  {
    icon: Sparkles,
    title: "Intelligence Artificielle",
    desc: "Je m'intéresse de près à l'IA et à ses applications pour intégrer des solutions intelligentes dans mes projets.",
    tags: ["Automation", "Chatbots", "Création assistée"],
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-24 bg-grain overflow-hidden">
      <div className="absolute inset-0 glow-warm pointer-events-none" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* ─── Header ─── */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-3 block">
              01 — Présentation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              À propos{" "}
              <span className="text-gradient italic">de moi</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Développeur Web & Web Mobile de 25 ans, passionné par la tech
              depuis toujours — entre code, cybersécurité et matériel.
            </p>
          </motion.div>

          {/* ─── Stats bar ─── */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border/40 rounded-2xl overflow-hidden"
          >
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card/60 backdrop-blur-sm p-6 text-center hover:bg-card transition-colors group"
              >
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-[11px] text-muted-foreground tracking-wider uppercase mt-1.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* ─── Bio + Details (2 columns) ─── */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            {/* Bio — 3 cols */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-16 w-16 shrink-0 rounded-full bg-gradient-to-br from-primary to-primary/60 p-[2px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-2xl font-bold text-primary italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                    DT
                  </div>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Doniphane Trules
                  </h3>
                  <p className="text-sm text-primary">
                    Concepteur Développeur d&apos;Applications
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Je m&apos;appelle Doniphane Trules, Concepteur Développeur
                  d&apos;Applications titulaire de mon diplôme, passionné par la
                  technologie depuis mon plus jeune âge. Issu d&apos;un BTS en
                  électronique et communication, j&apos;ai fait de ma reconversion
                  dans le développement Web une véritable voie
                  d&apos;épanouissement.
                </p>
                <p>
                  Aujourd&apos;hui diplômé, je développe des sites et des
                  logiciels pour moi-même, mon entourage et toutes les personnes
                  qui en ont besoin. J&apos;allie créativité technique et
                  polyvalence pour apporter des solutions concrètes et utiles au
                  quotidien.
                </p>
              </div>
            </div>

            {/* Details — 2 cols */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-secondary/30 p-7">
                <h3
                  className="mb-6 flex items-center gap-3 text-lg font-bold text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <div className="h-5 w-0.5 bg-primary rounded-full" />
                  En résumé
                </h3>
                <div className="space-y-5">
                  {details.map((item) => (
                    <div key={item.value} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="font-medium text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Parcours (timeline) ─── */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-0.5 bg-primary rounded-full" />
              <h3
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mon parcours
              </h3>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

              <div className="space-y-8">
                {journeyTimeline.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="relative flex gap-6 group"
                  >
                    {/* Dot */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <step.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-primary tracking-wider">
                          {step.year}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full border border-primary/30 text-primary bg-primary/10">
                          {step.status}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h4>
                      {step.place && (
                        <p className="text-sm text-primary mt-0.5">
                          {step.place}
                        </p>
                      )}
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─── Passions (3 cards) ─── */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-0.5 bg-primary rounded-full" />
              <h3
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mes passions
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {hobbies.map((hobby, i) => (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="p-7">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <hobby.icon className="h-5 w-5" />
                      </div>
                      <h3
                        className="text-lg font-bold text-foreground"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {hobby.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {hobby.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {hobby.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 border border-border/60 bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-foreground/80 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
