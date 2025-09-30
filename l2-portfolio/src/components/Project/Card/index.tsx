import { Project } from "@/app/projects/types";
import Link from 'next/link';
import Image from "next/image";

interface Props {
    title: string,
    description: string,
    slug: string,
    logo: string,
}
export default function Card({ title, description, logo, slug }: Props) {
    return (
        <div className="bg-gray-100 text-[#242329] p-4 border-2 border-[#181915] rounded-lg max-w-sm mx-auto">
            <img
                src={logo}
                alt="Logo {name}"
                width={150}
                height={150}
                className="mx-auto w-32 h-32 rounded-full object-cover mb-6"
            />

            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold"> {title} </h2>
            </div>

            <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                {description}
            </p>

            <div className="flex justify-end items-end">
                <Link className="border-2 text-sm  bg-transparent hover:bg-[#181915] hover:text-white transition-colors duration-300 mt-2 p-2 rounded-lg" href={`/projects/${slug}`}>
                    <h2 className="text-md font-semibold ">
                    Ver Projeto
                    </h2>
                </Link>
            </div>
        </div>


    );
}