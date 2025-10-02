import { faGithub, faInstagram, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="w-full py-5 ">
      <div className="flex items-center justify-center">
        <div className="items-center justify-center p-8">
          <img className="rounded-4xl" src="Lucas Ramos.jpeg" alt="" width={400} height={400} />
          <div className="p-4">
            <div className="flex justify-center space-x-8">
              <a href="https://otaldol2.medium.com/">
                <FontAwesomeIcon icon={faMedium} className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/otaldol2/">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
              <a href="https://github.com/OTalDoL2">
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              </a>
            </div>
          </div>

        </div>
        <div className="leading-relaxed text-black text-3xl ">
          <h1>Olá, eu sou o Lucas</h1>
          <h2>Analista de Dados e</h2>
          <h2>Desenvolvedor Fullstack</h2>
        </div>

      </div>
    </div>
  );
}