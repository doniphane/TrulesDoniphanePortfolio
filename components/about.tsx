"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "lucide-react"

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
    status: "Terminé",
    statusClass: "bg-primary text-primary-foreground border-primary",
    title: "Concepteur Développeur d'Applications",
    place: "Ariane Formation",
    description:
      "Diplôme obtenu : j'ai approfondi mes compétences en développement et élargi mon expertise pour concevoir des applications complètes de A à Z.",
  },
  {
    icon: BookOpen,
    status: "Terminé",
    statusClass: "bg-muted text-muted-foreground border-border",
    title: "Développeur Web & Web Mobile",
    place: "Institut de Formation de la Réunion (IFR)",
    description: "Bases solides acquises en développement front-end et back-end.",
  },
  {
    icon: Layers,
    status: "Diplôme",
    statusClass: "bg-muted text-muted-foreground border-border",
    title: "BTS Électronique et Communication",
    place: null,
    description: "Compréhension approfondie des systèmes informatiques et approche analytique des problèmes techniques.",
  },
  {
    icon: Wrench,
    status: "Bac Pro",
    statusClass: "bg-muted text-muted-foreground border-border",
    title: "Bac Pro Spécialité Sciences Numériques",
    place: "Lycée de Trois Bassins, La Réunion",
    description: "Initiation aux technologies numériques et bases de ma reconversion vers le développement web.",
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
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
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 mb-6">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">01. A Propos</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Qui suis-je <span className="text-gradient">?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Développeur Web & Web Mobile de 25 ans, passionné par la tech depuis toujours — entre code, cybersécurité et matériel.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 md:grid-cols-5"
          >
            {quickStats.map((stat, i) => (
              <Card key={stat.label} className="border-border bg-card/50 hover:border-primary/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <stat.icon className="h-6 w-6 text-primary mb-3" />
                  <p className="text-3xl font-bold font-mono text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="profile" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="w-full max-w-md grid grid-cols-3 gap-1">
                  <TabsTrigger value="profile" className="flex flex-col items-center gap-2 py-3">
                    <User className="h-5 w-5" />
                    <span className="text-xs sm:text-sm uppercase tracking-widest">Profil</span>
                  </TabsTrigger>
                  <TabsTrigger value="journey" className="flex flex-col items-center gap-2 py-3">
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-xs sm:text-sm uppercase tracking-widest">Parcours</span>
                  </TabsTrigger>
                  <TabsTrigger value="hobbies" className="flex flex-col items-center gap-2 py-3">
                    <Heart className="h-5 w-5" />
                    <span className="text-xs sm:text-sm uppercase tracking-widest">Passions</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="profile" className="mt-0">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
                  {/* Bio */}
                  <div className="lg:col-span-3">
                    <Card className="h-full overflow-hidden border-border bg-card hover:border-primary/50 transition-colors relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary" />
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-16 w-16 border border-primary flex items-center justify-center bg-primary/10">
                            <span className="text-2xl font-bold font-mono text-primary">DT</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold font-mono tracking-tight text-foreground">Doniphane Trules</h3>
                            <p className="text-sm text-primary font-mono uppercase tracking-widest">Dev @ La Réunion</p>
                          </div>
                        </div>
                        <div className="space-y-6 text-muted-foreground font-mono text-sm leading-relaxed">
                          <p>
                            &gt; Je m&apos;appelle Doniphane Trules, Concepteur Développeur d&apos;Applications titulaire de mon diplôme, passionné par la
                            technologie depuis mon plus jeune âge. Issu d&apos;un BTS en électronique et communication, j&apos;ai
                            fait de ma reconversion dans le développement Web une véritable voie d&apos;épanouissement.
                          </p>
                          <p>
                            &gt; Aujourd&apos;hui diplômé, je développe des sites et des logiciels pour moi-même, mon entourage
                            et toutes les personnes qui en ont besoin. J&apos;allie créativité technique et polyvalence pour
                            apporter des solutions concrètes et utiles au quotidien.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2">
                    <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />
                      <CardContent className="p-8">
                        <h3 className="mb-8 flex items-center gap-3 text-xl font-bold font-mono text-foreground">
                          <span className="text-primary">[</span> Détails <span className="text-primary">]</span>
                        </h3>
                        <div className="space-y-6 font-mono text-sm">
                          <div className="flex items-center gap-4 group">
                            <div className="flex h-10 w-10 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                              <MapPin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Localisation</p>
                              <p className="font-medium text-foreground">Plate Saint-Leu, Réunion</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 group">
                            <div className="flex h-10 w-10 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                              <Clapperboard className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Passion</p>
                              <p className="font-medium text-foreground">Créateur de contenu vidéo</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 group">
                            <div className="flex h-10 w-10 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                              <Wrench className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Passion</p>
                              <p className="font-medium text-foreground">Réparation Informatique</p>
                              <p className="text-xs text-muted-foreground font-mono">Bidouille hardware</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 group">
                            <div className="flex h-10 w-10 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                              <Sparkles className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Passion</p>
                              <p className="font-medium text-foreground">Intelligence Artificielle</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="journey" className="mt-0">
                <Card className="border-border bg-card hover:border-primary/50 transition-colors relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />
                  <CardContent className="p-8">
                    <h3 className="mb-8 flex items-center gap-3 text-xl font-bold font-mono text-foreground">
                      <span className="text-primary">[</span> Mon Parcours <span className="text-primary">]</span>
                    </h3>
                    <div className="relative pl-1">
                      <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
                      <div className="space-y-8">
                        {journeyTimeline.map((step) => (
                          <div key={step.title} className="relative flex gap-5 group">
                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                              <step.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                            </div>
                            <div className="flex-1 pb-1">
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                <Badge variant="outline" className={`border ${step.statusClass} font-mono uppercase tracking-widest text-[10px] px-2 py-0.5`}>
                                  {step.status}
                                </Badge>
                              </div>
                              <h4 className="text-lg font-bold font-mono text-foreground">{step.title}</h4>
                              {step.place && (
                                <p className="mt-1 text-sm text-primary font-mono">{step.place}</p>
                              )}
                              <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-mono">
                                &gt; {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hobbies" className="mt-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <Card className="border-border bg-card hover:border-primary/50 transition-colors relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <CardContent className="p-8">
                      <div className="mb-6 flex gap-4 items-center">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                          <Clapperboard className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-mono text-foreground">Création vidéo</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground font-mono mb-6">
                        &gt; Je produit et monte des vidéos pour partager mes projets et ma passion avec ma communauté.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-primary/30 text-primary font-mono">Montage</Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary font-mono">Présentation</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card hover:border-primary/50 transition-colors relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <CardContent className="p-8">
                      <div className="mb-6 flex gap-4 items-center">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                          <Wrench className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-mono text-foreground">Hardware</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground font-mono mb-6">
                        &gt; Passionné par le matériel, je répare et optimise des ordinateurs et assemblages PC.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-primary/30 text-primary font-mono">Assemblage</Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary font-mono">Diagnostic</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card hover:border-primary/50 transition-colors relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <CardContent className="p-8">
                      <div className="mb-6 flex gap-4 items-center">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                          <Sparkles className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-mono text-foreground">Intelligence Artificielle</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground font-mono mb-6">
                        &gt; Intégration de solutions intelligentes et automatisées dans mes projets web.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-primary/30 text-primary font-mono">Automation</Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary font-mono">Chatbots</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
