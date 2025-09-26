
interface Props {
    projectName: string
}

export default function ProjectCard({projectName}: Props){
    return(
        <div className="bg-red-500 flex flex-col p-4 pb-8 flex-1 font-sans gap-2">
            <p className="bg-blue-500">
                { projectName }
            </p>
        </div>
    );
}