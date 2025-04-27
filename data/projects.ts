export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
  github?: string
}


export const projectsData: Project[] = [
  {
    id: 1,
    title: "Pokedex Shiny ",
    description: "Petit projet personnel faire un pokedex pour compter mes shiny capturer ",
    technologies: ["Next.js", "Tailwind CSS", "Superbase"],
    image: "/pokedex.png",
    link: "https://v0-pokemon-website-delta.vercel.app/",
    github: "https://github.com/doniphane/pokedex-shiny-",
  },
  {
    id: 2,
    title: "GhibliApp-react",
    description: "Une petite application React qui utilise l \'API publique [Studio Ghibli] pour afficher une liste de films. Elle permet de consulter les détails d’un film, de les ajouter en favoris, de rechercher des titres et de trier la liste selon différents critères. .",
    technologies: ["React", "Tailwind CSS",],
    image: "/15.png",
     link: "https://ghibli-app-react.onrender.com/",
    github: "https://github.com/doniphane/ghibli-app-React",
  },
  {
    id: 3,
    title: "WorldExplorer",
    description: "Récupération des flag par APi Rescountry",
    technologies: ["ReactJS", "CSS", "JS", "Html"],
    image: "/WorldExplorer.png",
    link: "https://worldexplorer.onrender.com/",
    github: "https://github.com/doniphane/worldexplorer",
  },
  {
    id: 4,
    title: "Dashboard Admin",
    description: "Un tableau de bord d'administration pour gérer les utilisateurs et les produits.",
    technologies: ["React", "Chart.js", "Tailwind CSS"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/username/admin-dashboard",
  },
  {
    id: 5,
    title: "Application Météo",
    description: "Une application météo qui affiche les prévisions en temps réel.",
    technologies: ["JavaScript", "API OpenWeather", "CSS"],
    image: "/placeholder.svg?height=200&width=400",
    link: "https://example.com/meteo",
    github: "https://github.com/username/weather-app",
  },
  {
    id: 6,
    title: "Jeu de Quiz",
    description: "Un jeu de quiz interactif avec différentes catégories et niveaux.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/username/quiz-game",
  },
  {
    id: 7,
    title: "Application de Notes",
    description: "Une application pour prendre et organiser des notes avec des tags.",
    technologies: ["React", "Firebase", "CSS"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/username/notes-app",
  },
  {
    id: 8,
    title: "Site Vitrine Restaurant",
    description: "Site vitrine pour un restaurant avec menu et réservation.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "/placeholder.svg?height=200&width=400",
    link: "https://example.com/restaurant",
  },
  {
    id: 9,
    title: "Application de Gestion de Tâches",
    description: "Une application pour gérer ses tâches quotidiennes avec priorités.",
    technologies: ["Vue.js", "Vuex", "Firebase"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/username/task-manager",
  },
  {
    id: 10,
    title: "Clone Twitter",
    description: "Un clone de Twitter avec les fonctionnalités de base.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/username/twitter-clone",
  },
]
