"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Skill {
  name: string
  status: "mastered" | "learning"
  description: string
  icon: string
}

const skills: Record<string, Skill[]> = {
  frontend: [
    {
      name: "HTML",
      status: "mastered",
      description: "Compétence que je maîtrise pleinement, consolidée par mes projets réalisés.",
      icon: "🌐",
    },
    {
      name: "CSS",
      status: "mastered",
      description: "Compétence que je maîtrise pleinement, consolidée par mes projets réalisés.",
      icon: "🎨",
    },
    {
      name: "JavaScript",
      status: "mastered",
      description: "Compétence que je maîtrise pleinement, consolidée par mes projets réalisés.",
      icon: "📜",
    },
    {
      name: "React.js",
      status: "learning",
      description: "Compétence actuellement en cours d'apprentissage.",
      icon: "⚛️",
    },
    {
      name: "Next.js",
      status: "learning",
      description: "Compétence actuellement en cours d'apprentissage.",
      icon: "⚛️",
    },
    {
      name: "flutter",
      status: "learning",
      description: "Compétence actuellement en cours d'apprentissage.",
      icon: "📱",
    },
  ],
  backend: [
    {
      name: "Node.js",
      status: "mastered",
      description: "Compétence actuellement en cours d'apprentissage.",
      icon: "🟢",
    },
    {
      name: "PHP",
      status: "mastered",
      description: "Compétence que je maîtrise pleinement, consolidée par mes projets réalisés.",
      icon: "🐘",
    },
    {
      name: "MySQL",
      status: "mastered",
      description: "Compétence que je maîtrise pleinement, consolidée par mes projets réalisés.",
      icon: "🗄️",
    },
    {
      name: "MongoDB",
      status: "mastered",
      description: "Compétence actuellement en cours d'apprentissage.",
      icon: "🍃",
    },
    {
      name: "Symphony",
      status: "mastered",
      description: "Compétence actuellement en cours d'apprentissage.",
      icon: "🎵",
    },
    {
      name: "Supabase",
      status: "learning",
      description: "Compétence actuellement en cours d'apprentissage.",
      icon: "💾",
    },
  ],
  divers: [
    {
      name: "Linux",
      status: "mastered",
      description: "Compétence que je maîtrise pleinement, consolidée par mes projets réalisés.",
      icon: "🐧",
    },
    {
      name: "Windows",
      status: "mastered",
      description: "Compétence que je maîtrise pleinement, consolidée par mes projets réalisés.",
      icon: "🪟",
    },
    {
      name: "Wordpress",
      status: "mastered",
      description: "Compétence que je maîtrise pleinement, consolidée par mes projets réalisés.",
      icon: "📝",
    },
  ],
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes Compétences</h2>
            <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
              Ce que je maîtrise aujourd&apos;hui en développement
            </p>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="frontend">Front-end</TabsTrigger>
                <TabsTrigger value="backend">Back-end</TabsTrigger>
                <TabsTrigger value="divers">Divers</TabsTrigger>
              </TabsList>

              {Object.entries(skills).map(([category, categorySkills]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.5,
                              delay: index * 0.1,
                            },
                          },
                        }}
                        className="h-full"
                      >
                        <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-xl flex items-center">
                                <span className="mr-2 text-2xl">{skill.icon}</span>
                                {skill.name}
                              </CardTitle>
                              <Badge variant={skill.status === "mastered" ? "default" : "secondary"}>
                                {skill.status === "mastered" ? "Maîtrisé" : "En apprentissage"}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{skill.description}</p>
                            <div className="mt-4 w-full h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: skill.status === "mastered" ? "100%" : "40%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full rounded-full ${
                                  skill.status === "mastered" ? "bg-primary" : "bg-secondary"
                                }`}
                              />
                            </div>
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
