'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Locale, routing } from '@/i18n/routing';

export default function Header() {
    const router = useRouter();
    const locale = useLocale();
    const params = useParams();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const translation = useTranslations("Header");

    function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const nextLocale = e.target.value as Locale;

        router.replace(
            // @ts-expect-error
            { pathname, params },
            { locale: nextLocale }
        );
    }

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
                        <Link href="/" className={linkClasses("/")}> Home </Link>
                        <Link href="/about-me" className={linkClasses('/about-me')}> {translation('0')} </Link>
                        <Link href="/projects" className={linkClasses('/projects')}> {translation('1')} </Link>
 
                        <select
                            value={locale}
                            onChange={onSelectChange}
                            aria-label="Select language"
                            className=" rounded-md  bg-white px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {routing.locales.map((loc) => (
                                <option key={loc} value={loc}>
                                    {loc.toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
