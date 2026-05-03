import Image from "next/image"
import Link from "next/link"
import {
  CssIcon,
  ExpressIcon,
  GitHubIcon,
  JsIcon,
  LiveBloksIcon,
  MongoDBIcon,
  NextIcon,
  NodeIcon,
  PostgresIcon,
  PrismaIcon,
  ReactIcon,
  ReduxIcon,
  SequelizeIcon,
  TailwindIcon,
  TsIcon,
  ViteIcon,
  ZustandIcon,
} from "../icons.jsx"

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h2 data-aos="fade-up" className="heading">
        Pro<span className="text-yellow-400">yectos</span>
      </h2>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up">
          <Link className="flex flex-col gap-y-4" href="https://admin-dashboard-ruby-nine-94.vercel.app">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/dashboard.png"
                alt="easy design"
                layout="fill"
                className="object-contain"
              />
            </div>
            <h2 className="text-yellow-400 font-semibold text-[20px] mt-[-2.5rem]">
              Admin Dashboard
            </h2>
          </Link>
          <div className="flex flex-row h-[25px] gap-4">
            <GitHubIcon />
            <NodeIcon />
            <ViteIcon />
            <ReactIcon />
            <TsIcon />
            <TailwindIcon />
          </div>
        </div>

        <div data-aos="fade-up">
          <Link className="flex flex-col gap-y-4" href="https://spotify-clone-ag5m.onrender.com/">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/spotify.png"
                alt="spotify clone"
                layout="fill"
                className="object-contain"
              />
            </div>
            <h2 className="text-yellow-400 font-semibold text-[20px] mt-[-2.5rem]">
              Spotify Clon en tiempo real
            </h2>
          </Link>
          <div className="flex flex-row h-[25px] gap-4">
            <ReactIcon />
            <ViteIcon />
            <TailwindIcon />
            <TsIcon />
            <NodeIcon />
            <ExpressIcon />
            <ZustandIcon />
            <MongoDBIcon />
            <GitHubIcon />
          </div>
        </div>

        <div data-aos="fade-up">
          <Link className="flex flex-col gap-y-4" href="https://pi-client-tau.vercel.app/">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/p3.png"
                alt="easy design"
                layout="fill"
                className="object-contain"
              />
            </div>
            <h2 className="text-yellow-400 font-semibold text-[20px] mt-[-2.5rem]">
              Poke App
            </h2>
          </Link>
          <div className="flex flex-row h-[25px] gap-4">
            <GitHubIcon />
            <NodeIcon />
            <ViteIcon />
            <ReactIcon />
            <JsIcon />
            <ReduxIcon />
            <CssIcon />
            <SequelizeIcon />
            <PostgresIcon />
          </div>
        </div>
        {/* <div data-aos='fade-up'>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image src='/images/p4.jpg' alt='easy design' layout='fill' className='object-contain'/>
          </div>
        </div>
        <div data-aos='fade-up'>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image src='/images/p5.jpg' alt='easy design' layout='fill' className='object-contain'/>
          </div>
        </div>
        <div data-aos='fade-up'>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image src='/images/p1.jpg' alt='easy design' layout='fill' className='object-contain'/>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects
