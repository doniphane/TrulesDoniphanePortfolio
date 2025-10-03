"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { History, ExternalLink, Github, Calendar } from "lucide-react"
import { ProjectVersion } from "@/data/projects"
import { DemoButton } from "@/components/ui/demo-modal"

interface VersionHistoryModalProps {
  versions: ProjectVersion[]
  projectTitle: string
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

  if (lowerCaseName === "postgresql") {
    return "border-transparent bg-blue-800 text-white hover:opacity-90"
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

export function VersionHistoryModal({ versions, projectTitle }: VersionHistoryModalProps) {
  const [open, setOpen] = useState(false)

  if (!versions || versions.length === 0) {
    return null
  }

  // Sort versions by date (most recent first)
  const sortedVersions = [...versions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <History className="h-4 w-4" />
          Historique ({versions.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Historique des versions - {projectTitle}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {sortedVersions.map((version: ProjectVersion, index: number) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-sm font-semibold">
                    {version.version}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(version.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit'
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {version.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={version.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Voir
                      </a>
                    </Button>
                  )}
                  {version.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={version.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {version.demo && (
                    <DemoButton demoUrl={version.demo} projectTitle={`${projectTitle} ${version.version}`} />
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Nouveautés :</h4>
                  <ul className="space-y-1">
                    {version.changes.map((change: string, changeIndex: number) => (
                      <li key={changeIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1 font-bold">•</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {version.technologies && version.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {version.technologies.map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs ${getBadgeClassesForTechnology(tech)}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {index < sortedVersions.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}