"use client"
import { useState, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ExternalLink,
  Github,
  X,
  Calendar,
  Search,
  Loader2,
  FolderOpen,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react"
import { projectsData, Project } from "@/data/projects"
import { DemoButton } from "@/components/ui/demo-modal"
import { VersionHistoryModal } from "@/components/ui/version-history-modal"
import { StatusBadge } from "@/components/ui/status-badge"

interface ProjectCardProps {
  project: Project
  index: number
  featured?: boolean
}

function getTechColor(technologyName: string): string {
  const t = technologyName.trim().toLowerCase().replace("#", "")
  const palette: Record<string, string> = {
    html: "#e34f26",
    css: "#1572b6",
    js: "#f7df1e",
    javascript: "#f7df1e",
    typescript: "#3178c6",
    react: "#61dafb",
    reactjs: "#61dafb",
    "next.js": "#1a1a1a",
    nextjs: "#1a1a1a",
    next: "#1a1a1a",
    tailwind: "#38bdf8",
    "tailwind css": "#38bdf8",
    php: "#777bb4",
    mysql: "#4479a1",
    supabase: "#3ecf8e",
    superbase: "#3ecf8e",
    postgresql: "#336791",
    symfony: "#8e44ad",
    vue: "#42b883",
    vuejs: "#42b883",
    flutter: "#46c6f2",
    dart: "#0175c2",
    mobile: "#9c9c9c",
    "api pokemon": "#ffcb05",
  }
  return palette[t] ?? "#c2703e"
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
      if (!existing || project.id > existing.id) grouped.set(key, project)
    })
    return Array.from(grouped.values()).sort((a, b) => b.id - a.id)
  }, [])

  const techs = useMemo(() => {
    const set = new Set<string>()
    groupedProjects.forEach((p) => p.technologies.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [groupedProjects])

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return groupedProjects.filter((project: Project) => {
      if (
        activeTech !== ALL &&
        !project.technologies.some(
          (t) => t.toLowerCase() === activeTech.toLowerCase()
        )
      )
        return false
      if (!query) return true
      return (
        project.title.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        )
      )
    })
  }, [searchQuery, activeTech, groupedProjects])

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = showAllProjects
    ? (currentPage - 1) * projectsPerPage
    : 0
  const endIndex = showAllProjects ? startIndex + projectsPerPage : 6
  const displayedProjects: Project[] = filteredProjects.slice(
    startIndex,
    endIndex
  )
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
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 150)
    setTimeout(() => setIsLoading(false), 500)
  }

  return (
    <section id="projects" className="relative py-24 bg-grain overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-3 block">
              03 — Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Mes Projets{" "}
              <span className="text-gradient italic">Réalisés</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Découvrez une sélection de mes réalisations : sites,
              applications web et mobiles, challenges et projets personnels.
            </p>
          </div>

          {/* Search + Filters */}
          <div className="max-w-xl space-y-5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Rechercher un projet ou une technologie..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  resetPagination()
                }}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setActiveTech(ALL)
                  resetPagination()
                }}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTech === ALL
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                Tous
              </button>
              {techs.slice(0, 8).map((tech) => (
                <button
                  key={tech}
                  onClick={() => {
                    setActiveTech(tech)
                    resetPagination()
                  }}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeTech === tech
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground">
                {filteredProjects.length} résultat
                {filteredProjects.length !== 1 ? "s" : ""} trouvé
                {filteredProjects.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Featured Project */}
          {displayedProjects.length > 0 && (
            <motion.div
              key={`featured-${currentPage}-${activeTech}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FeaturedProjectCard project={displayedProjects[0]} />
            </motion.div>
          )}

          {/* Grid of remaining projects */}
          {displayedProjects.length > 1 && (
            <motion.div
              key={`grid-${currentPage}-${showAllProjects}-${activeTech}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {displayedProjects.slice(1).map(
                (project: Project, index: number) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                )
              )}
            </motion.div>
          )}

          {isLoading && (
            <div className="flex justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          )}

          {hasMoreProjects && !showAllProjects && (
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                variant="outline"
                className="group"
                onClick={handleToggleProjects}
                disabled={isLoading}
              >
                <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Afficher plus de projets
              </Button>
            </div>
          )}

          {showAllProjects && totalPages > 1 && (
            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1 || isLoading}
                >
                  Précédent
                </Button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={
                          currentPage === page ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        disabled={isLoading}
                        className="min-w-[40px]"
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || isLoading}
                >
                  Suivant
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleToggleProjects}
                disabled={isLoading}
              >
                <X className="mr-2 h-4 w-4" />
                Masquer la pagination
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Featured Card (full-width magazine spread) ─── */
function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 hover:border-primary/30 transition-all duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* Image side */}
        <div className="relative overflow-hidden bg-muted min-h-[280px] lg:min-h-0">
          <Image
            src={project.image || "/placeholder.svg?height=600&width=800"}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/40 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:hidden" />
          <StatusBadge status={project.status} />

          {/* Index number */}
          <div className="absolute top-5 left-5 text-6xl font-bold text-white/10 font-serif italic select-none">
            01
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-between p-7 md:p-9">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(project.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Projet vedette
              </span>
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold leading-snug text-foreground mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {project.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground/80 rounded-full"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: getTechColor(tech) }}
                  />
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir le projet
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code source
                  </a>
                </Button>
              )}
              {project.demo && (
                <DemoButton
                  demoUrl={project.demo}
                  projectTitle={project.title}
                />
              )}
              {project.versions && project.versions.length > 0 && (
                <VersionHistoryModal
                  versions={project.versions}
                  projectTitle={project.title}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Standard Card ─── */
function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 hover:border-primary/30 transition-all duration-500 ${
        isEven ? "" : "md:mt-8"
      }`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        <StatusBadge status={project.status} />

        {/* Index number overlay */}
        <div className="absolute bottom-3 right-4 text-4xl font-bold text-white/10 font-serif italic select-none">
          {String(index + 2).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {new Date(project.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
            })}
          </span>
        </div>

        <h3
          className="text-xl font-bold leading-snug text-foreground mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>

        <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 border border-border/60 bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-foreground/80 rounded-full"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: getTechColor(tech) }}
              />
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium text-muted-foreground rounded-full border border-border/40">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 border-t border-border/60 pt-4 mt-auto">
          {project.link && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Voir
              </a>
            </Button>
          )}
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
          {project.demo && (
            <DemoButton
              demoUrl={project.demo}
              projectTitle={project.title}
            />
          )}
          {project.versions && project.versions.length > 0 && (
            <VersionHistoryModal
              versions={project.versions}
              projectTitle={project.title}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}
