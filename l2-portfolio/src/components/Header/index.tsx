'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const linkClasses = (path: string) => 
        pathname === path 
            ? 'block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' 
            : 'block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

    return (
        <nav className="">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">L2</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                        <li>
                            <a href="/" className={linkClasses('/')}>Home</a>
                        </li>
                        <li>
                            <a href="/sobre-mim" className={linkClasses('/sobre-mim')}>Sobre Mim</a>
                        </li>
                        <li>
                            <a href="/projects" className={linkClasses('/projects')}>Projetos</a>
                        </li>
                        <li>
                            <a href="/contato" className={linkClasses('/contato')}>Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
