import Image from "next/image"
import Link from "next/link"
import {
  CssIcon,
  ExpressIcon,
  GitHubIcon,
  JsIcon,
  MongoDBIcon,
  NodeIcon,
  PostgresIcon,
  ReactIcon,
  ReduxIcon,
  SequelizeIcon,
  TailwindIcon,
  TsIcon,
  ViteIcon,
  ZustandIcon,
} from "../icons.jsx"

const techNames: Record<string, string> = {
  GitHubIcon: "GitHub",
  NodeIcon: "Node.js",
  ViteIcon: "Vite",
  ReactIcon: "React",
  TsIcon: "TypeScript",
  TailwindIcon: "Tailwind CSS",
  ExpressIcon: "Express",
  ZustandIcon: "Zustand",
  MongoDBIcon: "MongoDB",
  JsIcon: "JavaScript",
  ReduxIcon: "Redux",
  CssIcon: "CSS",
  SequelizeIcon: "Sequelize",
  PostgresIcon: "PostgreSQL",
  NextIcon: "Next.js",
  PrismaIcon: "Prisma",
  LiveBloksIcon: "LiveBlocks",
}

const projects = [
  {
    title: "Admin Dashboard",
    image: "/images/dashboard.png",
    url: "https://admin-dashboard-ruby-nine-94.vercel.app",
    description:
      "Panel de administración con autenticación, gestión de usuarios y gráficos interactivos en tiempo real.",
    icons: [GitHubIcon, NodeIcon, ViteIcon, ReactIcon, TsIcon, TailwindIcon],
  },
  {
    title: "Spotify Clon",
    image: "/images/spotify.png",
    url: "https://spotify-clone-ag5m.onrender.com/",
    description:
      "Clon de Spotify con reproducción en tiempo real, playlists y sincronización entre dispositivos.",
    icons: [
      ReactIcon,
      ViteIcon,
      TailwindIcon,
      TsIcon,
      NodeIcon,
      ExpressIcon,
      ZustandIcon,
      MongoDBIcon,
    ],
  },
  {
    title: "Poke App",
    image: "/images/p3.png",
    url: "https://pi-client-tau.vercel.app/",
    description:
      "Aplicación de Pokémon con búsqueda, filtrado y detalles de cada personaje con información de la PokeAPI.",
    icons: [
      NodeIcon,
      ViteIcon,
      ReactIcon,
      JsIcon,
      ReduxIcon,
      CssIcon,
      SequelizeIcon,
      PostgresIcon,
    ],
  },
]

const TechIcon = ({ Icon, name }: { Icon: any; name?: string }) => {
  const iconName = Icon?.displayName || Icon?.name || ""
  const techName = techNames[iconName] || name || iconName

  return (
    <div className="relative group/tooltip">
      <div className="p-2 bg-slate-800/60 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:bg-slate-700/60 hover:border-yellow-400/30 transition-all duration-200 hover:scale-110 w-8 h-8 flex items-center justify-center">
        <Icon />
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-slate-200 text-xs rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700/50 shadow-lg">
        {techName}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-700/50" />
      </div>
    </div>
  )
}

const ProjectCard = ({
  title,
  image,
  url,
  description,
  icons,
}: {
  title: string
  image: string
  url: string
  description: string
  icons: any[]
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative bg-slate-900/80 backdrop-blur-xl border border-slate-800/60 rounded-2xl overflow-hidden hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/60 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative aspect-video w-full bg-slate-950/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="relative p-5 flex flex-col gap-3">
        <h3 className="text-yellow-400 font-bold text-xl truncate group-hover:text-yellow-300 transition-colors duration-200">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {icons.map((Icon, idx) => (
            <TechIcon key={idx} Icon={Icon} />
          ))}
        </div>
      </div>
    </Link>
  )
}

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h2 data-aos="fade-up" className="heading">
        Pro<span className="text-yellow-400">yectos</span>
      </h2>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
