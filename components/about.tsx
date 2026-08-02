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
    statusClass: "bg-primary/90 text-white border-primary",
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
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <User className="h-3.5 w-3.5" />
              Présentation
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              À propos <span className="text-gradient">de moi</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Développeur Web & Web Mobile de 25 ans, passionné par la tech depuis toujours — entre code, cybersécurité et matériel.
            </p>
          </motion.div>

          {/* Indicateurs clés */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {quickStats.map((stat) => (
              <Card
                key={stat.label}
                className="border-primary/15 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors"
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold leading-none">{stat.value}</p>
<p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
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
                    <span className="text-xs sm:text-sm">Profil</span>
                  </TabsTrigger>
                  <TabsTrigger value="journey" className="flex flex-col items-center gap-2 py-3">
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-xs sm:text-sm">Parcours</span>
                  </TabsTrigger>
                  <TabsTrigger value="hobbies" className="flex flex-col items-center gap-2 py-3">
                    <Heart className="h-5 w-5" />
                    <span className="text-xs sm:text-sm">Passions</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="profile" className="mt-0">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
                  {/* Bio */}
                  <div className="lg:col-span-3">
                    <Card className="h-full overflow-hidden border-primary/15 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                      <CardContent className="relative p-6 md:p-8">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />
                        <div className="relative mb-6 flex items-center gap-4">
                          <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-primary/40 p-[2px]">
                            <div className="flex h-full w-full items-center justify-center rounded-[1rem] bg-[#05050a] text-2xl font-bold text-primary">
                              DT
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold">Qui suis-je ?</h3>
                            <p className="text-sm text-muted-foreground">Développeur Web & Web Mobile basé à la Réunion</p>
                          </div>
                        </div>
                        <div className="relative space-y-5">
                          <p className="leading-relaxed text-muted-foreground">
                            Je m&apos;appelle Doniphane Trules, Concepteur Développeur d&apos;Applications titulaire de mon diplôme, passionné par la
                            technologie depuis mon plus jeune âge. Issu d&apos;un BTS en électronique et communication, j&apos;ai
                            fait de ma reconversion dans le développement Web une véritable voie d&apos;épanouissement.
                          </p>
                          <p className="leading-relaxed text-muted-foreground">
                            Aujourd&apos;hui diplômé, je développe des sites et des logiciels pour moi-même, mon entourage
                            et toutes les personnes qui en ont besoin. J&apos;allie créativité technique et polyvalence pour
                            apporter des solutions concrètes et utiles au quotidien.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Détails */}
                  <div className="lg:col-span-2">
                    <Card className="h-full border-primary/15 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm hover:border-primary/40 transition-colors">
                      <CardContent className="flex h-full flex-col p-6 md:p-7">
                        <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold">
                          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-primary/30" />
                          Détails
                        </h3>
                        <div className="space-y-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Localisation</p>
                              <p className="font-medium">Plate Saint-Leu, Réunion</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Clapperboard className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Passion</p>
                              <p className="font-medium">Créateur de contenu vidéo</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Wrench className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Passion</p>
                              <p className="font-medium">Réparation Informatique</p>
                              <p className="text-xs text-muted-foreground">Bidouille hardware</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Sparkles className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Passion</p>
                              <p className="font-medium">Intelligence Artificielle</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="journey" className="mt-0">
                <Card className="border-primary/15 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold">
                      <div className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-primary/30" />
                      Mon Parcours
                    </h3>
                    <div className="relative pl-1">
                      <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
                      <div className="space-y-8">
                        {journeyTimeline.map((step) => (
                          <div key={step.title} className="relative flex gap-5">
                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background">
                              <step.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 pb-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="outline" className={`border ${step.statusClass}`}>
                                  {step.status}
                                </Badge>
                              </div>
                              <h4 className="mt-2 text-lg font-semibold leading-snug">{step.title}</h4>
                              {step.place && (
                                <p className="mt-0.5 text-sm text-muted-foreground">{step.place}</p>
                              )}
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {step.description}
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
                  <Card className="overflow-hidden border-primary/15 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                    <CardContent className="p-7">
                      <div className="mb-5 flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/10">
                          <Clapperboard className="h-7 w-7 text-primary" />
                        </div>
                          <h3 className="text-xl font-semibold">Création de contenu vidéo</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Je produit et monte des vidéo pour partager mes projet, ma passion à tout ma communauté qui me suit sur les réseaux.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-primary/30 text-primary">Montage</Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary">Présentation</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-primary/15 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                    <CardContent className="p-7">
                      <div className="mb-5 flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/10">
                          <Wrench className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Réparation Informatique</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Passionné par le matériel, je répare et optimise des ordinateurs : assemblage de PC, diagnostic de pannes
                        et amélioration des performances.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-primary/25 text-primary">Assemblage PC</Badge>
                        <Badge variant="outline" className="border-primary/25 text-primary">Diagnostic</Badge>
                        <Badge variant="outline" className="border-primary/25 text-primary">Optimisation</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-primary/15 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                    <CardContent className="p-7">
                      <div className="mb-5 flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/10">
                          <Sparkles className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Intelligence Artificielle</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Je m&apos;intéresse de près à l&apos;IA et à ses applications pour intégrer des solutions intelligentes et
                        automatisées dans mes projets.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-primary/30 text-primary">Automation</Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary">Chatbots</Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary">Création assistée</Badge>
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
