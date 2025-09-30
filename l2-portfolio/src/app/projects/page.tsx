import Card from "@/components/Project/Card";
import { myProjects as projectsData } from './data';
import { Project } from "./types";

export default function Projects() {
    return (
        <div className="p-8">
            <div className="grid grid-cols-3 gap-4">
                {projectsData.map((project: Project) => (
                    <Card
                        key={project.id}
                        slug={project.slug}
                        title={project.title}
                        description={project.short_description}
                        logo={project.logo}
                    />
                ))}
            </div>
        </div>
    );
}