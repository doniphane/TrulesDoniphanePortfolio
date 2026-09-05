"use client"
import { useState, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, X, Calendar, Search, Loader2, FolderOpen, ArrowRight } from "lucide-react"
import { projectsData, Project } from "@/data/projects"
import { DemoButton } from "@/components/ui/demo-modal"
import { VersionHistoryModal } from "@/components/ui/version-history-modal"
import { StatusBadge } from "@/components/ui/status-badge"

interface ProjectCardProps {
  project: Project
  index: number
}

function getTechColor(technologyName: string): string {
  const t = technologyName.trim().toLowerCase().replace("#", "")

  const palette: Record<string, string> = {
    "html": "#e34f26",
    "css": "#1572b6",
    "js": "#f7df1e",
    "javascript": "#f7df1e",
    "typescript": "#3178c6",
    "react": "#61dafb",
    "reactjs": "#61dafb",
    "next.js": "#ffffff",
    "nextjs": "#ffffff",
    "next": "#ffffff",
    "tailwind": "#38bdf8",
    "tailwind css": "#38bdf8",
    "php": "#777bb4",
    "mysql": "#4479a1",
    "supabase": "#3ecf8e",
    "superbase": "#3ecf8e",
    "postgresql": "#336791",
    "symfony": "#8e44ad",
    "vue": "#42b883",
    "vuejs": "#42b883",
    "flutter": "#46c6f2",
    "dart": "#0175c2",
    "mobile": "#9c9c9c",
    "api pokemon": "#ffcb05",
  }

  return palette[t] ?? "#3b82f6" // Default to blue
}

const ALL = "all"

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [activeTech, setActiveTech] = useState<string>(ALL)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const projectsPerPage = 6
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const groupedProjects = useMemo(() => {
    const grouped = new Map<string, Project>()
    projectsData.forEach((project: Project) => {
      const key = project.projectKey || project.title
      const existing = grouped.get(key)
      if (!existing || project.id > existing.id) {
        grouped.set(key, project)
      }
    })
    return Array.from(grouped.values()).sort((a, b) => b.id - a.id)
  }, [])

  const techs = useMemo(() => {
    const set = new Set<string>()
    groupedProjects.forEach((p) =>
      p.technologies.forEach((t) => set.add(t))
    )
    return Array.from(set).sort()
  }, [groupedProjects])

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return groupedProjects.filter((project: Project) => {
      if (activeTech !== ALL && !project.technologies.some((t) => t.toLowerCase() === activeTech.toLowerCase())) {
        return false
      }
      if (!query) return true
      const titleMatch = project.title.toLowerCase().includes(query)
      const techMatch = project.technologies.some((tech) => tech.toLowerCase().includes(query))
      return titleMatch || techMatch
    })
  }, [searchQuery, activeTech, groupedProjects])

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = showAllProjects ? (currentPage - 1) * projectsPerPage : 0
  const endIndex = showAllProjects ? startIndex + projectsPerPage : 6
  const displayedProjects: Project[] = filteredProjects.slice(startIndex, endIndex)
  const hasMoreProjects: boolean = filteredProjects.length > 6

  const resetPagination = () => {
    setCurrentPage(1)
    setShowAllProjects(false)
  }

  const handleToggleProjects = () => {
    setIsLoading(true)
    setTimeout(() => {
      setShowAllProjects((prev) => !prev)
      setCurrentPage(1)
      setIsLoading(false)
    }, 300)
  }

  const handlePageChange = (page: number) => {
    setIsLoading(true)
    setCurrentPage(page)
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 150)
    setTimeout(() => setIsLoading(false), 500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
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
          <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 mb-6">
              <FolderOpen className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">03. Projets</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Projets <span className="text-gradient">Récents</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Découvrez une sélection de mes réalisations techniques.
            </p>
          </motion.div>

          {/* Search + Filters */}
          <motion.div variants={itemVariants} className="mx-auto max-w-xl space-y-5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="$ search --project ..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  resetPagination()
                }}
                className="pl-10 font-mono"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => { setActiveTech(ALL); resetPagination() }}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors border ${
                  activeTech === ALL
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                Tous
              </button>
              {techs.slice(0, 8).map((tech) => (
                <button
                  key={tech}
                  onClick={() => { setActiveTech(tech); resetPagination() }}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors border ${
                    activeTech === tech
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {searchQuery && (
              <p className="text-center text-sm text-muted-foreground font-mono">
                <span className="text-primary">$</span> {filteredProjects.length} résultat{filteredProjects.length !== 1 ? "s" : ""} trouvé{filteredProjects.length !== 1 ? "s" : ""}
              </p>
            )}
          </motion.div>

          {/* Project Grid */}
          <motion.div
            key={`page-${currentPage}-${showAllProjects}-${activeTech}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {displayedProjects.map((project: Project, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </motion.div>
          )}

          {hasMoreProjects && !showAllProjects && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex justify-center mt-8"
            >
              <Button size="lg" variant="outline" className="group font-mono uppercase tracking-widest border-primary hover:bg-primary/10 hover:text-primary" onClick={handleToggleProjects} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Chargement...
                  </>
                ) : (
                  <>
                    <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Afficher plus
                  </>
                )}
              </Button>
            </motion.div>
          )}

          {showAllProjects && totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4 mt-8"
            >
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1 || isLoading} className="font-mono uppercase tracking-widest">
                  Précédent
                </Button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      disabled={isLoading}
                      className="min-w-[40px] font-mono"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages || isLoading} className="font-mono uppercase tracking-widest">
                  Suivant
                </Button>
              </div>
              <Button variant="ghost" size="sm" onClick={handleToggleProjects} disabled={isLoading} className="font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground">
                <X className="mr-2 h-4 w-4" />
                Masquer la pagination
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
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex h-full flex-col overflow-hidden border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10" />
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-muted border-b border-border">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono uppercase tracking-widest">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            {new Date(project.date).toLocaleDateString("fr-FR", { year: "numeric", month: "short" })}
          </span>
        </div>
        <h3 className="text-xl font-bold font-mono text-foreground leading-snug mb-2">{project.title}</h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground font-mono">
          &gt; {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 border border-border bg-card px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-foreground/80"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: getTechColor(tech) }} />
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
          {project.link && (
            <Button variant="outline" size="sm" asChild className="flex-1 font-mono uppercase tracking-widest hover:bg-primary/10 hover:text-primary hover:border-primary">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-4 w-4" />
                Voir
              </a>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" size="sm" asChild className="flex-1 font-mono uppercase tracking-widest hover:bg-primary/10 hover:text-primary hover:border-primary">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.demo && (
            <DemoButton demoUrl={project.demo} projectTitle={project.title} />
          )}
          {project.versions && project.versions.length > 0 && (
            <VersionHistoryModal versions={project.versions} projectTitle={project.title} />
          )}
        </div>
      </div>
    </motion.div>
  )
}
