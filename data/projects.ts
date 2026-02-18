export interface ProjectVersion {
  version: string
  date: string
  changes: string[]
  technologies?: string[]
  link?: string
  github?: string
  demo?: string
}

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
  github?: string
  demo?: string
  date: string
  projectKey?: string
  versions?: ProjectVersion[]
  status: "actif" | "inactif"
}


export const projectsData: Project[] = [ {
      id: 19,
    title: "QueenChat APP MOBILE",
    description: `Ma première expérience de développement d'application mobile avec flutter et dart`,
    technologies: ["Flutter", "Dart", "mobile"],
    date: "2026-02-03",
    image: "/queenchat.webp",
    status: "actif",
    github: "https://github.com/doniphane/DEV-MOBILE-queenchatmobile",
    demo: "https://youtu.be/61yANF92EEg",
    projectKey: "QueenChat APP MOBILE",
  
  },{
      id: 18,
    title: "DevChallenge #2026-WEEK-04 ",
    description: `Petit challenge proposer par le youtuber Yohandev sur sont site https://devchallenges.yoandev.co/challenge/2026-week-04/`,
    technologies: ["ReactJS", "Tailwind CSS","API Pokemon"],
    date: "2026-02-03",
    image: "/gemini-2.5-flash-image_create_a_vibrant_wallpaper_featuring_a_variety_of_Pokémon_with_a_bold_and_color-0.webp",
    link: "https://dev-challenge-pokedex-2026-week-04-lei6dmqwh.vercel.app/",
    github: "https://github.com/doniphane/dev-challenge-pokedex--2026-WEEK-04",
    status: "actif",
    demo: "https://youtu.be/VYv7INsB7Cg",
    projectKey: "DevChallenge #2026-WEEK-04",
  
  },{
    id: 17,
    title: "DevChallenge Qualité de l'eau ",
    description: `Petit challenge proposer par le youtuber Yohandev sur sont site https://devchallenges.yoandev.co/ que j'ai relever en realisant une application de suivi de la qualité de l'eau.`,
    technologies: ["VueJS", "Tailwind CSS","API Gouvernementale"],
    date: "2025-12-16",
    image: "/Screenshot 2025-12-16 203004.png",
    link: "https://dev-challenge-qualite-eau.vercel.app/",
    github: "https://github.com/doniphane/devChallenge-qualit--eau?tab=readme-ov-file",
    status: "actif",
    demo: "https://youtu.be/VYv7INsB7Cg",
    projectKey: "DevChallenge Qualité de l'eau",
  
  },{
    id: 16,
    title: "Blog de la Team Kuroizana",
    description: `Plateforme de quiz en ligne pour faire passer des quizz à des  élèves`,
    technologies: ["Nextjs", "Tailwind CSS","PostgreSQL"],
    date: "2025-11-21",
    image: "/16.png",
    link: "https://teamkuroizanablog.vercel.app/",
    github: "",
    status: "actif",
    projectKey: "Team Kuroizana",
  
  },{
    id: 15,
    title: "Acadyo Quizz",
    description: `Plateforme de quiz en ligne pour faire passer des quizz à des  élèves`,
    technologies: ["ReactJS", "Tailwind CSS","Mysql","Symfony"],
    date: "2025-10-01",
    image: "/Acadyoquizz.png",
    link: "https://acadyoquizz.noelsonnelly.xyz/login",
    github: "",
    demo: "https://www.youtube.com/watch?v=-urkSHoTkkI",
    status: "inactif",
    projectKey: "Acadyo Quizz",
  
  },{
    id: 14,
    title: "ShinyLinvingdex",
    description: `Mon pokedex personnel pour compter mes shiny capturer`,
    technologies: ["Nextjs", "Tailwind CSS","PostgreSQL"],
    date: "2025-09-13",
    image: "/ShinyDex.png",
    link: "https://pokelivingdex.noelson-elisa.com/",
    github: "",
    demo: "https://youtu.be/swb4gEdYtEg",
    status: "actif",
    projectKey: "pokedex-shiny",
    versions: [
      {
        version: "v2.0",
        date: "2025-09-13",
        changes: ["Migration vers PostgreSQL", "Nouvelle interface améliorée", "Ajout de fonctionnalités avancées", "Optimisation des performances"],
        technologies: ["Nextjs", "Tailwind CSS","PostgreSQL"],
        link: "https://pokelivingdex.noelson-elisa.com/",
        demo: "https://youtu.be/swb4gEdYtEg"
      }
    ]
  },
  {
    id: 13,
    title: "Commpressimgs",
    description: `Application web statique permettant de convertir un grand volume d'images en un temps record.
`,
    technologies: ["ReactJS", "Tailwind CSS"],
    date: "2025-08-08",
    image: "/Compressimg.png",
    link: "https://compressimg.noelson-elisa.com/",
    github: "",
    demo: "https://www.youtube.com/watch?v=kiCCLAqtImg",
    status: "inactif",
    projectKey: "compressimgs",
    versions: [
      {
        version: "v1.0",
        date: "2025-08-08",
        changes: ["Version initiale de l'application", "Interface de compression d'images", "Intégration de la librairie JavaScript spécialisée", "Traitement en masse d'images"],
        technologies: ["ReactJS", "Tailwind CSS"],
        link: "https://compressimg.noelson-elisa.com/",
        demo: "https://www.youtube.com/watch?v=kiCCLAqtImg"
      },
      {
        version: "v2.0",
        date: "2025-08-08",
        changes: ["Version initiale de l'application", "Interface de compression d'images revue", "Ajout de fonctionnalités avancées", "Optimisation des performances"],
        technologies: ["ReactJS", "Tailwind CSS"],
        link: "https://compressimg.noelson-elisa.com/",
        demo: "https://www.youtube.com/watch?v=kiCCLAqtImg"
      }
    ]
  },
{
    id: 12,
    title: "ChallengeAI365Days",
    description: "Petit projet personnel fun tout les jour mon workflow N8n publie une image générer",
    technologies: ["ReactJS", "Tailwind CSS"],
    date: "2025-07-17",
    image: "/challenge365Day.png",
    link: "https://challenge365days.noelsonnelly.xyz/",
    github: "",
    status: "inactif",
    projectKey: "challenge-ai-365",
    versions: [
      {
        version: "v1.0",
        date: "2025-07-17",
        changes: ["Création du challenge 365 jours", "Interface de galerie d'images", "Intégration avec workflow N8n", "Publication automatique quotidienne"],
        technologies: ["ReactJS", "Tailwind CSS"],
        link: "https://challenge365days.noelsonnelly.xyz/"
      }
    ]
  },{
    id: 11,
    title: "Kuroizana-chat",
    description: "Petit projet personnel d'un chat en temps reel pour discuter avec mes amis de CTF",
    technologies: ["PHP", "Tailwind CSS", "MYSQL"],
    date: "2024-04-15",
    image: "/Kuroizanachat.png",
    link: "https://kuroizanachat.noelson-elisa.com/",
    github: "https://github.com/doniphane/Kuroizana-chat",
    status: "inactif",
    projectKey: "kuroizana-chat",
    versions: [
      {
        version: "v1.0",
        date: "2024-04-15",
        changes: ["Application de chat en temps réel", "Interface utilisateur avec Tailwind CSS", "Base de données MySQL", "Système d'authentification"],
        technologies: ["PHP", "Tailwind CSS", "MYSQL"],
        link: "https://kuroizanachat.noelson-elisa.com/",
        github: "https://github.com/doniphane/Kuroizana-chat"
      }
    ]
  },
  {
    id: 10,
    title: "Pokedex Shiny ",
    description: "Petit projet personnel faire un pokedex pour compter mes shiny capturer ",
    technologies: ["Next.js", "Tailwind CSS", "Superbase"],
    date: "2024-07-20",
    image: "/pokedex.png",
    link: "https://v0-pokemon-website-delta.vercel.app/",
    github: "https://github.com/doniphane/pokedex-shiny-",
    status: "inactif",
    projectKey: "pokedex-shiny",
    versions: [
      {
        version: "v1.0",
        date: "2024-07-20",
        changes: ["Version initiale du Pokédex", "Interface de base pour compter les shinies", "Intégration Supabase"],
        technologies: ["Next.js", "Tailwind CSS", "Superbase"],
        link: "https://v0-pokemon-website-delta.vercel.app/",
        github: "https://github.com/doniphane/pokedex-shiny-"
      }
    ]
  },
  {
    id: 9,
    title: "GhibliApp-react",
    description: "Une petite application React qui utilise l \'API publique [Studio Ghibli] pour afficher une liste de films.",
    technologies: ["React", "Tailwind CSS"],
    date: "2024-02-10",
    image: "/15.png",
    link: "https://ghibli-app-react.onrender.com/",
    github: "https://github.com/doniphane/ghibli-app-React",
    status: "actif",
    projectKey: "ghibli-app",
    versions: [
      {
        version: "v1.0",
        date: "2024-02-10",
        changes: ["Application React complète", "Intégration API Studio Ghibli", "Système de favoris", "Fonctionnalité de recherche et tri"],
        technologies: ["React", "Tailwind CSS"],
        link: "https://ghibli-app-react.onrender.com/",
        github: "https://github.com/doniphane/ghibli-app-React"
      }
    ]
  },
  {
    id: 8,
    title: "WorldExplorer",
    description: "Récupération des flag par APi Rescountry",
    technologies: ["ReactJS", "CSS", "JS", "Html"],
    date: "2023-12-05",
    image: "/WorldExplorer.png",
    link: "https://worldexplorer.onrender.com/",
    github: "https://github.com/doniphane/worldexplorer",
    status: "actif",
    projectKey: "world-explorer",
    versions: [
      {
        version: "v1.0",
        date: "2023-12-05",
        changes: ["Application d'exploration mondiale", "Intégration API REST Countries", "Affichage des drapeaux et informations pays", "Interface responsive"],
        technologies: ["ReactJS", "CSS", "JS", "Html"],
        link: "https://worldexplorer.onrender.com/",
        github: "https://github.com/doniphane/worldexplorer"
      }
    ]
  },
  {
    id: 7,
    title: "Openlibrary",
    description: "Récupération des livres par APi openlibrary.",
    technologies: ["HTML", "CSS", "JS"],
    date: "2023-11-15",
    image: "/14.png",
    link: "https://doniphane.github.io/Ma-bibliotheque/",
    github: "https://github.com/doniphane/Ma-bibliotheque",
    status: "actif",
    projectKey: "openlibrary",
    versions: [
      {
        version: "v1.0",
        date: "2023-11-15",
        changes: ["Bibliothèque virtuelle", "Intégration API OpenLibrary", "Recherche de livres", "Interface de consultation"],
        technologies: ["HTML", "CSS", "JS"],
        link: "https://doniphane.github.io/Ma-bibliotheque/",
        github: "https://github.com/doniphane/Ma-bibliotheque"
      }
    ]
  },
  {
    id: 6,
    title: "🎥 Vidéothèque Ghibli",
    description: "Récupération des flim via une API projet réalisé en formation",
    technologies: ["HTML", "Tailwind CSS", "JS"],
    date: "2023-10-01",
    image: "/13.png",
    link: "https://doniphane.github.io/Ma-videotech/",
    github: "https://doniphane.github.io/Ma-videotech/",
    status: "actif",
    projectKey: "videotheque-ghibli",
    versions: [
      {
        version: "v1.0",
        date: "2023-10-01",
        changes: ["Vidéothèque complète", "Intégration API films Ghibli", "Interface avec Tailwind CSS", "Projet de formation"],
        technologies: ["HTML", "Tailwind CSS", "JS"],
        link: "https://doniphane.github.io/Ma-videotech/",
        github: "https://doniphane.github.io/Ma-videotech/"
      }
    ]
  },
  {
    id: 5,
    title: "RandomUser",
    description: "Récupération du nombre de user via une API projet réalisé en formation",
    technologies: ["HTML", "CSS", "JS"],
    date: "2023-09-12",
    image: "/12.png",
    link: "https://doniphane.github.io/Randomuser-api/",
    github: "https://github.com/doniphane/Randomuser-api",
    status: "actif",
    projectKey: "random-user",
    versions: [
      {
        version: "v1.0",
        date: "2023-09-12",
        changes: ["Générateur d'utilisateurs aléatoires", "Intégration API RandomUser", "Affichage des profils utilisateurs", "Projet de formation"],
        technologies: ["HTML", "CSS", "JS"],
        link: "https://doniphane.github.io/Randomuser-api/",
        github: "https://github.com/doniphane/Randomuser-api"
      }
    ]
  },
  {
    id: 4,
    title: "Calendrier Interactif",
    description: "Projet Agenda Web - Calendrier Interactif",
    technologies: ["HTML", "CSS", "JS", "PHP"],
    date: "2023-08-22",
    image: "/11.png",
    github: "https://github.com/doniphane/Agenda",
    status: "actif",
    projectKey: "calendrier-interactif",
    versions: [
      {
        version: "v1.0",
        date: "2023-08-22",
        changes: ["Calendrier interactif complet", "Gestion d'événements", "Interface utilisateur intuitive", "Backend PHP"],
        technologies: ["HTML", "CSS", "JS", "PHP"],
        github: "https://github.com/doniphane/Agenda"
      }
    ]
  },
  {
    id: 3,
    title: "Tropizzcartour",
    description: "Site fictif de location de voiture",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "PHP"],
    date: "2023-07-18",
    image: "4.png",
    github: "https://github.com/doniphane/Tropizcartours",
    status: "inactif",
    projectKey: "tropizzcartour",
    versions: [
      {
        version: "v1.0",
        date: "2023-07-18",
        changes: ["Site de location de voiture", "Interface avec Tailwind CSS", "Système de réservation", "Backend PHP"],
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "PHP"],
        github: "https://github.com/doniphane/Tropizcartours"
      }
    ]
  },
  {
    id: 2,
    title: "Cybergardien",
    description: "Projet fictif pour une association",
    technologies: ["HTML", "CSS", "JS"],
    date: "2023-06-25",
    image: "/5.png",
    link: "https://doniphane.github.io/Cyber-Gardien-Projet-Assos-Fictif-/",
    github: "https://github.com/doniphane/Cyber-Gardien-Projet-Assos-Fictif-",
    status: "actif",
    projectKey: "cybergardien",
    versions: [
      {
        version: "v1.0",
        date: "2023-06-25",
        changes: ["Site d'association fictive", "Thème cybersécurité", "Interface responsive", "Pages institutionnelles"],
        technologies: ["HTML", "CSS", "JS"],
        link: "https://doniphane.github.io/Cyber-Gardien-Projet-Assos-Fictif-/",
        github: "https://github.com/doniphane/Cyber-Gardien-Projet-Assos-Fictif-"
      }
    ]
  },
  {
    id: 1,
    title: "RestCountry",
    description: "Récupération du nombre de drapeaux via une API",
    technologies: ["HTML", "CSS", "JS"],
    date: "2023-05-30",
    image: "/7.png",
    link: "https://doniphane.github.io/FLag",
    github: "https://github.com/doniphane/FLag",
    status: "actif",
    projectKey: "rest-country",
    versions: [
      {
        version: "v1.0",
        date: "2023-05-30",
        changes: ["Application de drapeaux", "Intégration API REST Countries", "Affichage des drapeaux par pays", "Interface simple et efficace"],
        technologies: ["HTML", "CSS", "JS"],
        link: "https://doniphane.github.io/FLag",
        github: "https://github.com/doniphane/FLag"
      }
    ]
  },
]
