'use client'
import { Project } from "@/app/[locale]/projects/types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faMediumM, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface Props {
  project: Project
}

export default function Main({ project }: Props) {

  function getIcon(iconName: string) {
    switch (iconName) {
      case "Github":
        return faGithub
      case "Youtube":
        return faYoutube
      case "Instagram":
        return faInstagram
      case "Medium":
        return faMediumM
      default:
        return faHome
    }
  }

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:justify-between gap-6 p-4 lg:space-x-8 lg:w-250">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 w-full md:w-auto">
        <div className="flex md:flex-col justify-center items-center gap-4 md:gap-2 mt-4 md:mt-0">
          {project.link.map((link) => (
            <a key={link.type} href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                style={{ color: project.theme[3] }}
                icon={getIcon(link.type)}
                className="text-2xl hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        <div className="md:pl-10 flex-1 text-center md:text-left space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <h2 className="text-lg text-[#7c756a]">{project.subtitle[0]}</h2>
          <p className="mt-4 text-[#ada79f]">{project.subtitle[1]}</p>
        </div>
      </div>

      <img
        src={project.logo}
        alt={project.title}
        width={300}
        height={300}
        className="object-contain rounded-full mb-4 md:mb-0"
      />
    </div>
  )
}