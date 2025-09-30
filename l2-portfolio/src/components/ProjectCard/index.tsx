import { Project } from "@/app/projects/types";
import Link from 'next/link';
import Image from "next/image";

interface Props {
    title: string,
    description: string,
    slug: string,
    logo: string,
}
export default function ProjectCard({ title, description, logo, slug }: Props) {
    return (
        // <div className="flex flex-col p-4 flex-1 font-sans gap-2 items-center justify-center rounded-xl border border-white">

        //     <Image className="rounded-full" src={logo} alt="logo {name}" width={150} height={150} />
        //     <h1 className="font-medium text-align-left text-2xl">
        //         { title }
        //     </h1>
        //     <p className="">
        //         { description }
        //     </p>
        //     <Link href={`/projects/${slug}`}>
        //       Ver mais
        //     </Link>

        // </div>
        <div className="bg-gray-100 text-[#242329] p-4 border border-blue-500 rounded-lg max-w-sm mx-auto">
            <img
                src={logo}
                alt="Logo {name}"
                width={150}
                height={150}
                className="mx-auto w-32 h-32 rounded-full object-cover mb-4"
            />

            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold"> {title} </h2>
            </div>

            {/* Descrição */}
            <p className="text-sm text-gray-500 line-clamp-3">
                {description}
            </p>

            <div className="flex justify-end items-end mb-2 rounded-lg">
                <Link className="text-sm text-gray-500 " href={`/projects/${slug}`}>
                    <h2 className="text-md font-semibold ">

                    Ver Projeto
                    </h2>
                </Link>
            </div>
        </div>


    );
}