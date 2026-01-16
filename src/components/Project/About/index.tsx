import { Project } from "@/app/[locale]/projects/types";
import { useTranslations } from "next-intl";

interface Props {
    project: Project;
}

export default function About({ project }: Props) {
    const translation = useTranslations("Projects");
    return (
        <div>
            <h1 className="text-3xl md:text-4xl text-center font-bold mb-6">
                {translation(`${project.slug}.title`)}
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <img
                    className="rounded-2xl max-w-xs md:max-w-sm"
                    src={project.logo}
                    alt={translation(`${project.slug}.title`)}
                />

                <h2 className="text-base md:text-lg text-justify max-w-lg p-2 md:p-8">
                    {translation(`${project.slug}.description`)}
                </h2>
            </div>

            {project.link.map((link, index) =>
                link.type === "Medium" ? (
                    <div className="mt-8 text-center md:text-left" key={index}>
                        <p>
                            {translation.rich(`link.medium.0`)}{" "}
                            <a
                                href={link.url}
                                className="underline"
                                style={{ color: project.theme[3] }}
                                >
                                Medium
                            </a>
                            . {translation.rich(`link.medium.1`)}
                        </p>
                    </div>
                ) : null
            )}
        </div>
    );
}
