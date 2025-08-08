"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

// Interface pour les props du composant DemoModal
interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
  demoUrl: string
  projectTitle: string
}

// Interface pour les props du bouton Demo
interface DemoButtonProps {
  demoUrl: string
  projectTitle: string
}

// Fonction pour convertir une URL YouTube en URL d'embed
function getYouTubeEmbedUrl(url: string): string {
  // Extraire l'ID de la vidéo YouTube
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
  
  if (videoIdMatch) {
    const videoId = videoIdMatch[1]
    return `https://www.youtube.com/embed/${videoId}`
  }
  
  // Si ce n'est pas une URL YouTube valide, retourner l'URL originale
  return url
}

// Composant Modal pour afficher la démonstration
export function DemoModal({ isOpen, onClose, demoUrl, projectTitle }: DemoModalProps) {
  const embedUrl = getYouTubeEmbedUrl(demoUrl)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>
            Démonstration : {projectTitle}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 p-6 pt-0">
          <div className="relative w-full h-full min-h-[400px]">
            <iframe
              src={embedUrl}
              title={`Démonstration de ${projectTitle}`}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Composant bouton pour ouvrir la modal de démonstration
export function DemoButton({ demoUrl, projectTitle }: DemoButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleOpenModal}
        className="flex items-center gap-2"
      >
        <Play className="h-4 w-4" />
        Démo
      </Button>
      
      <DemoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        demoUrl={demoUrl}
        projectTitle={projectTitle}
      />
    </>
  )
} 