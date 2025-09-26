import Image from "next/image";

interface Props {
    name: string,
    description: string,
    logo: string,
}

export default function ProjectCard({name, description, logo}: Props){
    return(
        <div className="bg-red-500 flex flex-col p-4 pb-8 flex-1 font-sans gap-2">
            <Image src={logo} alt="logo {name}" width={350} height={350} />
            <p className="bg-blue-500">
                { name }
            </p>
            <p className="bg-green-500">
                { description }
            </p>
        </div>
    );
}