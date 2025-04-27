"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Gamepad2, Globe, Laptop, Shield } from "lucide-react"

export default function About() {
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

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#030303] to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/50"></div>
              <span className="px-3 text-primary font-medium">Découvrez</span>
              <div className="h-px w-8 bg-primary/50"></div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos de moi</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="profile" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 max-w-md">
                  <TabsTrigger value="profile" className="flex flex-col items-center gap-2 py-3 px-4">
                    <Globe className="h-5 w-5" />
                    <span>Profil</span>
                  </TabsTrigger>
                  <TabsTrigger value="journey" className="flex flex-col items-center gap-2 py-3 px-4">
                    <Laptop className="h-5 w-5" />
                    <span>Parcours</span>
                  </TabsTrigger>
                  <TabsTrigger value="hobbies" className="flex flex-col items-center gap-2 py-3 px-4">
                    <Gamepad2 className="h-5 w-5" />
                    <span>Passions</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="profile" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-1 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
                          <h3 className="text-2xl font-semibold">Qui suis-je?</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Je m&apos;appelle Doniphane Trules, jeune développeur Web & Web Mobile de 24 ans, passionné
                          par la technologie depuis mon plus jeune âge. Issu d&apos;un BTS en électronique et
                          communication, j&apos;ai décidé de me reconvertir dans le développement Web, une voie dans
                          laquelle je m&apos;épanouis pleinement.
                        </p>
                        <div className="relative">
                          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/30 to-transparent rounded-full"></div>
                          <p className="pl-4 text-muted-foreground leading-relaxed">
                            Après avoir terminé ma formation en développement Web à l&apos;Institut de Formation de la
                            Réunion, je poursuis actuellement mes études pour devenir Concepteur Développeur
                            d&apos;Applications au centre de formation Ariane Formation.
                          </p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/20 to-transparent rounded-full"></div>
                          <p className="pl-4 text-muted-foreground leading-relaxed">
                            En parallèle de mes projets web, je consacre une partie de mon temps libre avec ma team amis  à une de mes
                            passions: les Capture The Flag comme celles proposées par Hack The Box ou TryHackMe.
                            Ces challenges de cybersécurité me permettent d&apos;exercer ma curiosité, de renforcer ma
                            logique et de développer mes compétences en hacking éthique.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="h-full bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-none">
                      <CardContent className="p-6 space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-1 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
                          <h3 className="text-2xl font-semibold">Détails</h3>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3 group">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <span className="text-lg font-semibold">24</span>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Âge</p>
                              <p className="font-medium">24 ans</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 group">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Globe className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Localisation</p>
                              <p className="font-medium">Plate Saint-Leu, Réunion</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 group">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mt-1">
                              <Shield className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Passion</p>
                              <p className="font-medium">Capture The Flag</p>
                              <p className="text-xs text-muted-foreground">(Hack The Box, TryHackMe)</p>
                            
                            </div>
                          </div>

                          <div className="flex items-start gap-3 group">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mt-1">
                              <Cpu className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Passion</p>
                              <p className="font-medium">Réparation Informatique</p>
                              <p className="text-xs text-muted-foreground">& bidouille hardware</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="journey" className="mt-0">
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                        <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                        <div className="mb-2">
                          <Badge className="mb-2">Actuellement</Badge>
                          <h3 className="text-xl font-semibold">
                            Formation Concepteur Développeur d&apos;Applications
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          Je poursuis actuellement cette formation au centre de Formation Ariane Formation  pour approfondir mes compétences en développement et
                          élargir mon expertise et poursuivre la suite de ka formation devellopeur web & web mobile .
                        </p>
                      </div>

                      <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                        <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary/70"></div>
                        <div className="mb-2">
                          <Badge variant="outline" className="mb-2">
                            Précédemment
                          </Badge>
                          <h3 className="text-xl font-semibold">Formation Développeur Web & Web Mobile</h3>
                        </div>
                        <p className="text-muted-foreground">
                          J&apos;ai complété ma formation en développement web à l&apos;Institut de Formation de la
                          Réunion (IFR), où j&apos;ai acquis les bases solides du développement front-end et back-end.
                        </p>
                      </div>

                      <div className="relative pl-8">
                        <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary/50"></div>
                        <div className="mb-2">
                          <Badge variant="outline" className="mb-2">
                            Formation initiale
                          </Badge>
                          <h3 className="text-xl font-semibold">BTS Électronique et Communication</h3>
                        </div>
                        <p className="text-muted-foreground">
                          Ma formation initiale en électronique m&apos;a donné une compréhension approfondie des
                          systèmes informatiques et une approche analytique des problèmes techniques.
                        </p>
                      </div>

                        <div className="relative pl-8">
                        <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary/50"></div>
                        <div className="mb-2">
                          <Badge variant="outline" className="mb-2">
                            Bac Pro
                          </Badge>
                          <h3 className="text-xl font-semibold">Baccalauréat Pro Spécialité Science
Numérique</h3>
                        </div>
                        <p className="text-muted-foreground">
                       Lycée De Trois Bassins La réunion

                        </p>
                      </div>
                      
                      
                      
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hobbies" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Cybersécurité</h3>
                          <p className="text-sm text-muted-foreground">Capture The Flag</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Je participe régulièrement à des challenges de type Capture The Flag sur des plateformes comme
                        Hack The Box et TryHackMe. Ces défis me permettent d&apos;améliorer mes compétences en sécurité
                        informatique, de comprendre les vulnérabilités et de développer une approche éthique du hacking.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">Hack The Box</Badge>
                        <Badge variant="outline">TryHackMe</Badge>
                        <Badge variant="outline">Pentest</Badge>
                        <Badge variant="outline">Sécurité Web</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                          <Cpu className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Hardware & Réparation</h3>
                          <p className="text-sm text-muted-foreground">Bidouille informatique</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Passionné par le matériel informatique, j&apos;aime réparer et optimiser des ordinateurs. Je
                        m&apos;intéresse particulièrement à l&apos;assemblage de PC, au diagnostic de pannes matérielles
                        et à la modification de systèmes pour améliorer leurs performances.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">Assemblage PC</Badge>
                        <Badge variant="outline">Réparation</Badge>
                        <Badge variant="outline">Overclocking</Badge>
                        <Badge variant="outline">Modding</Badge>
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
