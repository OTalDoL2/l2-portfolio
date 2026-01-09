import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

export default function Home() {
  const translation = useTranslations("Home");
  return (
    <div className="w-full py-10 lg:py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <img
            className="rounded-3xl object-cover shadow-lg w-56 h-56 md:w-80 md:h-80"
            src="/Lucas Ramos.jpeg"
            alt="Foto de Lucas Ramos"
          />

          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://otaldol2.medium.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMedium} className="text-2xl hover:text-gray-700 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/otaldol2/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://github.com/OTalDoL2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-900 transition-colors" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left text-gray-900">

          <h1 className="text-3xl md:text-5xl font-bold mb-2"> {translation("title")} </h1>
          {(translation.raw("subtitle") as string[]).map((line, i) => (
            <h2 className="text-xl md:text-3xl" key={i}> {line} </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
