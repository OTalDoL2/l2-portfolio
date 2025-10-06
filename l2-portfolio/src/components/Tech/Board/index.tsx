import Card from '../Card';

interface Props {
    technologies: string[]
}

export default function Board({ technologies }: Props) {
    return (
        <div className="flex justify-center items-start lg:items-center min-h-[80vh] p-4">
            <div className="flex flex-wrap justify-center grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                    <Card key={index} technology={tech} />
                ))}
            </div>
        </div>
    );
}