interface Props {
    technology: string
}

export default function Card({ technology }: Props) {
    function getTechnologyIcon(tech: string) {
        console.log(tech)
        let image_name: string = ""
        if (tech === "Adobe Photoshop") {
            image_name = "adobe-photoshop"
        } else if (tech === "C#") {
            image_name = "c-sharp"
        } else if (tech === "ReactJS" || tech === "React Native" || tech === "Redux" || tech === "Styled-Components") {
            image_name = "react"
        } else if (tech === "TkInter" || tech === "Pandas" ) {
            image_name = "python-programming"
        } else if (tech === "Javascript") {
            image_name = "js"

        } else if (tech === "Mapbox" || tech === "Unity" || tech === "Windows Forms") {
            image_name = "application"
        } else {
            image_name = tech.toLowerCase()
        }

        return `/technologies/${image_name}.png`
    }

    return (
        <div className="flex flex-col items-center text-center">
            <img src={getTechnologyIcon(technology)} alt={technology} width={100} height={100} />
            <h3>{technology}</h3>
        </div>
    );
}
