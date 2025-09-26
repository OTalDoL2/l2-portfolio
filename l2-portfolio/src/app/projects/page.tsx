import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-4 bg-indigo-500">    
                <ProjectCard projectName="Rastros 2028" />
                <ProjectCard projectName="Quarentenado" />
                <ProjectCard projectName="ToDoList" />
                <ProjectCard projectName="Registro Inteligente" />
                <ProjectCard projectName="Projetos Residência" />
                <ProjectCard projectName="Integrarte" />
            </div>
        </div>
    );
}