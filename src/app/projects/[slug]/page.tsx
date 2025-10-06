import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';

export async function generateStaticParams() {
  return myProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = myProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return <SelectedProjectPage project={project} />;
}
