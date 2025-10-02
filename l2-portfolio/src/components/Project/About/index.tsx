import { Project } from "@/app/projects/types";

interface Props {
    project: Project
}

export default function About({ project }: Props) {
    return (
        <div>
            <h1 className="text-4xl">{project.title}</h1>
            <div className="flex justify-center text-justify items-center">
                <img className="rounded-2xl" src={project.logo} alt="" width={250} />
                <h2 className="text-md w-120 p-8">{project.description}</h2>
            </div>
            {project.link.map((link, index) => (
                link.type === "Medium" && (
                    <div className="mt-8" key={index}>
                        <p> Se tiver curiosidade sobre o processo de criação, dá uma olhada no meu <a href={link.url} style={{color: project.theme[3]}}>Medium</a>. Aposto que vai gostar. </p>
                    </div>
                )
            ))}
        </div>
    );
}