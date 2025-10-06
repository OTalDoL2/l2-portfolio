import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';


export async function generateStaticParams() {
  return myProjects.map((project) => ({
    slug: project.slug,
  }));
}

type Params = { slug: string };

export default function ProjectPage({ params }: {params: Params}) {
  const { slug } = params; 
  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return <SelectedProjectPage project={project} />;
}