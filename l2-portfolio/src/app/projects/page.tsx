import ProjectCard from "@/components/ProjectCard";
import {myProjects} from './data.js';

export default function Projects() {
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-4 bg-indigo-500">
                {myProjects.map(project => (
                    <ProjectCard key={project.id} name={project.name} description={project.description} logo={project.logo} />
                ))}
            </div>
        </div>
    );
}