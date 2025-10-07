'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const linkClasses = (path: string) =>
        pathname === path
            ? 'block py-2 px-3 text-[#ffffff] bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0'
            : 'block py-2 px-3 text-[#242329] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0';

    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 text-[#242329]">
            <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="/" className="flex items-center space-x-3">
                    <span className="self-center text-2xl font-semibold">L2</span>
                </a>

                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-2xl" />
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-300 ease-in-out`} id="navbar-default">
                    <ul className="flex flex-col text-sm font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        <li> <a href="/" className={linkClasses('/')}>Home</a> </li>
                        <li> <a href="/about-me" className={linkClasses('/about-me')}>Sobre Mim</a> </li>
                        <li> <a href="/projects" className={linkClasses('/projects')}>Projetos</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
