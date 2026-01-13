import { useTranslations } from "next-intl";

export default function AboutMe() {
    const translation = useTranslations("About");
    const lines = translation.raw("p") as string[];

    return (
        <div className="py-50 px-6 md:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-lg text-gray-700 leading-relaxed">
                    {lines.map((_, i) => (
                        <p key={i} className="mb-6">
                            {translation.rich(`p.${i}`, {
                                important: (c) => <strong>{c}</strong>,
                                newsLink: (link) => <a href="https://www.folhape.com.br/noticias/conheca-o-equipamento-desenvolvido-por-pernambucanos-para-aumentar/249444/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition">{link}</a>
                            })}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
