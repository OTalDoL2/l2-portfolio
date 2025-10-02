import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeMerge, faDesktop, faHome, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faMediumM, faWindows, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Card from '../Card';

interface Props {
    technologies: string[]
}

export default function Board({technologies}: Props){
    return(
        <div className="grid grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
                <Card key={index} technology={tech} />
            ))}
        </div>
    );

}