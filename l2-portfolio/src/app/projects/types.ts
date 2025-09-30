type LinkType = "Github" | "Medium" | "Instagram" | "Youtube" | "Outros";

interface Link {
    type: LinkType,
    url: string
}

export type Project = {
    id: number,
    slug: string,
    title: string,
    subtitle: string[],
    short_description: string,
    description: string,
    logo: string,
    link: Link[],
    tech: string[],
    theme: string[]
}