"use client"
import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, Plus, X, Calendar, Search } from "lucide-react"
import { projectsData, Project } from "@/data/projects"
import { DemoButton } from "@/components/ui/demo-modal"
import { VersionHistoryModal } from "@/components/ui/version-history-modal"
import { StatusBadge } from "@/components/ui/status-badge"

interface ProjectCardProps {
  project: Project
  index: number
}

function getBadgeClassesForTechnology(technologyName: string): string {
  const trimmedName: string = technologyName.trim()
  const lowerCaseName: string = trimmedName.toLowerCase().replace("#", "")

  if (lowerCaseName === "tailwind css" || lowerCaseName === "tailwind") {
    return "border-transparent bg-blue-500 text-white hover:opacity-90"
  }

  if (lowerCaseName === "reactjs" || lowerCaseName === "react") {
    return "border-transparent bg-blue-700 text-white hover:opacity-90"
  }

  if (lowerCaseName === "next.js" || lowerCaseName === "nextjs" || lowerCaseName === "next") {
    return "border-transparent bg-black text-white hover:opacity-90"
  }

  if (lowerCaseName === "php") {
    return "border-transparent bg-purple-600 text-white hover:opacity-90"
  }

  if (lowerCaseName === "mysql") {
    return "border-transparent bg-yellow-500 text-black hover:opacity-90"
  }

  if (lowerCaseName === "supabase" || lowerCaseName === "superbase") {
    return "border-transparent bg-green-600 text-white hover:opacity-90"
  }

  if (lowerCaseName === "html") {
    return "border-transparent bg-orange-500 text-white hover:opacity-90"
  }

  if (lowerCaseName === "css") {
    return "border-transparent bg-blue-400 text-white hover:opacity-90"
  }

  if (lowerCaseName === "js" || lowerCaseName === "javascript") {
    return "border-transparent bg-yellow-400 text-black hover:opacity-90"
  }

  if (lowerCaseName === "typescript") {
    return "border-transparent bg-blue-600 text-white hover:opacity-90"
  }

  return "border-transparent bg-gray-200 text-gray-800 hover:opacity-90"
}

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const groupedProjects = useMemo(() => {
    const grouped = new Map<string, Project[]>()

    projectsData.forEach((project: Project) => {
      const key = project.projectKey || project.title
      if (!grouped.has(key)) {
        grouped.set(key, [])
      }
      grouped.get(key)!.push(project)
    })

    // Convert to array and keep only the latest version for display
    const projectGroups = Array.from(grouped.values()).map(group => {
      return group.sort((a, b) => b.id - a.id)[0] // Keep the latest version
    })

    return projectGroups.sort((a: Project, b: Project) => b.id - a.id)
  }, [])

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) {
      return groupedProjects
    }

    const query = searchQuery.toLowerCase().trim()
    return groupedProjects.filter((project: Project) => {
      const titleMatch = project.title.toLowerCase().includes(query)
      const techMatch = project.technologies.some((tech: string) =>
        tech.toLowerCase().includes(query)
      )
      return titleMatch || techMatch
    })
  }, [searchQuery, groupedProjects])

  const displayedProjects: Project[] = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6)
  const hasMoreProjects: boolean = filteredProjects.length > 6

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
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes Projets Réalisés</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Rechercher par titre ou technologie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''} trouvé{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project: Project, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {hasMoreProjects && (
            <motion.div variants={itemVariants} className="flex justify-center mt-8">
              <Button size="lg" className="group" onClick={() => setShowAllProjects(!showAllProjects)}>
                {showAllProjects ? (
                  <>
                    <X className="mr-2 h-4 w-4" />
                    Afficher moins de projets
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                    Afficher plus de projets
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
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
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image || "/placeholder.svg?height=200&width=400"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <StatusBadge status={project.status} />
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{project.title}</CardTitle>
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(project.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: '2-digit' })}
          </p>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" className={getBadgeClassesForTechnology(tech)}>
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-2">
          {project.link && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Voir le projet
              </a>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code source
              </a>
            </Button>
          )}
          {project.demo && (
            <DemoButton demoUrl={project.demo} projectTitle={project.title} />
          )}
          {project.versions && project.versions.length > 0 && (
            <VersionHistoryModal versions={project.versions} projectTitle={project.title} />
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
