'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const linkClasses = (path: string) => 
        pathname === path 
            ? 'block py-2 px-3 text-[#242329] bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' 
            : 'block py-2 px-3 text-[#242329] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

    return (
        <nav className="fixed pt-4 pb-4 top-0 left-0 w-full bg-white z-50 text-[#242329]">
            <div className="max-w-screen-lg flex items-center justify-between mx-auto">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center font-semibold whitespace-nowrap">L2</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="text-sm font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
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
