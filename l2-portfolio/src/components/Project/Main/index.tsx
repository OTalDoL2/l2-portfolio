'use client'
import { Project } from "@/app/projects/types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faMediumM, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface Props {
    project: Project
}


export default function Main({ project }: Props) {
    function getIcon(iconName: string){
        switch(iconName){
            case "Github":
                return faGithub
            case "Youtube":
                return faYoutube
            case "Instagram":
                return faInstagram
            case "Medium":
                return faMediumM
        }
    }

    return (<div className="flex items-center space-x-8">
        <div className="social-project-links">
            <ul>
                {project.link.map((link) => (
                    <li key={link.type} className="flex items-center gap-2">
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <FontAwesomeIcon style={{ color: project.theme[3] }} icon={getIcon(link.type) || faHome} className="text-2xl" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        <div className="pl-10 w-100 space-y-2">

            <h1 className='text-5xl w-100 font-bold'>{project.title}</h1>
            <h2 className="text-lg text-[#7c756a]"> {project.subtitle[0]} </h2>
            <p className="mt-4 text-[#ada79f]">
                {project.subtitle[1]}
            </p>

        </div>

        <img
            src={project.logo}
            alt="Logo Rastros 2028"
            width={350}
            height={350}
            className="object-contain rounded-full"
        />
    </div>)

}