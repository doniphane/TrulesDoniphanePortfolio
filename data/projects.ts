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
    title: "ChallengeAI365Days",
    description: "Petit projet personnel fun tout les jour mon workflow N8n publie une image générer",
    technologies: ["ReactJS", "Tailwind CSS", ],
    image: "/challenge365Day.png",
    link: "https://challenge365days.noelsonnelly.xyz/",
    github: "",
  },{
    id: 2,
    title: "Kuroizana-chat",
    description: "Petit projet personnel d'un chat en temps reel pour discuter avec mes amis de CTF",
    technologies: ["PHP", "Tailwind CSS", "MYSQL"],
    image: "/Kuroizanachat.png",
    link: "https://kuroizanachat.noelson-elisa.com/",
    github: "https://github.com/doniphane/Kuroizana-chat",
  },
  {
    id: 3,
    title: "Pokedex Shiny ",
    description: "Petit projet personnel faire un pokedex pour compter mes shiny capturer ",
    technologies: ["Next.js", "Tailwind CSS", "Superbase"],
    image: "/pokedex.png",
    link: "https://v0-pokemon-website-delta.vercel.app/",
    github: "https://github.com/doniphane/pokedex-shiny-",
  },
  {
    id: 4,
    title: "GhibliApp-react",
    description: "Une petite application React qui utilise l \'API publique [Studio Ghibli] pour afficher une liste de films. Elle permet de consulter les détails d’un film, de les ajouter en favoris, de rechercher des titres et de trier la liste selon différents critères. .",
    technologies: ["React", "Tailwind CSS",],
    image: "/15.png",
     link: "https://ghibli-app-react.onrender.com/",
    github: "https://github.com/doniphane/ghibli-app-React",
  },
  {
    id: 5,
    title: "WorldExplorer",
    description: "Récupération des flag par APi Rescountry",
    technologies: ["ReactJS", "CSS", "JS", "Html"],
    image: "/WorldExplorer.png",
    link: "https://worldexplorer.onrender.com/",
    github: "https://github.com/doniphane/worldexplorer",
  },
  {
    id: 6,
    title: "Openlibrary",
    description: "Récupération des livres par APi openlibrary.",
    technologies: ["#HTML", "#CSS", "#JS"],
    image: "/14.png",
     link: "https://doniphane.github.io/Ma-bibliotheque/",
    github: "https://github.com/doniphane/Ma-bibliotheque",
  },
  {
    id: 7,
    title: "🎥 Vidéothèque Ghibli",
    description: "Récupération des flim via une API projet réalisé en formation",
    technologies: ["HTML", "Tailwind CSS", "JS"],
    image: "/13.png",
    link: "https://doniphane.github.io/Ma-videotech/",
    github: "https://doniphane.github.io/Ma-videotech/",
  },
  {
    id: 8,
    title: "RandomUser",
    description: "Récupération du nombre de user via une API projet réalisé en formation",
    technologies: ["HTML", "CSS", "JS"],
    image: "/12.png",
     link: "https://doniphane.github.io/Randomuser-api/",
    github: "https://github.com/doniphane/Randomuser-api",
  },
  {
    id: 9,
    title: "Calendrier Interactif",
    description: "Projet Agenda Web - Calendrier Interactif",
    technologies: ["HTML", "CSS", "JS", "PHP"],
    image: "/11.png",
    github: "https://github.com/doniphane/Agenda",
  },
  {
    id: 10,
    title: "Tropizzcartour",
    description: "Site fictif de location de voiture",
    technologies: ["HTML", "tailwind CSS ", "JavaScript", "PHP"],
    image: "4.png",
    github: "https://github.com/doniphane/Tropizcartours",
  },
  {
    id: 11,
    title: "Cybergardien",
    description: "Projet fictif pour une association",
    technologies: ["HTML", "CSS", "JS"],
    image: "/5.png",
    link : "https://doniphane.github.io/Cyber-Gardien-Projet-Assos-Fictif-/",
    github: "https://github.com/doniphane/Cyber-Gardien-Projet-Assos-Fictif-",
  },
  {
    id: 12,
    title: "RestCountry",
    description: "Récupération du nombre de drapeaux via une API",
    technologies: ["HTML", "CSS", "JS"],
    image: "/7.png",
    link: "https://doniphane.github.io/FLag",
    github: "https://github.com/doniphane/FLag",
  },
]
